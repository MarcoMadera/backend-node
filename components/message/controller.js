const store = require("./store");

const addMessagePromise = (user, message) => {
  return new Promise((resolve, reject) => {
    if (user && message) {
      const fullMessage = {
        user: user,
        message: message,
        date: new Date(),
      };

      store.add(fullMessage);
      resolve(fullMessage);
    } else {
      console.error("[messageCrontroller] There's not user or message");
      reject("Incorrect info");
    }
  });
};

const getMessagesPromise = (filterUser) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
};

const updateMessagePromise = (id, message) => {
  return new Promise(async (resolve, reject) => {
    if (id && message) {
      const res = await store.updateText(id, message);
      resolve(res);
    } else {
      reject("Invalid data");
    }
  });
};

module.exports = {
  addMessagePromise,
  getMessagesPromise,
  updateMessagePromise,
};
