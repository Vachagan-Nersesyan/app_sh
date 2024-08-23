import React from 'react';
import { Layout } from 'antd';

import styles from './styles/App.module.css'

import FooterComp from '../feautures/Footer/ui/Footer';
import HeaderComp from '../feautures/Header/ui/Header';
import MainComp from '../pages/Main/ui/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactComp from '../pages/Contacts';
import AboutUsComp from '../pages/AboutUs/ui/AboutUsComp';
import ServicesComp from '../pages/Services/ui/Services';
import WorksComp from '../pages/Works/ui/Works';


const App = () => {

    return (
        <BrowserRouter>
            <Layout>
                <HeaderComp />
                <Routes>
                    <Route path='/contact' element={<ContactComp />} />
                    <Route path='/about-us' element={<AboutUsComp />} />

                    <Route path='/service' element={<ServicesComp />} />
                    <Route path='/works' element={<WorksComp />} />

                    <Route path='/' element={<MainComp />} />

                </Routes>
                <FooterComp />
            </Layout>
        </BrowserRouter>
    )
}


export default App