import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { Route } from './Route';

import { ProductList } from '../pages/ProductList';

export const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ProductList} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
)