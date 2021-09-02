import React from 'react'
import styles from './icon-button.module.css'

function IconButton(props) {
  let iconStyle = props.iconName ? styles.iconPause : styles.iconButton
  return <button className={iconStyle}>{props.icon}</button>
}

export default IconButton
