import React from 'react';
import { Routes, Route, Redirect} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from "./container/Home/Home";
import Feature from "./container/Feature/Feature";
import Policies from "./container/Policies/Policies";
import Contract from "./container/Contract/Contract";
import Reservation from './container/Reservation/Reservation';
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
import Feedback from './container/Units/Feedback';
import Reservation_backup from './container/Reservation/Reservation_backup'
import ThankYouService from './container/Service/ThankYou';
import ThankYouContract from './container/Contract/ThankYou';
function NewRouter(props) {
    const {news} = props;
    const { i18n } = useTranslation();

    const language = window.location.pathname.split('/')[1];
    React.useEffect(() => {
        switch(language){
            case 'en':
                i18n.changeLanguage('en')
                break;
            case 'ja':
                i18n.changeLanguage('ja')
                break;
            case 'vie':
                i18n.changeLanguage('vie')
                break;
        }
      }, [language, i18n]);
    
    return (
        <section>
            <Routes>
                <Route exact path='/' element={<Home news = {news} />} />
                <Route path="/service" element={<VietnamService />} />
                <Route path="/q&a" element={<Policies />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/feature" element={<Feature/>} />
                <Route path="/feature/:featureID" element={<Feature/>} />
                <Route path = "/breakfast" element={<VietnamService />} />
                <Route path = "/rotenburo" element={<VietnamService />} />
                <Route path = "/massage" element={<VietnamService />} />
                {/* <Route path="/Service" element={<Service />} /> */}
                <Route path="/contract" element={<Contract />} />
                
                <Route path="/thank-you/:selectedCity" element={<ThankYou />} />
                <Route path="/massage/thank-you/:selectedCity" element={<ThankYouService />} />
                <Route path="/contract/thank-you/:selectedCity" element={<ThankYouContract />} />
                {/* <Route path="/en/thank-you/:selectedCity" element={<ThankYou />} />
                <Route path="/ja/thank-you/:selectedCity" element={<ThankYou />} />
                <Route path="/vie/thank-you/:selectedCity" element={<ThankYou />} /> */}

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
                <Route path='/feedback' element={ <Feedback /> } />                
                <Route path="/backup" element={<Reservation_backup />} />
            </Routes>
        </section>
    );
}

export default NewRouter;