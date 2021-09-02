import {
  PLAYPAUSE,
  CURRENTTIME,
  CHANGETRACK,
  STARTTRACK,
  CHARTINFO,
  VIDEOMUTED,
  VIDEOHEIGHT,
  DURATION
} from '../actions/index'

const INITIAL_STATE = {
  trackData: {
    listName: '',
    songIndex: 0,
    songName: '',
    songArtist: '',
    songSrc: '',
    coverSrc: '',
    videoSrc: '',
    currentTime: 0,
    duration: 0,
    isChartsPlaying: false,
    chartInfo: {
      listName: '',
      coverSrc: '',
      videoSrc: '',
      songSrc: ''
    }
  },
  isPlaying: false,
  showPlayer: false,
  isVideoMuted: true,
  videoHeight: 0
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAYPAUSE:
      return {
        ...state,
        isPlaying: action.payload
      }
    case VIDEOMUTED:
      return {
        ...state,
        isVideoMuted: action.payload
      }
    case VIDEOHEIGHT:
      return {
        ...state,
        videoHeight: action.payload
      }
    case CURRENTTIME:
      return {
        ...state,
        trackData: {
          ...state.trackData,
          currentTime: action.payload
        }
      }
    case DURATION:
      return {
        ...state,
        trackData: {
          ...state.trackData,
          duration: action.payload
        }
      }
    case CHANGETRACK:
      return {
        ...state,
        trackData: {
          ...state.trackData,
          listName: action.payload.listName,
          songIndex: action.payload.songIndex,
          songName: action.payload.songName,
          songArtist: action.payload.songArtist,
          songSrc: action.payload.songSrc,
          coverSrc: action.payload.coverSrc,
          videoSrc: action.payload.videoSrc
        }
      }
    case CHARTINFO:
      return {
        ...state,
        trackData: {
          ...state.trackData,
          chartInfo: {
            listName: action.payload ? action.payload.listName : '',
            coverSrc: action.payload ? action.payload.coverSrc : '',
            videoSrc: action.payload ? action.payload.videoSrc : '',
            songSrc: action.payload ? action.payload.songSrc : ''
          }
        }
      }
    case STARTTRACK:
      return {
        ...state,
        showPlayer: true,
        isPlaying: true,
        trackData: {
          ...state.trackData,
          listName: action.payload.listName,
          songIndex: action.payload.songIndex,
          songName: action.payload.songName,
          songArtist: action.payload.songArtist,
          songSrc: action.payload.songSrc,
          coverSrc: action.payload.coverSrc,
          videoSrc: action.payload.videoSrc ? action.payload.videoSrc : '',
          isChartsPlaying: action.payload.isChartsPlaying ? true : false
        }
      }
    default:
      return state
  }
}
