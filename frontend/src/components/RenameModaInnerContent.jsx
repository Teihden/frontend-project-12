import { useFormik } from 'formik';
import leoProfanity from 'leo-profanity';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, Form, Modal as BsModal } from 'react-bootstrap';
import { getChannelNameSchema } from '../lib/validation';
import { actions } from '../store';
import { useEditChannelMutation, useGetChannelsQuery } from '../store/middlewares';

const RenameModalInnerContent = () => {
  const { data: channels } = useGetChannelsQuery();
  const channelId = useSelector((state) => state.ui.modal.channelId);
  const channelNames = channels.map(({ name }) => name);
  const { name } = channels.find(({ id }) => channelId === id);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [
    updateChannel,
    { error: renameChannelError, isError, isSuccess },
  ] = useEditChannelMutation();

  const handleClose = () => {
    dispatch(actions.closeModal());
  };

  const formik = useFormik({
    initialValues: {
      name,
    },
    validationSchema: getChannelNameSchema(channelNames),
    validateOnBlur: false,
    onSubmit: async (values, { setSubmitting }) => {
      console.debug(values);
      setSubmitting(true);

      const data = {
        name: leoProfanity.clean(values.name),
        id: channelId,
      };

      updateChannel(data);

      if (isSuccess) {
        toast.success(t('channel.renamed'));
      }

      if (isError) {
        toast.error(renameChannelError.error);
      }

      handleClose();
      setSubmitting(false);
    },
  });

  return (
    <>
      <BsModal.Header>
        <BsModal.Title>{t('channel.rename')}</BsModal.Title>
        <Button
          variant="close"
          type="button"
          aria-label={t('modals.close')}
          data-bs-dismiss="modal"
          disabled={formik.isSubmitting}
          onClick={handleClose}
        />
      </BsModal.Header>
      <BsModal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Control
              id="name"
              className="mb-3"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              isInvalid={isError || !formik.isValid}
              disabled={formik.isSubmitting}
            />
            <Form.Control.Feedback type="invalid">
              {renameChannelError?.error}
              {' '}
              {t(formik.errors?.name)}
            </Form.Control.Feedback>
            <div className="d-flex justify-content-end">
              <Button
                className="me-2"
                variant="outline-secondary"
                type="button"
                onClick={handleClose}
              >
                {t('modals.cancel')}
              </Button>
              <Button
                variant="secondary"
                type="submit"
                disabled={formik.isSubmitting}
              >
                {t('modals.submit')}
              </Button>
            </div>
          </Form.Group>
        </Form>
      </BsModal.Body>
    </>
  );
};

export default RenameModalInnerContent;
