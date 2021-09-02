import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'

const ChartCard = () => {
  return (
    <div className={styles.card}>
      <NavLink to="/" className={styles.link} />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <ul className={styles.rotate}>
            <li className={styles.track}>
              <img
                alt="more charts"
                className={styles.img}
                srcSet="https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/7f/4d/e3/7f4de30d-02fe-bb4b-da5a-b9a2374f0ee3/196292017601.jpg/400x400cc.webp 75w,https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/7f/4d/e3/7f4de30d-02fe-bb4b-da5a-b9a2374f0ee3/196292017601.jpg/400x400cc.webp 150w,https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/7f/4d/e3/7f4de30d-02fe-bb4b-da5a-b9a2374f0ee3/196292017601.jpg/400x400cc.webp 225w,https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/7f/4d/e3/7f4de30d-02fe-bb4b-da5a-b9a2374f0ee3/196292017601.jpg/400x400cc.webp 300w"
              ></img>
            </li>
            <li className={styles.track}>
              <img
                alt="more charts"
                className={styles.img}
                srcSet="https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/31/f7/81/31f78149-aad3-58bd-a6dc-0aff67534034/075679872418.jpg/400x400cc.webp 75w,https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/31/f7/81/31f78149-aad3-58bd-a6dc-0aff67534034/075679872418.jpg/400x400cc.webp 150w,https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/31/f7/81/31f78149-aad3-58bd-a6dc-0aff67534034/075679872418.jpg/400x400cc.webp 225w,https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/31/f7/81/31f78149-aad3-58bd-a6dc-0aff67534034/075679872418.jpg/400x400cc.webp 300w"
              ></img>
            </li>
            <li className={styles.track}>
              <img
                alt="more charts"
                className={styles.img}
                srcSet="https://is1-ssl.mzstatic.com/image/thumb/Music/ce/5e/6d/mzi.jpkmfcpl.jpg/400x400cc.webp 75w,https://is1-ssl.mzstatic.com/image/thumb/Music/ce/5e/6d/mzi.jpkmfcpl.jpg/400x400cc.webp 150w,https://is1-ssl.mzstatic.com/image/thumb/Music/ce/5e/6d/mzi.jpkmfcpl.jpg/400x400cc.webp 225w,https://is1-ssl.mzstatic.com/image/thumb/Music/ce/5e/6d/mzi.jpkmfcpl.jpg/400x400cc.webp 300w"
              ></img>
            </li>
          </ul>
        </div>

        <div className={styles.descWrap}>
          <div className={styles.info}>
            <div className={styles.title}>
              Top 200 <br /> Türkiye
            </div>

            <div className={styles.description}>
              Sefo, Witt Lowry Feat. Ava Max, Shaggy ve daha fazlasından öne
              çıkan şarkılar
            </div>
          </div>

          <div className={styles.show}>GÖRÜNTÜLE</div>
        </div>
      </div>
    </div>
  )
}

export default ChartCard
