import { useEffect, useRef, useState, useLayoutEffect } from 'react'
import styles from './volume-slider.module.css'
import VolumeButton from '../../buttons/volume-button'
import * as Icons from '../../../icons'

function RangeSlider({ volume, minvalue, maxvalue, handleChange, hand }) {
  const inputRef = useRef(null)
  const inputRefWidth = useRef(null)
  const [value, setValue] = useState()
  const [icon, iconSet] = useState(<VolumeButton icon={<Icons.VolumeHigh />} />)

  function volumeIconSet(value) {
    if (value === 0)
      iconSet(<VolumeButton type={'volume'} icon={<Icons.Mute />} />)
    else if (value <= 1 / 3) {
      iconSet(<VolumeButton icon={<Icons.VolumeLow />} />)
    } else {
      value <= 2 / 3
        ? iconSet(<VolumeButton icon={<Icons.VolumeMid />} />)
        : iconSet(<VolumeButton icon={<Icons.VolumeHigh />} />)
    }
  }

  useLayoutEffect(() => volumeIconSet(volume), [volume])
  useEffect(
    () => volumeIconSet(parseFloat(localStorage.getItem('Volume'), 10)),
    []
  )

  useEffect(() => {
    const inputWidth = window.getComputedStyle(inputRef.current).width
    inputRefWidth.current = parseInt(inputWidth.replace('px', ''))
  })

  const handleInputChange = (e) => {
    volumeIconSet(e.target.value)
    localStorage.setItem('Volume', e.target.value)
    handleChange(parseFloat(e.target.value))
  }

  useEffect(() => setValue(volume), [volume, maxvalue])

  return (
    <div className={styles.volumeWrap}>
      <div className={styles.progressBar}>
        <input
          ref={inputRef}
          type="range"
          onInput={handleInputChange}
          className={styles.slider}
          min={minvalue}
          max={maxvalue}
          step="0.01"
          value={volume}
        />
        <span
          className={styles.thumb}
          style={{ left: `${value * inputRefWidth.current + 3}px` }}
        ></span>
      </div>
      <div className={styles.icon} onClick={hand}>
        {icon}
      </div>
    </div>
  )
}

export default RangeSlider
