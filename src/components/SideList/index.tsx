import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { Product } from '../../interfaces';
import { CardProduct } from '../CardProduct';

import { Container, List } from './styles';

interface SideListProps {
  data: Product[];
}

export const SideList: React.FC<SideListProps> = ({
  data,
}) => {
  return (
    <Container>
      <button type="button">
        <RiArrowLeftSLine />
      </button>

      <List>
        {data.map(product => (
          <CardProduct key={product.id} data={product} />
        ))}
      </List>
      
      <button type="button">
        <RiArrowRightSLine />
      </button>
    </Container>
  );
}