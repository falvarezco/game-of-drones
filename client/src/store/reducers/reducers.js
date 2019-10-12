const initialState = {
  rounds: [
    {
      player1: {
        name: '',
        wins: 0
      },
      player2: {
        name: '',
        wins: 0
      }
    }
  ],
  isFinished: false
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'CREATE_PLAYERS':
      console.log(newState);
      break;
  }

  return newState;
};

export default reducer;
