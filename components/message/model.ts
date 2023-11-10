import { model as _model, Schema } from "mongoose";

const mySchema = new Schema({
  chat: {
    type: Schema.ObjectId,
    ref: "Chat",
  },
  user: {
    type: Schema.ObjectId,
    ref: "User",
  },
  message: {
    type: String,
    required: true,
  },
  date: Date,
  file: String,
});

const model = _model("Message", mySchema);

export default model;
