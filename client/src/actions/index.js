import { fetchUsers } from '../api';
import { FETCH_ALL_SEEKERS } from '../constants/actionTypes.js';

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await fetchUsers();
    dispatch({ type: FETCH_ALL_SEEKERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
