import { useGetChannelsQuery } from '../store/middlewares/index.js';
import Channels from './Channels.jsx';
import Messages from './Messages.jsx';
import Spinner from './Spinner.jsx';

const ChatPage = () => {
  const { isLoading: isChannelsLoading } = useGetChannelsQuery();

  if (isChannelsLoading) {
    return <Spinner />;
  }

  return (
    <div className="h-100 container my-4 overflow-hidden rounded-3 shadow">
      <div className="h-100 flex-md-row row bg-white">
        <div className="h-100 d-flex flex-column col-4 col-md-2 border-end px-1 bg-light">
          <Channels />
        </div>
        <div className="h-100 col p-2">
          <Messages />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
