const express = require("express");
const response = require("./network/response");

const router = express.Router();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

router.get("/message", function (req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "Custom Value",
  });
  response.success(req, res, "message list");
});

router.post("/message", function (req, res) {
  console.log(req.query);
  if (req.query.error == "ok") {
    response.error(req, res, "Unexpected Error", 500, "Simulated error");
  } else {
    response.success(req, res, "Submitted", 201);
  }
});

app.use("/app", express.static("public"));

app.listen("3000");
console.log(" Project is running at http://localhost:3000/");
