import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, Modal as BsModal } from 'react-bootstrap';
import { actions } from '../store';
import { useRemoveChannelMutation } from '../store/middlewares';

const RemoveModalInnerContent = () => {
  const channelId = useSelector((state) => state.ui.modal.channelId);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [removeChannel,
    { error: removeChannelError, isError, isSuccess },
  ] = useRemoveChannelMutation();

  const handleClose = () => {
    dispatch(actions.closeModal());
  };

  const handleRemove = async () => {
    setLoading(true);
    removeChannel(channelId);

    if (isSuccess) {
      dispatch(actions.setActiveChannelId({ channelId: '1' }));
      toast.success(t('channel.removed'));
    }

    if (isError) {
      toast.error(removeChannelError.error);
    }

    handleClose();
    setLoading(false);
  };

  return (
    <>
      <BsModal.Header>
        <BsModal.Title>{t('channel.remove')}</BsModal.Title>
        <Button
          variant="close"
          type="button"
          onClick={handleClose}
          aria-label={t('modals.close')}
          data-bs-dismiss="modal"
          disabled={loading}
        />
      </BsModal.Header>
      <BsModal.Body>
        <h2 className="h4">{t('modals.confirmation')}</h2>
        <div className="d-flex justify-content-end">
          <Button
            className="me-2"
            variant="outline-secondary"
            type="button"
            onClick={handleClose}
            disabled={loading}
          >
            {t('modals.cancel')}
          </Button>
          <Button
            variant="danger"
            type="button"
            onClick={handleRemove}
            disabled={loading}
          >
            {t('modals.confirm')}
          </Button>
        </div>
      </BsModal.Body>
    </>
  );
};

export default RemoveModalInnerContent;
