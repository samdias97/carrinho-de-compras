import { render, screen, fireEvent } from '@testing-library/react';
import { ProductList } from '.';
import { Product } from '../../interfaces';
import { Provider } from 'react-redux';
import { cartTest } from '../../store/modules/cart/reducerTest';
import { createStore } from 'redux';

describe('CartProduct component', () => {
  const storeTest = createStore(cartTest);

  it('renders correctly', async () => {
    render(
      <Provider store={storeTest}>
        <ProductList />
      </Provider>
    )
  });
});