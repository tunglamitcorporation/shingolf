import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Home from "./container/Home/Home";
import Feature from "./container/Feature/Feature";
// import Login from "./container/Login/Login";
// import SignUp from "./container/Login/SignUp";
import VietnamService from "./container/Service/Service"
import Reservation_backup from './container/Reservation/Reservation_backup'
import Cart from './container/Reservation/Reservation';
import LoginContainer from './container/User/LoginContainer';
function NewRouter(props) {
    const {news} = props;
    // const { i18n } = useTranslation();
    const [deviceType, setDeviceType] = useState('');
      useEffect(() => {
        const handleResize = () => {
          const width = window.innerWidth;
          if (width >= 1024) {
            setDeviceType('pc');
          } else if (width >= 768) {
            setDeviceType('tablet');
          } else {
            setDeviceType('phone');
          }
        };
        handleResize(); 
        window.addEventListener('resize', handleResize); 
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); 
    return (
        <section>
            <Routes>
                <Route exact path='/' element={<Home news = {news} />} />
                <Route path = "/service/" element={<VietnamService />} />
                <Route path = "/cart/" element={<Cart />} />
                <Route path = "/feature/" element={<Feature/>} />
                <Route path = "/admin/login" element={<LoginContainer/>} exact/>
                <Route path = '*' element={<Home news={news} />} />
                <Route path = '/dev-test' element={<Reservation_backup deviceType={deviceType}/>} />
            </Routes>
        </section>
    );
}

export default NewRouter;