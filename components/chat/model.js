const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: String,
  users: [{ type: Schema.ObjectId, ref: "User" }],
  created_at: Date,
});

const model = mongoose.model("Chat", mySchema);

module.exports = model;
