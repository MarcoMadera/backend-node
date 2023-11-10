import Model from "./model";
import { IChat } from "../../types/chat";

export async function add(chat: IChat): Promise<IChat> {
  const myChat = new Model(chat);
  const savedChat = await myChat.save();
  return savedChat;
}

export const get = (userId: string): Promise<IChat[]> => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (userId) {
      filter = { users: userId };
    }

    Model.find(filter).populate("users").exec().then(resolve).catch(reject);
  });
};

export async function update(
  id: string,
  body: Omit<IChat, "created_at">
): Promise<IChat> {
  const foundChat = await Model.findOne({
    _id: id,
  });

  if (!foundChat) {
    throw new Error("Chat not found");
  }

  foundChat.users = body.users;
  foundChat.name = body.name;
  const newChat = await foundChat.save();
  return newChat;
}

export function remove(id: string): ReturnType<typeof Model.deleteOne> {
  return Model.deleteOne({
    _id: id,
  });
}
