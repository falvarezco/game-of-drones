module.exports = function Model() {
  let db = require('../libs/db-connection')();
  const Schema = require('mongoose').Schema;

  let Game = new Schema(
    {
      winner: String,
      players1: String,
      players2: String,
      rounds: Array
    },
    { collection: 'games' }
  );

  return db.model('game', Game);
};
