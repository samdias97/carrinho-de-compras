// COMPONENTE QUE RENDERIZA O CARD DO PRODUTO

import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { addProductToCart, addToCartCounter, changeStatusModal, changeMessageModal } from '../../store/modules/cart/actions';
import { IProject } from '../../store';
import { ICartProps } from '../../store/modules/cart/types';
import { Product } from '../../interfaces';

import { Container, Card } from './styles';

interface CardProductProps { 
  data: Product;
}

export const CardProduct: React.FC<CardProductProps> = ({
  data,
}) => {
  const dispatch = useDispatch();
  const cartStore = useSelector<IProject, ICartProps>(store => store.cart);
  const { push } = useHistory();
  
  // FUNÇÃO QUE CHECA SE EXISTE ESTOQUE DISPONÍVEL DO PRODUTO 
  const handleCheckProductCart = useCallback((productId) => {
    const productFind = cartStore.products.find(product => product.id === productId);

    if (data.stock > 0) {
      if (!productFind) {
        dispatch(addToCartCounter(1)); // CONTADOR DO CARRINHO É SOMADO + 1
        dispatch(addProductToCart(data)); // PRODUTO É ADICIONADO AO CARRINHO
        push('/shopping-cart'); // É REDIRECIONADO PARA A PÁGINA DO CARRINHO DE COMPRAS
      } else {
        dispatch(changeStatusModal(true)); // SETA O MODAL PARA SER VISÍVEL
        dispatch(changeMessageModal('error', 'Erro', 'Produto já adicionado ao carrinho!')); // SETA OS PARÂMENTROS DO MODAL
      }
    } else {
      dispatch(changeStatusModal(true)); // SETA O MODAL PARA SER VISÍVEL
      dispatch(changeMessageModal('error', 'Erro', 'Sem estoque!')); // SETA OS PARÂMENTROS DO MODAL
    }
  }, [cartStore.products, data, dispatch, push]);

  return (
    <Container>
      <Card onClick={() => handleCheckProductCart(data.id)} data-testid="addProductToCart">
        <img src={data.image} alt="productImage" />

        <div>
          <strong>{data.name}</strong>
          <span>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(Number(data.price))}
          </span>
        </div>
      </Card>
    </Container>
  )
}