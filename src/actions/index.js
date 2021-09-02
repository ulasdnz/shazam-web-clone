import { PLAYLIST } from '../data/playlist'
export const PLAYPAUSE = 'PLAYPAUSE'
export const CHANGETRACK = 'CHANGETRACK'
export const STARTTRACK = 'STARTTRACK'
export const CHARTINFO = 'CHARTINFO'
export const VIDEOMUTED = 'VIDEOMUTED'
export const VIDEOHEIGHT = 'VIDEOHEIGHT'
export const CURRENTTIME = 'CURRENTTIME'
export const DURATION = 'DURATION'

export const increaseTrackIndex = (trackInfo) => {
  let LIST = []
  switch (trackInfo.listName) {
    case 'worldTop':
      LIST = PLAYLIST.worldTop
      break
    case 'turkeyTop':
      LIST = PLAYLIST.turkeyTop
      break
    case 'turkeyPop':
      LIST = PLAYLIST.turkeyPop
      break
    case 'turkeyRap':
      LIST = PLAYLIST.turkeyRap
      break
    case 'turkeyDance':
      LIST = PLAYLIST.turkeyDance
      break
    case 'discovery':
      LIST = PLAYLIST.discovery
      break
    default:
      break
  }

  return {
    type: CHANGETRACK,
    payload: {
      listName: trackInfo.listName,
      songIndex: trackInfo.songIndex + 1,
      songName: LIST[trackInfo.songIndex + 1]
        ? LIST[trackInfo.songIndex + 1].title
        : null,
      songArtist: LIST[trackInfo.songIndex]
        ? LIST[trackInfo.songIndex + 1].subtitle
        : null,
      songSrc: LIST[trackInfo.songIndex]
        ? LIST[trackInfo.songIndex + 1].src
        : null,
      coverSrc: LIST[trackInfo.songIndex]
        ? LIST[trackInfo.songIndex + 1]?.images.coverart
        : null,
      videoSrc: LIST[trackInfo.songIndex + 1]
        ? LIST[trackInfo.songIndex + 1].videoSrc
          ? LIST[trackInfo.songIndex + 1].videoSrc
          : ''
        : ''
    }
  }
}

export const decreaseTrackIndex = (trackInfo) => {
  let LIST = []
  switch (trackInfo.listName) {
    case 'worldTop':
      LIST = PLAYLIST.worldTop
      break
    case 'turkeyTop':
      LIST = PLAYLIST.turkeyTop
      break
    case 'turkeyPop':
      LIST = PLAYLIST.turkeyPop
      break
    case 'turkeyRap':
      LIST = PLAYLIST.turkeyRap
      break
    case 'turkeyDance':
      LIST = PLAYLIST.turkeyDance
      break
    case 'discovery':
      LIST = PLAYLIST.discovery
      break
    default:
      break
  }

  return {
    type: CHANGETRACK,
    payload: {
      listName: trackInfo.listName,
      songIndex: trackInfo.songIndex - 1,
      songName: LIST[trackInfo.songIndex - 1]
        ? LIST[trackInfo.songIndex - 1].title
        : '',
      songArtist: LIST[trackInfo.songIndex - 1]
        ? LIST[trackInfo.songIndex - 1].subtitle
        : '',
      songSrc: LIST[trackInfo.songIndex - 1]
        ? LIST[trackInfo.songIndex - 1].src
        : '',
      coverSrc: LIST[trackInfo.songIndex - 1]
        ? LIST[trackInfo.songIndex - 1].images.coverart
        : '',
      videoSrc: LIST[trackInfo.songIndex - 1]
        ? LIST[trackInfo.songIndex - 1].videoSrc
          ? LIST[trackInfo.songIndex - 1].videoSrc
          : ''
        : ''
    }
  }
}

export const changePlay = (trackInfo) => {
  return { type: PLAYPAUSE, payload: trackInfo }
}

export const startTrack = (trackInfo) => {
  return { type: STARTTRACK, payload: trackInfo }
}

export const chartInfo = (trackInfo) => {
  return { type: CHARTINFO, payload: trackInfo }
}

export const videoHeight = (trackInfo) => {
  return { type: VIDEOHEIGHT, payload: trackInfo }
}

export const songCurrentTime = (trackInfo) => {
  return { type: CURRENTTIME, payload: trackInfo }
}

export const songDuration = (trackInfo) => {
  return { type: DURATION, payload: trackInfo }
}
