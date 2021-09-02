import React, { useRef } from 'react'
import styles from './index.module.css'
import getRightList from '../../../functions/getList'
import { SearchBox } from '../../../icons'
import LoadMoreButton from '../../buttons/load-more-button'
import useOnClickOutside from '../../../hooks/outSideClick'

const Popup = (props) => {
  const [inputValue, setInputValue] = React.useState('')
  const [songLoadNumber, setSongLoadNumber] = React.useState(3)
  const [artistLoadNumber, setArtistLoadNumber] = React.useState(3)

  const ref = useRef()
  let listNames = [
    'worldTop',
    'turkeyTop',
    'turkeyPop',
    'turkeyRap',
    'turkeyDance',
    'discovery'
  ]
  let list = listNames.map((list) => Object.values(getRightList(list)))

  const onChangeHandler = (event) => {
    setInputValue(event.target.value)
  }
  useOnClickOutside(ref, () => props.clickHandler(false))

  const thereIsNoSearch = (
    <div className={styles.BoxSvg}>
      <div className={styles.after}>
        <div>
          <SearchBox
            style={{
              width: '56px',
              height: 'auto'
            }}
          />
        </div>
        <h2>Henüz Arama Yok</h2>
        <div className={styles.afterSvg}>
          Favori sanatçılarınızı veya şarkılarınızı arayın
        </div>
      </div>
    </div>
  )
  let showSongs = []
  let showArtist = []

  list
    .map((e) =>
      e.filter((e) =>
        e.title.toLowerCase().startsWith(inputValue.toLocaleLowerCase())
      )
    )
    .map((e) => showSongs.push(...e))

  list
    .map((e) =>
      e.filter((e) =>
        e.subtitle.toLowerCase().startsWith(inputValue.toLocaleLowerCase())
      )
    )
    .map((e) => showArtist.push(...e))

  return (
    <div className={styles.popupWrap}>
      <div className={styles.popup} ref={ref}>
        <div className={styles.inputWrap}>
          <input
            placeholder="Müzik ara"
            className={styles.input}
            onChange={onChangeHandler}
            value={inputValue}
          ></input>
          <div
            className={styles.iconCrossWrap}
            onClick={() => props.clickHandler(false)}
          >
            <svg className={styles.iconCross} viewBox="0 0 24 24">
              <g transform="translate(-445.000000, -675.000000)">
                <g transform="translate(442.000000, 672.000000)">
                  <path d="M26.6539846,5.24199511 L24.7581067,3.34513441 C24.2959175,2.8849552 23.5469906,2.8849552 23.0848015,3.34513441 L15,11.4308541 L6.91519855,3.34513441 C6.45300938,2.8849552 5.70408246,2.8849552 5.24189329,3.34513441 L3.34601537,5.24199511 C2.88482878,5.70417946 2.88482878,6.45309857 3.34501279,6.91528291 L11.4308168,15 L3.34601537,23.0847171 C2.88482878,23.5469014 2.88482878,24.2958205 3.34501279,24.7580049 L5.24189329,26.6548656 C5.70408246,27.1150448 6.45300938,27.1150448 6.91519855,26.6548656 L15,18.5691459 L23.0848015,26.6548656 C23.5469906,27.1150448 24.2959175,27.1150448 24.7581067,26.653863 L26.6539846,24.7580049 C27.1151712,24.2958205 27.1151712,23.5469014 26.6549872,23.0847171 L18.5691832,15 L26.6549872,6.91528291 C27.1151712,6.45309857 27.1151712,5.70417946 26.6539846,5.24199511 L26.6539846,5.24199511 Z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>

        {inputValue === '' ? (
          thereIsNoSearch
        ) : (
          <div style={{ paddingTop: '5px' }}>
            <div className={styles.songs}>
              <div className={styles.results}> ŞARKILAR </div>
              <div>
                {showSongs.map((e, i) => {
                  if (i < songLoadNumber)
                    return (
                      <div key={e.title} className={styles.songInfoWrap}>
                        <div className={styles.image}>
                          <img
                            alt="song popup"
                            loading="lazy"
                            src={e.images.coverart}
                            className={styles.imageItem}
                          ></img>
                        </div>
                        <div className={styles.info}>
                          <div className={styles.infoTitle}>{e.title}</div>
                          <div className={styles.infoSubtitle}>
                            {e.subtitle}
                          </div>
                        </div>
                      </div>
                    )
                  else return null
                })}
                <div className={styles.button}>
                  <LoadMoreButton
                    large
                    disabled={
                      showSongs.length - 1 === songLoadNumber ||
                      songLoadNumber > list.length - 1
                    }
                    onClick={() => {
                      if (songLoadNumber + 3 > showSongs.length) {
                        setSongLoadNumber(showSongs.length)
                      } else {
                        setSongLoadNumber(songLoadNumber + 3)
                      }
                    }}
                  >
                    Daha Fazla Göster
                  </LoadMoreButton>
                </div>
              </div>
            </div>
            <div className={styles.artists}>
              <div className={styles.results}> SANATÇILAR </div>
              <div>
                {showArtist.map((e, i) => {
                  if (i < artistLoadNumber)
                    return (
                      <div key={e.title} className={styles.artistInfoWrap}>
                        <div className={styles.artistImageCover}>
                          <img
                            alt="artist search popup"
                            loading="lazy"
                            src={
                              e.images.background
                                ? e.images.background
                                : e.images.coverart
                            }
                            className={styles.artistImage}
                          ></img>
                        </div>

                        <div className={styles.info}>
                          <div className={styles.artistName}>
                            <div> {e.subtitle}</div>
                          </div>
                        </div>
                      </div>
                    )
                  else return null
                })}
                <div className={styles.button}>
                  <LoadMoreButton
                    large
                    disabled={
                      showArtist.length - 1 === artistLoadNumber ||
                      artistLoadNumber > list.length - 1
                    }
                    onClick={() => {
                      if (artistLoadNumber + 3 > showArtist.length) {
                        setArtistLoadNumber(showArtist.length)
                      } else {
                        setArtistLoadNumber(artistLoadNumber + 3)
                      }
                    }}
                  >
                    Daha Fazla Göster
                  </LoadMoreButton>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Popup
