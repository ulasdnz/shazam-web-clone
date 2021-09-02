import React from 'react'
import styles from './styles.module.css'
import ChartCard from '../../../components/carousel/home-charts'

const MoreCharts = () => {
  return (
    <div className={styles.home}>
      <div className={styles.caption}>
        <h2> Daha fazla Liste</h2>
      </div>
      <div>
        <ChartCard></ChartCard>
      </div>
    </div>
  )
}

export default MoreCharts
