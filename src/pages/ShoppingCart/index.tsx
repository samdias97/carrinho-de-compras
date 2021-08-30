import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoMdBasket } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';

import { changeStatusModal, changeMessageModal } from '../../store/modules/cart/actions';
import { IProject } from '../../store';
import { ICartProps } from '../../store/modules/cart/types';
import { CartProduct } from '../../components/CartProduct';
import { Product } from '../../interfaces';

import { Container, HeaderCart, Title, ContentOptions, List, CartEmpty } from './styles';

export const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch();
  const cartStore = useSelector<IProject, ICartProps>(store => store.cart);
  const [reverseOrderProducts, setReverseOrderProducts] = useState<Product[]>([]);

  useEffect(() => {
    const reverseOrderProductsAux = [...cartStore.products];

    setReverseOrderProducts(reverseOrderProductsAux.reverse());
  }, [cartStore.products]);

  const handleRemoveAllProducts = useCallback(() => {
    dispatch(changeStatusModal(true));
    dispatch(changeMessageModal('info', '', 'Tem certeza que deseja remover todos?'));
  }, [dispatch]);

  return (
    <Container>
      {cartStore.quantityOfProducts > 0 ? (
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