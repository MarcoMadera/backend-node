import Model from "./model";
import { IMessage } from "../../types/message";

export async function add(message: IMessage): Promise<IMessage> {
  const myMessage = new Model(message);
  const savedMessage = await myMessage.save();
  return savedMessage;
}

export const get = (chatId: string): Promise<IMessage[]> => {
  return new Promise((resolve, reject) => {
    let filter = {};

    if (chatId) {
      filter = { chat: { _id: chatId } };
    }

    const populateQuery = [
      { path: "chat", select: "name" },
      { path: "user", select: "user" },
    ];

    Model.find(filter)
      .populate(populateQuery)
      .exec()
      .then((hey) => {
        console.log("this is the result:", hey);
        resolve(hey);
      })
      .catch(reject);
  });
};

export async function update(id: string, message: string): Promise<IMessage> {
  const foundMessage = await Model.findOne({
    _id: id,
  });

  if (!foundMessage) {
    throw new Error("Message not found");
  }

  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

export function remove(id: string): ReturnType<typeof Model.deleteOne> {
  return Model.deleteOne({
    _id: id,
  });
}
