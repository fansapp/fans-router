import React from 'react';
import PropTypes from 'prop-types';
import { parse, stringify } from 'query-string';
import { Link } from '../../../../../dist';
import './styles.scss';

const appendParams = (url, params = {}) => {
  const splitURL = url.split('?');
  const basepath = splitURL[0];
  if (Object.keys(params).length === 0) {
    return basepath;
  }
  if (splitURL.length === 1) {
    return `${basepath}?${stringify(params)}`;
  }
  const queryParam = parse(splitURL[1]);
  const combined = { ...queryParam, ...params };
  return `${basepath}?${stringify(combined)}`;
};

const renderPosts = posts => posts.map((post, i) => (
  <li key={i.toString()}>
      * <Link to={`/posts/${post.id}`}>{post.title}</Link>{' '}
    <span>
      <Link to={`/comments?postId=${post.id}`}>view comments</Link>
    </span>
  </li>
  ));

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  render() {
    const { posts, onRefresh, onReplace, router } = this.props;
    return (
      <div className="View">
        <h1>Posts</h1>
        <div className="View__wrap">
          <div className="View__wrap__search">
            <input
              type="text"
              onChange={event => this.setState({ search: event.target.value })}
              className="View__wrap__search--searchTerm"
              placeholder="What are you looking for?"
            />
            <button
              type="submit"
              onClick={() =>
                onReplace(
                  appendParams(router.route.path, {
                    search: this.state.search,
                  })
                )
              }
              className="View__wrap__search--searchButton"
            >
              search
            </button>
          </div>
        </div>
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
            <Link to="/posts">All</Link> |{' '}
            <Link to="/posts?postsNum=10">10</Link> |{' '}
            <Link to="/posts?postsNum=20">20</Link> |{' '}
            <Link to="/posts?postsNum=30">30</Link>
          </div>
        </div>
        <ul>{renderPosts(posts)}</ul>
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  router: PropTypes.shape().isRequired,
  onRefresh: PropTypes.func.isRequired,
  onReplace: PropTypes.func.isRequired,
};

export default Posts;
