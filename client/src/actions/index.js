import axios from 'axios';
import { FETCH_USER } from './types';

// redux-thunk allows us to return a function from an action creator
// and put a dispatch function as an argument to that function
const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

const handleToken = (token) => async (dispatch) => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export { fetchUser, handleToken };
