import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import styles from './styles.module.css'
import { NavLink } from 'react-router-dom'
import {
  startTrack,
  increaseTrackIndex,
  decreaseTrackIndex,
  songCurrentTime,
  changePlay
} from '../../../../actions'
import { Music, More, Play, Circle, Pause } from '../../../../icons/index'
import useOnClickOutside from '../../../../hooks/outSideClick'
import useLocation from '../../../../hooks/useLocation'

const SongCard = (props) => {
  const [isClicked, isClickedSet] = useState(false)
  const [decrease, setDecrease] = useState(205)
  const ref = useRef()
  const location = useLocation()

  function clickHandle(e) {
    props.hand(e, props.info)
    isClickedSet(!isClicked)
  }

  useEffect(() => {
    let calc = parseFloat(
      204 -
        parseFloat(props.trackData.currentTime / props.trackData.duration) * 194
    )
    setDecrease(calc)
  }, [props.trackData.currentTime, props.trackData.duration])

  function start() {
    if (props.isPlaying && props.trackData.songName === props.info.title) {
      props.changePlay(!props.isPlaying)
      return
    }

    props.startTrack({
      listName: props.listType,
      songIndex: props.number,
      songName: props.info.title,
      songArtist: props.info.subtitle,
      songSrc: props.info.src,
      coverSrc: props.info.images.coverart,
      videoSrc: props.info.videoSrc,
      isChartsPlaying: props.isChartsPlaying ? true : false
    })
  }
  useOnClickOutside(ref, () => isClickedSet(false))
  let img = location === '/Charts' ? styles.imgCharts : styles.img
  let card = location === '/Charts' ? styles.cardCharts : styles.card
  let trackInfo =
    location === '/Charts' ? styles.trackInfoCharts : styles.trackInfo
  let additions =
    location === '/Charts' ? styles.additionsCharts : styles.additions
  let musicSvg =
    location === '/Charts' ? styles.musicSvgCharts : styles.musicSvg
  let more = location === '/Charts' ? styles.moreCharts : styles.more

  return (
    <div className={card}>
      <div className={styles.count}>{props.number + 1}</div>
      <div className={styles.imgContainer}>
        <div className={img} onClick={start}>
          <img
            loading="lazy"
            alt={props.info.title}
            src={props.info.images.coverart}
          ></img>

          {props.isPlaying && props.trackData.songName === props.info.title ? (
            <div className={styles.loadingCircleWrapper}>
              <Circle
                style={{ strokeDashoffset: `${decrease}` }}
                className={styles.loadingCircleSvg}
              />
            </div>
          ) : null}

          {location === '/Charts' ? (
            props.isPlaying && props.trackData.songName === props.info.title ? (
              props.trackData.currentTime !== 0 ? (
                <div className={styles.play}>
                  <Pause style={{ marginLeft: '-1px' }} />
                </div>
              ) : null
            ) : (
              <div className={styles.playChart}>
                <Play />
              </div>
            )
          ) : props.isPlaying &&
            props.trackData.songName === props.info.title ? (
            props.trackData.currentTime !== 0 ? (
              <div className={styles.play}>
                <Pause style={{ marginLeft: '-1px' }} />
              </div>
            ) : null
          ) : (
            <div className={styles.play}>
              <Play />
            </div>
          )}
          {props.isPlaying &&
          props.trackData.songName === props.info.title &&
          props.trackData.currentTime === 0 ? (
            <span className={styles.discWrap}>
              <div className={styles.loadingDisc}></div>
            </span>
          ) : null}
        </div>
        <div>
          <span className={styles.circle}></span>
        </div>
      </div>

      <div
        className={trackInfo}
        style={location === '/' ? { marginLeft: '8px' } : {}}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}
        >
          <NavLink
            to="/"
            style={{ textDecoration: 'none' }}
            className={styles.songName}
          >
            {props.info.title}
          </NavLink>
          {props.isPlaying &&
          props.trackData.songName === props.info.title &&
          props.trackData.currentTime > 0 ? (
            <div className={styles.effect}>
              <ul className={styles.effectUl}>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          ) : null}
        </div>

        <NavLink to="/" className={styles.artist}>
          {props.info.subtitle}
        </NavLink>
      </div>
      <div className={additions}>
        <div
          style={
            location === '/Charts' ? { opacity: '1', flexShrink: '1' } : {}
          }
          className={musicSvg}
        >
          <Music />
        </div>
        <div
          ref={ref}
          className={more}
          onClick={(e) => {
            clickHandle(e)
          }}
        >
          <More />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    trackData: state.trackData,
    isPlaying: state.isPlaying
  }
}

export default connect(mapStateToProps, {
  startTrack,
  increaseTrackIndex,
  decreaseTrackIndex,
  songCurrentTime,
  changePlay
})(SongCard)
