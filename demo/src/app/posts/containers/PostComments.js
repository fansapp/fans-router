import { connect } from 'react-redux';
import PostComments from '../components/PostComments';
import { reload } from '../../../../../dist';


const mapState = state => ({
  comments: state.comments.items,
});

const mapActions = dispatch => ({
  onRefresh: () => dispatch(reload()),
});

export default connect(mapState, mapActions)(PostComments);
