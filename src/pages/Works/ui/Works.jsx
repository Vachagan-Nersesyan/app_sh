import React from 'react'
import styles from './Works.module.css'
import { Carousel } from 'antd'
import pic1 from '../pictures/1.jpg'
import pic2 from '../pictures/2.jpg'
import pic3 from '../pictures/3.jpg'
import pic4 from '../pictures/4.jpg'
import pic5 from '../pictures/5.jpg'



const WorksComp = () => {

  return (
    <div className={styles.works_content}>
      <div className={styles.container}>
        <div className={styles.works_content_title}>
          ՄԵՐ ԱՇԽԱՏԱՆՔՆԵՐԸ
        </div>
        <div className={styles.carousel_content}>
          <Carousel autoplay className={styles.carousel_content_ites_sect}>
            <div className={styles.carousel_content_item}>
              <img src={pic1} alt="" />
            </div>
            <div className={styles.carousel_content_item}>
              <img src={pic2} alt="" />
            </div>
            <div className={styles.carousel_content_item}>
              <img src={pic3} alt="" />
            </div>
            <div className={styles.carousel_content_item}>
              <img src={pic4} alt="" />
            </div>

            <div className={styles.carousel_content_item}>
              <img src={pic5} alt="" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default WorksComp