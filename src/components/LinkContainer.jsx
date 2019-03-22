import { connect } from 'react-redux';
import component from './Link';
import { navigate } from '../actions';
import { getRoute, getRouteName } from '../selectors';
import { matchRoute } from '../helpers';


const mapState = state => ({
  matchRoute: matchRoute(getRouteName(state)),
  route: getRoute(state),
});

const mapActions = dispatch => ({
  navigate: (destination, force) =>
    dispatch(navigate(destination, force)),
});

export default connect(mapState, mapActions)(component);
