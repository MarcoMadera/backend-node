const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.get("/:userId", function (req, res) {
  controller
    .getChatsPromise(req.params.userId)
    .then((chats) => response.success(req, res, chats, 200))
    .catch((error) => response.error(req, res, "Internal error", 500, error));
});

router.post("/", function (req, res) {
  controller
    .addChatPromise(req.body.name, req.body.users)
    .then((data) => response.success(req, res, data, 201))
    .catch((error) => response.error(req, res, "Internal error", 500, error));
});

router.patch("/:id", function (req, res) {
  controller
    .updateChatPromise(req.params.id, req.body)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, "Internal error", 500, e);
    });
});

router.delete("/:id", function (req, res) {
  controller
    .deleteChatPromise(req.params.id)
    .then(() => {
      response.success(req, res, `Chat ${req.params.id} deleted`, 200);
    })
    .catch((e) => {
      response.error(req, res, "Internal error", 500, e);
    });
});

module.exports = router;
