import { useState, useEffect } from "react";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Feature from "./Feature";
import Policies from "./Policies";
import Contract from "./Contract";
import Service from "./Service";
import Reservation from "./Reservation";
import NewsList from "./NewsList";
import News from "./News";
import NewsByDate from "./NewsByDate";
import Login from "./Login";
import SignUp from "./SignUp";
import HotelHN from "./HN/HNBranch";
import HotelHCM from "./HCM/HCMBranch";
import HotelDN from "./DN/DNBranch";
import HotelHP from "./HP/HPBranch";
import HBT1RoomDetail from "./HN/HBT1";
import KM2RoomDetail from "./HN/KM2";
import KM3RoomDetail from "./HN/KM3";
import LLRoomDetail from "./HN/LL";
import TVL1RoomDetail from "./HCM/TVL1";
import TVL2RoomDetail from "./HCM/TVL2";
import LTTRoomDetail from "./HCM/LTT";
import AnnexRoomDetail from "./HCM/Annex";
import DNRoomDetail from "./DN/DN";
import HPRoomDetail from "./HP/HP";
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
      <Route path="/Service" element={<Service />} />
      <Route path="/Contract" element={<Contract />} />
      <Route path="/News/:title" element={<News news={news} />} />
      <Route path="/NewsList" element={<NewsList news={news} />} />
      <Route path="/NewsByDate/:date" element={<NewsByDate news={news} />} />
      <Route path="/HN/HNBranch" element={<HotelHN />} />
      <Route path="/HCM/HCMBranch" element={<HotelHCM />} />
      <Route path="/DN/DNBranch" element={<HotelDN />} />
      <Route path="/HP/HPBranch" element={<HotelHP />} />
      <Route path="/HN/HBT1" element={<HBT1RoomDetail />} />
      <Route path="/HN/KM2" element={<KM2RoomDetail />} />
      <Route path="/HN/KM3" element={<KM3RoomDetail />} />
      <Route path="/HN/LL" element={<LLRoomDetail />} />
      <Route path="/HCM/TVL1" element={<TVL1RoomDetail />} />
      <Route path="/HCM/TVL2" element={<TVL2RoomDetail />} />
      <Route path="/HCM/LTT" element={<LTTRoomDetail />} />
      <Route path="/HCM/Annex" element={<AnnexRoomDetail />} />
      <Route path="/DN/DN" element={<DNRoomDetail />} />
      <Route path="/HP/HP" element={<HPRoomDetail />} />
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


