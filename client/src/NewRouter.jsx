import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Home from "./container/Home/Home";
import Feature from "./container/Feature/Feature";
import Policies from "./container/Policies/Policies";
import Contract from "./container/Contract/Contract";
import Reservation from "./container/Reservation/Reservation";
import NewsList from "./components/Home/NewsList";
import News from "./components/Home/News";
import NewsByDate from "./components/Home/NewsByDate";
// import Login from "./container/Login/Login";
// import SignUp from "./container/Login/SignUp";
import HotelHN from "./components/AreaDetail/hotel-hn";
import HotelHCM from "./components/AreaDetail/hotel-hcm";
import HotelDN from "./components/AreaDetail/hotel-dn";
import HotelHP from "./components/AreaDetail/hotel-hp";
import HBT1RoomDetail from "./components/BranchDetail/hai-ba-trung-detail/room";
import KM2RoomDetail from "./components/BranchDetail/kim-ma-2-detail/room";
import KM3RoomDetail from "./components/BranchDetail/kim-ma-3-detail/room";
import LLRoomDetail from "./components/BranchDetail/linh-lang-detail/room";
import TVL1RoomDetail from "./components/BranchDetail/thai-van-lung-1-detail/room";
import TVL2RoomDetail from "./components/BranchDetail/thai-van-lung-2-detail/room";
import LTTRoomDetail from "./components/BranchDetail/le-thanh-ton-detail/room";
import AnnexRoomDetail from "./components/BranchDetail/annex-detail/room";
import DNRoomDetail from "./components/BranchDetail/da-nang/room";
import HPRoomDetail from "./components/BranchDetail/hai-phong/room";
import ThankYou from './container/Reservation/ThankYou';
import VietnamService from "./container/Service/Service"
import ErrorPage from './container/Units/ErrorPage';


function NewRouter(props) {
    const location = useLocation() 
    useEffect(() => {
        if (location.pathname.startsWith('/news-list')) {
          document.title = "News - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル ";
        }
      }, [location.pathname]);
  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = '東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル';
        break;
      case '/q&a':
        document.title = 'Q&A - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル ';
        break;
      case '/feature':
        document.title = 'Feature - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル ';
        break;
      case '/reservation':
        document.title = 'Reservation - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル';
        break;
        case '/contract':
        document.title = 'Contract - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル';
        break;
        case '/hotel-hn':
        document.title = 'Azumaya Hanoi - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル';
        break;
        case '/hotel-hcm':
        document.title = 'Azumaya Ho Chi Minh - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル';
        break;
        case '/hotel-hp':
        document.title = 'Azumaya Hai Phong - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル';
        break;
        case '/hotel-dn':
        document.title = 'Azumaya Da Nang - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル';
        break;
        case '/hai-ba-trung-detail/room':
        document.title = 'Azumaya Hai Ba Trung 1 - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル';
        break;
        case '/kim-ma-2-detail/room':
        document.title = 'Azumaya Kim Ma 2- 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル';
        break;
        case '/kim-ma-3-detail/room':
        document.title = 'Azumaya Kim Ma 3 - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル';
        break;
        case '/linh-lang-detail/room':
        document.title = 'Azumaya Linh Lang - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル';
        break;
        case '/thai-van-lung-1-detail/room':
        document.title = 'Azumaya Thai Van Lung 1 - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル';
        break;
        case '/thai-van-lung-2-detail/room':
        document.title = 'Azumaya Thai Van Lung 2 - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル';
        break;
        case '/le-thanh-ton-detail/room':
        document.title = 'Azumaya Le Thanh Ton  - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル';
        break;
        case '/annex-detail/room':
        document.title = 'Azumaya Annex - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル';
        break;
        case '/da-nang/room':
        document.title = 'Azumaya Da Nang - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル';
        break;
        case '/hai-phong/room':
        document.title = 'Azumaya Hai Phong - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル';
        break;
      default:
        if (location.pathname.startsWith('/thank-you')) {
            document.title = 'Thank You - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル';
          } else if (location.pathname.startsWith('/news')) {
            document.title = 'News - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル';
          } else if(location.pathname.startsWith('/service')){
            document.title = 'Service - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
          }
          else if (location.pathname.startsWith('/feature')) {
              document.title = 'Feature - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル '
            }
          else {
            document.title = 'Feature - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル ';
          }
    }
  }, [location.pathname]);

    const {news} = props;
    return (
        <section>
            <Routes>
                <Route exact path="/" element={<Home news = {news} />} />
                <Route path="/service" element={<VietnamService />} />
                <Route path="/q&a" element={<Policies />} />
                {/* <Route path="/reservation" element={<Reservation />} /> */}
                <Route path="/feature" element={<Feature/>} />
                <Route path="/feature/:featureID" element={<Feature/>} />
                <Route path = "/breakfast" element={<VietnamService />} />
                <Route path = "/rotenburo" element={<VietnamService />} />
                <Route path = "/massage" element={<VietnamService />} />
                {/* <Route path="/Service" element={<Service />} /> */}
                <Route path="/contract" element={<Contract />} />
                <Route path="/thank-you/:selectedCity" element={<ThankYou />} />
                <Route path="/news/:title" element={<News news={news} />} />
                <Route path="/news" element={<NewsList news={news} />} />
                <Route path="/news-by-date/:date" element={<NewsByDate news={news} />} />
                <Route path="/hotel-hn" element={<HotelHN news = {news}/>} />
                <Route path="/hotel-hcm" element={<HotelHCM news = {news} />} />
                <Route path="/hotel-dn" element={<HotelDN news = {news}/>} />
                <Route path="/hotel-hp" element={<HotelHP news = {news} />} />
                <Route path="/hai-ba-trung-detail/room" element={<HBT1RoomDetail />} />
                <Route path="/kim-ma-2-detail/room" element={<KM2RoomDetail />} />
                <Route path="/kim-ma-3-detail/room" element={<KM3RoomDetail />} />
                <Route path="/linh-lang-detail/room" element={<LLRoomDetail />} />
                <Route path="/thai-van-lung-1-detail/room" element={<TVL1RoomDetail />} />
                <Route path="/thai-van-lung-2-detail/room" element={<TVL2RoomDetail />} />
                <Route path="/le-thanh-ton-detail/room" element={<LTTRoomDetail />} />
                <Route path="/annex-detail/room" element={<AnnexRoomDetail />} />
                <Route path="/da-nang/room" element={<DNRoomDetail />} />
                <Route path="/hai-phong/room" element={<HPRoomDetail />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </section>
    );
}

export default NewRouter;