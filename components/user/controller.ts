import { add, get, remove, update } from "./store";
import { IncorrectInfo, InvalidId, InvalidUserData } from "../../errors/user";
import { IUser } from "../../types/user";

export const addUser = (user: IUser["user"]): Promise<IUser> => {
  return new Promise((resolve, reject) => {
    if (user) {
      const userInfo = {
        user: user,
        created_at: new Date(),
      };
      add(userInfo).then(resolve).catch(reject);
    } else {
      reject(new IncorrectInfo("[userCrontroller] There's not user"));
    }
  });
};

export const getUsers = (userId: string): Promise<IUser[]> => {
  return get(userId);
};

export const updateUser = (id: string, user: string): Promise<IUser> => {
  return new Promise<IUser>((resolve, reject) => {
    if (id && user) {
      update(id, user).then(resolve).catch(reject);
    } else {
      reject(new InvalidUserData());
    }
  });
};

export const deleteUser = (
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
