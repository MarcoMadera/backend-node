import { Express } from "express";

import chat from "../components/chat/network";
import message from "../components/message/network";
import user from "../components/user/network";

const routes = function (server: Express): void {
  server.use("/message", message);
  server.use("/user", user);
  server.use("/chat", chat);
};

export default routes;
