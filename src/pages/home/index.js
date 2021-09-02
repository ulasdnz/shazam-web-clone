import React from 'react'
import styles from './styles.module.css'
import Header from '../../components/header'
import Download from './download'
import GlobalVideo from './global/video'
import GlobalCarousel from './global/carousel'
import Discovery from './discovery'
import MoreCharts from './more-charts'
import Footer from '../../components/footer'

const Home = () => {
  return (
    <>
      <Header Home></Header>
      <div className={styles.home}>
        <div className={styles.first}>
          <div>
            <div className={styles.content}>
              <Download />
            </div>
            <div className={styles.content}>
              <GlobalVideo />
            </div>
            <div className={styles.content}>
              <GlobalCarousel />
            </div>
            <div>
              <Discovery></Discovery>
            </div>
            <div>
              <MoreCharts></MoreCharts>
            </div>
          </div>
          <div>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
