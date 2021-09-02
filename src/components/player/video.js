import React, { forwardRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styles from './video.module.css'
import { changePlay, startTrack } from '../../actions'
import { usePalette } from 'react-palette'
import getRightList from '../../functions/getList'
import { Play, Pause, PlayerMusic } from '../../icons'

const Video = forwardRef(
  (
    {
      trackData,
      handleDuration,
      isChartsPlaying,
      songDuration,
      isPlaying,
      handleCurrentTime,
      startTrack,
      changePlay,
      showPlayer
    },
    ref
  ) => {
    const [song, songSet] = useState({})
    var { data } = usePalette(song.coverSrc)
    let LIST = getRightList(song.listName)
    const [vid, setVid] = useState()

    useEffect(() => {
      if (trackData.videoSrc && isPlaying && isChartsPlaying)
        setVid(<Pause className={styles.VideotitleSvg}></Pause>)
      else if (trackData.videoSrc && !isPlaying && isChartsPlaying)
        setVid(<Play className={styles.VideotitleSvg}></Play>)
      else if (!trackData.videoSrc && isPlaying && isChartsPlaying)
        setVid(<Pause className={styles.AudiotitleSvg}></Pause>)
      else if (!trackData.videoSrc && !isPlaying)
        setVid(<Play className={styles.AudiotitleSvg}></Play>)
      else setVid(<Play className={styles.AudiotitleSvg}></Play>)
    }, [isPlaying, isChartsPlaying, trackData])

    useEffect(() => {
      if (trackData.coverSrc && trackData.isChartsPlaying) {
        songSet(trackData)
      } else if (trackData.chartInfo.listName) {
        let LIST = Object.values(getRightList(trackData.chartInfo.listName))
        songSet({
          listName: trackData.chartInfo.listName,
          songIndex: 0,
          songName: LIST[0].title,
          songArtist: LIST[0].subtitle,
          songSrc: LIST[0].src,
          coverSrc: LIST[0].images.coverart,
          videoSrc: LIST[0].videoSrc
        })
      }
    }, [trackData])

    useEffect(() => {
      if (!song.songSrc) {
        if (trackData.coverSrc && trackData.isChartsPlaying) {
          songSet(trackData)
        } else if (trackData.chartInfo.listName) {
          let LIST = Object.values(getRightList(trackData.chartInfo.listName))
          let temp = {
            listName: trackData.chartInfo.listName,
            songIndex: 0,
            songName: LIST[0].title,
            songArtist: LIST[0].subtitle,
            songSrc: LIST[0].src,
            coverSrc: LIST[0].images.coverart,
            videoSrc: LIST[0].videoSrc,
            isChartsPlaying: trackData.isChartsPlaying ? false : true
          }
          songSet(temp)
        }
      }
    }, [trackData, changePlay, song.songSrc])

    function start() {
      startTrack({
        listName: song.listName,
        songIndex: 0,
        songName: LIST[0].title,
        songArtist: LIST[0].subtitle,
        songSrc: LIST[0].src,
        coverSrc: LIST[0].images.coverart,
        videoSrc: LIST[0].videoSrc ? LIST[0].videoSrc : '',
        isChartsPlaying: true
      })
      changePlay(true)
    }

    return (
      <div
        onClick={() => (isChartsPlaying ? changePlay(!isPlaying) : start())}
        className={styles.vid}
        style={song.videoSrc ? {} : { backgroundColor: `${data.darkVibrant}` }}
      >
        <video
          style={{ width: '738px' }}
          muted={!trackData.isChartsPlaying}
          key={song.songSrc}
          autoPlay
          ref={ref}
          onLoadedMetadata={(e) => {
            handleDuration(e.target.duration)
            songDuration(e.target.duration)
          }}
          onTimeUpdate={(e) => handleCurrentTime(e.target.currentTime)}
          className={styles.video}
        >
          <source
            src={song.videoSrc ? song.videoSrc : song.songSrc}
            type="video/mp4"
          />
        </video>
        <img
          alt="audio cover"
          style={song.videoSrc ? { display: 'none' } : {}}
          className={styles.imgSrc}
          src={song.coverSrc}
        ></img>

        <div
          className={
            song.videoSrc === ''
              ? styles.playButton
              : showPlayer
              ? styles.playButtonVid
              : styles.playButton
          }
        >
          {vid}
        </div>
        <div className={styles.subText}>
          <div className={styles.number}>
            {song.listName} listesinde
            <strong>No. {song.songIndex === 0 ? 1 : song.songIndex}</strong>
          </div>
          <div className={styles.songName}>{song.songName}</div>
          <div className={styles.artists}>{song.songArtist}</div>
        </div>
        {song.videoSrc === '' ? (
          <div className={styles.watchOn}>
            Şurada Dinle:
            <PlayerMusic className={styles.musicSvgListen} />
          </div>
        ) : (
          <div className={styles.listenOn}>
            <PlayerMusic className={styles.musicSvg} />
            'da izle
          </div>
        )}
      </div>
    )
  }
)

const mapStateToProps = (state) => {
  return {
    isChartsPlaying: state.trackData.isChartsPlaying
  }
}
export default connect(mapStateToProps, { changePlay, startTrack }, null, {
  forwardRef: true
})(Video)
