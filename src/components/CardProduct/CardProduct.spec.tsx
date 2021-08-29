import { render, screen, fireEvent } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { CardProduct } from '.';
import { Product } from '../../interfaces';
import rootReducer from '../../store/modules/rootReducer';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const productTest: Product = {
  createdAt: '2021-08-28T12:00:00.000Z',
  id: '1',
  image: 'https://miro.medium.com/max/544/1*REfN2oQiMwz7sgEYkJVY8g.jpeg',
  name: 'React Testing Library',
  price: '300.00',
  quantity: 2,
  stock: 10,
}

describe('CardProduct component', () => {
  it('renders correctly', () => {
    const storeTest = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

    render(
      <Provider store={storeTest}>
        <CardProduct data={productTest} />
      </Provider>
    )

    expect(screen.getByText(`React Testing Library`)).toBeInTheDocument(); 
    expect(screen.getByText(`R$ 300,00`)).toBeInTheDocument(); 
  });

  it('add product to cart', () => {
    const storeTest = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
    const origDispatch = storeTest.dispatch;
    storeTest.dispatch = jest.fn(origDispatch);

    render(
      <Provider store={storeTest}>
        <CardProduct data={productTest} />
      </Provider> 
    )

    fireEvent.click(screen.getByTestId(`addProductToCart`));
    expect(storeTest.dispatch).toHaveBeenCalled();
  });

  it('redirects to shopping cart', () => {
    const storeTest = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
    const origDispatch = storeTest.dispatch;
    storeTest.dispatch = jest.fn(origDispatch);

    render(
      <Provider store={storeTest}>
        <MemoryRouter>
          <CardProduct data={productTest} />
        </MemoryRouter>
      </Provider> 
    )

    fireEvent.click(screen.getByTestId(`addProductToCart`));
    expect(mockHistoryPush).toHaveBeenCalledWith('/shopping-cart');
  });
});