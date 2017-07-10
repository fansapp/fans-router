import createRouter from './createRouter';
import FansRouterProvider from './components/Provider';
import Link from './components/LinkContainer';
import { navigate } from './actions';
import normalizeRoutes from './utils/normalizeRoutes';
import reducer from './reducer';


export {
  createRouter,
  Provider: FansRouterProvider,
  Link,
  navigate,
  normalizeRoutes,
  reducer,
};
