import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import styles from './styles.module.css'
import { IconSearch, Arrow, Play, Pause } from '../../../icons'
import useOnClickOutside from '../../../hooks/outSideClick'
import Scroll from '../../../hooks/scroll'
import { Countries } from '../../../data/playlist'
import { Cities } from '../../../data/playlist'
import { Genre } from '../../../data/playlist'
import { startTrack, changePlay } from '../../../actions'
import { usePalette } from 'react-palette'

const ChartHeader = ({ list, trackData, changePlay, showPlayer, startTrack, setter, isPlaying }, props) => {
  const [SearchCountry, SetSearchCountry] = useState('')
  const [SearchCity, SetSearchCity] = useState('')
  const [selectedMenu, selectedMenuSet] = useState('Türkiye')
  const [selectedNav, selectedNavSet] = useState('Top 200')
  const [showMenu, showMenuSet] = useState(false)
  const [showCities, showCitiesSet] = useState(false)
  const [showGenre, showGenreSet] = useState(false)

  const menuRef = useRef()
  const cityRef = useRef()
  const genreRef = useRef()
  var { data } = usePalette(list[0].images.coverart)

  useOnClickOutside(menuRef, () => showMenuSet(false))
  useOnClickOutside(cityRef, () => showCitiesSet(false))
  useOnClickOutside(genreRef, () => showGenreSet(false))

  useEffect(() => {
    setter(selectedNav)
  }, [selectedNav,setter])

  useEffect(() => {
    if (selectedMenu !== 'Türkiye') {
      selectedNavSet(selectedMenu)
    }
  }, [selectedMenu])

  let genreStyle
  if (
    selectedNav === 'Pop' ||
    selectedNav === 'Hip-Hop/Rap' ||
    selectedNav === 'Dance'
  ) {
    genreStyle = { backgroundColor: 'white', color: '#242424' }
  }

  function start() {
    startTrack({
      listName: getListName(selectedNav),
      songIndex: 0,
      songName: list[0].title,
      songArtist: list[0].subtitle,
      songSrc: list[0].src,
      coverSrc: list[0].images.coverart,
      videoSrc: list[0].videoSrc ? list[0].videoSrc : '',
      isChartsPlaying: true
    })
  }
  function ps() {
    changePlay(!isPlaying)
  }
  let sty = Scroll() > 20 ? { backgroundColor: 'white', color: 'black' } : {}
  let styMenu =
    Scroll() > 20
      ? {
          backgroundColor: '#f8f8f8',
          color: 'black',
          border: '1px solid #e4e4e4'
        }
      : {}

  return (
    <div
      className={styles.chartHeader}
      style={{ backgroundColor: data.darkVibrant }}
    >
      <div className={styles.countryMenu}>
        <select className={styles.countryButton}></select>
        <Arrow
          className={styles.countryArrow}
          onClick={() => {
            showMenuSet(!showMenu)
          }}
        />

        <div className={styles.menuActor}>
          <div
            className={styles.menuActor}
            onClick={() => {
              showMenuSet(showMenu === 'none' ? 'block' : 'none')
            }}
          >
            {selectedMenu}
          </div>
          {showMenu ? (
            <div ref={menuRef} className={styles.menuWrapper}>
              <form>
                <input
                  type="text"
                  className={styles.menuText}
                  placeholder="Ülke Ara"
                  autoFocus={true}
                  onChange={(e) => SetSearchCountry(e.target.value)}
                  value={SearchCountry}
                ></input>
                <IconSearch className={styles.menuSvg}></IconSearch>
              </form>
              <div className={styles.actorOptions}>
                {Countries.filter((e) =>
                  e
                    .toLocaleLowerCase()
                    .startsWith(SearchCountry.toLocaleLowerCase())
                ).map((e) => (
                  <div
                    key={e}
                    onClick={() => {
                      selectedMenuSet(e)
                      showMenuSet(!showMenu)
                    }}
                  >
                    {e}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div style={sty} className={styles.countryMenuSmallWrap}>
        <select
          onChange={(e) => selectedNavSet(e.target.value)}
          className={styles.countryMenuSmall}
          style={styMenu}
          defaultValue="Türkiye"
        >
          {Countries.map((e, i) => (
            <option  value={e} key={i * 999}>
              {e}
            </option>
          ))}
        </select>
        <Arrow className={styles.selectSvg} style={sty} />
      </div>

      <div className={styles.content}>
        <ul className={styles.rotate}>
          <li className={styles.track}>
            <img
              alt="more charts"
              className={styles.img}
              src={list[0].images.coverart}
            ></img>
          </li>
          <li className={styles.track}>
            <img
              alt="more charts"
              className={styles.img}
              src={list[1].images.coverart}
            ></img>
          </li>
          <li className={styles.track}>
            <img
              alt="more charts"
              className={styles.img}
              src={list[2].images.coverart}
            ></img>
          </li>
        </ul>
      </div>

      <div className={styles.chartTitle}>
        <div
          className={styles.playButton}
          onClick={showPlayer ? ps : start}
        >
          {trackData.isChartsPlaying ? (
            isPlaying ? (
              <Pause className={styles.titleSvg2}></Pause>
            ) : (
              <Play className={styles.titleSvg} />
            )
          ) : (
            <Play className={styles.titleSvg} />
          )}
        </div>
        <div className={styles.chartSecond}>
          <div>{selectedMenu}</div>
          <h1>{selectedNav}</h1>
         { selectedNav !== 'Discovery'?<h2>
            Bu hafta {selectedNav === 'Top 200' ? 'Türkiye' : selectedNav}'de en
            çok Shazam'lanan parçalar
          </h2>:null}

          {selectedNav === 'Discovery' ? (
            <h2>Bu hafta yükselişte olan sanatçılar ve trend parçaları</h2>
          ) : null}
        </div>
      </div>

      <div className={styles.chartNav}>
        <button
          style={
            selectedNav === 'Top 200'
              ? { backgroundColor: 'white', color: '#242424' }
              : null
          }
          onClick={() => selectedNavSet('Top 200')}
        >
          TOP 200
        </button>
        <button
          style={
            selectedNav === 'Discovery'
              ? { backgroundColor: 'white', color: '#242424' }
              : null
          }
          onClick={() => selectedNavSet('Discovery')}
        >
          DISCOVERY
        </button>
        <button
          className={styles.cities}
          onClick={() => showCitiesSet(!showCities)}
        >
          ŞEHİRLER
          <Arrow className={styles.navArrow}></Arrow>
          {showCities ? (
            <div ref={cityRef} className={styles.menuWrapper}>
              <form>
                <input
                  type="text"
                  className={styles.menuText}
                  placeholder="Ülke Ara"
                  autoFocus={true}
                  onChange={(e) => SetSearchCity(e.target.value)}
                  value={SearchCity}
                ></input>
                <IconSearch className={styles.menuSvg}></IconSearch>
              </form>
              <div className={styles.actorOptions}>
                {Cities.filter((city) =>
                  city
                    .toLocaleLowerCase()
                    .startsWith(SearchCity.toLocaleLowerCase())
                ).map((e) => (
                  <div
                    onClick={() => {
                      selectedNavSet(e)
                      showCitiesSet(!showMenu)
                    }}
                  >
                    {e}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </button>

        <div className={styles.navSmall}>
          <select defaultValue="sehirler" className={styles.citiesSmall}>
            <option value="sehirler" disabled="disabled">
              Şehirler
            </option>
            {Cities.map((e, i) => (
              <option value={e} key={i * 9120}>
                {e}
              </option>
            ))}
          </select>
          <Arrow className={styles.navArr}></Arrow>
        </div>

        <button
          className={styles.genre}
          style={genreStyle}
          onClick={() => showGenreSet(!showGenre)}
        >
          {genreStyle ? selectedNav : 'TARZLAR'}
          <Arrow
            className={styles.navArrow}
            style={genreStyle ? { fill: '#242424' } : null}
          ></Arrow>
          {showGenre ? (
            <div ref={genreRef} className={styles.menuWrapper}>
              <div className={styles.actorOptions}>
                {Genre.map((e) => (
                  <div
                    onClick={() => {
                      selectedNavSet(e)
                      showGenreSet(!showMenu)
                    }}
                  >
                    {e}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </button>

        <div className={styles.navSmall}>
          <select
          defaultValue="genre"
            className={styles.citiesSmall}
            style={genreStyle ? genreStyle : null}
            onChange={(e) => {
              selectedNavSet(e.target.value)
            }}
          >
            <option value="genre" disabled="disabled">
              Tarzlar
            </option>
            {Genre.map((e, i) => (
              <option value={e} key={i * 98120}>
                {e}
              </option>
            ))}
          </select>
          <Arrow
            className={styles.navArr}
            style={genreStyle ? { color: '#242424' } : null}
          ></Arrow>
        </div>

        <div className={styles.downloadCsv}>
          <svg className={styles.csvSvg} viewBox="0 0 24 24">
            <path
              d="M12.012 16.735c.237 0 .45-.07.698-.305l3.763-3.614c.178-.176.284-.364.284-.61 0-.482-.378-.822-.864-.822-.224 0-.461.094-.627.282l-1.657 1.748-.745.798.083-1.655V.915c0-.493-.426-.915-.935-.915-.52 0-.947.422-.947.915v11.642l.083 1.655-.746-.798-1.645-1.748c-.165-.188-.426-.282-.65-.282-.486 0-.853.34-.853.821 0 .247.107.435.284.61l3.776 3.615c.236.235.45.305.698.305zM18.426 24C20.805 24 22 22.815 22 20.503V9.483c0-2.324-1.195-3.51-3.574-3.51h-3.077V7.91h3.018c1.077 0 1.692.575 1.692 1.702v10.762c0 1.126-.615 1.701-1.692 1.701H5.645c-1.089 0-1.692-.575-1.692-1.701V9.612c0-1.127.603-1.702 1.692-1.702h3.03V5.974H5.574C3.207 5.974 2 7.159 2 9.483v11.02C2 22.826 3.207 24 5.574 24h12.852z"
              transform="translate(-1250 -370) translate(1250 370)"
            ></path>
          </svg>
          <a href="/Charts"> CSV'Yİ İNDİR</a>
        </div>
      </div>
    </div>
  )
}

const getListName = (selectedNav) => {
  let name = ''
  switch (selectedNav) {
    case 'Top 200':
      name = 'turkeyTop'
      break
    case 'Türkiye':
      name = 'turkeyTop'
      break
    case 'Pop':
      name = 'turkeyPop'
      break
    case 'Hip-Hop/Rap':
      name = 'turkeyRap'
      break
    case 'Dance':
      name = 'turkeyDance'
      break
    case 'Discovery':
      name = 'discovery'
      break
    default:
      name = 'worldTop'
      break
  }

  return name
}

const mapStateToProps = (state) => {
  return {
    trackData: state.trackData,
    isPlaying: state.isPlaying,
    showPlayer: state.showPlayer
  }
}

export default connect(mapStateToProps, {
  startTrack,
  changePlay
})(ChartHeader)
