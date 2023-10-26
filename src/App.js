import { useState, useEffect } from "react";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Feature from "./Component/Feature";
import Policies from "./Component/Policies";
import Contract from "./Component/Contract";
import Service from "./Component/Service";
import Reservation from "./Component/Reservation";
import BrandDetail from "./Component/BrandDetail";
import './index.css'
import './base.css'
import {Route, Routes } from 'react-router-dom';



function App() {

  return (
    <div>
    <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Component/Policies" element={<Policies />} />
      <Route path="/Component/Reservation" element={<Reservation />} />
      <Route path="/Component/Feature" element={<Feature/>} />
      <Route path="/Component/Service" element={<Service />} />
      <Route path="/Component/Contract" element={<Contract />} />
      <Route path="/Component/BrandDetail" element={<BrandDetail />} />

      </Routes> 
    <Footer />
    </div>
  )
}

export default App
