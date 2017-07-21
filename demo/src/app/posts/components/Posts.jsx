import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../../../../../dist';


const renderPosts = posts => posts.map((post, i) => (
  <li key={i.toString()}>
    * <Link to={`/posts/${post.id}`}>{post.title}</Link>
  </li>
));

const Posts = ({ posts }) => (
  <div className="View">
    <h1>Posts</h1>
    <ul>{renderPosts(posts)}</ul>
  </div>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Posts;
