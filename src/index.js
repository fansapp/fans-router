import createRouter from './createRouter';
import FansRouterProvider from './components/Provider';
import Link from './components/LinkContainer';
import { navigate } from './actions';
import normalizeRoutes from './utils/normalizeRoutes';
import pathToRoute from './utils/pathToRoute';
import routeToPath from './utils/routeToPath';
import reducer from './reducer';


export default {
  createRouter,
  Provider: FansRouterProvider,
  Link,
  navigate,
  normalizeRoutes,
  pathToRoute,
  reducer,
  routeToPath,
};
