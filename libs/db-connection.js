const mongoose = require('mongoose');

let db;

module.exports = function Connection() {
  if (!db) {
    db = mongoose.createConnection(
      'mongodb://falvarez:testingpass1234@ds135128.mlab.com:35128/game-of-drones'
    );
  }
  return db;
};
