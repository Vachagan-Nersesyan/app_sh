import React from 'react'
import styles from './AboutUsComp.module.css'
import picture from '../images/1.jpg'


const AboutUsComp = () => {

    return (
        <div className={styles.main_content}>
            <div className={styles.container}>
                <div className={styles.main_content_1}>
                    <div className={styles.main_content_1_1}>
                        ԸՆԿԵՐՈՒԹՅՈՒՆ
                    </div>
                    <div className={styles.main_content_1_2}>
                        <div className={styles.main_content_1_2}>
                            Տեխնովելդ սահմանափակ պատասխանատվությամբ Ընկերությունը 2013 թվականից զբաղվում է պոլիպրոպիլենային և պոլիէթիլենային խողովակներով ջեռուցման և սառեցման համակարգերի մոնտաժային աշխատանքներով։

                        </div>

                    </div>
                </div>
                <div className={styles.main_content_2}>
                    <img src={picture} />
                </div>
            </div>
        </div>
    )
}

export default AboutUsComp