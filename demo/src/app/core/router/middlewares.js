import { updatePosts } from '../../posts/rest';


export default [
  {
    to: ['root.posts', 'root.posts.details'],
    call: updatePosts,
    onResolve: (posts, route, dispatch, state, next) => {
      dispatch({ type: 'POSTS.UPDATE', posts });
      next();
    },
  },
];
