import { Types } from "mongoose";

export interface IChat {
  users: Types.ObjectId[];
  name?: string | null;
  created_at?: Date | null;
}
