import cors from "cors";
import { config } from "dotenv";
import express from "express";
import { Server } from "http";

import db from "./db";
import router from "./network/routes";
import { connect } from "./socket";

const app = express();
const server = new Server(app);
config();

const db_user = encodeURIComponent(process.env.DB_USER ?? "");
const db_password = encodeURIComponent(process.env.DB_PASSWORD ?? "");
const db_name = process.env.DB_NAME;
const db_host = process.env.DB_HOST;
const mongo_uri = `mongodb+srv://${db_user}:${db_password}@${db_host}/${db_name}?retryWrites=true&w=majority`;

db(mongo_uri);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connect(server);
router(app);

app.use("/", express.static("public"));

server.listen("3000", function () {
  console.log(" Project is running at http://localhost:3000/");
});
