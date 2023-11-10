import { Types } from "mongoose";

export interface IMessage {
  message: string;
  date?: Date | null;
  file?: string | null;
  chat?: Types.ObjectId | null;
  user?: Types.ObjectId | null;
}
