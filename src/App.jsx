import { useState, useEffect } from "react";
import Home from "./Home";
import Header from "./Header";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import Feature from "./Feature";
import Policies from "./Policies";
import Contract from "./contract";
import Service from "./Service";
import Reservation from "./Reservation";
import NewsList from "./NewsList";
import News from "./News";
import NewsByDate from "./NewsByDate";
import Login from "./Login";
import SignUp from "./SignUp";
import HotelHN from "./hotel-hn";
import HotelHCM from "./hotel-hcm";
import HotelDN from "./hotel-dn";
import HotelHP from "./hotel-hp";
import HBT1RoomDetail from "./hai-ba-trung-detail/room";
import KM2RoomDetail from "./kim-ma-2-detail/room";
import KM3RoomDetail from "./kim-ma-3-detail/room";
import LLRoomDetail from "./linh-lang-detail/room";
import TVL1RoomDetail from "./thai-van-lung-1-detail/room";
import TVL2RoomDetail from "./thai-van-lung-2-detail/room";
import LTTRoomDetail from "./le-thanh-ton-detail/room";
import AnnexRoomDetail from "./annex-detail/room";
import DNRoomDetail from "./da-nang/room";
import HPRoomDetail from "./hai-phong/room";
import Cambodia from "./Cambodia/Cambodia";
import Header_PP from "./Cambodia/Header";
import Footer_PP from "./Cambodia/Footer";
import Feature_PP from "./Cambodia/Feature";
import Policies_PP from "./Cambodia/Policies";
import PhnomPenhRoomDetail from "./Cambodia/PhnomPenh";
// import Massage from "./Massage";
import VietnamService from "./Service/Vietnam/Service";
import CambodiaService from "./Service/Test/Cambodia/Service";
import ScrollIndicator from "./IndicatorScroll";
import './index.css'
import './base.css'
import {Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import ScrollToTop from "./ScrollToTop";
import { useTranslation } from 'react-i18next'
function App() {
  const location = useLocation() 
  const navigate = useNavigate()
  const display = !['/Login','/SignUp','/Cambodia/Cambodia','/Cambodia/PhnomPenh','/Cambodia/Policies','/Cambodia/Feature'].some(substring =>location.pathname.includes(substring))
  const [showTop, setShowTop] = useState(false)
  const {t} = useTranslation()
  
  const [news, setNews] = useState([])
  useEffect(() =>{
              const handleScroll = () => {
                  setShowTop(window.scrollY >= 1000)
              }
              window.addEventListener('scroll', handleScroll);
      
              return () => {
              window.removeEventListener('scroll', handleScroll);
              }
          }
  )
  function scrollToTop() {
             window.scrollTo({top:0, behavior: 'smooth'})
          }

          useEffect(() => {
            const newsData = t('news.source', {returnObjects:true})
            setNews(newsData)
          },[])
  return (
    <div>
      {display &&(
        <div>
        <Header />
    <div className ="top">
            {showTop && (<button className="btn__top" onClick={scrollToTop}>
                    <i className="fa-solid fa-angle-up"></i></button>)}
    </div>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home news = {news} />} />
      <Route path="/Service/Test/Vietnam/Service" element={<VietnamService />} />
      <Route path="/Service/Test/Cambodia/Service" element={<CambodiaService />} />
      <Route path="/Policies" element={<Policies />} />
      <Route path="/Reservation" element={<Reservation />} />
      <Route path="/Feature" element={<Feature/>} />
      <Route path="/Feature/:featureID" element={<Feature/>} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Contract" element={<Contract />} />
      <Route path="/News/:title" element={<News news={news} />} />
      <Route path="/NewsList" element={<NewsList news={news} />} />
      <Route path="/NewsByDate/:date" element={<NewsByDate news={news} />} />
      <Route path="/hotel-hn" element={<HotelHN />} />
      <Route path="/hotel-hcm" element={<HotelHCM />} />
      <Route path="/hotel-dn" element={<HotelDN />} />
      <Route path="/hotel-hp" element={<HotelHP />} />
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
    <Footer />
    </div>
      )}
      {!display &&(
        <div>
          
              <div className ="top">
            {showTop && (<button className="btn__top" onClick={scrollToTop}>
                    <i className="fa-solid fa-angle-up"></i></button>)}
         </div>
        <ScrollToTop />
        <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        </div>
      )}
      {!display &&(
        <div>
      <Header_PP />
      <div className ="top">
          {showTop && (<button className="btn__top" onClick={scrollToTop}>
                  <i className="fa-solid fa-angle-up"></i></button>)}
      </div>
      <ScrollToTop />
      <Routes>
      <Route path="/Cambodia/Cambodia" element={<Cambodia/>} />
      <Route path="/Cambodia/Feature" element={<Feature_PP />} />
      <Route path="/Cambodia/Policies" element={<Policies_PP />} />
      <Route path="/Cambodia/PhnomPenh" element={<PhnomPenhRoomDetail />} />
      </Routes>
      <Footer_PP />
      </div>
          )}
        </div>
      )
}

export default App


