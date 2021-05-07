import React from 'react';
import styles from '../Statistics/statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.statistics}>
    <span className={styles.statisticsItem}>Good:{good}</span>
    <span className={styles.statisticsItem}>Neutral:{neutral}</span>
    <span className={styles.statisticsItem}>Bad:{bad}</span>
    <span className={styles.statisticsItem}>Total:{total}</span>
    <span className={styles.statisticsItem}>
      Positive feedback:
      {positivePercentage}%
    </span>
  </div>
);
Statistics.defaultProps = {
  positivePercentage: 0,
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
export default Statistics;
