import axios from 'axios';
import { persistedGameResult } from './';

const persistGameWinner = winner => {
  return (dispatch, getState) => {
    const currentState = getState();

    let params = {
      winner: winner.name,
      player1: {
        name: currentState.player1.name
      },
      player2: {
        name: currentState.player2.name
      },
      rounds: currentState.rounds
    };

    axios
      .post('/persistGameResults', params)
      .then(res => {
        dispatch(persistedGameResult(winner));
      })
      .catch(err => {
        console.error(err);
      });
  };
};

export default persistGameWinner;
