const store = require("./store");

const addChatPromise = (name, users) => {
  return new Promise((resolve, reject) => {
    if (users && Array.isArray(users)) {
      const chat = {
        name: name,
        users: users,
        created_at: new Date(),
      };

      store.add(chat);
      resolve(chat);
    } else {
      console.error("[messageCrontroller] There's not chat, user or message");
      reject("Invalid user list");
    }
  });
};

const getChatsPromise = (userId) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(userId));
  });
};

const updateChatPromise = (id, chat) => {
  return new Promise(async (resolve, reject) => {
    if (id && chat) {
      const res = await store.update(id, chat);
      resolve(res);
    } else {
      reject("Invalid data");
    }
  });
};

const deleteChatPromise = (id) => {
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
  addChatPromise,
  getChatsPromise,
  updateChatPromise,
  deleteChatPromise,
};
