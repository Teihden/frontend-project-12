import { useSelector, useDispatch } from 'react-redux';
import { Modal as BsModal } from 'react-bootstrap';
import { actions } from '../store';
import RemoveModalInnerContent from './RemoveModaInnerContent';

const modalInnerComponents = {
  remove: RemoveModalInnerContent,
};

const Modal = () => {
  const dispatch = useDispatch();
  const isOpened = useSelector((state) => state.ui.modal.isOpened);
  const modalComponent = useSelector((state) => state.ui.modal.component);
  const Component = modalInnerComponents[modalComponent];

  const handleClose = () => {
    dispatch(actions.closeModal());
  };

  return (
    <BsModal show={isOpened} onHide={handleClose} centered>
      {Component && <Component />}
    </BsModal>
  );
};

export default Modal;
