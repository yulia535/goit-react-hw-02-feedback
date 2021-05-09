import React from 'react';
import styles from '../FeedbackOptions/feedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button
        key={options.indexOf(option)}
        className={styles.buttonFeedback}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}

    {/* <button
      className={styles.buttonFeedback}
      type="button"
      name="good"
      onClick={onLeaveFeedback}
    >
      Good
    </button>
    <button
      className={styles.buttonFeedback}
      type="button"
      name="neutral"
      onClick={onLeaveFeedback}
    >
      Neutral
    </button>
    <button
      className={styles.buttonFeedback}
      type="button"
      name="bad"
      onClick={onLeaveFeedback}
    >
      Bad
    </button> */}
  </div>
);
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
