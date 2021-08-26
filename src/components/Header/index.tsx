import { AiOutlineShoppingCart } from 'react-icons/ai';

import { CartCounter } from '../CartCounter';

import { Container } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <h1>Carrinho de compras</h1>

      <button type="button">
        <CartCounter />
        <AiOutlineShoppingCart />
      </button>
    </Container>
  )
}