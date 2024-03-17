import { configureStore } from '@reduxjs/toolkit';
import authReducer, { actions as authActions } from './slices/authSlice.js';
import Api from './middlewares/index.js';

const { channelsApi, messagesApi } = Api;

export const actions = {
  ...authActions,
};

export default configureStore({
  reducer: {
    auth: authReducer,
    [channelsApi.reducerPath]: channelsApi.reducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat([channelsApi.middleware, messagesApi.middleware]),
});
