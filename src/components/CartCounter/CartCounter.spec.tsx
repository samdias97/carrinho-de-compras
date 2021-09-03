import { render, screen } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import { CartCounter } from '.';
import rootReducer from '../../store/modules/rootReducer';
import { Product } from '../../interfaces';
import { addProductToCart } from '../../store/modules/cart/actions';

const productTest: Product = {
  createdAt: '2021-08-28T12:00:00.000Z',
  id: '1',
  image: 'https://miro.medium.com/max/544/1*REfN2oQiMwz7sgEYkJVY8g.jpeg',
  name: 'React Testing Library',
  price: '300.00',
  quantity: 2,
  stock: 10,
}

describe('CartCounter component', () => {
  const storeTest = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

  storeTest.dispatch(addProductToCart(productTest));

  it('renders correctly', async () => {
    render(
      <Provider store={storeTest}>
        <CartCounter />
      </Provider> 
    )

    expect(screen.getByText(`1`)).toBeInTheDocument();
  });
});