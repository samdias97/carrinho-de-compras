import { useSelector, useDispatch } from 'react-redux';
import { IoMdBasket } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';

import { removeAllProducts } from '../../store/modules/cart/actions';
import { IProject } from '../../store';
import { ICartProps } from '../../store/modules/cart/types';
import { CartProduct } from '../../components/CartProduct';

import { Container, HeaderCart, Title, ContentOptions, List, CartEmpty } from './styles';

export const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch();
  const cartStore = useSelector<IProject, ICartProps>(store => store.cart);

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

              <button type="button" onClick={() => dispatch(removeAllProducts(true))}>
                <AiFillDelete />
                <span>Remover todos</span>
              </button>
            </ContentOptions>
          </HeaderCart>

          <List>
            {cartStore.products.map(product => (
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