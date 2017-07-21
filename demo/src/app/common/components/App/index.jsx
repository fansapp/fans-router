import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import Notification from '../../../notification/containers/Notification';
import Posts from '../../../posts/containers/Posts';
import Post from '../../../posts/containers/Post';
import Welcome from '../Welcome';
import TopBar from '../../components/TopBar';
import SideBar from '../SideBar';
import Login from '../../../login/components/Login';


const renderView = (route) => {
  switch (route.name) {
    case 'root':
      return <Welcome />;
    case 'root.posts':
      return <Posts />;
    case 'root.posts.details':
      return <Post id={route.params.postId} />;
    case 'root.login':
      return <Login />;
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

App.propTypes = {
  route: PropTypes.shape().isRequired,
};

export default App;
