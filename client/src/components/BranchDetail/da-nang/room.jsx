import React from "react";
import {useState, useEffect } from "react";
import BookingRoom from "../../../container/BookingRoom/BookingRoom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, useLocation, useNavigate  } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classNames from "classnames";
import HelmetLayout from "../../HelmetLayout/HelmetLayout";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';    

export default function DNRoomDetail() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const receivedData = location.state;
  const roomFeature = t("room_dn.features", { returnObjects: true });
  const dnArea = t('dn-branch.slider', {returnObjects: true})
  const dn = t("dn", { returnObjects: true });
  const a = t("branch.dn")
  const b = t("header.title")
  const c = a + " | "+ b
  const AutoPlaySlider =  withAutoplay(AwesomeSlider) 

  const [startDate, setStartDate] = useState(receivedData ? receivedData.startDate : '');
  const [endDate, setEndDate] = useState(receivedData ? receivedData.endDate : '');

  const handleContinue = (selectedRoom) => {
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
  const [selectedCity, setSelectedCity] = useState('hotel-dn');
  const [selectedBranch, setSelectedBranch] = useState('da-nang');

  useEffect(() => {
    if (receivedData && receivedData.selectedCity) {
      setSelectedCity(receivedData.selectedCity);
    }
    if (receivedData && receivedData.selectedBranch) {
      setSelectedBranch(receivedData.selectedBranch);
    }
  }, [receivedData]);
  const [selectedRoom, setSelectedRoom] = useState(
    receivedData ? receivedData.selectedRoom : ""   
  );
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
                alt={`${name} ${index} azumaya danang azumaya hotel da nang` }
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
    <HelmetLayout title= {c} />
              <div className="area_header" >
              <AutoPlaySlider
              animation = "scaleOutAnimation"
              mobileTouch
              infinite
              play
              interval = {5000}>
          {dnArea.map((item)=>(
              <div data-src={item.image} style={{height:'120%'}}>
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
                <Link to="/">
                  <i className="fa-solid fa-house" />
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title" to="/hotel-dn">
                  {t("header.dn")}
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title" to ="/da-nang/room">
                  {t("branch.dn")}
                </Link>
              </li>
            </ul>
          </div>
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
                    {t("room_dn.room")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                    <p style={{ fontSize: "1.4rem", paddingTop: "10px", textAlign:"justify" }}>
                      {t("room_dn.roomContent")}
                    </p>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                  {dn.map((item)=>(
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
                    {t("room_dn.tariff")}
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
                              {t("room_dn.type")}
                            </th>
                            <th style={{ width: "20%" }} rowSpan={2}>
                              {t("room_dn.rate")}
                            </th>
                            <th style={{ width: "20%" }} colSpan={4}>
                              {t("room_dn.desc")}
                            </th>
                          </tr>
                          <tr>
                            <th style={{ width: "10%" }}>
                              {t("room_dn.size")} m&#178;
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_dn.window")}
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_dn.bath")}
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_dn.bed")}
                            </th>
                          </tr>
                          {dn.map((item) => {
                            return(
                                <tr>
                                  <td style={{ width: "5%" }}>{item.id}</td>
                                  <td className="room__tariff-name">{item.name}</td>
                                  <td>{item.price}</td>
                                  <td>{item.size}</td>
                                  <td>
                                     <i className={classNames({
                                        "fa fa-times red": item.tick_w == false,
                                        "fa fa-check green": item.tick_w == true,
                                      })} />
                                  </td>
                                  <td>
                                  <i className={classNames({
                                        "fa fa-times red": item.tick_b == false,
                                        "fa fa-check green": item.tick_b == true,
                                      })} />
                                  </td>
                                  <td style={{textTransform:"uppercase"}}>
                                    {item.bed}
                                  </td>
                                </tr>
                            )
                        
                        })}
                        </tbody>
                      </table>
                    </div>
                    <div className="required__note mt-4">
                      {t("room_dn.vat")}
                    </div>
                    <div className="room__service">
                      <div className="container p-0">
                        <div className="row">
                          <div className="col-md-4">
                            <h2>{t("room_dn.service")}</h2>
                            <p className="pre-line">
                              {t("room_dn.serviceContent")}
                            </p>
                          </div>
                          <div className="col-md-4">
                            <h2>{t("room_dn.facility")}</h2>
                            <p className="pre-line">
                              {t("room_dn.facilityContent")}
                            </p>
                          </div>
                          <div className="col-md-4">
                            <h2>{t("room_dn.rental")}</h2>
                            <p className="pre-line">
                              {t("room_dn.rentalContent")}
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
                    {t("room_dn.business")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                    <p style={{ fontSize: "1.4rem", paddingTop: "10px", textAlign:"justify" }}>
                      {t("room_dn.businessContent")}
                    </p>
                  </div>
                  <div className="room__container">
                    <table className="room__table room__table-service">
                      <tbody>
                        <tr>
                          <th rowSpan={2}>{t("room_dn.pickup")}</th>
                          <td>{t("room_dn.pickup_fee1")}</td>
                          <td rowSpan={2}>{t("room_dn.pickup_car")}</td>
                        </tr>
                        <tr>
                          <td>{t("room_dn.pickup_fee2")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_dn.minibar")}</th>
                          <td>{t("room_dn.minibar_fee")}</td>
                          <td>{t("room_dn.minibar_type")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_dn.laundry")}</th>
                          <td>{t("room_dn.laundry_fee1")}</td>
                          <td>{t("room_dn.laundry_fee2")}</td>
                        </tr>
                        <tr>
                          <th rowSpan={2}>{t("room_dn.print")}</th>
                          <td colSpan={2}>{t("room_dn.print_fee1")}</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>{t("room_dn.print_fee2")}</td>
                        </tr>
                        <tr>
                          <th rowSpan={2}>{t("room_dn.tel")}</th>
                          <td colSpan={2}>{t("room_dn.tel_fee1")}</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>{t("room_dn.tel_fee2")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_dn.rental_car")}</th>
                          <td colSpan={2}>{t("room_dn.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_dn.tour")}</th>
                          <td colSpan={2}>{t("room_dn.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_dn.visa")}</th>
                          <td colSpan={2}>{t("room_dn.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_dn.food")}</th>
                          <td colSpan={2}>{t("room_dn.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_dn.roten")}</th>
                          <td className="pre-line" colSpan={2}>
                            {t("room_dn.rotenContent")}
                          </td>
                        </tr>
                        <tr>
                          <th>{t("room_dn.breakfast")}</th>
                          <td className="pre-line" colSpan={2}>
                            {t("room_dn.breakfastContent")}
                          </td>
                        </tr>
                        <tr>
                          <th>{t("room_dn.massage")}</th>
                          <td className="pre-line" colSpan={2}>
                            {t("room_dn.massageContent")}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="col-md-12">
                      <div className="table-footer">
                        <h1>{t("room_dn.board")}</h1>
                        <p className="mt-5">
                          {t("room_dn.contact1")}
                          <a className="ml-1" href={`tel:${t("room_dn.phone")}`}>
                          {t("room_dn.phone")}
                          </a>
                          <br />
                          {t("room_dn.contact4")}
                          <a className="ml-1" href={`tel:${t("room_dn.phone")}`}>
                          {t("room_dn.hotline")}
                          </a>
                          <br />
                          {t("room_dn.contact2")}
                          <a className="ml-1" href={`mailto:${t("room_dn.email")}`}>
                            {t("room_dn.email")}
                          </a>
                          <br />
                          {t("room_dn.contact3")}
                          <a className="ml-1" href={`https://${t("room_dn.website")}`}>
                            {t("room_dn.website")}
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
                    {t("room_dn.location")}
                    <img
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                      className="style-line"
                    />
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <p style={{ fontSize: "1.4rem", paddingTop: "10px", textAlign:"justify" }}>
                            {t("room_dn.locationContent")}
                          </p>
                          <div className="hotel__info">
                            <h1>{t("branch.dn")}</h1>
                            <p>
                              <i className="purple fa-solid fa-location-dot" />
                              {t("room_dn.address")}
                            </p>
                            <p>
                              <i className="purple fa fa-phone" />
                              {t("room_dn.tel")} : <a className="ml-1 purple" href={`tel:${t("room_dn.phone")}`}>
                              {t("room_dn.phone")}
                              </a>
                            </p>
                            <p>
                              <i className="purple fa fa-envelope" />
                              {t("room_dn.emailTitle")} :{" "}
                              <a className="ml-1 purple" href={`mailto:${t("room_dn.email")}`}>
                            {t("room_dn.email")}
                             </a>
                            </p>
                          </div>
                        </div>
                        <div className="room__container">
                          <div className="gg-map">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.607453222497!2d108.21247711425566!3d16.08584744326651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142181558c6ded1%3A0xd9b07e55bf351cab!2sAzumaya+Hotel+Da+Nang!5e0!3m2!1svi!2s!4v1480501419661"
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
