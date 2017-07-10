import history from './history';
import normalizeRoutes from './utils/normalizeRoutes';


export default routes => ({
  history,
  routes: normalizeRoutes(routes),
});
