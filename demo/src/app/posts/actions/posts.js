import { json } from '../../utils/rest';


export default null;

export const updatePosts = () => (dispatch) => {
  json.get('https://jsonplaceholder.typicode.com/posts')
    .then((posts) => {
      dispatch({ type: 'POSTS.UPDATE', posts });
    });
};
