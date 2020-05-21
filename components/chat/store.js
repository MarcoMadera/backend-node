const Model = require("./model");

function addChat(chat) {
  const myChat = new Model(chat);
  myChat.save();
}

const getChatsPromise = (userId) => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (userId) {
      filter = { users: userId };
    }

    Model.find(filter)
      .populate("users")
      .exec((error, populated) => {
        if (!error) {
          resolve(populated);
        }
        reject(error);
      });
  });
};

async function updateChat(id, body) {
  const foundChat = await Model.findOne({
    _id: id,
  });

  foundChat.users = body.users;
  foundChat.name = body.name;
  const newChat = await foundChat.save();
  return newChat;
}

function removeChat(id) {
  return Model.deleteOne({
    _id: id,
  });
}

module.exports = {
  add: addChat,
  list: getChatsPromise,
  update: updateChat,
  remove: removeChat,
};
