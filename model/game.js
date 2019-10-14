module.exports = function Model() {
  let db = require('../libs/db-connection')();
  const Schema = require('mongoose').Schema;

  let Game = new Schema(
    {
      winner: String,
      player1: Object,
      player2: Object,
      rounds: Array
    },
    { collection: 'games' }
  );

  return db.model('game', Game);
};
