const initialState = {
  round: 1,
  player1: {
    wins: 0,
    name: ''
  },
  player2: {
    wins: 0,
    name: ''
  },
  rounds: [],
  isLoading: false,
  winner: ''
};

const reducer = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case 'ADD_PLAYERS':
      const playersData = action.payload;
      newState.winner = '';
      Object.keys(playersData).forEach(key => {
        newState[key].name = playersData[key].name;
      });

      break;
    case 'SAVE_ROUND_RESULT':
      const result = action.payload;
      newState.rounds.push(result);
      newState.round += 1;
      newState[result.winner].wins += 1;
      break;
    case 'FETCHED_GAME_RESULT':
      const winner = action.payload.name;
      newState.rounds = [];
      newState.round = 1;
      newState.player1.name = '';
      newState.player1.wins = 0;
      newState.player2.name = '';
      newState.player2.wins = 0;
      newState.winner = winner;
      break;
    default:
      break;
  }

  return newState;
};

export default reducer;
