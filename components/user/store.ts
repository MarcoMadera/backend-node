import Model from "./model";
import { IUser } from "../../types/user";

export async function add(user: IUser): Promise<IUser> {
  const myUser = new Model(user);
  const savedUser = await myUser.save();
  return savedUser;
}

export async function get(userId: string): Promise<IUser[]> {
  let filter = {};
  if (userId) {
    filter = { user: new RegExp(`^${userId}$`, "i") };
  }
  const users = await Model.find(filter);
  return users;
}

export async function update(id: string, user: string): Promise<IUser> {
  const foundUser = await Model.findOne({
    _id: id,
  });

  if (!foundUser) {
    throw new Error("User not found");
  }

  foundUser.user = user;
  const newUser = await foundUser.save();
  return newUser;
}

export function remove(id: string): ReturnType<typeof Model.deleteOne> {
  return Model.deleteOne({
    _id: id,
  });
}
