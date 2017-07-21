import { connect } from 'react-redux';
import Post from '../components/Post';


const mapState = (state, props) => ({
  post: state.posts.items.find(post => post.id === Number(props.id)),
});

export default connect(mapState)(Post);
