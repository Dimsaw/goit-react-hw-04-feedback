import React from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.css';

function Notification({ message }) {
  return <span className={s.text}>{message}</span>;
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
