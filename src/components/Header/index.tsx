// COMPONENTE DO RODAPÉ

import { Link } from 'react-router-dom';

import { AiOutlineShoppingCart } from 'react-icons/ai';

import { CartCounter } from '../CartCounter';

import { Container } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <h1>Carrinho de compras</h1>

      <Link to="/shopping-cart">
        <CartCounter />
        <AiOutlineShoppingCart />
      </Link>
    </Container>
  )
}