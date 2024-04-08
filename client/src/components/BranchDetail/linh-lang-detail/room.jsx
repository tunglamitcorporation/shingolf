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



export default function LLRoomDetail() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const receivedData = location.state;
  const roomFeature = t("room_ll.features", { returnObjects: true });
  const branchName = t("branch", { returnObjects: true });
  const ll = t("ll", { returnObjects: true });
  const a = t("branch.ll")
  const b = t("header.title")
  const c = a + " | "+ b

  const [startDate, setStartDate] = useState(receivedData ? receivedData.startDate : '');
  const [endDate, setEndDate] = useState(receivedData ? receivedData.endDate : '');
  const llSlider = t("room_ll.slider", {returnObjects: true})
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
    navigate('/reservation', { state: data });
  };
  const [selectedCity, setSelectedCity] = useState('hotel-hn');
  const [selectedBranch, setSelectedBranch] = useState('linh-lang-detail');
  
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
                alt={`${name} ${index} azumaya linh lang azumaya hotel ha noi`}
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
          {llSlider.map((item)=>(
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
                  {t("branch.ll")}
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
      <div className="container p-0">
        <ul
          className="row"
          style={{ justifyContent: "left", padding: "10px", textAlign:"justify" }}
        >
          <li className="service__location  col-md-12 col-lg-3 col-xl-3">
            <a href="/hai-ba-trung-detail/room" className="location_link">
              {t(branchName.hbt1)}
            </a>
          </li>
          <li className="service__location col-md-12 col-lg-3 col-xl-3">
            <a href="/kim-ma-2-detail/room" className="location_link">
              {t(branchName.km2)}
            </a>
          </li>
          <li className="service__location col-md-12 col-lg-3 col-xl-3">
            <a href="/kim-ma-2-detail/room" className="location_link">
              {t(branchName.km3)}
            </a>
          </li>
          <li className="service__location service__active col-md-12 col-lg-3 col-xl-3">
            <a href="/linh-lang-detail/room" className="location_link">
              {t(branchName.ll)}
            </a>
          </li>
        </ul>
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
                    {t("room_ll.room")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                    <p style={{ fontSize: "1.4rem", paddingTop: "10px" }}>
                      {t("room_ll.roomContent")}
                    </p>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                  {ll.map((item)=>(
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
                    {t("room_ll.tariff")}
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
                              style={{ width: "40%" }}
                              colSpan={2}
                              rowSpan={2}
                            >
                              {t("room_ll.type")}
                            </th>
                            <th style={{ width: "20%" }} rowSpan={2}>
                              {t("room_ll.rate")}
                            </th>
                            <th style={{ width: "20%" }} colSpan={4}>
                              {t("room_ll.desc")}
                            </th>
                          </tr>
                          <tr>
                            <th style={{ width: "10%" }}>
                              {t("room_ll.size")} m&#178;
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_ll.window")}
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_ll.bath")}
                            </th><th style={{ width: "10%" }}>
                              {t("room_ll.bed")}
                            </th>
                          </tr>
                          {ll.map((item) => (
                            <tr>
                              <td style={{ width: "5%" }}>{item.id}</td>
                              <td className="room__tariff-name">{item.name}</td>
                              <td>{item.price}</td>
                              <td>{item.size}</td>
                              <td>
                                <i
                                  className={classNames({
                                    "fa fa-times red": item.tick == false,
                                    "fa fa-check green": item.tick == true,
                                  })}
                                />
                              </td>
                              <td>
                                <i className="fa fa-check green" />
                              </td>
                              <td>
                                  {item.bed_size}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="required__note mt-4">
                      {t("room_ll.vat")}
                    </div>
                    <div className="room__service">
                      <div className="container p-0">
                        <div className="row">
                          <div className="col-md-4">
                            <h2>{t("room_ll.service")}</h2>
                            <p className="pre-line">
                              {t("room_ll.serviceContent")}
                            </p>
                          </div>
                          <div className="col-md-4">
                            <h2>{t("room_ll.facility")}</h2>
                            <p className="pre-line">
                              {t("room_ll.facilityContent")}
                            </p>
                          </div>
                          <div className="col-md-4">
                            <h2>{t("room_ll.rental")}</h2>
                            <p className="pre-line">
                              {t("room_ll.rentalContent")}
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
                    {t("room_ll.business")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                    <p style={{ fontSize: "1.4rem", paddingTop: "10px" }}>
                      {t("room_ll.businessContent")}
                    </p>
                  </div>
                  <div className="room__container">
                    <table className="room__table room__table-service">
                      <tbody>
                        <tr>
                          <th rowSpan={2}>{t("room_ll.pickup")}</th>
                          <td>{t("room_ll.pickup_fee1")}</td>
                          <td rowSpan={2}>{t("room_ll.pickup_car")}</td>
                        </tr>
                        <tr>
                          <td>{t("room_ll.pickup_fee2")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_ll.minibar")}</th>
                          <td>{t("room_ll.minibar_fee")}</td>
                          <td>{t("room_ll.minibar_type")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_ll.laundry")}</th>
                          <td>{t("room_ll.laundry_fee1")}</td>
                          <td>{t("room_ll.laundry_fee2")}</td>
                        </tr>
                        <tr>
                          <th rowSpan={2}>{t("room_ll.print")}</th>
                          <td colSpan={2}>{t("room_ll.print_fee1")}</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>{t("room_ll.print_fee2")}</td>
                        </tr>
                        <tr>
                          <th rowSpan={2}>{t("room_ll.tel")}</th>
                          <td colSpan={2}>{t("room_ll.tel_fee1")}</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>{t("room_ll.tel_fee2")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_ll.rental_car")}</th>
                          <td colSpan={2}>{t("room_ll.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_ll.tour")}</th>
                          <td colSpan={2}>{t("room_ll.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_ll.visa")}</th>
                          <td colSpan={2}>{t("room_ll.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_ll.food")}</th>
                          <td colSpan={2}>{t("room_ll.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_ll.roten")}</th>
                          <td className="pre-line" colSpan={2}>
                            {t("room_ll.rotenContent")}
                          </td>
                        </tr>
                        <tr>
                          <th>{t("room_ll.breakfast")}</th>
                          <td className="pre-line" colSpan={2}>
                            {t("room_ll.breakfastContent")}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="col-md-12">
                      <div className="table-footer">
                        <h1>{t("room_ll.board")}</h1>
                        <p className="mt-5">
                          {t("room_ll.contact1")}
                          <a className="ml-1" href={`tel:${t("room_ll.phone")}`}>
                          {t("room_ll.phone")}
                          </a>
                          <br />
                          {t("room_ll.contact2")}
                          <a className="ml-1" href={`mailto:${t("room_ll.email")}`}>
                            {t("room_ll.email")}
                          </a>
                          <br />
                          {t("room_ll.contact3")}
                          <a className="ml-1" href={`https://${t("room_ll.website")}`}>
                            {t("room_ll.website")}
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
                    {t("room_ll.location")}
                    <img
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                      className="style-line"
                    />
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <p style={{ fontSize: "1.4rem", paddingTop: "10px" , textAlign:"left"}}>
                            {t("room_ll.locationContent")}
                          </p>
                          <div className="hotel__info">
                            <h1>{t("branch.ll")}</h1>
                            <p>
                              <i className="purple fa-solid fa-location-dot" />
                              {t("room_ll.address")}
                            </p>
                            <p>
                              <i className="purple fa fa-phone" />
                              {t("room_ll.tel")} : <a className="ml-1 purple" href={`tel:${t("room_ll.phone")}`}>
                              {t("room_ll.phone")}
                              </a>
                            </p>
                            <p>
                              <i className="purple fa fa-envelope" />
                              {t("room_ll.emailTitle")} :
                              <a className="ml-1 purple" href={`mailto:${t("room_ll.email")}`}>
                              {t("room_ll.email")}
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="room__container">
                          <div className="gg-map">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59582.90076034504!2d105.74832752067798!3d21.03543478734608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab149718acdb%3A0xb77ce3d86ae19183!2sAzumaya%20Hotel%20Linh%20Lang!5e0!3m2!1sen!2s!4v1704439192351!5m2!1sen!2s"
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
