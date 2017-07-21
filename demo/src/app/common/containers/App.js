import { connect } from 'react-redux';
import App from '../components/App';


const mapState = state => ({
  route: state.router.route,
  showNotification: !!state.notification.type,
});

export default connect(mapState)(App);
