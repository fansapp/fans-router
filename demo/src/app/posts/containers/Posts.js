import { connect } from 'react-redux';
import Posts from '../components/Posts';
import { reload } from '../../../../../dist';


const mapState = state => ({
  posts: state.posts.items,
  router: state.router,
});

const mapActions = dispatch => ({
  onRefresh: () => dispatch(reload()),
});

export default connect(mapState, mapActions)(Posts);
