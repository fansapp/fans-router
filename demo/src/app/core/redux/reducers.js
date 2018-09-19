import { reducer as routerReducer } from '../../../../../dist';
import app from '../../common/reducers/app';
import notification from '../../notification/reducers/notification';
import posts from '../../posts/reducers/posts';
import postComments from '../../posts/reducers/postComments';


export default (state = {}, action) => ({
  app: app(state.app, action, state),
  comments: postComments(state.comments, action, state),
  notification: notification(state.notification, action, state),
  posts: posts(state.posts, action, state),
  router: routerReducer(state.router, action, state),
});
