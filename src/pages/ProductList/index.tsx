// PÁGINA DA LISTA DE COMPRAS (HOME)

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { baseURL } from '../../services/api';
import { Loading } from '../../components/Loading';
import { SideList } from '../../components/SideList';
import { Product } from '../../interfaces';
import { changeStatusModal, changeMessageModal } from '../../store/modules/cart/actions';

import { Container } from './styles';

// REQUISIÇÃO GET QUE RETORNA A LISTA DE PRODUTOS 
export const getConfig = async (): Promise<Product[]> => {
  return axios.get(`${baseURL}api/v1/product`).then(resp => resp.data).catch(error => {
    console.warn(error);
  });
}

export const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [responseProductsPrimary, setResponseProductsPrimary] = useState<Product[]>([]);
  const [responseProductsSecundary, setResponseProductsSecundary] = useState<Product[]>([]);

  useEffect(() => {
    setLoading(true);

    getConfig().then(res => {
      // RETORNA O ARRAY DE PRODUTOS SETADOS COM O PROPRIEDADE "quantity: 1"
      const response = res.map((product: Product) => {
        return {...product, quantity: 1};
      });

      // SEPARA O ARRAY ÚNICO EM DOIS ARRAYS PARA POSTERIORMENTE RENDERIZAR EM LISTAS DIFERENTES
      const contIndex = Math.ceil(response.length / 2);
      const responseProductsPrimaryAux: Product[] = [];
      const responseProductsSecundaryAux: Product[] = [];

      response.forEach((product: Product, index: number) => {
        if (index <= contIndex) {
          responseProductsPrimaryAux.push(product);
        } else {
          responseProductsSecundaryAux.push(product);
        }
      })

      setResponseProductsPrimary(responseProductsPrimaryAux);
      setResponseProductsSecundary(responseProductsSecundaryAux);

      setLoading(false);
    }).catch(() => {
      // FAZ A CHAMADA DO MODAL E PASSA SEUS RESPECTIVOS PARÂMENTROS
      dispatch(changeStatusModal(true));
      dispatch(changeMessageModal('error', 'Erro', 'Erro ao carregar dados!'));

      setLoading(false);
    });
  }, [dispatch]);

  return (
    <>
      <Container>
        {!!responseProductsPrimary.length && <SideList data={responseProductsPrimary} />}
        {!!responseProductsSecundary.length && <SideList data={responseProductsSecundary} />}
      </Container>

      {loading && <Loading />}
    </>
  )
}