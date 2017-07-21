import { connect } from 'react-redux';
import Notification from '../components/Notification';
import { dismissNotification } from '../actions/notification';


const mapState = state => ({
  type: state.notification.type,
  text: state.notification.text,
});

const mapActions = dispatch => ({
  dismiss: () => { dispatch(dismissNotification()); },
});

export default connect(mapState, mapActions)(Notification);
