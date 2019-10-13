export const addPlayers = values => {
  return { type: 'ADD_PLAYERS', payload: values };
};

export const saveRoundResult = values => {
  return { type: 'SAVE_ROUND_RESULT', payload: values };
};
