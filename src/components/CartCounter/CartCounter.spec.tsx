import { render, screen } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import { CartCounter } from '.';
import rootReducer from '../../store/modules/rootReducer';
import { addToCartCounter } from '../../store/modules/cart/actions';

describe('CartCounter component', () => {
  const storeTest = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
  storeTest.dispatch(addToCartCounter(1));

  it('renders correctly', async () => {
    render(
      <Provider store={storeTest}>
        <CartCounter />
      </Provider> 
    )

    expect(screen.getByText(`1`)).toBeInTheDocument();
  });
});