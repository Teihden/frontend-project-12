import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';

const Channel = ({ data }) => {
  const { id, name, removable } = data;
  const activeChannelId = useSelector((state) => state.ui.activeChannelId);
  const { t } = useTranslation();
  const variant = id === activeChannelId ? 'secondary' : null;

  return (
    <li key={id} className="w-100 nav-item">
      {removable && (
        <Dropdown className="d-flex" as={ButtonGroup}>
          <Button
            type="button"
            key={id}
            className="w-100 rounded-3 text-start text-truncate"
            variant={variant}
          >
            <span className="me-1">#</span>
            <span>{name}</span>
          </Button>
          <Dropdown.Toggle className="flex-grow-0" split variant={variant}>
            <span className="visually-hidden">{t('channel.menu')}</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>{t('channel.rename')}</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>{t('channel.remove')}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
      {!removable && (
        <Button
          type="button"
          variant={variant}
          key={id}
          className="w-100 rounded-3 text-start"
        >
          <span className="me-1">#</span>
          <span>{name}</span>
        </Button>
      )}
    </li>
  );
};

export default Channel;
