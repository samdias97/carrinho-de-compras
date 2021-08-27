import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { Route } from './Route';

import { ProductList } from '../pages/ProductList';
import { ShoppingCart } from '../pages/ShoppingCart';

export const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ProductList} />
      <Route path="/shopping-cart" component={ShoppingCart} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
)