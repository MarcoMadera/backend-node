const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.get("/", function (req, res) {
  const filterUsers = req.query.user || null;
  controller
    .getUsersPromise(filterUsers)
    .then((userList) => response.success(req, res, userList, 200))
    .catch((e) => response.error(req, res, "Unexpected Error", 500, e));
});

router.post("/", function (req, res) {
  controller
    .addUserPromise(req.body.user)
    .then(() => response.success(req, res, "Submitted", 201))
    .catch(() =>
      response.error(req, res, "Invalid info", 400, "Controller error")
    );
});

router.patch("/:id", function (req, res) {
  controller
    .updateUserPromise(req.params.id, req.body.user)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, "Internal error", 500, e);
    });
});

router.delete("/:id", function (req, res) {
  controller
    .deleteUserPromise(req.params.id)
    .then(() => {
      response.success(req, res, `User ${req.params.id} deleted`, 200);
    })
    .catch((e) => {
      response.error(req, res, "Internal error", 500, e);
    });
});

module.exports = router;
