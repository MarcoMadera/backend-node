const db = require("mongoose");

db.Promise = global.Promise;

async function connect(mongo_uri) {
  await db.connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("[db] Connected");
}

module.exports = connect;
