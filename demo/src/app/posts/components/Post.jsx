import React from 'react';
import PropTypes from 'prop-types';


const Post = ({ post }) => (
  <div className="View">
    <h1>Post: {post.title}</h1>
    This is post view for post with id {post.id}.
  </div>
);

Post.defaultProps = {
  post: {},
};

Post.propTypes = {
  post: PropTypes.shape(),
};

export default Post;
