import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from "./container/Home/Home";
import Header from "./container/Units/Header";
import Footer from "./container/Units/Footer";
import Feature from "./container/Feature/Feature";
import Policies from "./container/Policies/Policies";
import Contract from "./container/Contract/Contract";
//import Service from "./Service";
import Reservation from "./container/Reservation/Reservation";
import NewsList from "./components/Home/NewsList";
import News from "./components/Home/News";
import NewsByDate from "./components/Home/NewsByDate";
import Login from "./container/Login/Login";
import SignUp from "./container/Login/SignUp";
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
import Cambodia from "./Cambodia/Cambodia";
import Header_PP from "./Cambodia/Header";
import Footer_PP from "./Cambodia/Footer";
import Feature_PP from "./Cambodia/Feature";
import Policies_PP from "./Cambodia/Policies";
import PhnomPenhRoomDetail from "./Cambodia/PhnomPenh";
// import Massage from "./Massage";
import VietnamService from "./container/Service/Vietnam/Service"//"./Service/Vietnam/Service";
import CambodiaService from "./container/Service/Test/Cambodia/Service";
import ScrollIndicator from "./IndicatorScroll";

function NewRouter(props) {
    const {news} = props;
    return (
        <section>
            <Routes>
                <Route path="/" element={<Home news = {news} />} />
                <Route path="/Service/Test/Vietnam/Service" element={<VietnamService />} />
                <Route path="/Service/Test/Cambodia/Service" element={<CambodiaService />} />
                <Route path="/Policies" element={<Policies />} />
                <Route path="/Reservation" element={<Reservation />} />
                <Route path="/Feature" element={<Feature/>} />
                <Route path="/Feature/:featureID" element={<Feature/>} />
                {/* <Route path="/Service" element={<Service />} /> */}
                <Route path="/Contract" element={<Contract />} />
                <Route path="/News/:title" element={<News news={news} />} />
                <Route path="/NewsList" element={<NewsList news={news} />} />
                <Route path="/NewsByDate/:date" element={<NewsByDate news={news} />} />
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
            </Routes>
        </section>
    );
}

export default NewRouter;