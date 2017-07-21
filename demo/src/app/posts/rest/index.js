import { json } from '../../utils/rest';

export default null;

export const updatePosts = () => json.get('https://jsonplaceholder.typicode.com/posts');
