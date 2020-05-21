const store = require("./store");

const addMessagePromise = (chat, user, message) => {
  return new Promise((resolve, reject) => {
    if (user && message) {
      const fullMessage = {
        chat: chat,
        user: user,
        message: message,
        date: new Date(),
      };

      store.add(fullMessage);
      resolve(fullMessage);
    } else {
      console.error("[messageCrontroller] There's not chat, user or message");
      reject("Incorrect info");
    }
  });
};

const getMessagesPromise = (filterChat) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterChat));
  });
};

const updateMessagePromise = (id, message) => {
  return new Promise(async (resolve, reject) => {
    if (id && message) {
      const res = await store.update(id, message);
      resolve(res);
    } else {
      reject("Invalid data");
    }
  });
};

const deleteMessagePromise = (id) => {
  return new Promise((resolve, reject) => {
    if (id) {
      store
        .remove(id)
        .then(() => {
          resolve();
        })
        .catch((e) => {
          reject(e);
        });
    } else {
      reject("Invalid id");
    }
  });
};

module.exports = {
  addMessagePromise,
  getMessagesPromise,
  updateMessagePromise,
  deleteMessagePromise,
};
