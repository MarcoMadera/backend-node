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

const getMessagesPromise = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
};

module.exports = {
  addMessagePromise,
  getMessagesPromise,
};
