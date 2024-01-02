import { useState, useEffect } from "react";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Feature from "./Feature";
import Policies from "./Policies";
import Contract from "./Contract";
import Service from "./Service";
import Reservation from "./Reservation";
import HotelHN from "./HN/HNBrandDetail";
import HotelHCM from "./HCMBrandDetail";
import HotelDN from "./DNBrandDetail";
import HotelHP from "./HPBrandDetail";
import HNRoomDetail from "./HN/HNRoomDetail";
import Massage from "./Massage";
import Test from "./Test";
import ScrollIndicator from "./IndicatorScroll";
import './index.css'
import './base.css'
import {Route, Routes } from 'react-router-dom'
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
      <Route path="/Test" element={<Test />} />
      <Route path="/Policies" element={<Policies />} />
      <Route path="/Reservation" element={<Reservation />} />
      <Route path="/Feature" element={<Feature/>} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Contract" element={<Contract />} />
      <Route path="/HN/HNBrandDetail" element={<HotelHN />} />
      <Route path="/HCMBrandDetail" element={<HotelHCM />} />
      <Route path="/DNBrandDetail" element={<HotelDN />} />
      <Route path="/HPBrandDetail" element={<HotelHP />} />
      <Route path="/HN/HNRoomDetail" element={<HNRoomDetail />} />
      <Route path="/Massage" element={<Massage />} />
      </Routes> 
    <Footer />
    </div>
  )
}

export default App
