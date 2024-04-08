import React from "react";
import {useState, useEffect } from "react";
import BookingRoom from "../../../container/BookingRoom/BookingRoom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classNames from "classnames";
import HelmetLayout from "../../HelmetLayout/HelmetLayout";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';


export default function KM3RoomDetail() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const receivedData = location.state;
  const roomFeature = t("room_km3.features", { returnObjects: true });
  const branchName = t("branch", { returnObjects: true });
  const km3 = t("km3", { returnObjects: true });
  const business_km3 = t("business_km3", { returnObjects: true });
  const a = t("branch.km3")
  const b = t("header.title")
  const c = a + " | "+ b
  console.log(receivedData);
  const [startDate, setStartDate] = useState(receivedData ? receivedData.startDate : '');
  const [endDate, setEndDate] = useState(receivedData ? receivedData.endDate : '');
  const km3Slider = t("room_km3.slider", {returnObjects: true})
  const AutoPlaySlider =  withAutoplay(AwesomeSlider)

  const handleContinue = (selectedRoom) => {
    // Prepare data to pass to Receiver2Page
    const data = {
      ...receivedData,
      startDate,
      endDate,
      selectedCity,
      selectedBranch,
      selectedRoom
    };
    
    // Navigate to Receiver2Page and pass data
    navigate('/reservation', { state: data })
  };
const [selectedCity, setSelectedCity] = useState('hotel-hn');
  const [selectedBranch, setSelectedBranch] = useState('kim-ma-3-detail');
 
  useEffect(() => {
    if (receivedData && receivedData.selectedCity) {
      setSelectedCity(receivedData.selectedCity);
    }
    if (receivedData && receivedData.selectedBranch) {
      setSelectedBranch(receivedData.selectedBranch);
    }
  }, [receivedData]);
  const RoomCard = ({room_id, name, size, sizeTitle, bedTitle, install, in1, in2, in3, in4, in5, priceTitle, bed, price, images}) => {
    const { t } = useTranslation();
      return(
        <div key={room_id} className="room-item">
                          <Carousel 
         showArrows
         showThumbs={false}
         showStatus={false}
         emulateTouch
         stopOnHover
         autoPlay
         infiniteLoop>
          {images.map((image, index) => (
              <img
                src={image}
                alt={`${name} ${index} azumaya kim ma 3 azumaya hotel ha noi` }
              />
           
          ))}
        </Carousel>
                          <div className="card" style={{ border: "none" }}>
                            <div className="row p-0">
                              <div className="col-md-12"></div>
                              <div className="col-md-12">
                                <div className="card-body">
                                  <div className="card-title room-name">
                                    {name}
                                  </div>
                                  <table className="room__des-table">
                                    <tr>
                                      <th>{sizeTitle}</th>
                                      <td className="installation">
                                        {size}m&#178;
                                      </td>
                                    </tr>
                                    <tr>
                                      <th>{bedTitle}</th>
                                      <td className="installation">
                                        {bed}
                                      </td>
                                    </tr>
                                    <tr>
                                      <th>{install}</th>
                                      <td className="installation">
                                        <i class="fa-solid fa-check purple mr-2"></i>
                                        {in1}
                                        <br />
                                        <i class="fa-solid fa-check purple mr-2"></i>
                                        {in2}
                                        <br />
                                        <i class="fa-solid fa-check purple mr-2"></i>
                                        {in3}
                                        <br />
                                        {in4 !== "" ? (
                                          <React.Fragment>
                                          <i class="fa-solid fa-check purple mr-2"></i>
                                          {in4}
                                          </React.Fragment>
                                        ): null}
                                        <br />
                                        {/* {in5 !== "" ? (
                                          <React.Fragment>
                                          <i class="fa-solid fa-check purple mr-2"></i>
                                          {in5}
                                          </React.Fragment>
                                        ): null}
                                        <br /> */}
                                      </td>
                                    </tr>
                                    <tr>
                                      <th>{priceTitle}</th>
                                      <td className="installation bold">
                                        {price}
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                          onClick={() => handleContinue(`${name}`)}
                          className="btn__reserve p-0 m-0">      
                              {t("room_tvl1.reservation")}
                          </button>
                        </div>
      
  )
  }
  return (
    <>
    <HelmetLayout title= {c} />
            <div className="area_header" >
              <div className="overlay"></div>
              <AutoPlaySlider
              animation = "scaleOutAnimation"
              mobileTouch
              infinite
              play
              interval = {5000}>
          {km3Slider.map((item)=>(
              <div data-src={item.image} style={{height:'100%'}}>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                  <h1>{item.desc}</h1>
                  </div>
                  </div>
                  </div>
                  </div>
          ))}
      </AutoPlaySlider>
      </div> 
      <div className="is-sticky">
      <BookingRoom 
      startDate={startDate} 
      endDate={endDate} 
      selectedCity={selectedCity} 
      selectedBranch={selectedBranch}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      setSelectedCity={setSelectedCity}
      setSelectedBranch={setSelectedBranch} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <div className="re__breadcrumb">
            <ul className="breadcrumb__list">
              <li className="breadcrumb__item">
                <Link to="/Home">
                  <i className="fa-solid fa-house" />
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title" to="/hotel-hn">
                  {t("header.hn")}
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title" href="">
                  {t("branch.km3")}
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
      <div className="container p-0">
        <div
          className="row"
          style={{ justifyContent: "left", padding: "10px", textAlign:"justify" }}
        >
          <div className="service__location col-md-12 col-lg-3 col-xl-3">
            <a href="/hai-ba-trung-detail/room" className="location_link">
              {t(branchName.hbt1)}
            </a>
          </div>
          <div className="service__location col-md-12 col-lg-3 col-xl-3">
            <a href="/kim-ma-2-detail/room" className="location_link">
              {t(branchName.km2)}
            </a>
          </div>
          <div className="service__location service__active  col-md-12 col-lg-3 col-xl-3">
            <a href="/kim-ma-3-detail/room" className="location_link">
              {t(branchName.km3)}
            </a>
          </div>
          <div className="service__location col-md-12 col-lg-3 col-xl-3">
            <a href="/linh-lang-detail/room" className="location_link">
              {t(branchName.ll)}
            </a>
          </div>
        </div>
        </div>
        <Tabs className="container p-0">
        <TabPanel>
          <Tabs
            selectedTabClassName="service__active"
            className="col-md-12 p-0"
          >
            <TabList className="service__list">
              {roomFeature.map((item) => (
                <Tab className="service">{item.name}</Tab>
              ))}
            </TabList>
            <TabPanel>
              <div className="service__content">
                <div className="room__content">
                  <div className="room__title">
                    {t("room_km3.room")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                    <p style={{ fontSize: "1.4rem", paddingTop: "10px" }}>
                      {t("room_km3.roomContent")}
                    </p>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                  {km3.map((item)=>(
                    <div className="col-md-12 col-lg-6">
                      <RoomCard {...item}/>
                       </div>       
            ))}
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service__content">
                <div className="room__content">
                  <div className="room__title">
                    {t("room_km3.tariff")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                  </div>
                  <div className="room__container">
                    <div className="table_container">
                      <table className="room__tariff">
                        <tbody>
                          <tr>
                            <th
                              style={{ width: "20%" }}
                              colSpan={2}
                              rowSpan={2}
                            >
                              {t("room_km3.type")}
                            </th>
                            <th style={{ width: "20%" }} rowSpan={2}>
                              {t("room_km3.rate")}
                            </th>
                            <th style={{ width: "20%" }} colSpan={5}>
                              {t("room_km3.desc")}
                            </th>
                          </tr>
                          <tr>
                            <th style={{ width: "10%" }}>
                              {t("room_km3.size")} m&#178;
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_km3.window")}
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_km3.bath")}
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_km3.washlet")}
                            </th>
                            <th style={{ width: "15%" }}>
                              {t("room_km3.mattress")}
                            </th>
                            
                          </tr>
                          {km3.map((item) => (
                            <tr>
                              <td style={{ width: "5%" }}>{item.id}</td>
                              <td className="room__tariff-name">{item.name}</td>
                              <td>{item.price}</td>
                              <td>{item.size}</td>
                              <td>
                                <i
                                  className={classNames({
                                    "fa fa-times red": item.tick_w == false,
                                    "fa fa-check green": item.tick_w == true,
                                  })}
                                />
                              </td>
                              <td>
                                 <i className="fa fa-check green" />
                              </td>
                              <td>
                                <i className="fa fa-check green" />
                              </td>
                              <td>
                                {item.mattress}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="required__note mt-4">
                      {t("room_km3.vat")}
                    </div>
                    <div className="room__service">
                      <div className="container p-0">
                        <div className="row">
                          <div className="col-md-4">
                            <h2>{t("room_km3.service")}</h2>
                            <p className="pre-line">
                              {t("room_km3.serviceContent")}
                            </p>
                          </div>
                          <div className="col-md-4">
                            <h2>{t("room_km3.facility")}</h2>
                            <p className="pre-line">
                              {t("room_km3.facilityContent")}
                            </p>
                          </div>
                          <div className="col-md-4">
                            <h2>{t("room_km3.rental")}</h2>
                            <p className="pre-line">
                              {t("room_km3.rentalContent")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service__content">
                <div className="room__content">
                  <div className="room__title">
                    {t("room_km3.business")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                    <p style={{ fontSize: "1.4rem", paddingTop: "10px" }}>
                      {t("room_km3.businessContent")}
                    </p>
                  </div>
                  <div className="room__container">
                    {/* <table className="room__table room__table-service">
                      <tbody>
                        <tr>
                          <th rowSpan={2}>{t("room_km3.pickup")}</th>
                          <td>{t("room_km3.pickup_fee1")}</td>
                          <td rowSpan={2}>{t("room_km3.pickup_car")}</td>
                        </tr>
                        <tr>
                          <td>{t("room_km3.pickup_fee2")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_km3.minibar")}</th>
                          <td>{t("room_km3.minibar_fee")}</td>
                          <td>{t("room_km3.minibar_type")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_km3.laundry")}</th>
                          <td>{t("room_km3.laundry_fee1")}</td>
                          <td>{t("room_km3.laundry_fee2")}</td>
                        </tr>
                        <tr>
                          <th rowSpan={2}>{t("room_km3.print")}</th>
                          <td colSpan={2}>{t("room_km3.print_fee1")}</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>{t("room_km3.print_fee2")}</td>
                        </tr>
                        <tr>
                          <th rowSpan={2}>{t("room_km3.tel")}</th>
                          <td colSpan={2}>{t("room_km3.tel_fee1")}</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>{t("room_km3.tel_fee2")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_km3.rental_car")}</th>
                          <td colSpan={2}>{t("room_km3.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_km3.tour")}</th>
                          <td colSpan={2}>{t("room_km3.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_km3.visa")}</th>
                          <td colSpan={2}>{t("room_km3.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_km3.food")}</th>
                          <td colSpan={2}>{t("room_km3.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_km3.roten")}</th>
                          <td className="pre-line" colSpan={2}>
                            {t("room_km3.rotenContent")}
                          </td>
                        </tr>
                        <tr>
                          <th>{t("room_km3.breakfast")}</th>
                          <td className="pre-line" colSpan={2}>
                            {t("room_km3.breakfastContent")}
                          </td>
                        </tr>
                      </tbody>
                    </table> */}
      <div className="feature__type-list">
        <div className="container" id="containerID">
          <div className="container">
            <div className="row justify-content-center">
            {business_km3.map((item) => (
              <div key={item.id} className="business-card col-md-4 pre-line m-1" id={item.id}>
              <div className="card" style={{ border: "none" }}>
                <div className="row g-4">
                  <div className="col-md-12">
                    <img className="business-img" src={item.image} alt="" />
                  </div>
                  <div className="col-md-12">
                    <div className="card-body" style={{ padding: 0 }}>
                      <h2 className="card-title">{item.title}</h2>
                      <p className="card-text left">{item.content}</p>
                      <p className="card-text left">{item.note}</p>
                      <div className="btn-holder">
                      <div className="btn__detail control-position">
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                )
                )
            }
            </div>
          </div>
        </div>
      </div>
                    <div className="col-md-12">
                      <div className="table-footer">
                        {/* <h1>{t("room_km3.board")}</h1> */}
                        <p className="mt-5">
                          {t("room_km3.contact1")}
                          <a className="ml-1" href={`tel:${t("room_km3.phone")}`}>
                          {t("room_km3.phone")}
                          </a>
                          <br />
                          {t("room_km3.contact2")}
                          <a className="ml-1" href={`mailto:${t("room_km3.email")}`}>
                            {t("room_km3.email")}
                          </a>
                          <br />
                          {t("room_km3.contact3")}
                          <a className="ml-1" href={`https://${t("room_km3.website")}`}>
                            {t("room_km3.website")}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service__content">
                <div className="room__content">
                  <div className="room__title">
                    {t("room_km3.location")}
                    <img
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                      className="style-line"
                    />
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <p style={{ fontSize: "1.4rem", paddingTop: "10px", textAlign:"left" }}>
                            {t("room_km3.locationContent")}
                          </p>
                          <div className="hotel__info">
                            <h1>{t("branch.km3")}</h1>
                            <p>
                              <i className="purple fa-solid fa-location-dot" />
                              {t("room_km3.address")}
                            </p>
                            <p>
                              <i className="purple fa fa-phone" />
                              {t("room_km3.tel")} :<a className="ml-1 purple" href={`tel:${t("room_km3.phone")}`}>
                              {t("room_km3.phone")}
                              </a>
                            </p>
                            <p>
                              <i className="purple fa fa-envelope" />
                              {t("room_km3.emailTitle")} :
                              <a className="ml-1 purple" href={`mailto:${t("room_km3.email")}`}>
                              {t("room_km3.email")}
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="room__container">
                          <div className="gg-map">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1425198025727!2d105.80795031540231!3d21.026982693213633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab6c8e38f813%3A0x8b329251df596aaf!2sAzumaya%20Kim%20M%C3%A3%203!5e0!3m2!1sen!2s!4v1575276143809!5m2!1sen!2s"
                              style={{ border: 0 }}
                              allowFullScreen
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </>
  );
}
