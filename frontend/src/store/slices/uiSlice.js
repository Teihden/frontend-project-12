/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import channelsApi from '../middlewares/index';

const slice = createSlice({
  name: 'ui',
  initialState: {
    activeChannelId: '1',
    modal: {
      isOpened: false,
      component: null,
      channelId: null,
    },
  },
  reducers: {
    setActiveChannelId(state, { payload: { id } }) {
      state.activeChannelId = id;
    },
    openModal: (state, { payload: { component, channel: { id } } }) => {
      state.modal.isOpened = true;
      state.modal.component = component;
      state.modal.channelId = id ?? null;
    },
    closeModal: (state) => {
      state.modal.isOpened = false;
      state.modal.component = null;
      state.modal.channelId = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      channelsApi.endpoints.addChannel.matchFulfilled,
      (state, { payload: { id } }) => {
        state.activeChannelId = id;
      },
    );
  },
});

export const { actions } = slice;

export default slice.reducer;
