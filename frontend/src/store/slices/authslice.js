/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: JSON.parse(localStorage.getItem('userToken')) || { username: null, token: null },
  reducers: {
    setCredentials(state, { payload: { username, token } }) {
      localStorage.setItem('userToken', JSON.stringify({ username, token }));
      state.username = username;
      state.token = token;
    },
    removeCredentials(state) {
      localStorage.removeItem('userToken');
      state.username = null;
      state.token = null;
    },
  },
});

export const { actions } = slice;

export default slice.reducer;
