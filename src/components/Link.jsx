import React from 'react';
import PropTypes from 'prop-types';


const Link = ({ baseClass, children, className, to, navigate, route }) => {
  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  let classes = baseClass;
  if (to === route.path) {
    classes = classes.concat(` ${baseClass}--active`);
  }

  return (
    <a className={classes.concat(` ${className}`)} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

Link.defaultProps = {
  baseClass: 'Link',
  className: '',
};

Link.propTypes = {
  baseClass: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  route: PropTypes.shape({
    query: PropTypes.shape().isRequired,
    name: PropTypes.string.isRequired,
    params: PropTypes.shape().isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default Link;
