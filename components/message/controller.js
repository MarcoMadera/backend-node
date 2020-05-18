const addMessagePromise = (user, message) => {
  return new Promise((resolve, reject) => {
    if (user && message) {
      const fullMessage = {
        user: user,
        message: message,
        date: new Date(),
      };

      console.log(`User: ${user}, Message: ${message}`);
      resolve(fullMessage);
    } else {
      console.error("[messageCrontroller] There's not user or menssage");
      reject("Incorrect info");
    }
  });
};

module.exports = {
  addMessagePromise,
};
