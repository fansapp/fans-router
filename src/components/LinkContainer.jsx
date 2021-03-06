import { connect } from 'react-redux';
import LinkComponent from './Link';
import { navigate } from '../actions';
import { getRoute, getRouteName } from '../selectors';
import { matchRoute } from '../helpers';

const mapState = state => ({
  route: getRoute(state),
  matchRoute: matchRoute(getRouteName(state)),
});

const mapActions = dispatch => ({
  navigate: (destination, force) =>
    dispatch(navigate(destination, force)),
});

export default connect(
  mapState,
  mapActions
)(LinkComponent);
