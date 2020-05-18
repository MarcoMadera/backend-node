const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.get("/", function (req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "Custom Value",
  });
  response.success(req, res, "message list");
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
