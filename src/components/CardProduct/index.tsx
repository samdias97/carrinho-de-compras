import { useDispatch } from 'react-redux';

import { addProductToCart } from '../../store/modules/cart/actions';
import { Product } from '../../interfaces';

import { Container, Card } from './styles';

interface CardProductProps { 
  data: Product;
}

export const CardProduct: React.FC<CardProductProps> = ({
  data,
}) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Card>
        <ul onClick={() => dispatch(addProductToCart(1))}>
          <li><img src={data.image} alt="productImage" /></li>
          <li><strong>{data.name}</strong></li>
          <li>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(Number(data.price))}
          </li>
        </ul>
      </Card>
    </Container>
  )
}