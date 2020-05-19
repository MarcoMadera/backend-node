const Model = require("./model");

function addUser(userInfo) {
  const myUser = new Model(userInfo);
  myUser.save();
}

async function getUsers(filterUser) {
  let filter = {};
  if (filterUser != null) {
    filter = { user: new RegExp(`^${filterUser}$`, "i") };
  }
  const users = await Model.find(filter);
  return users;
}

async function updateUser(id, user) {
  const foundUser = await Model.findOne({
    _id: id,
  });

  foundUser.user = user;
  const newUser = await foundUser.save();
  return newUser;
}

function removeUser(id) {
  return Model.deleteOne({
    _id: id,
  });
}

module.exports = {
  add: addUser,
  list: getUsers,
  update: updateUser,
  remove: removeUser,
};
