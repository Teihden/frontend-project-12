import { io } from 'socket.io-client';
import Api from './store/middlewares';

const socketInit = (store) => {
  const socket = io();
  const { channelsApi, messagesApi } = Api;

  socket.on('newMessage', (payload) => {
    store.dispatch(messagesApi.util.updateQueryData('getMessages', undefined, (draftMessages) => {
      draftMessages.push(payload);
    }));
  });

  socket.on('newChannel', (payload) => {
    store.dispatch(channelsApi.util.updateQueryData('getChannels', undefined, (draftChannels) => {
      draftChannels.push(payload);
    }));
  });
};

export default socketInit;
