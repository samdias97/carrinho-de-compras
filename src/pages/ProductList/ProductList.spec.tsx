import { render } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import { ProductList } from '.';
import rootReducer from '../../store/modules/rootReducer';

describe('ProductList page', () => {
  const storeTest = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

  it('renders correctly', async () => {
    render(
      <Provider store={storeTest}>
        <ProductList />
      </Provider> 
    )
  });
});