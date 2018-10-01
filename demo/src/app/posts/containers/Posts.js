import { connect } from 'react-redux';
import Posts from '../components/Posts';
import { reload, replace } from '../../../../../dist';


const mapState = state => ({
  posts: state.posts.items,
  router: state.router,
});

const mapActions = dispatch => ({
  onRefresh: () => dispatch(reload()),
  onReplace: path => dispatch(replace(path)),
});

export default connect(mapState, mapActions)(Posts);
