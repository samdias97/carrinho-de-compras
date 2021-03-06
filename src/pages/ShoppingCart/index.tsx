// PÁGINA DO CARRINHO DE COMPRAS

import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoMdBasket } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';

import { changeStatusModal, changeMessageModal } from '../../store/modules/cart/actions';
import { IProject } from '../../store';
import { ICartProps } from '../../store/modules/cart/types';
import { CartProduct } from '../../components/CartProduct';

import { Container, HeaderCart, Title, ContentOptions, List, CartEmpty } from './styles';

export const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch();
  const cartStore = useSelector<IProject, ICartProps>(store => store.cart);
  // REVERTE A ORDEM DOS PRODUTOS NO ARRAY PARA QUE FIQUE EM EVIDÊNCIA 
  // EM TELA DO MAIS RECENTE PARA O MAIS ANTIGO
  const reverseOrderProducts = [...cartStore.products].reverse();

  // FAZ A CHAMADA DO MODAL PASSANDO OS PARÂMETROS PARA REMOÇÃO DE TODOS OS PRODUTOS DO CARRINHO
  const handleRemoveAllProducts = useCallback(() => {
    dispatch(changeStatusModal(true));
    dispatch(changeMessageModal('info', '', 'Tem certeza que deseja remover todos?'));
  }, [dispatch]);

  return (
    <Container>
      {cartStore.products.length > 0 ? (
        <>
          <HeaderCart>
            <Title>
              <IoMdBasket />
              <h2>Produtos</h2>
            </Title>

            <ContentOptions>
              <Link to="/">
                <span>Continuar comprando</span>
              </Link>

              <button type="button" onClick={handleRemoveAllProducts} data-testid="removeAllProducts">
                <AiFillDelete />
                <span>Remover todos</span>
              </button>
            </ContentOptions>
          </HeaderCart>

          <List>
            {reverseOrderProducts.map(product => (
              <CartProduct key={product.id} data={product} />
            ))}
          </List>
        </>
      ) : (
        <CartEmpty>
          <strong>O seu carrinho está vazio</strong>
          <p>Deseja olhar outros produtos similares?</p>
          <Link to="/">
            <span>Continuar comprando</span>
          </Link>
        </CartEmpty>
      )}
    </Container>
  )
}