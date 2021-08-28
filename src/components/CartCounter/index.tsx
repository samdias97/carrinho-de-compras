import { useSelector } from 'react-redux';

import { IProject } from '../../store';
import { ICartProps } from '../../store/modules/cart/types';

import { Container } from './styles';

export const CartCounter: React.FC = () => {
  const cartStore = useSelector<IProject, ICartProps>(project => project.cart);

  return (
    <>
      {cartStore.quantityOfProducts > 0 && (
        <Container>
          {cartStore.quantityOfProducts}
        </Container>
      )}
    </>
  )
}