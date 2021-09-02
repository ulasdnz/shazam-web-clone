import { PLAYLIST } from '../data/playlist'

const getRightList = (listName) => {
  let LIST = []
  switch (listName) {
    case 'worldTop':
      LIST = PLAYLIST.worldTop
      break
    case 'turkeyTop':
      LIST = PLAYLIST.turkeyTop
      break
      case 'videos':
      LIST = PLAYLIST.videos
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
  return LIST
}

export default getRightList
