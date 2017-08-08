import { updatePosts } from '../../posts/rest';
import { navigate } from '../../../../../dist';


export default [
  {
    to: ['root'],
    call: () => new Promise(resolve => setTimeout(() => resolve(), 2000)),
    onResolve: (posts, route, dispatch, state, next) => {
      next();
    },
  },
  {
    to: ['root.posts', 'root.posts.details'],
    call: updatePosts,
    onResolve: (posts, route, dispatch, state, next) => {
      dispatch({ type: 'POSTS.UPDATE', posts });
      next();
    },
  },
  {
    to: ['root.secret'],
    shouldNavigate: (route, state) => state.app.token,
    onNavigationCancelled: (route, dispatch) => dispatch(navigate('/login')),
  },
];
