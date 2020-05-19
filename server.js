const express = require("express");
const router = require("./network/routes");
const db = require("./db");

const db_user = encodeURIComponent(process.env.DB_USER);
const db_password = encodeURIComponent(process.env.DB_PASSWORD);
const db_name = process.env.DB_NAME;
const db_host = process.env.DB_HOST;

const mongo_uri = `mongodb+srv://${db_user}:${db_password}@${db_host}/${db_name}?retryWrites=true&w=majority`;
db(mongo_uri);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router(app);

app.use("/app", express.static("public"));

app.listen("3000");
console.log(" Project is running at http://localhost:3000/");
