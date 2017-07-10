import React from 'react';
import PropTypes from 'prop-types';
import pathToRoute from '../utils/pathToRoute';


const Link = ({ label, to, navigate, routes }) => {
  const destination = pathToRoute(to, routes);
  const handleClick = (e) => {
    e.preventDefault();
    navigate(destination, routes);
  };

  return <a href={destination || '/'} onClick={handleClick}>{label}</a>;
};

Link.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Link;
