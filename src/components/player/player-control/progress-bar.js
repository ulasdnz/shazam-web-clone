import styles from './progress-bar.module.css'
import convertTime from '../../../functions/convertTime'
import RangeSlider from '../range/range-slider'

function ProgressBar(props) {
  return (
    <div className={styles.progress}>
      <span className={styles.current}>{convertTime(props.currentTime)}</span>
      <RangeSlider
        value={props.currentTime}
        minvalue={0}
        maxvalue={props.duration}
        handleChange={props.handleTrackClick}
      />
      <span className={styles.currentTimeSecond}>
        {convertTime(props.duration)}
      </span>
    </div>
  )
}

export default ProgressBar
