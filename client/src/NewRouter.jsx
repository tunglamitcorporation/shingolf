import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Home from "./container/Home/Home";
import Feature from "./container/Feature/Feature";
// import Login from "./container/Login/Login";
// import SignUp from "./container/Login/SignUp";
import VietnamService from "./container/Service/Service"
import LoginContainer from './container/User/LoginContainer';
import Page1 from './Test';
import Page2 from './Test2';
import SearchPage from './container/Units/SearchPage';
import RankTable from './container/Units/RatePage';
import AdminManage from './container/User/AdminManage';
import { makeListMenu, takeAll } from './api/product';
import Policies from './container/Policies/Policies';
import PoliciesContent from './container/Reservation/Reservation';
import ShareButton from './Test';
import Cart from './container/Units/Cart';

function NewRouter() {
  const [fetchData, setFetchData] = useState([]);
  const [listMenu, setListMenu] = useState([]);

  useEffect(() => {
    const token = ''; 
    takeAll(token)
        .then(response => {
            setFetchData(response.data.data);
            console.log('Data received:', response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}, []);
useEffect(() => {
  const token = ''; 
  makeListMenu(token)
      .then(response => {
          setListMenu(response.data.data);
          console.log('Data received:', response.data);
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
}, []);
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

                <Route exact path='/' element={<Home fetchData = {fetchData} listMenu={listMenu} />} />
                <Route path = "/product-list/:productType" element={<VietnamService fetchData = {fetchData} listMenu={listMenu}  />} />
                <Route path = "/product-list/" element={<VietnamService fetchData = {fetchData} listMenu={listMenu} />} />
                <Route path = "/cart/" element={<Cart />} />
                <Route path = "/product/:productName" element={<Feature fetchData = {fetchData} />} />
                <Route path = "/admin/home" element={<AdminManage />} exact/>
                <Route path = "/admin/login" element={<LoginContainer />} exact/>
                <Route path = '*' element={<Home fetchData={fetchData} />} />
                {/* <Route path = '/dev-test' element={<Reservation_backup deviceType={deviceType}/>} /> */}
                <Route path = '/test' element={<Page1 />} />
                <Route path = '/search/' element = {<SearchPage listMenu={listMenu} />} />
                <Route path = '/check-order/' element = {<Policies fetchData={fetchData} />} />
                <Route path = '/policies/:policiesTitle/' element = {<PoliciesContent />} />
                <Route path = '/rate/' element = {<RankTable fetchData={fetchData} />} />
                <Route path='/test2/' element={<ShareButton />} />
            </Routes>
        </section>
    );
}

export default NewRouter;