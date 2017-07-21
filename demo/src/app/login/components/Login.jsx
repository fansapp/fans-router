import React from 'react';
import PropTypes from 'prop-types';


const Login = ({ app, login }) => (
  <div className="View">
    <h1>Login</h1>
    {!app.token ? <button onClick={login}>Log me in please</button> : <p>Logged in!</p>}
  </div>
);

Login.propTypes = {
  app: PropTypes.shape().isRequired,
  login: PropTypes.func.isRequired,
};

export default Login;
