import { add, get, remove, update } from "./store";
import {
  InvalidId,
  InvalidInfo,
  InvalidMessageData,
} from "../../errors/message";
import { socket } from "../../socket";
import { IMessage } from "../../types/message";

export const addMessage = (
  chat: IMessage["chat"],
  user: IMessage["user"],
  message: string,
  file?: Express.Multer.File
): Promise<IMessage> => {
  return new Promise<IMessage>((resolve, reject) => {
    if (user && message) {
      let fileUrl = "";
      if (file) {
        fileUrl = `http://localhost:3000/app/files/${file.filename}`;
      }

      const fullMessage: IMessage = {
        chat: chat,
        user: user,
        message: message,
        date: new Date(),
        file: fileUrl,
      };

      socket.io.emit("message", fullMessage);
      add(fullMessage).then(resolve).catch(reject);
    } else {
      reject(
        new InvalidInfo(
          "[messageCrontroller] There's not chat, user or message"
        )
      );
    }
  });
};

export const getMessages = (chatId: string): Promise<IMessage[]> => {
  return get(chatId);
};

export const updateMessage = (
  id: string,
  message: string
): Promise<IMessage> => {
  return new Promise<IMessage>((resolve, reject) => {
    if (id && message) {
      update(id, message).then(resolve).catch(reject);
    } else {
      reject(new InvalidMessageData());
    }
  });
};

export const deleteMessage = (
  id: string
): Promise<Awaited<ReturnType<typeof remove>>> => {
  return new Promise((resolve, reject) => {
    if (id) {
      remove(id).then(resolve).catch(reject);
    } else {
      reject(new InvalidId());
    }
  });
};
