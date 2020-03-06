import React from 'react'
import StatisticsItem from './statisticsItem/StatisticsItem';
import PropTypes from 'prop-types';
import styles from './statistics.module.css'

const Statistics = ({data, title}) => (
<section className={styles.statistics}>
{{title} && <h2 className={styles.title}>{title}</h2>}
<ul className={styles.statList}>
 {data.map(data => <StatisticsItem data={data} key={data.id} />)}
  </ul>

</section>)

Statistics.propTypes = {
  title: PropTypes.string
}

export default Statistics;