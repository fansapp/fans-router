import { reducer as routerReducer } from '../../../../../dist';
import app from '../../common/reducers/app';
import notification from '../../notification/reducers/notification';
import posts from '../../posts/reducers/posts';


export default (state = {}, action) => ({
  app: app(state.app, action, state),
  notification: notification(state.notification, action, state),
  posts: posts(state.posts, action, state),
  router: routerReducer(state.router, action, state),
});
