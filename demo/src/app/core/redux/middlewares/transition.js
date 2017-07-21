import { updatePosts } from '../../../posts/actions/posts';


export default store => next => (action) => {
  const interceptables = ['@@fans-router/NAVIGATE.START', '@@fans-router/INITIALIZE.COMPLETE'];
  if (interceptables.includes(action.type) && action.route.name.includes('root.posts')) {
    store.dispatch(updatePosts());
  }
  return next(action);
};
