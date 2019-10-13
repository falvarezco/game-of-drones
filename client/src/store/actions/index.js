export const addPlayers = values => {
  return { type: 'ADD_PLAYERS', payload: values };
};

export const saveRoundResult = values => {
  return { type: 'SAVE_ROUND_RESULT', payload: values };
};

export const fetchedGameResult = values => {
  return { type: 'FETCHED_GAME_RESULT', payload: values };
};
