import axios from 'axios';
import { fetchedGameHistory } from './';

const fetchGameHistory = () => {
  return dispatch => {
    axios
      .get('/fetchGameResults')
      .then(res => {
        dispatch(fetchedGameHistory(res.data));
      })
      .catch(err => {
        console.error(err);
      });
  };
};

export default fetchGameHistory;
