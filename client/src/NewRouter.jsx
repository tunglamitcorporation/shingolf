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
import Page1 from './Test';
import Page2 from './Test2';
import SearchPage from './container/Units/SearchPage';
import RankTable from './container/Units/RatePage';
import AdminManage from './container/User/AdminManage';
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
                <Route path = "/service/:productType" element={<VietnamService />} />
                <Route path = "/service/" element={<VietnamService />} />
                <Route path = "/cart/" element={<Cart />} />
                <Route path = "/feature/:productName" element={<Feature />} />
                <Route path = "/admin/home" element={<AdminManage />} exact/>
                <Route path = "/admin/login" element={<LoginContainer />} exact/>
                <Route path = '*' element={<Home news={news} />} />
                <Route path = '/dev-test' element={<Reservation_backup deviceType={deviceType}/>} />
                <Route path = '/test' element={<Page1 />} />
                <Route path = '/search/' element = {<SearchPage />} />
                <Route path = '/rate/' element = {<RankTable />} />
                <Route path='/test2/:productName' element={<Page2 />} />
            </Routes>
        </section>
    );
}

export default NewRouter;