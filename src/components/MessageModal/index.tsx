import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

import { IProject } from '../../store';
import { ICartProps } from '../../store/modules/cart/types';
import { changeStatusModal } from '../../store/modules/cart/actions';

import { Container } from './styles';

export const MessageModal: React.FC = () => {
  const dispatch = useDispatch();
  const cartStore = useSelector<IProject, ICartProps>(store => store.cart);

  return (
    <Modal 
      isOpen={cartStore.statusModal}
      onRequestClose={() => dispatch(changeStatusModal(false))}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={() => dispatch(changeStatusModal(false))} 
        className="react-modal-close"
      >
        <AiOutlineClose />
      </button>

      <Container>
        <h1>{cartStore.dataModal.title}</h1>
        <p>{cartStore.dataModal.description}</p>
      </Container>
    </Modal>
  )
}