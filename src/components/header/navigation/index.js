import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.css'
import { Shazam, Music } from '../../../icons'

const Navigation = (props) => {
  return (
    <div className={styles.navigation}>
      <NavLink to="/">
        <Shazam className={styles.shazam} />
      </NavLink>
      <div
        className={styles.close}
        onClick={() => props.navigationHandler(false)}
      >
        <svg className={styles.closeMenu} viewBox="0 0 24 24">
          <g transform="translate(-445.000000, -675.000000)">
            <g transform="translate(442.000000, 672.000000)">
              <path d="M26.6539846,5.24199511 L24.7581067,3.34513441 C24.2959175,2.8849552 23.5469906,2.8849552 23.0848015,3.34513441 L15,11.4308541 L6.91519855,3.34513441 C6.45300938,2.8849552 5.70408246,2.8849552 5.24189329,3.34513441 L3.34601537,5.24199511 C2.88482878,5.70417946 2.88482878,6.45309857 3.34501279,6.91528291 L11.4308168,15 L3.34601537,23.0847171 C2.88482878,23.5469014 2.88482878,24.2958205 3.34501279,24.7580049 L5.24189329,26.6548656 C5.70408246,27.1150448 6.45300938,27.1150448 6.91519855,26.6548656 L15,18.5691459 L23.0848015,26.6548656 C23.5469906,27.1150448 24.2959175,27.1150448 24.7581067,26.653863 L26.6539846,24.7580049 C27.1151712,24.2958205 27.1151712,23.5469014 26.6549872,23.0847171 L18.5691832,15 L26.6549872,6.91528291 C27.1151712,6.45309857 27.1151712,5.70417946 26.6539846,5.24199511 L26.6539846,5.24199511 Z"></path>
            </g>
          </g>
        </svg>
      </div>

      <ul className={styles.list}>
        <li>
          <NavLink to="/">Shazam'ı indir</NavLink>
        </li>

        <li>
          <NavLink to="/">Uygulamalar</NavLink>
        </li>
        <li>
          <NavLink to="/Charts">Listeler</NavLink>
        </li>
        <li>
          <NavLink to="/">Kütüphanem</NavLink>
        </li>
        <li>
          <NavLink to="/">Yardım</NavLink>
        </li>
      </ul>

      <div className={styles.connection}>
        <div className={styles.connectionText}>
          Shazam içinde tam şarkılar çalmak için Apple Music'e bağlan.
        </div>
        <button className={styles.connectionButton}>
          <span>BAĞLAN</span>
          <Music className={styles.musicSvg} />
        </button>
      </div>
    </div>
  )
}

export default Navigation
