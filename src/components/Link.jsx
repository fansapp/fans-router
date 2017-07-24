import React from 'react';
import PropTypes from 'prop-types';
import RouteFactory from '../routeFactory';


const Link = ({ baseClass, children, className, to, navigate, routeName }) => {
  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  const { name } = RouteFactory.parse(to);
  let classes = baseClass;
  if (name === routeName) {
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
  routeName: PropTypes.string.isRequired,
};

export default Link;
