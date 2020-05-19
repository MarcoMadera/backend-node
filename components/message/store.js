const db = require("mongoose");
const Model = require("./model");
require("dotenv").config();

const db_user = encodeURIComponent(process.env.DB_USER);
const db_password = encodeURIComponent(process.env.DB_PASSWORD);
const db_name = process.env.DB_NAME;
const db_host = process.env.DB_HOST;

const mongo_uri = `mongodb+srv://${db_user}:${db_password}@${db_host}/${db_name}?retryWrites=true&w=majority`;

db.Promise = global.Promise;
db.connect(mongo_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log("[db] Connected");

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages(filterUser) {
  let filter = {};
  if (filterUser != null) {
    filter = { user: new RegExp(`^${filterUser}$`, "i") };
  }
  const messages = await Model.find(filter);
  return messages;
}

async function updateMessage(id, message) {
  const foundMessage = await Model.findOne({
    _id: id,
  });

  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

function removeMessage(id) {
  return Model.deleteOne({
    _id: id,
  });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateMessage: updateMessage,
  remove: removeMessage,
};
