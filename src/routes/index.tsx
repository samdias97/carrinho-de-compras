import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { Route } from './Route';

import { ProductList } from '../pages/ProductList';
import { ShoppingCart } from '../pages/ShoppingCart';

// TODAS AS ROTAS DO PROJETO
export const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {/* PÁGINA DA LISTA DE COMPRAS (HOME) */}
      <Route path="/" exact component={ProductList} />

      {/* PÁGINA DO CARRINHO DE COMPRAS */}
      <Route path="/shopping-cart" component={ShoppingCart} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
)