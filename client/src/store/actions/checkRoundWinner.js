import { saveRoundResult } from './';
const checkRoundWinner = ({ player1, player2 }) => {
  return (dispatch, getState) => {
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
