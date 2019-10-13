import axios from 'axios';
import { fetchedGameResult } from './';

const fetchGameWinner = winner => {
  return (dispatch, getState) => {
    const currentState = getState();
    debugger;
    let params = {
      winner: winner.name,
      players1: currentState.player1.name,
      players2: currentState.player2.name,
      rounds: currentState.rounds
    };

    dispatch(fetchedGameResult(winner));
    // axios
    //   .post('/fetchGameResults', params)
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
  };
};

export default fetchGameWinner;
