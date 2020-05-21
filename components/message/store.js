const Model = require("./model");

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

const getMessagesPromise = (filterChat) => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterChat !== null) {
      filter = { chat: filterChat };
    }

    Model.find(filter)
      .populate("chat")
      .exec((error, populated) => {
        if (!error) {
          resolve(populated);
        }
        reject(error);
      });
  });
};

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
  list: getMessagesPromise,
  update: updateMessage,
  remove: removeMessage,
};
