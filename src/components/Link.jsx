import React from 'react';
import PropTypes from 'prop-types';


const Link = ({ children, className, to, navigate }) => {
  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return <a className={className} href={to} onClick={handleClick}>{children}</a>;
};

Link.defaultProps = {
  className: null,
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default Link;
