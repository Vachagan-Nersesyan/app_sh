import React from 'react'
import styles from './Main.module.css'
import picture from '../pictures/1.jpg'


const MainComp = () => {

    return (
        <div className={styles.main_content}>
            <div className={styles.main_content_overlay}></div>
            <div className={styles.main_content_txt}>
                <div className={styles.main_content_txt_1}>
                    ՄԵՆՔ ԱՊԱՀՈՎՈՒՄ ԵՆՔ ՁԵՐ ՀԱՐՄԱՐԱՎԵՏՈՒԹՅՈՒՆԸ
                </div>
            </div>
        </div>
    )
}

export default MainComp