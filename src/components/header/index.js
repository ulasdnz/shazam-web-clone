import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'
import Search from './search'
import Hamburger from './hamburger'
import { Music, Shazam, ShazamBlack } from '../../icons/index'
import st from './styles'
import Scroll from '../../hooks/scroll'
import useWindowSize from '../../hooks/useWindowSize'
import { useLocation } from 'react-router'
import Popup from './popup'
import Navigation from './navigation'

function Header() {
  const [showResponsivePopup, setShowResponsivePopup] = useState(false)
  const [showNavigation, setShowNavigation] = useState(false)
  const location = useLocation()
  const size = useWindowSize()
  let initial = location.pathname === '/Charts' ? st.Charts : st.Initial
  const svgColor = Scroll() > 20 ? '#08f' : 'white'
  let cn = Scroll() > 20 ? st.scroll : initial
  let shazam =
    Scroll() > 20 ? (
      <ShazamBlack className={styles.shazam} />
    ) : (
      <Shazam className={styles.shazam} />
    )

  return (
    <>
      <div
        className={styles.hd}
        style={
          size.width < 770 && location.pathname === '/Charts'
            ? { ...cn.hd, borderBottom: '0', boxShadow: 'none' }
            : cn.hd
        }
      >
        <header className={styles.header}>
          <div className={styles.shazamWrapper}>
            <NavLink to="/">{shazam}</NavLink>
          </div>
          <div className={styles.headerSecond}>
            <NavLink to="/" className={styles.link} style={cn.link}>
              KÜTÜPHANEM
            </NavLink>

            <NavLink to="/" className={styles.link} style={cn.link}>
              UYGULAMALAR
            </NavLink>

            <NavLink to="/Charts" className={styles.link} style={cn.link}>
              LİSTELER
            </NavLink>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className={styles.search}>
              <Search Home scrolled={Scroll() > 20} />
            </div>
            <div>
              <Hamburger
                svgColor={svgColor}
                navigationHandler={setShowNavigation}
                popupHandler={setShowResponsivePopup}
              ></Hamburger>
            </div>
          </div>

          <div className={styles.actions}>
            <button className={styles.uygulama} style={cn.uygulama}>
              UYGULAMAYI İNDİR
            </button>

            <button className={styles.connect} style={cn.baglan}>
              <div className={styles.text}>BAĞLAN</div>
              <div>
                <Music className={styles.Music} style={cn.Music} />
              </div>
            </button>
          </div>
        </header>
      </div>
      {showResponsivePopup ? (
        <Popup clickHandler={setShowResponsivePopup} />
      ) : null}
      {showNavigation ? (
        <Navigation navigationHandler={setShowNavigation} />
      ) : null}
    </>
  )
}

export default Header
