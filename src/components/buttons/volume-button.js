import React from 'react'
import styles from './volume-button.module.css'

function VolumeButton(props) {
  return <button className={styles.volumeButton}>{props.icon}</button>
}

export default VolumeButton
