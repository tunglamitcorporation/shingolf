import { useState, useEffect } from "react";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Feature from "./Feature";
import Policies from "./Policies";
import Contract from "./Contract";
import Service from "./Service";
import Reservation from "./Reservation";
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
import Feature_PP from "./Cambodia/Feature";
import PhnomPenhRoomDetail from "./Cambodia/PhnomPenh";
// import Massage from "./Massage";
import Breakfast from "./Service/Test/breakfast";
import Rotenburo from "./Service/Test/rotenburo";
import Massage from "./Service/Test/massage";
import BreakfastPP from "./Service/Test/Cambodia/breakfast";
import RotenburoPP from "./Service/Test/Cambodia/rotenburo";
import MassagePP from "./Service/Test/Cambodia/massage"
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
    <>
    <div>
    {/* <Header /> */}
    {/* <ScrollIndicator /> */}
    <div className ="top">
            {showTop && (<button className="btn__top" onClick={scrollToTop}>
                    <i className="fa-solid fa-angle-up"></i></button>)}
    </div>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Service/Test/breakfast" element={<Breakfast/>} />
      <Route path="/Service/Test/rotenburo" element={<Rotenburo/>} />
      <Route path="/Service/Test/massage" element={<Massage/>} />
      <Route path="/Service/Test/Cambodia/breakfast" element={<BreakfastPP/>} />
      <Route path="/Service/Test/Cambodia/rotenburo" element={<RotenburoPP/>} />
      <Route path="/Service/Test/Cambodia/massage" element={<MassagePP/>} />
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
      <Route path="/Cambodia/Cambodia" element={<Cambodia/>} />
      <Route path="/Cambodia/Feature" element={<Feature_PP />} />
      <Route path="/Cambodia/PhnomPenh" element={<PhnomPenhRoomDetail />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      {/* <Route path="/Massage" element={<Massage />} /> */}
      </Routes> 
    {/* <Footer /> */}
    </div>

    {/* <div>
      <Routes>
      
      </Routes>
    </div> */}
    </>
  )
}

export default App
