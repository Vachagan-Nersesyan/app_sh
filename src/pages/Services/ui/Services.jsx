import React from 'react'
import styles from './Services.module.css'
import { Carousel, List } from 'antd';

import pic1 from '../pictures/1.jpg'
import pic2 from '../pictures/2.jpg'
import pic3 from '../pictures/3.jpg'
import pic4 from '../pictures/4.jpg'
import pic5 from '../pictures/5.jpg'
import pic6 from '../pictures/6.jpg'
import pic7 from '../pictures/7.jpg'
import pic8 from '../pictures/8.jpg'





const ServicesComp = () => {

    const data = [
        '1.Պոլիպրոպիլենային և պոլիէթիլենային խողովակներով մոտնաժում',
        '2․ Ф20-Ф250 և այլ տրամաչափի խողովակների մոնտաժում',
        '3․Ջեռուցման և սառեցման համակարգերի սարքավորումների հավաքակցում',
        '4․Ֆանկոյլների և դրանց խառնիչ հանգույցների հավաքակցում և սպասարկում',
        '5․Պոլիպրոպիլենային, պոլիէթիլենային և գործված  պոլիէթիլենային խողովակների զոդման և հավաքակցման աշխատանքներ'
    ];


    return (
        <div className={styles.services_content}>
            <div className={styles.container}>
                <div className={styles.services_content_title}>
                    ՄԵՐ ՄԱՏՈՒՑԱԾ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԸ
                </div>
                <div className={styles.services_content_items}>
                    <div className={styles.services_content_items_1}>
                        <List
                            size="large"
                            bordered
                            dataSource={data}
                            renderItem={(item) => <List.Item>{item}</List.Item>}
                        />
                    </div>
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
                        <div className={styles.carousel_content_item}>
                            <img src={pic6} alt="" />
                        </div>
                        <div className={styles.carousel_content_item}>
                            <img src={pic7} alt="" />
                        </div>

                        <div className={styles.carousel_content_item}>
                            <img src={pic8} alt="" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default ServicesComp