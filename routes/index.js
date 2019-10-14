const express = require('express');
const router = express.Router();
const model = require('../model/game')();

router.get('/fetchGameResults', (req, res) => {
  model.find({}, (err, game) => {
    if (err) throw err;
    return res.send(game);
  });
});

router.post('/persistGameResults', (req, res) => {
  let body = req.body;
  model.create(body, (err, game) => {
    if (err) throw err;
    res.send(game);
  });
});

module.exports = router;
