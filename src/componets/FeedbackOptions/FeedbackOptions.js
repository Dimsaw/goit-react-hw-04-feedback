import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.container}>
      {options.map(option => (
        <button
          className={s.button}
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;

FeedbackOptions.protoType = {
  option: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
