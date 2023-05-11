import React from 'react'
import styles from './styles.module.css'
import LoadMoreButton from '../../../components/buttons/load-more-button'

const Download = () => {
  return (
    <div className={styles.home}>
      <div
        className={styles.imgWrapper}
        style={{ maxWidth: '600px', maxHeight: '738px' }}
      >
        <img src="https://www.shazam.com/resources/4f0209df59a92cd87d564361cebf0a002bc9f87f/home/group.png" alt="Phone" className={styles.phone} />
      </div>
      <div className={styles.imgWrapperSmall}>
        <img src="https://www.shazam.com/resources/4f0209df59a92cd87d564361cebf0a002bc9f87f/home/group.png" alt="Phone" className={styles.android} />
      </div>
      <div className={styles.info}>
        <h2>Etrafında çalan şarkıları tanımla</h2>
        <h3>Shazam şarkının adını saniyeler içinde belirler</h3>
        <div className={styles.downloadApp}>
          <LoadMoreButton bgColor="white" color="#08f">
            UYGULAMAYI İNDİR
          </LoadMoreButton>
        </div>
        <div className={styles.scan}>
          <div className={styles.QrCode}>
            <img
              src= "https://www.shazam.com/resources/4f0209df59a92cd87d564361cebf0a002bc9f87f/apps/qrcodes/home.png"
              alt="QrCode"
              style={{ width: '100px', height: '100px' }}
            ></img>
          </div>
          <div className={styles.descWrap}>
            <div className={styles.description}>
              Ücretsiz Shazam uygulamasını indirmek için telefonunun kamerasıyla
              kodu tara
            </div>

            <div className={styles.note}>
              iOS, Android ve diğer cihazlarda kullanılabilir
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Download
