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

export default function LTTRoomDetail() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const receivedData = location.state;
  const roomFeature = t("room_ltt.features", { returnObjects: true });
  const branchName = t("branch", { returnObjects: true });
  const ltt = t("ltt", { returnObjects: true });
  const a = t("branch.ltt")
  const b = t("header.title")
  const c = a + " | "+ b

  const [startDate, setStartDate] = useState(receivedData ? receivedData.startDate : '');
  const [endDate, setEndDate] = useState(receivedData ? receivedData.endDate : '');
  const lttSlider = t("room_ltt.slider", {returnObjects: true})
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
    navigate('/reservation', { state: data });
};
const [selectedCity, setSelectedCity] = useState('hotel-hcm');
  const [selectedBranch, setSelectedBranch] = useState('le-thanh-ton-detail');
  
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
                alt={`${name} ${index} azumaya le thanh ton azumaya hotel ho chi minh `}
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
                                        <i class="fa-solid fa-check purple mr-2"></i>
                                        {in4}
                                        <br />
                                        
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
    <HelmetLayout title= {c}/>
<div className="area_header" >
      <div className="overlay"></div>
      <AutoPlaySlider
      animation = "scaleOutAnimation"
      mobileTouch
      infinite
      play
      interval = {5000}>
  {lttSlider.map((item)=>(
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
                <Link className="breadcrumb__title" to="/hotel-hcm">
                  {t("header.hcm")}
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title" href="">
                  {t("branch.ltt")}
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
            <a href="/thai-van-lung-1-detail/room" className="location_link">
              {t(branchName.tvl1)}
            </a>
          </div>
          <div className="service__location col-md-12 col-lg-3 col-xl-3">
            <a href="/thai-van-lung-2-detail/room" className="location_link">
              {t(branchName.tvl2)}
            </a>
          </div>
          <div className="service__location service__active col-md-12 col-lg-3 col-xl-3">
            <a href="/le-thanh-ton-detail/room" className="location_link">
              {t(branchName.ltt)}
            </a>
          </div>
          <div className="service__location col-md-12 col-lg-3 col-xl-3">
            <a href="/annex-detail/room" className="location_link">
              {t(branchName.annex)}
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
                    {t("room_ltt.room")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                    <p style={{ fontSize: "1.4rem", paddingTop: "10px", textAlign:"justify" }}>
                      {t("room_ltt.roomContent")}
                    </p>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                  {ltt.map((item)=>(
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
                    {t("room_ltt.tariff")}
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
                              {t("room_ltt.type")}
                            </th>
                            <th style={{ width: "20%" }} rowSpan={2}>
                              {t("room_ltt.rate")}
                            </th>
                            <th style={{ width: "20%" }} colSpan={5}>
                              {t("room_ltt.desc")}
                            </th>
                          </tr>
                          <tr>
                            <th style={{ width: "10%" }}>
                              {t("room_ltt.size")} m&#178;
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_ltt.window")}
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_ltt.bath")}
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_ltt.terrace")}
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_ltt.bed")}
                            </th>
                          </tr>
                          {ltt.map((item) => {
                            return(
                                <tr>
                                  <td style={{ width: "5%" }}>{item.id}</td>
                                  <td className="room__tariff-name">{item.name}</td>
                                  <td>{item.price}</td>
                                  <td>{item.size}</td>
                                  <td>
                                    <i
                                      className="fa fa-check green" />
                                  </td>
                                  <td>
                                     <i className={classNames({
                                        "fa fa-times red": item.tick_b == false,
                                        "fa fa-check green": item.tick_b == true,
                                      })} />
                                  </td>
                                  <td>
                                  <i className={classNames({
                                        "fa fa-times red": item.tick_b == false,
                                        "fa fa-check green": item.tick_b == true,
                                      })} />
                                  </td>
                                  <td>
                                    {item.bed_size}
                                  </td>
                                </tr>
                            )
                        
                        })}
                        </tbody>
                      </table>
                    </div>
                    <div className="required__note mt-4">
                      {t("room_ltt.vat")}
                    </div>
                    <div className="room__service">
                      <div className="container p-0">
                        <div className="row">
                          <div className="col-md-4">
                            <h2>{t("room_ltt.service")}</h2>
                            <p className="pre-line">
                              {t("room_ltt.serviceContent")}
                            </p>
                          </div>
                          <div className="col-md-4">
                            <h2>{t("room_ltt.facility")}</h2>
                            <p className="pre-line">
                              {t("room_ltt.facilityContent")}
                            </p>
                          </div>
                          <div className="col-md-4">
                            <h2>{t("room_ltt.rental")}</h2>
                            <p className="pre-line">
                              {t("room_ltt.rentalContent")}
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
                    {t("room_ltt.business")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                    <p style={{ fontSize: "1.4rem", paddingTop: "10px", textAlign:"justify" }}>
                      {t("room_ltt.businessContent")}
                    </p>
                  </div>
                  <div className="room__container">
                    <table className="room__table room__table-service">
                      <tbody>
                        <tr>
                          <th rowSpan={2}>{t("room_ltt.pickup")}</th>
                          <td>{t("room_ltt.pickup_fee1")}</td>
                          <td rowSpan={2}>{t("room_ltt.pickup_car")}</td>
                        </tr>
                        <tr>
                          <td>{t("room_ltt.pickup_fee2")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_ltt.minibar")}</th>
                          <td>{t("room_ltt.minibar_fee")}</td>
                          <td>{t("room_ltt.minibar_type")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_ltt.laundry")}</th>
                          <td>{t("room_ltt.laundry_fee1")}</td>
                          <td>{t("room_ltt.laundry_fee2")}</td>
                        </tr>
                        <tr>
                          <th rowSpan={2}>{t("room_ltt.print")}</th>
                          <td colSpan={2}>{t("room_ltt.print_fee1")}</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>{t("room_ltt.print_fee2")}</td>
                        </tr>
                        <tr>
                          <th rowSpan={2}>{t("room_ltt.tel")}</th>
                          <td colSpan={2}>{t("room_ltt.tel_fee1")}</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>{t("room_ltt.tel_fee2")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_ltt.rental_car")}</th>
                          <td colSpan={2}>{t("room_ltt.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_ltt.tour")}</th>
                          <td colSpan={2}>{t("room_ltt.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_ltt.visa")}</th>
                          <td colSpan={2}>{t("room_ltt.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_ltt.food")}</th>
                          <td colSpan={2}>{t("room_ltt.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_ltt.roten")}</th>
                          <td className="pre-line" colSpan={2}>
                            {t("room_ltt.rotenContent")}
                          </td>
                        </tr>
                        <tr>
                          <th>{t("room_ltt.breakfast")}</th>
                          <td className="pre-line" colSpan={2}>
                            {t("room_ltt.breakfastContent")}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="col-md-12">
                      <div className="table-footer">
                        <h1>{t("room_ltt.board")}</h1>
                        <p className="mt-5">
                          {t("room_ltt.contact1")}
                          <a className="ml-1" href={`tel:${t("room_ltt.phone")}`}>
                          {t("room_ltt.phone")}
                          </a>
                          <br />
                          {t("room_ltt.contact2")}
                          <a className="ml-1" href={`mailto:${t("room_ltt.email")}`}>
                            {t("room_ltt.email")}
                          </a>
                          <br />
                          {t("room_ltt.contact3")}
                          <a className="ml-1" href={`https://${t("room_ltt.website")}`}>
                            {t("room_ltt.website")}
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
                    {t("room_ltt.location")}
                    <img
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                      className="style-line"
                    />
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <p style={{ fontSize: "1.4rem", paddingTop: "10px", textAlign:"justify" }}>
                            {t("room_ltt.locationContent")}
                          </p>
                          <div className="hotel__info">
                            <h1>{t("branch.ltt")}</h1>
                            <p>
                              <i className="purple fa-solid fa-location-dot" />
                              {t("room_ltt.address")}
                            </p>
                            <p>
                              <i className="purple fa fa-phone" />
                              {t("room_ltt.tel")} : <a className="ml-1 purple" href={`tel:${t("room_ltt.phone")}`}>
                              {t("room_ltt.phone")}
                              </a>
                            </p>
                            <p>
                              <i className="purple fa fa-envelope" />
                              {t("room_ltt.emailTitle")} :{" "}
                              <a className="ml-1 purple" href={`mailto:${t("room_ltt.email")}`}>
                            {t("room_ltt.email")}
                             </a>
                            </p>
                          </div>
                        </div>
                        <div className="room__container">
                          <div className="gg-map">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d244.96238500598545!2d106.704948!3d10.780786!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x67e160ffb3c3584!2sAzumaya!5e0!3m2!1sja!2sus!4v1482111022771"
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
