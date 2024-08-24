import React from 'react'
import styles from './Header.module.css'
import { Header } from 'antd/es/layout/layout'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom';
import logo from '../pictures/1.png'

const items = new Array(4).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
}));

const HeaderComp = () => {
    return (
        <Header className={styles.header_content}>
            <Menu
                theme="dark"
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
            <NavLink to={'/'} className={styles.logo}>
               
                <div className={styles.logo_name}>
                    <span className={styles.logo_name_1}>TEKHNO </span>
                    <span className={styles.logo_name_2}>VELD</span>
                </div>
            </NavLink>
        </Header>
    )
}

export default HeaderComp