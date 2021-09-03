// COMPONENTE CONTADOR DE PRODUTOS ADICIONADOS

import { useSelector } from 'react-redux';

import { IProject } from '../../store';
import { Product } from '../../interfaces/index';

import { Container } from './styles';

export const CartCounter: React.FC = () => {
  const storeProductsLength = useSelector<IProject, Product[]>(project => project.cart.products).length;

  return (
    <>
      {storeProductsLength > 0 && (
        <Container>
          {storeProductsLength}
        </Container>
      )}
    </>
  )
}