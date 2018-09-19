import actionTypes from './constants/actionTypes';
import createRouter from './createRouter';
import FansRouterProvider from './components/Provider';
import Link from './components/LinkContainer';
import { navigate, reload } from './actions';
import normalizeRoutes from './utils/normalizeRoutes';
import reducer from './reducer';
import selectors from './selectors';
import { matchRoute } from './helpers';
import propTypes from './propTypes';


export default {
  actionTypes,
  createRouter,
  Link,
  matchRoute,
  reload,
  navigate,
  normalizeRoutes,
  Provider: FansRouterProvider,
  routerPropTypes: propTypes,
  reducer,
  ...selectors,
};
