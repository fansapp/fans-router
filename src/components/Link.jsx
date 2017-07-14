import React from 'react';
import PropTypes from 'prop-types';
import RouteFactory from '../routeFactory';


const Link = ({ label, to, navigate }) => {
  const { path } = RouteFactory.parse(to);
  const handleClick = (e) => {
    e.preventDefault();
    navigate(path);
  };

  return <a href={to} onClick={handleClick}>{label}</a>;
};

Link.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default Link;
