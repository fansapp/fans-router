import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


const Notification = ({ dismiss, type, text }) => {
  const classes = classnames({
    Notification: true,
    [`Notification--${type}`]: true,
  });

  const renderNotification = () => {
    if (!type) {
      return null;
    }

    return (
      <div className={classes}>
        <div className="Notification__text">{text}</div>
        <button className="Notification__button" onClick={dismiss}>Dismiss</button>
      </div>
    );
  };

  return (
    <CSSTransitionGroup
      transitionName="notification"
      component="div"
      transitionEnterTimeout={400}
      transitionLeaveTimeout={400}>
      {renderNotification()}
    </CSSTransitionGroup>
  );
};

Notification.defaultProps = {
  type: null,
  text: null,
};

Notification.propTypes = {
  dismiss: PropTypes.func.isRequired,
  type: PropTypes.string,
  text: PropTypes.string,
};

export default Notification;
