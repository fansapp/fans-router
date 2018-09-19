import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../../../../../dist';
import './styles.scss';

const renderPosts = posts =>
  posts.map((post, i) => (
    <li key={i.toString()}>
      * <Link to={`/posts/${post.id}`}>{post.title}</Link>{' '}
      <span>
        <Link to={`/comments?postId=${post.id}`}>view comments</Link>
      </span>
    </li>
  ));

const Posts = ({ posts, onRefresh }) => (
  <div className="View">
    <h1>Posts</h1>
    <div className="View View__controls">
      <div>
        <button className="View__controls__button" onClick={onRefresh}>
          Reload me!
        </button>
      </div>
      <div className="View__controls__links">
        <span className="View__controls__links">
          Select amount of post to display:{' '}
        </span>
        <Link to="/posts">All</Link> | {' '}
        <Link to="/posts?postsNum=10">10</Link> |{' '}
        <Link to="/posts?postsNum=20">20</Link> |{' '}
        <Link to="/posts?postsNum=30">30</Link>
      </div>
    </div>
    <ul>{renderPosts(posts)}</ul>
  </div>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onRefresh: PropTypes.func.isRequired,
};

export default Posts;
