const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.get("/", function (req, res) {
  const filterMessages = req.query.user || null;
  controller
    .getMessagesPromise(filterMessages)
    .then((messageList) => response.success(req, res, messageList, 200))
    .catch((e) => response.error(req, res, "Unexpected Error", 500, e));
});

router.post("/", function (req, res) {
  controller
    .addMessagePromise(req.body.user, req.body.message)
    .then(() => response.success(req, res, "Submitted", 201))
    .catch(() =>
      response.error(req, res, "Invalid info", 400, "Controller error")
    );
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

module.exports = router;
