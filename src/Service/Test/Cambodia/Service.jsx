import React from 'react';
import Booking from '../../../Cambodia/Booking';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Header from "../../../Cambodia/Header";
import Footer from "../../../Cambodia/Footer";
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function CambodiaService() {
  const {search} = useLocation()
  const params = new URLSearchParams(search)
  const initialActiveTab = parseInt(params.get('tab'), 10) || 0  
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  useEffect(() => {
    // Update the selected tab when the URL parameter changes
    const newActiveTab = parseInt(params.get('tab'), 10) || 0;
    if (newActiveTab !== activeTab) {
      setActiveTab(newActiveTab);
    }
  }, [params, activeTab]);

  const handleTabSelect = (index) => {
    // Update the URL parameter when a tab is selected
    const newParams = new URLSearchParams(search);
    newParams.set('tab', index);
    // Replace the current URL without triggering a full page reload
    window.history.replaceState(null, null, `?${newParams.toString()}`);
    setActiveTab(index)
  };
  return (
    <>
    <Header />
    <div className="policies__header">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Service</h1>
        </div>
      </div>
    </div>
  </div>
  <div className="">
    <Booking />
  </div>
  <Tabs 
  defaultIndex={activeTab}
  onSelect={handleTabSelect}
  selectedTabClassName='service__active'
  className="container-fluid" style={{marginTop: 20}}>
    <TabList  className="row"
          style={{ justifyContent: "center", padding: "10px" }}> 
          <Tab className="service__location   col-md-12 col-lg-2 col-xl-2 col-xxl-2">Breakfast</Tab>
      <Tab className="service__location col-md-12 col-lg-2 col-xl-2 col-xxl-2">Rotenburo</Tab>
      <Tab className="service__location col-md-12 col-lg-2 col-xl-2 col-xxl-2">Massage</Tab>
      <Tab className="service__location  col-md-12 col-lg-2 col-xl-2 col-xxl-2">
      <a href="/Service/Test/VietNam/Service" className="location_link">Vietnam</a>
      </Tab>
    </TabList>
    <TabPanel>
    <div className="container">
      <div className="row justify-content-center">
      <img className='image-holder' style={{width: "80%", height: "100%"}} src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1705287704/breakfast-pp_1_l6vfuo.jpg" alt="" />
      </div>
    </div>
    </TabPanel>
    <TabPanel>
    <div className="container">
      <div className="row justify-content-center">
      <img className='image-holder' style={{width: "80%", height: "100%"}} src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1705287704/rotenburo-pp_1_vdncdb.jpg" alt="" />
      </div>
    </div>
    </TabPanel>
    <TabPanel>
    <div className="container">
      <div className="row justify-content-center">
      <img className='image-holder' style={{width: "80%", height: "100%"}} src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1705287704/massage-pp_1_ay4z84.jpg" alt="" />
      </div>
    </div>
    </TabPanel>
  </Tabs>
   
    <Footer />
    </>
  );
};