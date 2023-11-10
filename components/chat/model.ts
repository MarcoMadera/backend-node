import { model as _model, Schema } from "mongoose";

const mySchema = new Schema({
  name: String,
  users: [{ type: Schema.ObjectId, ref: "User" }],
  created_at: Date,
});

const model = _model("Chat", mySchema);

export default model;
