import Booking from "../Booking";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RoomCarousel from "../Carousel";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../JSON/data.json"
import classNames from "classnames";

export default function HNRoomDetail() {
  const { t } = useTranslation();
  const roomFeature = t("room.features", { returnObjects: true });
  const branchHN = t("hn-branch.branch", { returnObjects: true });
  const branchName = t("branch", { returnObjects: true });
  const cityName = t("header", { returnObjects: true });
  const room = t("room", { returnObjects: true });
  const hbt1 = t("hbt1", { returnObjects: true });
  const room0 = t("hbt1.0", { returnObjects: true })
  const room1 = t("hbt1.1", { returnObjects: true })
  const room2 = t("hbt1.2", { returnObjects: true })
  const room3 = t("hbt1.3", { returnObjects: true })
  const room4 = t("hbt1.4", { returnObjects: true })
  const room5 = t("hbt1.5", { returnObjects: true })
  const room6 = t("hbt1.6", { returnObjects: true })
  const room7 = t("hbt1.7", { returnObjects: true })
console.log(branchHN);
  return (
    <>
      <div className="policies__header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
                <h1>{t("branch.hbt1")}</h1>
              </div>
            </div>
          </div>
        </div>
      <div className="is-sticky">
        <Booking />
      </div>  
      <div className="container">
        <div className="row">
          <div className="col-md-12" />
          <div className="re__breadcrumb">
            <ul className="breadcrumb__list">
              <li className="breadcrumb__item">
                <Link to="/Home">
                  <i className="fa-solid fa-house" />
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title" to="/BrandDetail">
                  {t("header.hn")}
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title" href="">
                  {t("branch.hbt1")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Tabs selectedTabClassName="service__active" className="container-fluid">
        <TabList className="row" style={{ justifyContent: "space-around", padding:'10px' }}>
          {branchHN.map((item) => (
            <Tab className="service__location col-md-2"><a className="location_link">{item.name}</a></Tab>
          ))}
        </TabList>

        <TabPanel>
          <Tabs
            selectedTabClassName="service__active"
            className="col-md-10 offset-md-1"
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
                    {t("room.room")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                    <p style={{ fontSize: "1.4rem", paddingTop: "10px" }}>
                    {t("room.roomContent")}
                    </p>
                  </div>
                </div>
                <div className="container">
                  <div className="row">   
                    <div className="col-md-6">
                      <div className="room-item">
                          <Carousel 
                        showArrows 
                        showThumbs={false} 
                        showStatus={false} 
                        emulateTouch 
                        stopOnHover 
                        autoPlay 
                        infiniteLoop
                        >
                          {data.image0.map((item)=>(
                            <img src={item} alt="" />
                          ))}
                        </Carousel>
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <div className="card-title room-name">
                                  {room0.name}
                                </div>
                                <table className="room__des-table">
                                  <tr>
                                    <th>{room0.sizeTitle}</th>
                                    <td className="installation">{room0.size}m&#178;</td>
                                  </tr>
                                  <tr>
                                    <th>{room0.bedTitle}</th>
                                    <td className="installation">{room0.bed}</td>
                                  </tr>
                                  <tr>
                                    <th>{room0.install}</th>
                                    <td className="installation">
                                    <i class="fa-solid fa-check purple"></i>{room0.in1}<br/><i class="fa-solid fa-check purple"></i>{room0.in2}<br/><i class="fa-solid fa-check purple"></i>{room0.in3}<br/><i class="fa-solid fa-check purple"></i>{room0.in4}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room0.priceTitle}</th>
                                    <td className="installation">{room0.price}</td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                         <button className="btn__reserve p-0 m-0">
                          <Link to = "/Reservation"
                            style={{ textDecoration: "none", color: "white" }}>
                            {t("room.reservation")}
                          </Link>
                        </button>
                      </div>
                    </div>    
                    <div className="col-md-6">
                      <div className="room-item">
                          <Carousel 
                        showArrows 
                        showThumbs={false} 
                        showStatus={false} 
                        emulateTouch 
                        stopOnHover 
                        autoPlay 
                        infiniteLoop
                        >
                          {data.image1.map((item)=>(
                            <img src={item} alt="" />
                          ))}
                        </Carousel>
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <div className="card-title room-name">
                                  {room1.name}
                                </div>
                                <table className="room__des-table">
                                  <tr>
                                    <th>{room1.sizeTitle}</th>
                                    <td className="installation">{room1.size}m&#178;</td>
                                  </tr>
                                  <tr>
                                    <th>{room1.bedTitle}</th>
                                    <td className="installation">{room1.bed}</td>
                                  </tr>
                                  <tr>
                                    <th>{room1.install}</th>
                                    <td className="installation">
                                    <i class="fa-solid fa-check purple"></i>{room1.in1}<br/><i class="fa-solid fa-check purple"></i>{room1.in2}<br/><i class="fa-solid fa-check purple"></i>{room1.in3}<br/><i class="fa-solid fa-check purple"></i>{room1.in4}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room1.priceTitle}</th>
                                    <td className="installation">{room1.price}</td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                         <button className="btn__reserve p-0 m-0">
                          <Link to = "/Reservation"
                            style={{ textDecoration: "none", color: "white" }}>
                            {t("room.reservation")}
                          </Link>
                        </button>
                      </div>
                    </div> 
                    <div className="col-md-6">
                      <div className="room-item">
                          <Carousel 
                        showArrows 
                        showThumbs={false} 
                        showStatus={false} 
                        emulateTouch 
                        stopOnHover 
                        autoPlay 
                        infiniteLoop>
                          {data.image2.map((item)=>(
                            <img src={item} alt="" />
                          ))}
                        </Carousel>
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <div className="card-title room-name">
                                  {room2.name}
                                </div>
                                <table className="room__des-table">
                                  <tr>
                                    <th>{room2.sizeTitle}</th>
                                    <td className="installation">{room2.size}m&#178;</td>
                                  </tr>
                                  <tr>
                                    <th>{room2.bedTitle}</th>
                                    <td className="installation">{room2.bed}</td>
                                  </tr>
                                  <tr>
                                    <th>{room2.install}</th>
                                    <td className="installation">
                                    <i class="fa-solid fa-check purple"></i>{room2.in1}<br/><i class="fa-solid fa-check purple"></i>{room2.in2}<br/><i class="fa-solid fa-check purple"></i>{room2.in3}<br/><i class="fa-solid fa-check purple"></i>{room2.in4}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room2.priceTitle}</th>
                                    <td className="installation">{room2.price}</td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                         <button className="btn__reserve p-0 m-0">
                          <Link to = "/Reservation"
                            style={{ textDecoration: "none", color: "white" }}>
                            {t("room.reservation")}
                          </Link>
                        </button>
                      </div>
                    </div> 
                    <div className="col-md-6">
                      <div className="room-item">
                          <Carousel 
                        showArrows 
                        showThumbs={false} 
                        showStatus={false} 
                        emulateTouch 
                        stopOnHover 
                        autoPlay 
                        infiniteLoop>
                          {data.image3.map((item)=>(
                            <img src={item} alt="" />
                          ))}
                        </Carousel>
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <div className="card-title room-name">
                                  {room3.name}
                                </div>
                                <table className="room__des-table">
                                  <tr>
                                    <th>{room3.sizeTitle}</th>
                                    <td className="installation">{room3.size}m&#178;</td>
                                  </tr>
                                  <tr>
                                    <th>{room3.bedTitle}</th>
                                    <td className="installation">{room3.bed}</td>
                                  </tr>
                                  <tr>
                                    <th>{room3.install}</th>
                                    <td className="installation">
                                    <i class="fa-solid fa-check purple"></i>{room3.in1}<br/><i class="fa-solid fa-check purple"></i>{room3.in2}<br/><i class="fa-solid fa-check purple"></i>{room3.in3}<br/><i class="fa-solid fa-check purple"></i>{room3.in4}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room3.priceTitle}</th>
                                    <td className="installation">{room3.price}</td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                         <button className="btn__reserve p-0 m-0">
                          <Link to = "/Reservation"
                            style={{ textDecoration: "none", color: "white" }}>
                            {t("room.reservation")}
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="room-item">
                          <Carousel 
                        showArrows 
                        showThumbs={false} 
                        showStatus={false} 
                        emulateTouch 
                        stopOnHover 
                        autoPlay 
                        infiniteLoop>
                          {data.image4.map((item)=>(
                            <img src={item} alt="" />
                          ))}
                        </Carousel>
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <div className="card-title room-name">
                                  {room4.name}
                                </div>
                                <table className="room__des-table">
                                  <tr>
                                    <th>{room4.sizeTitle}</th>
                                    <td className="installation">{room4.size}m&#178;</td>
                                  </tr>
                                  <tr>
                                    <th>{room4.bedTitle}</th>
                                    <td className="installation">{room4.bed}</td>
                                  </tr>
                                  <tr>
                                    <th>{room4.install}</th>
                                    <td className="installation">
                                    <i class="fa-solid fa-check purple"></i>{room4.in1}<br/><i class="fa-solid fa-check purple"></i>{room4.in2}<br/><i class="fa-solid fa-check purple"></i>{room4.in3}<br/><i class="fa-solid fa-check purple"></i>{room4.in4}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room4.priceTitle}</th>
                                    <td className="installation">{room4.price}</td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                         <button className="btn__reserve p-0 m-0">
                          <Link to = "/Reservation"
                            style={{ textDecoration: "none", color: "white" }}>
                            {t("room.reservation")}
                          </Link>
                        </button>
                      </div>
                    </div> 
                    <div className="col-md-6">
                      <div className="room-item">
                          <Carousel 
                        showArrows 
                        showThumbs={false} 
                        showStatus={false} 
                        emulateTouch 
                        stopOnHover 
                        autoPlay 
                        infiniteLoop>
                          {data.image5.map((item)=>(
                            <img src={item} alt="" />
                          ))}
                        </Carousel>
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <div className="card-title room-name">
                                  {room5.name}
                                </div>
                                <table className="room__des-table">
                                  <tr>
                                    <th>{room5.sizeTitle}</th>
                                    <td className="installation">{room5.size}m&#178;</td>
                                  </tr>
                                  <tr>
                                    <th>{room5.bedTitle}</th>
                                    <td className="installation">{room5.bed}</td>
                                  </tr>
                                  <tr>
                                    <th>{room5.install}</th>
                                    <td className="installation">
                                    <i class="fa-solid fa-check purple"></i>{room5.in1}<br/><i class="fa-solid fa-check purple"></i>{room5.in2}<br/><i class="fa-solid fa-check purple"></i>{room5.in3}<br/><i class="fa-solid fa-check purple"></i>{room5.in4}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room5.priceTitle}</th>
                                    <td className="installation">{room5.price}</td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                         <button className="btn__reserve p-0 m-0">
                          <Link to = "/Reservation"
                            style={{ textDecoration: "none", color: "white" }}>
                            {t("room.reservation")}
                          </Link>
                        </button>
                      </div>
                    </div>   
                    <div className="col-md-6">
                      <div className="room-item">
                          <Carousel 
                        showArrows 
                        showThumbs={false} 
                        showStatus={false} 
                        emulateTouch 
                        stopOnHover 
                        autoPlay 
                        infiniteLoop>
                          {data.image6.map((item)=>(
                            <img src={item} alt="" />
                          ))}
                        </Carousel>
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <div className="card-title room-name">
                                  {room6.name}
                                </div>
                                <table className="room__des-table">
                                  <tr>
                                    <th>{room6.sizeTitle}</th>
                                    <td className="installation">{room6.size}m&#178;</td>
                                  </tr>
                                  <tr>
                                    <th>{room6.bedTitle}</th>
                                    <td className="installation">{room6.bed}</td>
                                  </tr>
                                  <tr>
                                    <th>{room6.install}</th>
                                    <td className="installation">
                                    <i class="fa-solid fa-check purple"></i>{room6.in1}<br/><i class="fa-solid fa-check purple"></i>{room6.in2}<br/><i class="fa-solid fa-check purple"></i>{room6.in3}<br/><i class="fa-solid fa-check purple"></i>{room6.in4}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room6.priceTitle}</th>
                                    <td className="installation">{room6.price}</td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                         <button className="btn__reserve p-0 m-0">
                          <Link to = "/Reservation"
                            style={{ textDecoration: "none", color: "white" }}>
                            {t("room.reservation")}
                          </Link>
                        </button>
                      </div>
                    </div> 
                    <div className="col-md-6">
                      <div className="room-item">
                          <Carousel 
                        showArrows 
                        showThumbs={false} 
                        showStatus={false} 
                        emulateTouch 
                        stopOnHover 
                        autoPlay 
                        infiniteLoop
                        >
                          {data.image7.map((item)=>(
                            <img src={item} alt="" />
                          ))}
                        </Carousel>
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <div className="card-title room-name">
                                  {room7.name}
                                </div>
                                <table className="room__des-table">
                                  <tr>
                                    <th>{room7.sizeTitle}</th>
                                    <td className="installation">{room7.size}m&#178;</td>
                                  </tr>
                                  <tr>
                                    <th>{room7.bedTitle}</th>
                                    <td className="installation">{room7.bed}</td>
                                  </tr>
                                  <tr>
                                    <th>{room7.install}</th>
                                    <td className="installation">
                                    <i class="fa-solid fa-check purple"></i>{room7.in1}<br/><i class="fa-solid fa-check purple"></i>{room7.in2}<br/><i class="fa-solid fa-check purple"></i>{room7.in3}<br/><i class="fa-solid fa-check purple"></i>{room7.in4}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room7.priceTitle}</th>
                                    <td className="installation">{room7.price}</td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                         <button className="btn__reserve p-0 m-0">
                          <Link to = "/Reservation"
                            style={{ textDecoration: "none", color: "white" }}>
                            {t("room.reservation")}
                          </Link>
                        </button>
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
                  {t("room.tariff")}
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
                          <th style={{width:'40%'}} colSpan={2} rowSpan={2}>
                          {t("room.type")}
                          </th>
                          <th style={{width:'20%'}} rowSpan={2}>{t("room.rate")}</th>
                          <th style={{width:'20%'}} colSpan={3}>{t("room.desc")}</th>
                        </tr>
                        <tr>
                          <th style={{width:'10%'}}>{t("room.size")} m&#178;</th>
                          <th style={{width:'10%'}}>{t("room.window")}</th>
                          <th style={{width:'10%'}}>{t("room.bath")}</th>
                        </tr>
                        {hbt1.map((item)=>(
                        <tr>
                          <td style={{width:'5%'}}>{item.id}</td>
                          <td className="room__tariff-name">{item.name}</td>
                          <td>{item.price}</td>
                          <td>{item.size}</td>
                          <td>
                            <i className={classNames({
                              "fa fa-times red":item.tick == false,
                              "fa fa-check green":item.tick == true})}  
                              />
                          </td>
                          <td>
                            <i className="fa fa-check green" />
                          </td>
                        </tr>
                        ))}
                      </tbody>
                    </table>
                    </div>
                    <div className="required__note mt-4">
                    {t("room.vat")}
                    </div>
                    <div className="room__service">
                      <div className="container p-0">
                        <div className="row">
                          <div className="col-md-4">
                            <h2>{t("room.service")}</h2>
                            <p className="pre-line">
                              {t("room.serviceContent")}
                            </p>
                          </div>
                          <div className="col-md-4">
                            <h2>{t("room.facility")}</h2>
                            <p className="pre-line">
                            {t("room.facilityContent")}
                            </p>
                          </div>
                          <div className="col-md-4">
                            <h2>{t("room.rental")}</h2>
                            <p className="pre-line">
                            {t("room.rentalContent")}
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
                  {t("room.business")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                    <p style={{ fontSize: "1.4rem", paddingTop: "10px" }}>
                    {t("room.businessContent")}
                    </p>
                  </div>
                  <div className="room__container">
                    <table className="room__table room__table-service">
                      <tbody>
                        <tr>
                          <th rowSpan={2}>{t("room.pickup")}</th>
                          <td>{t("room.pickup_fee1")}</td>
                          <td rowSpan={2}>{t("room.pickup_car")}</td>
                        </tr>
                        <tr>
                          <td>{t("room.pickup_fee2")}</td>
                        </tr>
                        <tr>
                          <th>{t("room.minibar")}</th>
                          <td>{t("room.minibar_fee")}</td>
                          <td>{t("room.minibar_type")}</td>
                        </tr>
                        <tr>
                          <th>{t("room.laundry")}</th>
                          <td>{t("room.laundry_fee1")}</td>
                          <td>{t("room.laundry_fee2")}</td>
                        </tr>
                        <tr>
                          <th rowSpan={2}>{t("room.print")}</th>
                          <td colSpan={2}>{t("room.print_fee1")}</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                          {t("room.print_fee2")}
                          </td>
                        </tr>
                        <tr>
                          <th rowSpan={2}>{t("room.tel")}</th>
                          <td colSpan={2}>{t("room.tel_fee1")}</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                          {t("room.tel_fee2")}
                          </td>
                        </tr>
                        <tr>
                          <th>{t("room.rental_car")}</th>
                          <td colSpan={2}>{t("room.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room.tour")}</th>
                          <td colSpan={2}>{t("room.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room.visa")}</th>
                          <td colSpan={2}>{t("room.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room.food")}</th>
                          <td colSpan={2}>{t("room.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room.roten")}</th>
                          <td className="pre-line" colSpan={2}>
                          {t("room.rotenContent")}
                          </td>
                        </tr>
                        <tr>
                          <th>{t("room.breakfast")}</th>
                          <td className="pre-line" colSpan={2}>
                          {t("room.breakfastContent")}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                        <div className="col-md-12">
                          <div className="table-footer">
                            <h1>{t("room.board")}</h1>
                            <p className="mt-5">
                              {t("room.contact1")}
                              <a className="ml-1" href="http://">{t("room.phone")}</a> <br />
                              {t("room.contact2")}
                              <a className="ml-1" href="http://">
                              {t("room.email")}
                              </a>
                              <br />
                              {t("room.contact3")} 
                              <a className="ml-1" href="http://">{t("room.website")}</a>
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
                  {t("room.location")}
                    <img
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                      className="style-line"
                    />
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <p style={{ fontSize: "1.4rem", paddingTop: "10px" }}>
                          {t("room.locationContent")}
                          </p>
                          <div className="hotel__info">
                            <h1>{t("branch.hbt1")}</h1>
                            <p>
                              <i className="purple fa-solid fa-location-dot" />
                              {t("room.address")}
                            </p>
                            <p>
                              <i className="purple fa fa-phone" />
                              {t("room.tel")} {t("room.phone")}
                            </p>
                            <p>
                              <i className="purple fa fa-envelope" />
                              {t("room.emailTitle")}: {t("room.email")}
                            </p>
                          </div>
                        </div>
                        <div className="room__container">
                          <div className="gg-map">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.195372793994!2d105.84877970794305!3d21.01704575027471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab8d06272085%3A0xa2c488173a2bd380!2sAzumaya+Hotel+Ha+Noi!5e0!3m2!1svi!2s!4v1480500914009"
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
