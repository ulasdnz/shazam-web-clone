import React from 'react'
import { connect } from 'react-redux'
import { changePlay } from '../../actions'
import * as Icons from '../../icons'
import IconButton from '../buttons/icon-button'
import styles from './play-button.module.css'

function PlayPauseButton(props) {
  return (
    <div
      className={styles.button}
      tabIndex="0"
      role="button"
      onClick={() => props.changePlay(!props.isPlaying)}
    >
      {props.isPlaying ? (
        <IconButton
          iconName="Pause"
          icon={<Icons.PlayerPause />}
          activeicon={<Icons.PlayerPause />}
        />
      ) : (
        <IconButton
          icon={<Icons.PlayerPlay />}
          activeicon={<Icons.PlayerPlay />}
        />
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isPlaying: state.isPlaying
  }
}

export default connect(mapStateToProps, { changePlay })(PlayPauseButton)
