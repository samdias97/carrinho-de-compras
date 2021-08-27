import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
} from 'react-router-dom';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
}

export const Route: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => (
  <>
    <Header />

    <ReactDOMRoute {...rest} render={() => <Component />} />
    
    <Footer />
  </>
)