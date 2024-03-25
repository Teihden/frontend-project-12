/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'ui',
  initialState: {
    activeChannelId: '1',
  },
  reducers: {
    setActiveChannelId(state, { payload: { id } }) {
      state.activeChannelId = id;
    },
  },
});

export const { actions } = slice;

export default slice.reducer;
