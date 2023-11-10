import { Request, Router } from "express";

import { addChat, deleteChat, getChats, updateChat } from "./controller";
import { error as _error, success } from "../../network/response";
import { IChat } from "../../types/chat";
const router = Router();

router.get("/:userId", function (req, res) {
  getChats(req.params.userId)
    .then((chats) => success(res, chats, 200))
    .catch((error: unknown) => _error(res, "Internal error", 500, error));
});

router.post("/", function (req: Request<unknown, unknown, IChat>, res) {
  addChat(req.body.name, req.body.users)
    .then((data) => success(res, data, 201))
    .catch((error: unknown) => _error(res, "Internal error", 500, error));
});

router.patch(
  "/:id",
  function (req: Request<{ id: string }, unknown, IChat>, res) {
    updateChat(req.params.id, req.body)
      .then((data) => {
        success(res, data, 200);
      })
      .catch((error: unknown) => {
        _error(res, "Internal error", 500, error);
      });
  }
);

router.delete("/:id", function (req, res) {
  deleteChat(req.params.id)
    .then(() => {
      success(res, `Chat ${req.params.id} deleted`, 200);
    })
    .catch((error: unknown) => {
      _error(res, "Internal error", 500, error);
    });
});

export default router;
