import { updatePosts, getPostComments } from '../../posts/rest';
import { navigate } from '../../../../../dist';


export default [
  {
    to: ['root.posts', 'root.posts.details'],
    call: route => updatePosts(route.query.postsNum),
    onResolve: (posts, route, dispatch, state, next) => {
      dispatch({ type: 'POSTS.UPDATE', posts });
      next();
    },
  },
  {
    to: ['root.comments'],
    call: route => getPostComments(route.query.postId),
    onResolve: (comments, route, dispatch, state, next) => {
      dispatch({ type: 'POSTS.COMMENTS', comments });
      next();
    },
  },
  {
    to: ['root.secret'],
    shouldNavigate: (route, state) => state.app.token,
    onNavigationCancelled: (route, dispatch) => dispatch(navigate('/login')),
  },
];
