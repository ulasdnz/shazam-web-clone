import React from 'react'
import { connect } from 'react-redux'
import * as Icons from '../../icons'
import styles from './player-left.module.css'
import { usePalette } from 'react-palette'

function PlayerLeft(props) {
  var { data } = usePalette(props.trackData.coverSrc)

  return (
    <div className={styles.playerLeft}>
      <div className={styles.container}>
        <div style={{ marginRight: '10px' }}>
          <div className={styles.imgContainer}>
            <img
              loading="lazy"
              alt="song cover"
              src={props.trackData.coverSrc ? props.trackData.coverSrc : null}
            />
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.text}> Şimdi Kısa Çalınıyor </div>
          <a href="/" style={{ textDecoration: 'none' }}>
            {props.trackData.songName}
          </a>
          <div className={styles.subhead}>{props.trackData.songArtist}</div>
        </div>
      </div>
      <div
        className={styles.svgWrapper}
        style={{ backgroundColor: `${data.vibrant} ` }}
      >
        <span>
          <Icons.PlayerMusic className={styles.svg} />
        </span>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    trackData: state.trackData
  }
}

export default connect(mapStateToProps)(PlayerLeft)
