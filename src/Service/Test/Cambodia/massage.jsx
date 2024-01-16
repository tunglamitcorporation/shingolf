import React from 'react';
import Booking from '../../../Booking';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Header from "../../../Header";
import Footer from "../../../Footer";
const MassagePP = () => {
  return (
    <>
    <Header />
    <div className="policies__header">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Massage</h1>
        </div>
      </div>
    </div>
  </div>
  <div className="">
    <Booking />
  </div>
  <Tabs className="container-fluid" style={{marginTop: 20}}>
    <TabList  className="row" style={{ justifyContent: "center", padding: "10px" }}> 
      <Tab className="service__location  col-md-12 col-lg-2 col-xl-2 col-xxl-2">
        <a href="/Service/Test/Cambodia/breakfast" className="location_link">Breakfast</a>
        </Tab>
      <Tab className="service__location  col-md-12 col-lg-2 col-xl-2 col-xxl-2">
      <a href="/Service/Test/Cambodia/rotenburo" className="location_link">Rotenburo</a>
      </Tab>
      <Tab className="service__location service__active  col-md-12 col-lg-2 col-xl-2 col-xxl-2">
      <a href="/Service/Test/Cambodia/massage" className="location_link">Massage</a>
      </Tab>
      <Tab className="service__location col-md-12 col-lg-2 col-xl-2 col-xxl-2">
      <a href="/Service/Test/breakfast" className="location_link">Vietnam</a>
      </Tab>
    </TabList>
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

export default MassagePP;