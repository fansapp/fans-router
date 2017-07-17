import React from 'react';
import PropTypes from 'prop-types';


const Link = ({ children, to, navigate }) => {
  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return <a href={to} onClick={handleClick}>{children}</a>;
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default Link;
