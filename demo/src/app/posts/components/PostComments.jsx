import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const renderComments = comments =>
  comments.map(comment => (
    <p key={comment.id}>{comment.body}</p>
  ));

const PostComments = ({ comments, onRefresh }) => (
  <div className="View">
    <h1>Comments</h1>
    <div className="View View__controls">
      <button className="View__controls__button" onClick={onRefresh}>
        Reload me!
      </button>
    </div>
    <div>{renderComments(comments)}</div>
  </div>
);

PostComments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onRefresh: PropTypes.func.isRequired,
};

export default PostComments;
