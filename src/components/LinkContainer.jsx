import { connect } from 'react-redux';
import LinkComponent from './Link';
import { navigate } from '../actions';


const mapState = state => ({
  route: state.router.route,
  routes: state.router.routes,
});

const mapActions = dispatch => ({
  navigate: (destination, routes) => { dispatch(navigate(destination, routes)); },
});

export default connect(mapState, mapActions)(LinkComponent);
