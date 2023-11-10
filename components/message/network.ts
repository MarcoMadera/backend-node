import { Request, Response, Router } from "express";
import multer from "multer";

import {
  addMessage,
  deleteMessage,
  getMessages,
  updateMessage,
} from "./controller";
import { error, success } from "../../network/response";
import { IMessage } from "../../types/message";

const router = Router();

const upload = multer({
  dest: "public/files/",
});

router.get(
  "/",
  function (req: Request<unknown, { chat: string }, unknown>, res: Response) {
    const filterMessages = req.query.chat?.toString();
    if (!filterMessages) {
      error(res, "Invalid info", 400, "Controller error");
      return;
    }

    getMessages(filterMessages)
      .then((messageList) => success(res, messageList, 200))
      .catch((e) => error(res, "Unexpected Error", 500, e));
  }
);

router.post(
  "/",
  upload.single("file"),
  function (req: Request<unknown, unknown, IMessage>, res: Response) {
    addMessage(req.body.chat, req.body.user, req.body.message, req.file)
      .then((data) => success(res, data, 201))
      .catch((e) => error(res, "Invalid info", 400, e));
  }
);

router.patch(
  "/:id",
  function (req: Request<{ id: string }, unknown, IMessage>, res) {
    updateMessage(req.params.id, req.body.message)
      .then((data) => {
        success(res, data, 200);
      })
      .catch((e) => {
        error(res, "Internal error", 500, e);
      });
  }
);

router.delete("/:id", function (req, res) {
  deleteMessage(req.params.id)
    .then(() => {
      success(res, `Message ${req.params.id} deleted`, 200);
    })
    .catch((e) => {
      error(res, "Internal error", 500, e);
    });
});

export default router;
