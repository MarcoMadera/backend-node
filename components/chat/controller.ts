import { add, get, remove, update } from "./store";
import { InvalidChatData, InvalidId, InvalidUserList } from "../../errors/chat";
import { IChat } from "../../types/chat";

export const addChat = (
  name: IChat["name"],
  users: IChat["users"]
): Promise<IChat> => {
  return new Promise<IChat>((resolve, reject) => {
    if (users && Array.isArray(users)) {
      const chat: IChat = {
        name: name,
        users: users,
        created_at: new Date(),
      };

      add(chat).then(resolve).catch(reject);
    } else {
      reject(
        new InvalidUserList(
          "[messageCrontroller] There's not chat, user or message"
        )
      );
    }
  });
};

export const getChats = (userId: string): Promise<IChat[]> => {
  return get(userId);
};

export const updateChat = (id: string, chat: IChat): Promise<IChat> => {
  return new Promise<IChat>((resolve, reject) => {
    if (id && chat) {
      update(id, chat).then(resolve).catch(reject);
    } else {
      reject(new InvalidChatData());
    }
  });
};

export const deleteChat = (
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
