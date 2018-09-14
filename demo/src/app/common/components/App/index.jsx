import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import Notification from '../../../notification/containers/Notification';
import Posts from '../../../posts/containers/Posts';
import Post from '../../../posts/containers/Post';
import PostComments from '../../../posts/containers/PostComments';
import Welcome from '../Welcome';
import TopBar from '../../components/TopBar';
import SideBar from '../SideBar';
import Login from '../../../login/containers/Login';
import Secret from '../../../secret/components/Secret';


const renderView = (route) => {
  if (!route) {
    return (<div />);
  }

  switch (route.name) {
    case 'root':
      return <Welcome />;
    case 'root.posts':
      return <Posts />;
    case 'root.posts.details':
      return <Post id={route.params.postId} />;
    case 'root.comments':
      return <PostComments />;
    case 'root.login':
      return <Login />;
    case 'root.secret':
      return <Secret />;
    default:
      return null;
  }
};

const App = ({ route }) => (
  <div className="App">
    <Notification />
    <TopBar />
    <div className="Main">
      <SideBar />
      {renderView(route)}
    </div>
  </div>
  );

App.defaultProps = {
  route: null,
};

App.propTypes = {
  route: PropTypes.shape(),
};

export default App;
