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
  isFinished: false
};

const reducer = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case 'ADD_PLAYERS':
      const playersData = action.payload;
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
    default:
      break;
  }

  return newState;
};

export default reducer;
