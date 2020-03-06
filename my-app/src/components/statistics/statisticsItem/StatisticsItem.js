import React from 'react'
import styles from "./statisticsItem.module.css"
import PropTypes from 'prop-types';
 

const StatisticsItem = ({data: {label, percentage}}) => (
    <li className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
);

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
};

export default StatisticsItem;