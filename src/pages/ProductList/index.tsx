import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { SideList } from '../../components/SideList';
import { Product } from '../../interfaces';

import { Container } from './styles';

export const ProductList: React.FC = () => {
  const [responseProductsPrimary, setResponseProductsPrimary] = useState<Product[]>([]);
  const [responseProductsSecundary, setResponseProductsSecundary] = useState<Product[]>([]);

  useEffect(() => {
    api.get('api/v1/product').then((res) => {
      const contIndex = Math.ceil(res.data.length / 2);
      const responseProductsPrimaryAux: Product[] = [];
      const responseProductsSecundaryAux: Product[] = [];

      res.data.forEach((product: Product, index: number) => {
        if (index <= contIndex) responseProductsPrimaryAux.push(product);
      })

      res.data.forEach((product: Product, index: number) => {
        if (index > contIndex) responseProductsSecundaryAux.push(product);
      })

      setResponseProductsPrimary(responseProductsPrimaryAux);
      setResponseProductsSecundary(responseProductsSecundaryAux);
    }).catch((err) => {
      console.log(err.message);
    });
  }, []);

  return (
    <Container>
      <SideList data={responseProductsPrimary} />
      <SideList data={responseProductsSecundary} />
    </Container>
  )
}