import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styles from './styles.module.css'
import ChartHeader from './header'
import Footer from '../../components/footer'
import Header from '../../components/header'
import useWindowSize from '../../hooks/useWindowSize'
import Card from '../../components/cards/song-card/card'
import LoadMoreButton from '../../components/buttons/load-more-button'
import Video from './video'
import {
  chartInfo,
  videoHeight
} from '../../actions'
import getRightList from '../../functions/getList'
import { usePalette } from 'react-palette'
import Popup from '../../components/cards/song-card/popup'

const Charts = (props) => {
  const [isClicked, isClickedSet] = useState(false)
  const [positionX, positionXSet] = useState(false)
  const [positionY, positionYSet] = useState(false)
  const [selectedNav, selectedNavSet] = useState('Top 200')
  const [headerBackColor, headerBackColorSet] = useState()
  const [loadNumber, setLoadNumber] = useState(50)
  const [info, infoSet] = useState({})
  let [list, setList] = useState(
    Object.values(getRightList(getListName(selectedNav)))
  )
  const size = useWindowSize()
  var { data } = usePalette(list[0].images.coverart)

  useEffect(() => {
    setList(Object.values(getRightList(getListName(selectedNav))))
    setLoadNumber(50)
    props.chartInfo({
      listName: getListName(selectedNav),
      coverSrc: list[0].images.coverart,
      videoSrc: list[0].videoSrc,
      songSrc: list[0].src
    })
  }, [selectedNav])

  function clickHandle(e, info) {
    infoSet(info)
    positionXSet(e.pageX)
    positionYSet(e.pageY)
    isClickedSet(!isClicked)
  }

  useEffect(() => {
    props.chartInfo({
      listName: getListName(selectedNav),
      coverSrc: list[0].images.coverart,
      videoSrc: list[0].videoSrc,
      songSrc: list[0].src
    })

    headerBackColorSet(data.darkVibrant)
  }, [data])

  useEffect(() => {
    const height = document.getElementById('cardSection').clientHeight
    props.videoHeight(height)
  }, [selectedNav, loadNumber, list])

  return (
    <div className={styles.home}>
      <Header bgColor={headerBackColor}></Header>
      <ChartHeader list={list} setter={(e) => selectedNavSet(e)} />
      {size.width < 771 ? <Video /> : null}

      <div id="cardSection" className={styles.chartContent}>
        <div className={styles.trackContainer}>
          {list
            .filter((e, i) => i < loadNumber)
            .map((e, i) => (
              <div key={i}>
                <Card
                  listType={getListName(selectedNav)}
                  info={e}
                  number={i}
                  hand={clickHandle}
                  isChartsPlaying={true}
                  key={i + 1}
                ></Card>
              </div>
            ))}
          <div>
            <LoadMoreButton
              disabled={
                list.length - 1 === loadNumber || loadNumber > list.length - 1
              }
              onClick={() => {
                if (loadNumber + 50 < list.length) {
                  setLoadNumber(list.length)
                } else {
                  setLoadNumber(loadNumber + 50)
                }
              }}
            >
              Daha Fazla Göster
            </LoadMoreButton>
          </div>
        </div>
      </div>

      {isClicked && (
        <Popup
          info={info}
          isClickedSet={isClickedSet}
          positionX={positionX}
          positionY={positionY}
          tweakPosition={{
            Popup: {
              Y: -250,
              X: 30
            },
            Arrow: {
              Y: -10,
              X: 18
            }
          }}
        />
      )}

      <Footer></Footer>
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



export default connect(null, {
  chartInfo,
  videoHeight
})(Charts)
