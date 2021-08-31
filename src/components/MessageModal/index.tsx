// COMPONENTE DO MODAL INFORMATIVO

import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

import { IProject } from '../../store';
import { ICartProps } from '../../store/modules/cart/types';
import { changeStatusModal, removeAllProducts } from '../../store/modules/cart/actions';

import { Container } from './styles';

export const MessageModal: React.FC = () => {
  const dispatch = useDispatch();
  const cartStore = useSelector<IProject, ICartProps>(store => store.cart);

  return (
    <Modal 
      isOpen={cartStore.statusModal}
      ariaHideApp={false}
      onRequestClose={() => dispatch(changeStatusModal(false))}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      data-testid="closeModalOut"
    >
      <button 
        type="button" 
        onClick={() => dispatch(changeStatusModal(false))} 
        className="react-modal-close"
        data-testid="closeModalIn"
      >
        <AiOutlineClose />
      </button>

      {/* CASO O PARÂMETRO CONSULTADO DO CONTEXTO GLOBAL SEJA "info": */}
      {cartStore.dataModal.type === 'info' ? (
        <Container>
          <strong>{cartStore.dataModal.description}</strong>
          <div>
            <button type="button" onClick={() => {
              dispatch(changeStatusModal(false)); // DISPARA AÇÃO PARA FECHAR O MODAL
              dispatch(removeAllProducts(true)); // DISPARA AÇÃO PARA REMOVER TODOS OS PRODUTOS DO ESTADO GLOBAL
            }} data-testid="removeAllProducts">
              Sim
            </button>
            
            {/* DISPARA AÇÃO PARA FECHAR O MODAL */}
            <button type="button" onClick={() => dispatch(changeStatusModal(false))} data-testid="closeModalButton">
              Não
            </button>
          </div>
        </Container>
      ) : (
        <Container>
          <h1>{cartStore.dataModal.title}</h1>
          <p>{cartStore.dataModal.description}</p>
        </Container>
      )}
    </Modal>
  )
}