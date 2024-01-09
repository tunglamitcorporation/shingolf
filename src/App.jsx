import { useState, useEffect } from "react";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Feature from "./Feature";
import Policies from "./Policies";
import Contract from "./Contract";
import Service from "./Service";
import Reservation from "./Reservation";
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
// import Massage from "./Massage";
import Breakfast from "./Test/breakfast";
import Rotenburo from "./Test/rotenburo";
import Massage from "./Test/massage";
import BreakfastPP from "./Test/Cambodia/breakfast";
import RotenburoPP from "./Test/Cambodia/rotenburo";
import MassagePP from "./Test/Cambodia/massage"
import ScrollIndicator from "./IndicatorScroll";
import './index.css'
import './base.css'
import {Route, Router, Routes } from 'react-router-dom'
import ScrollToTop from "./ScrollToTop";
function App() {
  const [showTop, setShowTop] = useState(false)
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

  return (
    <div>
    <Header />
    {/* <ScrollIndicator /> */}
    <div className ="top">
            {showTop && (<button className="btn__top" onClick={scrollToTop}>
                    <i className="fa-solid fa-angle-up"></i></button>)}
    </div>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Test/breakfast" element={<Breakfast/>} />
      <Route path="/Test/rotenburo" element={<Rotenburo/>} />
      <Route path="/Test/massage" element={<Massage/>} />
      <Route path="/Test/Cambodia/breakfast" element={<BreakfastPP/>} />
      <Route path="/Test/Cambodia/rotenburo" element={<RotenburoPP/>} />
      <Route path="/Test/Cambodia/massage" element={<MassagePP/>} />
      <Route path="/Policies" element={<Policies />} />
      <Route path="/Reservation" element={<Reservation />} />
      <Route path="/Feature" element={<Feature/>} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Contract" element={<Contract />} />
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
      {/* <Route path="/Massage" element={<Massage />} /> */}
      </Routes> 
    <Footer />
    </div>
  )
}

export default App
