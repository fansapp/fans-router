import React from 'react';
import PropTypes from 'prop-types';
import RouteFactory from '../routeFactory';


const Link = ({
  baseClass,
  children,
  className,
  ignoreClasses,
  matchRoute,
  onClick,
  to,
  force,
  navigate,
  route,
}) => {
  const handleClick = (e) => {
    e.preventDefault();

    if (onClick) {
      onClick(e);
    }
    navigate(to, force);
  };

  let classes = [baseClass];

  if (Array.isArray(ignoreClasses) || ignoreClasses === false) {
    if (
      route && to === route.path
      && (ignoreClasses === false || !ignoreClasses.includes('active'))
    ) {
      classes.push(`${baseClass}--active`);
    }

    if (
      matchRoute(RouteFactory.parse(to).name)
      && (ignoreClasses === false || !ignoreClasses.includes('tree'))
    ) {
      classes.push(`${baseClass}--tree`);
    }
  }

  return (
    <a className={classes.join(' ').concat(className)} href={to}  onClick={handleClick}>
      {children}
    </a>
  );
};

Link.propTypes = {
  baseClass: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  matchRoute: PropTypes.func.isRequired,
  ignoreClasses: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.oneOf(['active', 'tree'])),
  ]),
  onClick: PropTypes.func,
  to: PropTypes.string.isRequired,
  force: PropTypes.bool,
  navigate: PropTypes.func.isRequired,
  route: PropTypes.shape({
    query: PropTypes.shape().isRequired,
    name: PropTypes.string.isRequired,
    params: PropTypes.shape().isRequired,
    path: PropTypes.string.isRequired,
  }),
};

Link.defaultProps = {
  baseClass: 'Link',
  className: '',
  force: false,
  ignoreClasses: false,
  route: null,
  onClick: null,
};

export default Link;
