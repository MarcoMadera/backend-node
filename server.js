const express = require("express");
const app = express();
const server = require("http").Server(app);
const cors = require("cors");
const router = require("./network/routes");
const db = require("./db");
const socket = require("./socket");
require("dotenv").config();

const db_user = encodeURIComponent(process.env.DB_USER);
const db_password = encodeURIComponent(process.env.DB_PASSWORD);
const db_name = process.env.DB_NAME;
const db_host = process.env.DB_HOST;

const mongo_uri = `mongodb+srv://${db_user}:${db_password}@${db_host}/${db_name}?retryWrites=true&w=majority`;
db(mongo_uri);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

socket.connect(server);
router(app);

app.use("/app", express.static("public"));

server.listen("3000", function () {
  console.log(" Project is running at http://localhost:3000/");
});
