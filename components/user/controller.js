const store = require("./store");

const addUserPromise = (user) => {
  return new Promise((resolve, reject) => {
    if (user) {
      const userInfo = {
        user: user,
        created_at: new Date(),
      };

      store.add(userInfo);
      resolve(userInfo);
    } else {
      console.error("[userCrontroller] There's not user");
      reject("Incorrect info");
    }
  });
};

const getUsersPromise = (user) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(user));
  });
};

const updateUserPromise = (id, user) => {
  return new Promise(async (resolve, reject) => {
    if (id && user) {
      const res = await store.update(id, user);
      resolve(res);
    } else {
      reject("Invalid data");
    }
  });
};

const deleteUserPromise = (id) => {
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
  addUserPromise,
  getUsersPromise,
  updateUserPromise,
  deleteUserPromise,
};
