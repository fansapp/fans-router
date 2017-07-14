import React from 'react';
import PropTypes from 'prop-types';
import RouteFactory from '../routeFactory';


const Link = ({ label, to, navigate, routes }) => {
  const destination = RouteFactory.parse(to);
  const handleClick = (e) => {
    e.preventDefault();
    navigate(destination, routes);
  };

  return <a href={to} onClick={handleClick}>{label}</a>;
};

Link.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Link;
