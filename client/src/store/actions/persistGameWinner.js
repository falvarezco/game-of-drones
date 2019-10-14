import axios from 'axios';
import { fetchedGameResult } from './';

const persistGameWinner = winner => {
  return (dispatch, getState) => {
    const currentState = getState();
    debugger;
    let params = {
      winner: winner.name,
      players1: currentState.player1.name,
      players2: currentState.player2.name,
      rounds: currentState.rounds
    };

    axios
      .post('/persistGameResults', params)
      .then(res => {
        dispatch(fetchedGameResult(winner));
      })
      .catch(err => {
        console.error(err);
      });
  };
};

export default persistGameWinner;
