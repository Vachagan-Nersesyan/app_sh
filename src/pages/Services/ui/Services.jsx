import React from 'react'
import styles from './Services.module.css'
import { List } from 'antd';


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
            </div>
        </div>
    )
}

export default ServicesComp