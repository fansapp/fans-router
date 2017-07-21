import { connect } from 'react-redux';
import Login from '../components/Login';
import { login } from '../actions';


const mapState = state => ({
  app: state.app,
});

const mapActions = dispatch => ({
  login: () => dispatch(login()),
});

export default connect(mapState, mapActions)(Login);
