import { useGetChannelsQuery, useGetMessagesQuery } from '../store/middlewares';
import Channels from './Channels.jsx';
import Messages from './Messages.jsx';
import Modal from './Modal';
import Spinner from './Spinner.jsx';
import MessageForm from './MessageForm';

const ChatPage = () => {
  const { isLoading: isChannelsLoading } = useGetChannelsQuery();
  const { isLoading: isMessagesLoading } = useGetMessagesQuery();

  if (isChannelsLoading || isMessagesLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="h-100 container my-4 overflow-hidden rounded-3 shadow">
        <div className="h-100 flex-md-row row bg-white">
          <div className="h-100 d-flex flex-column col-4 col-md-2 border-end px-1 bg-light">
            <Channels />
          </div>
          <div className="h-100 d-flex flex-column col p-2">
            <Messages />
            <MessageForm />
          </div>
        </div>
      </div>
      <Modal />
    </>
  );
};

export default ChatPage;
