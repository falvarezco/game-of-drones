export const addPlayers = values => {
  return { type: 'ADD_PLAYERS', payload: values };
};

export const saveRoundResult = values => {
  return { type: 'SAVE_ROUND_RESULT', payload: values };
};

export const fetchedGameHistory = values => {
  return { type: 'FETCHED_GAME_HISTORY', payload: values };
};

export const persistedGameResult = values => {
  return { type: 'PERSISTED_GAME_RESULT', payload: values };
};
