import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'
import links from '../../../../data/links'

const Video = () => {
  const [count, SetCount] = useState(0)

  useEffect(() => {
    const timer = () =>
      setTimeout(() => {
        if (count === 7) SetCount(0)
        else SetCount(count + 1)
      }, 5000)
    const timerId = timer()

    return () => {
      clearTimeout(timerId)
    }
  }, [count])

  return (
    <div className={styles.content}>
      <div className={styles.sectionHead}>
        <h2>DÜNYA İLK 200</h2>
        <h1>Şu anda dünyanın dört bir yanında keşfedilen en iyi şarkılar</h1>
        <p>
          Dünya genelinde en çok Shazam'lanan şarkılar listesine girenlere göz
          at
        </p>
      </div>

      <div className={styles.wrap}>
        <video
          key={count}
          className={styles.video}
          controls
          autoPlay
          loop
          muted
        >
          <source src={links[count]} type="video/mp4"></source>
        </video>
        <NavLink to="/" className={styles.list}>
          LİSTEYİ GÖRÜNTÜLE
        </NavLink>
        <div className={styles.bottom}>
          <div className={styles.bottomContent}>
            <ul className={styles.images}>
              <div className={styles.container}>
                <img
                  className={styles.img}
                  loading="lazy"
                  alt="small cover"
                  src="https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/aa/02/57/aa025710-a0c6-90e9-4a18-2881efad4855/190296614316.jpg/400x400cc.jpg"
                ></img>
              </div>
              <div>
                <img
                  alt="small cover"
                  className={styles.img}
                  loading="lazy"
                  src="https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/e8/eb/cc/e8ebcc8d-6293-6e7f-7cc5-defa2bdbd4bd/886449399895.jpg/400x400cc.jpg"
                ></img>
              </div>
              <div>
                <img
                  alt="small cover"
                  className={styles.img}
                  loading="lazy"
                  src="https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/bf/52/2d/bf522d83-2845-ed86-fd9c-e2ab7cbf429b/191515989932_Cover.jpg/400x400cc.jpg"
                ></img>
              </div>
              <div>
                <img
                  alt="small cover"
                  className={styles.img}
                  loading="lazy"
                  src="https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/79/d7/66/79d7669f-36ff-46fb-16cb-b86fd321ef25/886449403912.jpg/400x400cc.jpg"
                ></img>
              </div>
            </ul>
            <div>
              <div className={styles.caption}>Dünya İlk 200 Listesi</div>
              <div className={styles.feat}>
                Ed Sheeran, The Kid LAROI & Justin Bieber, Shouse ve daha
                fazlasından öne çıkan şarkılar
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
