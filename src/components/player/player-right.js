import { useState, useEffect } from 'react'
import VolumeSlider from './volume-range/volume-slider'
import VolumeButton from '../buttons/volume-button'
import styles from './player-right.module.css'
import * as Icons from '../../icons'

function PlayerRight({ volume, setVolume }) {
  const [isClicked, isClickedSet] = useState(false)
  const [icon, iconSet] = useState(
    <VolumeButton
      icon={<Icons.VolumeHigh onClick={() => isClickedSet(true)} />}
      volume
    />
  )

  const hand = () => isClickedSet(false)

  useEffect(() => {
    if (localStorage.getItem('Volume'))
      var volume = parseFloat(localStorage.getItem('Volume'), 10)
    if (volume === 0)
      iconSet(
        <VolumeButton
          type={'volume'}
          icon={<Icons.Mute onClick={() => isClickedSet(true)} />}
          volume
        />
      )
    else if (volume <= 1 / 3) {
      iconSet(
        <VolumeButton
          icon={<Icons.VolumeLow onClick={() => isClickedSet(true)} />}
          volume
        />
      )
    } else {
      volume <= 2 / 3
        ? iconSet(
            <VolumeButton
              icon={<Icons.VolumeMid onClick={() => isClickedSet(true)} />}
              volume
            />
          )
        : iconSet(
            <VolumeButton
              icon={<Icons.VolumeHigh onClick={() => isClickedSet(true)} />}
              volume
            />
          )
    }
  }, [volume])

  return (
    <div className={styles.playerRight}>
      <div className={styles.soundBar}>
        {isClicked ? (
          <VolumeSlider
            minvalue={0}
            maxvalue={1}
            volume={volume}
            handleChange={setVolume}
            hand={hand}
          />
        ) : (
          <div tabIndex="0" role="button">
            {volume === 0 ? (
              <VolumeButton
                type={'volume'}
                icon={<Icons.Mute onClick={() => isClickedSet(true)} />}
              />
            ) : (
              icon
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default PlayerRight
