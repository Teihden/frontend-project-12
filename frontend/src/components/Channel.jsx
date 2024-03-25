/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';

const Channel = () => {
  const activeChannelId = useSelector((state) => state.ui.activeChannelId);

  return (
    <div>
      Channel
    </div>
  );
};

export default Channel;
