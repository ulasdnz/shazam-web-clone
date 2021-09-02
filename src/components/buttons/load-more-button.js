import React from 'react'
import styles from './load-more-button.module.css'

const LoadMoreButton = (props) => {
  const classname = props.large ? styles.loadButtonLarge : styles.loadButton
  let style = {
    backgroundColor: props.bgColor,
    color: props.color,
    padding:"15px 23px",
    letterSpacing:"-.5px",
    fontWeight: 900,
    maxWidth:"214px"
  }
  if(props.downloadApp) {
    style.backgroundColor = "white"
    style.color = "#08f"
  }
  return (
    <button
      className={classname}
      disabled={props.disabled}
      onClick={props.onClick}
      style={props.bgColor && props.color ? style: {}}
    >
      {props.children}
    </button>
  )
}

export default LoadMoreButton
