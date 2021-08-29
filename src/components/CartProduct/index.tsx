import { useEffect, useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';

import { Product } from '../../interfaces';
import { IProject } from '../../store';
import { ICartProps } from '../../store/modules/cart/types';
import { 
  changeProductQuantityUnic,
  removeProduct, 
  changeStatusModal, 
  changeMessageModal 
} from '../../store/modules/cart/actions';

import { Container, ContentProduct, ContentQuant, ContentPrice, ButtonRemove } from './styles';

interface CartProductProps {
  data: Product;
}

export const CartProduct: React.FC<CartProductProps> = ({ data }) => {
  const dispatch = useDispatch();
  const cartStore = useSelector<IProject, ICartProps>(store => store.cart);
  const [productFind, setProductFind] = useState<Product>(data);

  useEffect(() => {
    const productFindAux = cartStore.products.find(product => product.id === data.id);
    setProductFind(productFindAux || data);
  }, [cartStore.products, data, data.id]);

  const handleRemoveProductQuantity = useCallback(() => {
    if (productFind) {
      productFind.quantity > 1 && dispatch(changeProductQuantityUnic(productFind.quantity - 1, Number(data.id)));
    } else {
      dispatch(changeStatusModal(true));
      dispatch(changeMessageModal('Erro', 'Produto não encontrado!'));
    }
  }, [data.id, dispatch, productFind]);

  const handleCheckStock = useCallback(() => {
    if (productFind) {
      if (data.stock > productFind.quantity) {
        dispatch(changeProductQuantityUnic(productFind.quantity + 1, Number(data.id)));
      } else {
        dispatch(changeStatusModal(true));
        dispatch(changeMessageModal('Erro', 'Sem estoque!'));
      }
    } else {
      dispatch(changeStatusModal(true));
      dispatch(changeMessageModal('Erro', 'Produto não encontrado!'));
    }
  }, [data.id, data.stock, dispatch, productFind]);

  const handleCheckProductQuantity = useMemo(() => {
    return productFind ? productFind.quantity : 1;
  }, [productFind]);

  return (
    <Container>
      <ContentProduct>
        <img src={data.image} alt="productImg" />

        <ul>
          <li><strong>{data.name}</strong></li>
          <li>
            Preço: {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(Number(data.price))}
          </li>
          <li>Estoque: {data.stock - productFind.quantity}</li>
        </ul>
      </ContentProduct>

      <ContentQuant>
        <p>Quant:</p>

        <article>
          <button type="button" onClick={() => handleRemoveProductQuantity()} data-testid="decrement">
            <RiArrowLeftSLine />
          </button>

          <span>{handleCheckProductQuantity}</span>
        
          <button type="button" onClick={() => handleCheckStock()} data-testid="increment"> 
            <RiArrowRightSLine />
          </button>
        </article>

        <ButtonRemove type="button" onClick={() => dispatch(removeProduct(Number(data.id)))} data-testid="removeProduct">
          <AiFillDelete />
          <strong>Remover</strong>
        </ButtonRemove>
      </ContentQuant>

      <ContentPrice>
        <p>Valor total:</p>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(Number(data.price) * handleCheckProductQuantity)}
        </strong>
      </ContentPrice>
    </Container>
  )
}