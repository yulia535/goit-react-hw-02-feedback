import React from 'react';
import styles from '../FeedbackOptions/feedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div>
    <button
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
    </button>
  </div>
);
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
