import { useState, useEffect } from "react";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Feature from "./Component/Feature";
import Policies from "./Component/Policies";
import Contract from "./Component/Contract";
import Service from "./Component/Service";
import Reservation from "./Component/Reservation";
import HotelHN from "./Component/HNBrandDetail";
import HotelHCM from "./Component/HCMBrandDetail";
import HotelDN from "./Component/DNBrandDetail";
import HotelHP from "./Component/HPBrandDetail";
import RoomDetail from "./Component/RoomDetail";
import Massage from "./Component/Massage";
import Test from "./Component/Test";
import ScrollIndicator from "./Component/IndicatorScroll";
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
      <Route path="/Component/Test" element={<Test />} />
      <Route path="/Component/Policies" element={<Policies />} />
      <Route path="/Component/Reservation" element={<Reservation />} />
      <Route path="/Component/Feature" element={<Feature/>} />
      <Route path="/Component/Service" element={<Service />} />
      <Route path="/Component/Contract" element={<Contract />} />
      <Route path="/Component/HNBrandDetail" element={<HotelHN />} />
      <Route path="/Component/HCMBrandDetail" element={<HotelHCM />} />
      <Route path="/Component/DNBrandDetail" element={<HotelDN />} />
      <Route path="/Component/HPBrandDetail" element={<HotelHP />} />
      <Route path="/Component/RoomDetail" element={<RoomDetail />} />
      <Route path="/Component/Massage" element={<Massage />} />
      </Routes> 
    <Footer />
    </div>
  )
}

export default App
