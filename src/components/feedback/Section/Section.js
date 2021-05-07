import React from 'react';
import styles from '../Section/section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <div>
    <h2 className={styles.sectionTitle}>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string,
};
export default Section;
