import { render, screen, fireEvent } from '@testing-library/react';
import { CardProduct } from '.';
import { Product } from '../../interfaces';
import { Provider } from 'react-redux';
import { cartTest } from '../../store/modules/cart/reducerTest';
import { createStore } from 'redux';

jest.mock('react-router-dom', () => {
  return {
    useHistory() {
      return {
        push: jest.fn(),
      }
    }
  }
});

const productTest: Product = {
  createdAt: '2021-08-28T12:00:00.000Z',
  id: '1',
  image: 'https://miro.medium.com/max/544/1*REfN2oQiMwz7sgEYkJVY8g.jpeg',
  name: 'React Testing Library',
  price: '300.00',
  quantity: 1,
  stock: 10,
}

describe('CardProduct component', () => {
  it('renders correctly', () => {
    const storeTest = createStore(cartTest);

    render(
      <Provider store={storeTest}>
        <CardProduct data={productTest} />
      </Provider>
    )

    expect(screen.getByText(`React Testing Library`)).toBeInTheDocument(); 
    expect(screen.getByText(`R$ 300,00`)).toBeInTheDocument(); 
  });

  it('add product to cart', () => {
    const storeTest = createStore(cartTest);
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
});