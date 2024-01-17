import React from 'react';
import Booking from '../../Booking';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Header from "../../Header";
import Footer from "../../Footer";
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function VietnamService() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const initialActiveTab = params.get('tab') || 'breakfast';
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  useEffect(() => {
    // Update the selected tab when the URL parameter changes
    const newActiveTab = params.get('tab') || 'breakfast';
    if (newActiveTab !== activeTab) {
      setActiveTab(newActiveTab);
    }
  }, [params, activeTab]);

  const handleTabSelect = (index) => {
    // Update the URL parameter when a tab is selected
    const newParams = new URLSearchParams(search);
    switch (index) {
      case 0:
        newParams.set('tab', 'breakfast');
        break;
      case 1:
        newParams.set('tab', 'rotenburo');
        break;
      case 2:
        newParams.set('tab', 'massage');
        break;
      default:
        break;
    }
    // Replace the current URL without triggering a full page reload
    window.history.replaceState(null, null, `?${newParams.toString()}`);
    // Manually update the activeTab state
    setActiveTab(newParams.get('tab'));
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
  defaultIndex={activeTab === 'breakfast' ? 0 : activeTab === 'rotenburo' ? 1 : 2}
  onSelect={handleTabSelect}
  selectedTabClassName='service__active'
  className="container-fluid" style={{marginTop: 20}}>
    <TabList  className="row"
          style={{ justifyContent: "center", padding: "10px" }}> 
      <Tab id="breakfast" className="service__location   col-md-12 col-lg-2 col-xl-2 col-xxl-2">Breakfast</Tab>
      <Tab id="rotenburo" className="service__location col-md-12 col-lg-2 col-xl-2 col-xxl-2">Rotenburo</Tab>
      <Tab id="massage" className="service__location col-md-12 col-lg-2 col-xl-2 col-xxl-2">Massage</Tab>
      <Tab className="service__location  col-md-12 col-lg-2 col-xl-2 col-xxl-2">
      <a href="/Service/Test/Cambodia/Service" className="location_link">Cambodia</a>
      </Tab>
    </TabList>
    <TabPanel>
    <div className="container">
      <div className="row justify-content-center">
      <img className='image-holder' style={{width: "80%", height: "100%"}} src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1705287708/breakfast__4_cfzc8i.jpg" alt="" />
      </div>
    </div>
    </TabPanel>
    <TabPanel>
    <div className="container">
      <div className="row justify-content-center">
      <img className='image-holder' style={{width: "80%", height: "100%"}} src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1705485901/AzumayaWeb/rotenburo__3_loi613.jpg" alt="" />
      </div>
    </div>
    </TabPanel>
    <TabPanel>
    <div className="container">
      <div className="row justify-content-center">
      <img className='image-holder' style={{width: "80%", height: "100%"}} src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1705287702/massage__4_dd2yco.jpg" alt="" />
      </div>
    </div>
    </TabPanel>
  </Tabs>
   
    <Footer />
    </>
  );
};