import { configureStore } from '@reduxjs/toolkit';
import authReducer, { actions as authActions } from './slices/authslice.js';

export const actions = {
  ...authActions,
};

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
