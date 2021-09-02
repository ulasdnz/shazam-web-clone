import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'
import HomeSong from '../../../components/carousel/home-song'
import HomeProfile from '../../../components/carousel/home-profile'
import profiles from '../../../components/cards/profile-cards/data'
import Popup from '../../../components/cards/song-card/popup'
import { Arrow } from '../../../icons'

const Discovery = () => {
  const [isClicked, isClickedSet] = useState(false)
  const [positionX, positionXSet] = useState(false)
  const [positionY, positionYSet] = useState(false)
  const [info, infoSet] = useState({})
  const pf = Object.values(profiles)

  function clickHandle(e, info) {
    infoSet(info)
    positionXSet(e.pageX)
    positionYSet(e.pageY)
    isClickedSet(!isClicked)
  }

  return (
    <div className={styles.home}>
      <div className={styles.artistShowcase}>
        <NavLink to="/" className={styles.artistShowcaseItem}>
          <img
            className={styles.showImg}
            alt="artist showcase"
            loading="lazy"
            src="https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/45/c7/22/45c722c2-fe76-5240-288d-d14dd7a97071/pr_source.png/800x800cc.jpg"
          ></img>
        </NavLink>
        <NavLink to="/" className={styles.artistShowcaseItem}>
          <img
            className={styles.showImg}
            alt="artist showcase"
            loading="lazy"
            src="https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/4e/d3/e4/4ed3e4f2-9927-4fcb-fa19-f2dd7be21945/pr_source.png/800x800cc.jpg"
          ></img>
        </NavLink>
        <NavLink to="/" className={styles.artistShowcaseItem}>
          <img
            className={styles.showImg}
            alt="artist showcase"
            src="https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/15/12/64/151264d1-22ae-96ea-868a-efc61e1ab159/859748523063_cover.jpg/400x400cc.jpg"
            loading="lazy"
          ></img>
        </NavLink>
      </div>

      <div className={styles.head}>
        <h2>DISCOVERY TÜRKIYE</h2>
        <h1>Yeni parlayan sanatçılardan yükselen şarkılar</h1>
        <p>Geleceğin bu hit şarkılarını ilk dinleyen sen ol</p>
      </div>

      <div className={styles.caption}>
        <h2> Discovery Türkiye Şarkıları</h2>
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
      <div className={styles.songs}>
      <HomeSong listType="turkeyTop" hand={clickHandle} />
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
        <h2>Öne Çıkan Keşfedilen Sanatçılar</h2>
      </div>
      <HomeProfile profiles={pf} />
    </div>
  )
}

export default Discovery
