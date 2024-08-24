import React from 'react'
import styles from './Footer.module.css'
import { Footer } from 'antd/es/layout/layout'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import logo from '../../Header/pictures/1.png'


const FooterComp = () => {
    return (
        <Footer className={styles.footer_content}>
            <NavLink to={'/'} className={styles.logo}>
              
                <div className={styles.logo_name}>
                    <span className={styles.logo_name_1}>TEKHNO </span>
                    <span className={styles.logo_name_2}>VELD</span>
                </div>
            </NavLink>
            <Menu
                className={styles.footer_menu}
                mode="horizontal"
                items={[
                    {
                        key: 0,
                        label: (
                            <NavLink to={'/'}>ԳԼԽԱՎՈՐ</NavLink>
                        )
                    },
                    {
                        key: 1,
                        label: (
                            <NavLink to={'/about-us'}>ՄԵՐ ՄԱՍԻՆ</NavLink>
                        )
                    },
                    {
                        key: 2,
                        label: (
                            <NavLink to={'/service'}>ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</NavLink>
                        )
                    },
                    {
                        key: 3,
                        label: (
                            <NavLink to={'/works'}>ԱՇԽԱՏԱՆՔՆԵՐ</NavLink>
                        )
                    },
                    {
                        key: 4,
                        label: (
                            <NavLink to={'/contact'}>ԿՈՆՏԱԿՏՆԵՐ</NavLink>
                        )
                    },
                ]}
                style={{
                    flex: 1,
                    minWidth: 0,
                }}
            />
        </Footer>
    )
}

export default FooterComp