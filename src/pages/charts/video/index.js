import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import styles from './styles.module.css'
import {changePlay} from "../../../actions"
import getRightList from '../../../functions/getList'
import { Music, Mute } from '../../../icons/index'
import useWindowSize from "../../../hooks/useWindowSize"

const Video = ({changePlay}) => {
  const [count, SetCount] = useState(0)
  const [countPopup, SetCountPopup] = useState()
  const [videoShow, videoShowSet] = useState(false)
  const [currentSong, setCurrentSong] = useState('')

  const ref = useRef()
  const list = Object.values(getRightList('videos'))
  const size = useWindowSize()

  useEffect(() => {
    const timer = () =>
      setTimeout(() => {
        if (count === 19) SetCount(0)
        else SetCount(count + 1)
      }, 5000)
    const timerId = timer()

    return () => {
      clearTimeout(timerId)
    }
  }, [count])

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('ended', () => {
        if (countPopup === list.length - 1) {
          setCurrentSong(list[0].videoSrc)
        } else {
          setCurrentSong(list[countPopup + 1].videoSrc)
        }
        SetCountPopup(countPopup + 1)
      })
    }
  })

  function showVideoPopup() {
    changePlay(false)
    videoShowSet(true)
    setCurrentSong(list[count].videoSrc)
    SetCountPopup(count)
  }
  
  const handleClick = (e) => {
    if(size.width/2 <= e.clientX ){
     if(countPopup !== list.length - 1){
      setCurrentSong(list[countPopup + 1].videoSrc)
      SetCountPopup(countPopup + 1)
     }else{
      setCurrentSong(list[0].videoSrc)
      SetCountPopup(0)
     }
    }else{
      if(countPopup !== 0 ){
        setCurrentSong(list[countPopup - 1].videoSrc)
      SetCountPopup(countPopup - 1)
      }else{
        setCurrentSong(list[list.length - 1].videoSrc)
        SetCountPopup(list.length - 1)
      }
    }
  }

  return (
    <>
      <div className={styles.content}>
        <div className={styles.wrap} onClick={showVideoPopup}>
          <video
            key={count}
            className={styles.video}
            controls
            autoPlay
            loop
            muted
          >
            <source src={list[count].videoSrc} type="video/mp4"></source>
          </video>
          <div className={styles.muteIcon}>
            <Mute className={styles.mute} />
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomContent}>
              <div>
                <div className={styles.caption}>
                  Top 200 listesinde
                  <strong>
                    <span> NO. {count + 1} </span>
                  </strong>
                </div>
                <div className={styles.title}>{list[count].title}</div>
                <div className={styles.subtitle}>{list[count].subtitle}</div>
                <div className={styles.musicSvgWrap}>
                  <Music className={styles.musicSvg} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {videoShow ? (
        <div>
          <div className={styles.titlebar}>
            <ul>
              {list.map((e, i) => (
                <li key={i*999}>
                  <span
                    className={
                      i === countPopup
                        ? styles.nowPlaying
                        : i < countPopup
                        ? styles.filled
                        : {}
                    }
                  ></span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.popupInfo}>
            <div className={styles.caption} style={{ fontSize: '14px' }}>
              Top 200 listesinde
              <strong>
                <span> No. {countPopup + 1} </span>
              </strong>
            </div>
            <div className={styles.title}>{list[countPopup].title}</div>
            <div className={styles.subtitle}>{list[countPopup].subtitle}</div>
          </div>

          <div
            className={styles.crossIcon}
            onClick={() => {
              videoShowSet(false)
              SetCount(countPopup)
            }}
          >
            <svg className={styles.crossSvg} viewBox="0 0 24 24">
              <g id="Page-1" stroke="none" strokeWidth="1">
                <g
                  id="First-Highlight"
                  transform="translate(-674.000000, -82.000000)"
                >
                  <g id="Cancel" transform="translate(652.000000, 60.000000)">
                    <path
                      d="M39.4369518,33.9997997 L44.8708425,39.4336904 C46.3737825,40.9366304 46.371998,43.3751621 44.8736802,44.8734799 C43.3723074,46.3748527 40.9398898,46.3766413 39.4436786,44.8804301 L34,39.4367515 L28.5661093,44.8706422 C27.0631693,46.3735822 24.6246376,46.3717977 23.1263198,44.8734799 C21.624947,43.3721071 21.623676,40.9391719 23.1291575,39.4336904 L28.5630482,33.9997997 L23.1226649,28.5594164 C21.6233107,27.0600622 21.628002,24.6244373 23.1263198,23.1261195 C24.6276926,21.6247467 27.0606278,21.6234757 28.5661093,23.1289572 L34,28.5628479 L39.4338907,23.1289572 C40.9368307,21.6260172 43.3753624,21.6278017 44.8736802,23.1261195 C46.375053,24.6274923 46.376324,27.0604275 44.8708425,28.565909 L39.4369518,33.9997997 Z"
                      id="Mask"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <video
            onClick={e=>handleClick(e)}
            ref={ref}
            key={countPopup * 123}
            className={styles.videoPopup}
            controls={false}
            autoPlay
            loop={false}
            muted={false}
          >
            <source src={currentSong} type="video/mp4"></source>
          </video>
          <div className={styles.popupMusicSvgWrap}>
            <Music className={styles.popupMusicSvg} />
            'DA IZLE
          </div>
        </div>
      ) : null}
    </>
  )
}

export default connect(null,{changePlay})(Video)
