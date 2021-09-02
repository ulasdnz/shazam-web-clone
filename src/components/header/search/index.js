import React, { useRef } from 'react'
import styles from './styles.module.css'
import { IconSearch, SearchBox } from '../../../icons/index'
import useOnClickOutside from '../../../hooks/outSideClick'
import getRightList from '../../../functions/getList'
import LoadMoreButton from '../../buttons/load-more-button'

const Search = (props) => {
  const [inputValue, setInputValue] = React.useState('')
  const [isClicked, isClickedSet] = React.useState(false)
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
  const style = {
    width: '56px',
    height: 'auto'
  }

  let src = props.scrolled ? { color: '#08f', fill: 'red' } : { color: 'white' }
  let inputstyle = props.scrolled ? styles.scrolled : styles.search

  useOnClickOutside(ref, () => isClickedSet(false))

  const thereIsNoSearch = (
    <div className={styles.BoxSvg}>
      <div className={styles.after}>
        <div>
          <SearchBox style={style} />
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
    <>
      <input
        type="text"
        name="name"
        onChange={onChangeHandler}
        value={inputValue}
        className={inputstyle}
        onClick={() => isClickedSet(!isClicked)}
        placeholder="Müzik ara"
        style={{ inputstyle }}
      />
      <IconSearch className={styles.svg} style={src} />

      {isClicked && (
        <div className={styles.searchBox} ref={ref}>
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
      )}
    </>
  )
}

export default Search
