const Model = require("./model");

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

const getMessagesPromise = async (filterUser) => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterUser !== null) {
      filter = { user: new RegExp(`^${filterUser}$`, "i") };
    }

    Model.find(filter)
      .populate("user")
      .exec((error, populated) => {
        if (!error) {
          resolve(populated);
        }
        reject(error);
      });
  });
};
// async function getMessages(filterUser) {
//   let filter = {};
//   if (filterUser != null) {
//     filter = { user: new RegExp(`^${filterUser}$`, "i") };
//   }
//   const messages = Model.find(filter);
//   return messages;
// }

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
