import React, { useRef } from 'react'
import styles from './styles.module.css'
import useOnClickOutside from '../../../../hooks/outSideClick'
import {
  Music,
  ShazamLogo,
  MusicAm,
  Person,
  ShareArrow
} from '../../../../icons/index'

const Popup = ({ info, positionX, positionY, isClickedSet, tweakPosition }) => {
  const ref = useRef()
  useOnClickOutside(ref, () => isClickedSet(false))

  const change = ( <div ref={ref}>
    <article>
      <div className={styles.PopFirst}>
        <div className={styles.popupImage}>
          <img
            className={styles.PopImg}
            alt="Popup"
            src={info.images.coverart}
          ></img>
        </div>

        <div className={styles.details}>
          <h2 className={styles.popSong}>{info.title} </h2>
          <h2 className={styles.popArtist}> {info.subtitle} </h2>
          <p className={styles.popSpan}>
            <ShazamLogo style={{ color: '#eee' }} />
            3.9M Shazam
          </p>
        </div>
      </div>

      <div className={styles.popSecond}>
        <div className={styles.popSecondItem}>
          <MusicAm />
          <div style={{ display: 'inline' }}>
            Şunda aç:
            <Music className={styles.popmusic} />
          </div>
        </div>
        <div className={styles.popSecondItem}>
          <ShareArrow style={{ marginTop: '0px' }} />
          <div style={{ display: 'inline' }}>Paylaş</div>
        </div>
        <div className={styles.popSecondItem}>
          <MusicAm />
          <div style={{ display: 'inline' }}>Şarkıya Git</div>
        </div>
        <div className={styles.popSecondItem}>
          <Person />
          <div style={{ display: 'inline' }}>Sanatçıya Git:</div>
        </div>
      </div>
    </article>
  </div>
)

  return (
    <div>
 <div
        className={styles.popup}
        style={{
          opacity: '1',
          top: `${positionY + tweakPosition.Popup.Y}px`,
          left: `${positionX + tweakPosition.Popup.X}px`
        }}
      >
       {change}
      </div>
      <span
        className={styles.arrow}
        style={{
          opacity: '1',
          top: `${positionY + tweakPosition.Arrow.Y}px`,
          left: `${positionX + tweakPosition.Arrow.X}px`
        }}
      ></span>


<div className={styles.responsivePopupWrap}>
    <div className={styles.responsivePopup}>
    {change}
    </div>
  </div>
    </div>
  )
}

export default Popup
