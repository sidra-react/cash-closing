import axios from 'axios';
import store from './store'; 
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST
});

export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  payload: user
});

export const fetchUserFailure = error => ({
  type: FETCH_USER_FAILURE,
  payload: error
});

export const fetchUserByEmail = (username) => {
  return async dispatch => {
    dispatch(fetchUserRequest());
    try {
      
      const response = await axios.get(`http://localhost:8000/getByEmail?username=${username}`);
      dispatch(fetchUserSuccess(response.data));
    
      console.log('Response data:', response.data);
      console.log('Redux state after fetching user data:', store.getState());   
      
    } catch (error) {

      dispatch(fetchUserFailure(error.message));
    }
  };
};
