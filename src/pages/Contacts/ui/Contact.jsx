import React from 'react'
import styles from './Contact.module.css'


const ContactComp = () => {

    return (
        <div className={styles.contact_content}>
            <div className={styles.contact_tilte}>
                <div className={styles.contact_bg}></div>
                <div className={styles.contact_tilte_txt}>
                    Կապ
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.contact_items}>
                    <div className={styles.contact_items_title}>
                        Կոնտակտային Տվյալներ
                    </div>
                    <div className={styles.contact_items_1}>
                        <div className={styles.contact_items_1_1}>
                            Հասցե ։
                        </div>
                        <div className={styles.contact_items_1_2}>
                            ք․ Երևան Գայի պողոտա 21 15
                        </div>
                    </div>
                    <div className={styles.contact_items_1}>
                        <div className={styles.contact_items_1_1}>
                            Հեռախոսահամար ։
                        </div>
                        <div className={styles.contact_items_1_2}>
                            +(374)91214020
                        </div>
                    </div>
                    <div className={styles.contact_items_1}>
                        <div className={styles.contact_items_1_1}>
                            Էլ․ փոստ։
                        </div>
                        <div className={styles.contact_items_1_2}>
                            tekhnoVel@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactComp