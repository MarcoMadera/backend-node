const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  user: String,
  created_at: Date,
});

const model = mongoose.model("User", mySchema);

module.exports = model;
