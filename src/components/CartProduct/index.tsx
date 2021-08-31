// COMPONENTE QUE RENDERIZA OS DETALHES DO CARD NO CARRINHO DE COMPRAS

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

  // BUSCA O PRODUTO ATUAL DENTRE OS PRODUTOS ADICIONADOS NO ESTADO GLOBAL DO REDUX
  useEffect(() => {
    const productFindAux = cartStore.products.find(product => product.id === data.id);
    setProductFind(productFindAux || data);
  }, [cartStore.products, data, data.id]);

  // FAZ A CHECAGEM E REMOVE UMA UNIDADE DO PRODUTO EM QUESTÃO
  const handleRemoveProductQuantity = useCallback(() => {
    if (productFind) {
      // DISPARA A AÇÃO PARA REMOVER UMA UNIDADE DO PRODUTO
      productFind.quantity > 1 && dispatch(changeProductQuantityUnic(productFind.quantity - 1, Number(data.id)));
    } else {
      dispatch(changeStatusModal(true)); // SETA O MODAL PARA SER VISÍVEL
      dispatch(changeMessageModal('error', 'Erro', 'Produto não encontrado!')); // SETA OS PARÂMENTROS DO MODAL
    }
  }, [data.id, dispatch, productFind]);

  // FAZ A CHECAGEM E ADICIONA UMA UNIDADE DO PRODUTO EM QUESTÃO
  const handleCheckStock = useCallback(() => {
    if (productFind) {
      if (data.stock > productFind.quantity) {
        // DISPARA A AÇÃO PARA ADICIONAR UMA UNIDADE DO PRODUTO
        dispatch(changeProductQuantityUnic(productFind.quantity + 1, Number(data.id)));
      } else {
        dispatch(changeStatusModal(true)); // SETA O MODAL PARA SER VISÍVEL
        dispatch(changeMessageModal('error', 'Erro', 'Sem estoque!')); // SETA OS PARÂMENTROS DO MODAL
      }
    } else {
      dispatch(changeStatusModal(true)); // SETA O MODAL PARA SER VISÍVEL
      dispatch(changeMessageModal('error', 'Erro', 'Produto não encontrado!')); // SETA OS PARÂMENTROS DO MODAL
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