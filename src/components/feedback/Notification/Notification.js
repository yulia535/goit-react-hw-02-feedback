import React from 'react';
import styles from '../Notification/notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <div>
    <span className={styles.notificationItem}>{message}</span>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
