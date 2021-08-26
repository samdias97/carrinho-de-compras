import { useSelector } from 'react-redux';

import { IProject } from '../../store';
import { ICartProps } from '../../store/modules/cart/types';

import { Container } from './styles';

export const CartCounter: React.FC = () => {
  const quantProductsCart = useSelector<IProject, ICartProps>(project => project.cart);

  return (
    <>
      {quantProductsCart.quantityOfProducts > 0 && (
        <Container>
          {quantProductsCart.quantityOfProducts}
        </Container>
      )}
    </>
  )
}