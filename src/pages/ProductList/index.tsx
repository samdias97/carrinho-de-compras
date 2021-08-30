import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { baseURL } from '../../services/api';
import { Loading } from '../../components/Loading';
import { SideList } from '../../components/SideList';
import { Product } from '../../interfaces';
import { changeStatusModal, changeMessageModal } from '../../store/modules/cart/actions';

import { Container } from './styles';

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
      const response = res.map((product: Product) => {
        return {...product, quantity: 1};
      });

      const contIndex = Math.ceil(response.length / 2);
      const responseProductsPrimaryAux: Product[] = [];
      const responseProductsSecundaryAux: Product[] = [];

      response.forEach((product: Product, index: number) => {
        if (index <= contIndex) responseProductsPrimaryAux.push(product);
      })

      response.forEach((product: Product, index: number) => {
        if (index > contIndex) responseProductsSecundaryAux.push(product);
      })

      setResponseProductsPrimary(responseProductsPrimaryAux);
      setResponseProductsSecundary(responseProductsSecundaryAux);

      setLoading(false);
    }).catch(() => {
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