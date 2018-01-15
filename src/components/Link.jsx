import React from 'react';
import PropTypes from 'prop-types';
import RouteFactory from '../routeFactory';


const Link = ({
  baseClass,
  children,
  className,
  matchRoute,
  to,
  navigate,
  route,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  let classes = baseClass;

  if (route && to === route.path) {
    classes = classes.concat(` ${baseClass}--active`);
  }

  if (matchRoute(RouteFactory.parse(to).name)) {
    classes = classes.concat(` ${baseClass}--tree`);
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
  route: null,
};

Link.propTypes = {
  baseClass: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  matchRoute: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  route: PropTypes.shape({
    query: PropTypes.shape().isRequired,
    name: PropTypes.string.isRequired,
    params: PropTypes.shape().isRequired,
    path: PropTypes.string.isRequired,
  }),
};

export default Link;
