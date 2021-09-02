import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'
import HomeSong from '../../../../components/carousel/home-song'
import HomeProfile from '../../../../components/carousel/home-profile'
import profiles from '../../../../components/cards/profile-cards/data'
import Popup from '../../../../components/cards/song-card/popup'
import { Arrow } from '../../../../icons'

const Carousel = () => {
  const [isClicked, isClickedSet] = useState(false)
  const [positionX, positionXSet] = useState(false)
  const [positionY, positionYSet] = useState(false)
  const [info, infoSet] = useState({})
  const pf = Object.values(profiles)

  function clickHandle(e, info) {
    infoSet(info)
    positionXSet(e.pageX)
    positionYSet(e.pageY)
    if (window.pageYOffset + 286 > e.pageX) {
    }
    isClickedSet(!isClicked)
  }

  return (
    <div className={styles.home}>
      <div className={styles.caption}>
        <h2> Dünya İlk 200 Listesi</h2>
        <NavLink to="/" className={styles.showAll}>
          TÜMÜNÜ GÖR
          <Arrow
            style={{
              width: '11px',
              height: 'auto',
              marginLeft: '5px',
              color: '#08f'
            }}
          ></Arrow>
        </NavLink>
      </div>
      <div className={styles.songs} >
      <HomeSong listType="worldTop" hand={clickHandle} />
      </div>
      {isClicked && (
        <Popup
          info={info}
          isClickedSet={isClickedSet}
          positionX={positionX}
          positionY={positionY}
          tweakPosition={{
            Popup: {
              Y: -312,
              X: 25
            },
            Arrow: {
              Y: -65,
              X: 13
            }
          }}
        />
      )}

      <div className={styles.captionSecond}>
        <h2>Öne Çıkan En İyi Sanatçılar</h2>
      </div>
      <div className={styles.profiles}>
        <HomeProfile profiles={pf} />
      </div>
    </div>
  )
}

export default Carousel
