import React from 'react'
import styles from './Main.module.css'
import picture from '../pictures/2.jpg'


const MainComp = () => {

    return (
        <div className={styles.main_content}>
            <div className={styles.main_content_overlay}></div>
            <div className={styles.main_content_txt}>
                <div className={styles.main_content_txt_1}>
                    ՄԵՆՔ ՍՏԵՂԾՈՒՄ ԵՆՔ ՁԵՐ ԵՐԱԶԱՆՔԻ ԲՆԱԿԱՐԱՆԸ ԵՎ ԴԱՐՁՆՈՒՄ ԱՅՆ ԻՐԱԿԱՆՈՒԹՅՈՒՆ
                </div>
                <div className={styles.main_content_txt_2}>
                    <img src={picture} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MainComp