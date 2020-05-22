const express = require("express");
const multer = require("multer");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

const upload = multer({
  dest: "public/files/",
});

router.get("/", function (req, res) {
  const filterMessages = req.query.chat || null;
  controller
    .getMessagesPromise(filterMessages)
    .then((messageList) => response.success(req, res, messageList, 200))
    .catch((e) => response.error(req, res, "Unexpected Error", 500, e));
});

router.post("/", upload.single("file"), function (req, res) {
  controller
    .addMessagePromise(req.body.chat, req.body.user, req.body.message, req.file)
    .then((data) => response.success(req, res, data, 201))
    .catch((e) => response.error(req, res, "Invalid info", 400, e));
});

router.patch("/:id", function (req, res) {
  controller
    .updateMessagePromise(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, "Internal error", 500, e);
    });
});

router.delete("/:id", function (req, res) {
  controller
    .deleteMessagePromise(req.params.id)
    .then(() => {
      response.success(req, res, `Message ${req.params.id} deleted`, 200);
    })
    .catch((e) => {
      response.error(req, res, "Internal error", 500, e);
    });
});

module.exports = router;
