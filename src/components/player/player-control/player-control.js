import { connect } from 'react-redux'
import { increaseTrackIndex, decreaseTrackIndex } from '../../../actions'
import * as Icons from '../../../icons'
import PlayButton from '../../buttons/play-button'
import getRightList from '../../../functions/getList'
import styles from './player-control.module.css'

function PlayerControl(props) {
  let LIST = getRightList(props.trackData.listName)

  function decreaseIndex() {
    props.decreaseTrackIndex({
      listName: props.trackData.listName,
      songIndex: props.trackData.songIndex
    })
  }
  function increaseIndex() {
    props.increaseTrackIndex({
      listName: props.trackData.listName,
      songIndex: props.trackData.songIndex
    })
  }

  return (
    <div className={styles.playerControl}>
      <button
        className={styles.button}
        onClick={decreaseIndex}
        disabled={props.trackData.songIndex === 0}
      >
        <Icons.Previous />
      </button>
      <PlayButton isthisplay={true} />
      <button
        className={styles.button}
        onClick={increaseIndex}
        disabled={LIST.length - 1 === props.trackData.songIndex}
      >
        <Icons.Next className={styles.next} />
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    trackData: state.trackData
  }
}

export default connect(mapStateToProps, {
  increaseTrackIndex,
  decreaseTrackIndex
})(PlayerControl)
