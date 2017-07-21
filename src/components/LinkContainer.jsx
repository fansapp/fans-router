import { connect } from 'react-redux';
import LinkComponent from './Link';
import { navigate } from '../actions';
import { getRoutes, getRoute } from '../selectors';


const mapState = state => ({
  route: getRoute(state),
  routes: getRoutes(state),
});

const mapActions = dispatch => ({
  navigate: (destination, routes) => { dispatch(navigate(destination, routes)); },
});

export default connect(mapState, mapActions)(LinkComponent);
