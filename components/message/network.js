const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.get("/", function (req, res) {
  controller
    .getMessagesPromise()
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

module.exports = router;
