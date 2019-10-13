import axios from 'axios';
import { saveRoundResult } from './';

const checkRoundWinner = ({ player1, player2 }) => {
  return (dispatch, getState) => {
    // dispatch(addPlayers(values));
    // let params = {
    //   ...values
    // };
    // axios
    //   .post('/createPlayers', params)
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });

    // Mirar del state cuantos wins tiene cada uno y de
    // haber un ganador hacer fetch a api y enviar a pantalla de resultados
    const currentState = getState();

    let results = {
      winner: '',
      round: currentState.round
    };

    switch (player1.answer) {
      case 'rock':
        if (player2.answer === 'scissors') {
          results.winner = 'player1';
        } else if (player2.answer === 'paper') {
          results.winner = 'player2';
        }
        break;
      case 'paper':
        if (player2.answer === 'rock') {
          results.winner = 'player1';
        } else if (player2.answer === 'scissors') {
          results.winner = 'player2';
        }
        break;
      case 'scissors':
        if (player2.answer === 'paper') {
          results.winner = 'player1';
        } else if (player2.answer === 'rock') {
          results.winner = 'player2';
        }
        break;
      default:
        break;
    }

    dispatch(saveRoundResult(results));
  };
};

export default checkRoundWinner;
