import { model as _model, Schema } from "mongoose";

const mySchema = new Schema({
  user: String,
  created_at: Date,
});

const model = _model("User", mySchema);

export default model;
