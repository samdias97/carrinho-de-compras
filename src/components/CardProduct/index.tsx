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

  const handleCheckProductCart = useCallback((productId) => {
    const productFind = cartStore.products.find(product => product.id === productId);

    if (data.stock > 0) {
      if (!productFind) {
        dispatch(addToCartCounter(1));
        dispatch(addProductToCart(data));
        push('/shopping-cart');
      } else {
        dispatch(changeStatusModal(true));
        dispatch(changeMessageModal('Erro', 'Produto já adicionado ao carrinho!'));
      }
    } else {
      dispatch(changeStatusModal(true));
      dispatch(changeMessageModal('Erro', 'Sem estoque!'));
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