import { connect } from 'react-redux';
import LinkComponent from './Link';
import { navigate } from '../actions';
import { getRouteName } from '../selectors';


const mapState = state => ({
  routeName: getRouteName(state),
});

const mapActions = dispatch => ({
  navigate: (destination, routes) => { dispatch(navigate(destination, routes)); },
});

export default connect(mapState, mapActions)(LinkComponent);
