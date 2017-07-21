import { connect } from 'react-redux';
import Posts from '../components/Posts';


const mapState = state => ({
  posts: state.posts.items,
});

export default connect(mapState)(Posts);
