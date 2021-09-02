import React from 'react'
import styles from './styles.module.css'

const SongCard = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.container}>
          <div className={styles.img}>
            <img loading="lazy" alt="Artist cover" srcSet={props.link}></img>
          </div>
        </div>
        <div className={styles.artistName}>{props.ad}</div>
      </div>
    </div>
  )
}

export default SongCard
