import { json } from '../../utils/rest';

export default null;

export const updatePosts = num => json.get('https://jsonplaceholder.typicode.com/posts').then((posts) => {
  if (num) {
    return posts.slice(0, num);
  }
  return posts;
});
export const getPostComments = num => json.get(`https://jsonplaceholder.typicode.com/comments?postId=${num}`);

