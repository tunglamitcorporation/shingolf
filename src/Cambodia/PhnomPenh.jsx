import Booking from "./Booking";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../JSON/data.json";
import classNames from "classnames";
import GalleryPP from "../FancyBox/PhnomPenh/GalleryPP";

export default function PhnomPenhRoomDetail() {
  const { t } = useTranslation();
  const roomFeature = t("room_pp.features", { returnObjects: true });
  const branchName = t("branch", { returnObjects: true });
  const cityName = t("header", { returnObjects: true });
  const room = t("room_pp", { returnObjects: true });
  const pp = t("pp", { returnObjects: true });
  const room0 = t("pp.0", { returnObjects: true });
  const room1 = t("pp.1", { returnObjects: true });
  const room2 = t("pp.2", { returnObjects: true });
  const room3 = t("pp.3", { returnObjects: true });
  const room4 = t("pp.4", { returnObjects: true });

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const initialActiveTab = parseInt(params.get('tab'), 10) || 0;
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
      <div className="service__header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t("branch.pp")}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="is-sticky">
        <Booking />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <div className="re__breadcrumb">
            <ul className="breadcrumb__list">
              <li className="breadcrumb__item">
                <Link to="/Cambodia/Cambodia">
                  <i className="fa-solid fa-house" />
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title" to="/HNBranch">
                  {t("header.cambodia")}
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title" href="">
                  {t("branch.pp")}
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
        <Tabs className="container-fluid">
        <TabPanel>
          <Tabs
            defaultIndex={activeTab}
            onSelect={handleTabSelect}
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
                    {t("room_pp.room")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                    <p style={{ fontSize: "1.4rem", paddingTop: "10px" }}>
                      {t("room_pp.roomContent")}
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
                          {data.diw_pp.map((item) => (
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
                                    <td className="installation">
                                      {room0.size}m&#178;
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room0.bedTitle}</th>
                                    <td className="installation">
                                      {room0.bed}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room0.install}</th>
                                    <td className="installation">
                                      <i class="fa-solid fa-check purple"></i>
                                      {room0.in1}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room0.in2}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room0.in3}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room0.in4}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room0.in5}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room0.in6}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room0.in7}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room0.in8}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room0.in9}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room0.in10}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room0.in11}
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room0.priceTitle}</th>
                                    <td className="installation bold">
                                      {room0.price}
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="btn__reserve p-0 m-0">
                          <Link
                            to="/Reservation"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            {t("room_pp.reservation")}
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
                          {data.d_pp.map((item) => (
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
                                    <td className="installation">
                                      {room1.size}m&#178;
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room1.bedTitle}</th>
                                    <td className="installation">
                                      {room1.bed}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room1.install}</th>
                                    <td className="installation">
                                      <i class="fa-solid fa-check purple"></i>
                                      {room1.in1}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room1.in2}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room1.in3}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room1.in4}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room1.in5}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room1.in6}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room1.in7}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room1.in8}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room1.in9}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room1.in10}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room1.in11}
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room1.priceTitle}</th>
                                    <td className="installation bold">
                                      {room1.price}
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="btn__reserve p-0 m-0">
                          <Link
                            to="/Reservation"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            {t("room_pp.reservation")}
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
                          {data.dt_pp.map((item) => (
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
                                    <td className="installation">
                                      {room2.size}m&#178;
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room2.bedTitle}</th>
                                    <td className="installation">
                                      {room2.bed}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room2.install}</th>
                                    <td className="installation">
                                      <i class="fa-solid fa-check purple"></i>
                                      {room2.in1}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room2.in2}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room2.in3}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room2.in4}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room2.in5}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room2.in6}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room2.in7}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room2.in8}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room2.in9}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room2.in10}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room2.in11}
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room2.priceTitle}</th>
                                    <td className="installation bold">
                                      {room2.price}
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="btn__reserve p-0 m-0">
                          <Link
                            to="/Reservation"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            {t("room_pp.reservation")}
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
                          {data.df_pp.map((item) => (
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
                                    <td className="installation">
                                      {room3.size}m&#178;
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room3.bedTitle}</th>
                                    <td className="installation">
                                      {room3.bed}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room3.install}</th>
                                    <td className="installation">
                                      <i class="fa-solid fa-check purple"></i>
                                      {room3.in1}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room3.in2}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room3.in3}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room3.in4}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room3.in5}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room3.in6}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room3.in7}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room3.in8}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room3.in9}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room3.in10}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room3.in11}
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room3.priceTitle}</th>
                                    <td className="installation bold">
                                      {room3.price}
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="btn__reserve p-0 m-0">
                          <Link
                            to="/Reservation"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            {t("room_pp.reservation")}
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
                          {data.e_pp.map((item) => (
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
                                    <td className="installation">
                                      {room4.size}m&#178;
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room4.bedTitle}</th>
                                    <td className="installation">
                                      {room4.bed}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room4.install}</th>
                                    <td className="installation">
                                      <i class="fa-solid fa-check purple"></i>
                                      {room4.in1}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room4.in2}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room4.in3}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room4.in4}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room4.in5}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room4.in6}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room4.in7}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room4.in8}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room4.in9}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room4.in10}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room4.in11}
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room4.priceTitle}</th>
                                    <td className="installation bold">
                                      {room4.price}
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="btn__reserve p-0 m-0">
                          <Link
                            to="/Reservation"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            {t("room_pp.reservation")}
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
                    {t("room_pp.tariff")}
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
                              {t("room_pp.type")}
                            </th>
                            <th style={{ width: "20%" }} rowSpan={2}>
                              {t("room_pp.rate")}
                            </th>
                            <th style={{ width: "20%" }} colSpan={4}>
                              {t("room_pp.desc")}
                            </th>
                          </tr>
                          <tr>
                            <th style={{ width: "10%" }}>
                              {t("room_pp.size")} m&#178;
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_pp.window")}
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_pp.bath")}
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_pp.bed")}
                            </th>
                            
                          </tr>
                          {pp.map((item) => (
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
                                {item.bed}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="required__note mt-4">
                      {t("room_pp.vat")}
                    </div>
                    <div className="room__service">
                      <div className="container p-0">
                        <div className="row">
                          <div className="col-md-4">
                            <h2>{t("room_pp.service")}</h2>
                            <p className="pre-line">
                              {t("room_pp.serviceContent")}
                            </p>
                          </div>
                          <div className="col-md-4">
                            <h2>{t("room_pp.facility")}</h2>
                            <p className="pre-line">
                              {t("room_pp.facilityContent")}
                            </p>
                          </div>
                          <div className="col-md-4">
                            <h2>{t("room_pp.rental")}</h2>
                            <p className="pre-line">
                              {t("room_pp.rentalContent")}
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
                    {t("room_pp.business")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                    <p style={{ fontSize: "1.4rem", paddingTop: "10px" }}>
                      {t("room_pp.businessContent")}
                    </p>
                  </div>
                  <div className="room__container">
                    <table className="room__table room__table-service">
                      <tbody>
                        <tr>
                          <th rowSpan={2}>{t("room_pp.pickup")}</th>
                          <td>{t("room_pp.pickup_fee1")}</td>
                          <td>{t("room_pp.pickup_car")}</td>
                        </tr>
                        <tr>
                          <td>{t("room_pp.pickup_fee2")}</td>
                          <td>{t("room_pp.pickup_car2")}</td>

                        </tr>
                        <tr>
                          <th>{t("room_pp.minibar")}</th>
                          <td>{t("room_pp.minibar_fee")}</td>
                          <td>{t("room_pp.minibar_type")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_pp.laundry")}</th>
                          <td>{t("room_pp.laundry_fee1")}</td>
                          
                          <td>{t("room_pp.laundry_fee2")}</td>
                        </tr>
                        <tr>
                          <th rowSpan={2}>{t("room_pp.print")}</th>
                          <td colSpan={2}>{t("room_pp.print_fee1")}</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="col-md-12">
                      <div className="table-footer">
                        <h1>{t("room_pp.board")}</h1>
                        <p className="mt-5">
                          {t("room_pp.contact1")}
                          <a className="ml-1" href={`tel:${t("room_pp.phone")}`}>
                          {t("room_pp.phone")}
                          </a>
                          <br />
                          {t("room_pp.contact2")}
                          <a className="ml-1" href={`mailto:${t("room_pp.email")}`}>
                            {t("room_pp.email")}
                          </a>
                          <br />
                          {t("room_pp.contact3")}
                          <a className="ml-1" href={`https://${t("room_pp.website")}`}>
                            {t("room_pp.website")}
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
                    {t("room_pp.hotelService")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                  </div>
                  <div className="room__container">
                    <table className="room__table room__table-service pre-line">
                      <tbody>
                        <tr>
                          <th rowSpan={6}>{t("room_pp.breakfast")}</th>
                          <td colSpan={2}>{t("room_pp.ground")}</td>
                          <td rowSpan={6}>{t("room_pp.visitor")}</td>
                        </tr>
                        <tr>
                          <td style={{width:"10%"}}>{t("room_pp.weekday")}</td>
                          <td>
                            <strong>{t("room_pp.breakfastContent1")}</strong>
                            </td>
                        </tr>
                        <tr>
                        <td style={{width:"10%"}} rowSpan={2}>{t("room_pp.weekend")}</td>
                        <td>                            
                          <strong>{t("room_pp.breakfastContent2")}</strong>
                          </td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                          <td colSpan={2}>{t("room_pp.breakfastNote1")}</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>{t("room_pp.breakfastNote2")}</td>
                        </tr>
                        <tr>
                          <th rowSpan={10}>{t("room_pp.rotenburo")}</th>
                          <td colSpan={2}>{t("room_pp.rotenFloor")}</td>
                          <td rowSpan={10}></td>
                        </tr>
                        <tr>
                        <td style={{width:"10%"}} rowSpan={4}>{t("room_pp.weekday")}</td>
                        <td>                            
                          <strong>{t("room_pp.rotenContent1")}</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>{t("room_pp.rotenNote1")}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>{t("room_pp.rotenContent2")}</strong>
                            </td>
                        </tr>
                        <tr>
                          <td>{t("room_pp.rotenNote2")}</td>
                        </tr>
                        <tr>
                        <td style={{width:"10%"}} rowSpan={2}>{t("room_pp.weekend")}</td>
                        <td>                            
                          <strong>{t("room_pp.rotenContent3")}</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>{t("room_pp.rotenNote2")}</td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <strong>
                            {t("room_pp.rotenNote3")}
                            </strong>
                            </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>{t("room_pp.rotenNote4")}</td>
                        </tr>
                       <tr>
                        <th rowSpan={5}>{t("room_pp.massage")}</th>
                        <td colSpan={2}>{t("room_pp.rotenFloor")}</td>
                        <td rowSpan={5}>{t("room_pp.massageVisitor")}</td>
                       </tr>
                       <tr>
                        <td style={{width:"10%"}} rowSpan={2}>{t("room_pp.weekday")}</td>
                        <td>
                        <strong>
                        {t("room_pp.massageContent1")}
                        </strong>
                        </td>
                       </tr>
                       <tr>
                        <td>{t("room_pp.massageNote1")}</td>
                       </tr>
                       <tr>
                        <td rowSpan={2} style={{width:"10%"}}>{t("room_pp.weekend")}</td>
                        <td>
                          <strong>
                          {t("room_pp.massageContent2")}
                          </strong>
                        </td>
                       </tr>
                       <tr>
                        <td>{t("room_pp.massageNote1")}</td>
                       </tr>
                       <tr>
                       </tr>
                       <tr>
                          <th>{t("room_pp.reception")}</th>
                          <td colSpan={2}>{t("room_pp.receptionAsk")}</td>
                          <td></td>
                       </tr>
                      </tbody>
                    </table>
                    <div className="col-md-12">
                      <div className="table-footer pre-line">
                        <h1>{t("room_pp.attention")}</h1>
                        <p className="mt-5">
                          {t("room_pp.attentionContent")}
                        </p>
                        <p className="bold">
                          {t("room_pp.thanks")}
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
                    {t("room_pp.gallery")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                  </div>
                  <div className="room__container">
              <GalleryPP />
              </div>
              </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service__content" >
                <div className="room__content">
                  <div className="room__title">
                    {t("room_pp.location")}
                    <img
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                      className="style-line"
                    />
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <p style={{ fontSize: "1.4rem", paddingTop: "10px", textAlign:"left" }}>
                            {t("room_pp.locationContent")}
                          </p>
                          <div className="hotel__info">
                            <h1>{t("branch.pp")}</h1>
                            <p>
                              <i className="purple fa-solid fa-location-dot" />
                              {t("room_pp.address")}
                            </p>
                            <p>
                              <i className="purple fa fa-phone" />
                              {t("room_pp.tel")} :<a className="ml-1 purple" href={`tel:${t("room_pp.phone")}`}>
                              {t("room_pp.phone")}
                              </a>
                            </p>
                            <p>
                              <i className="purple fa fa-envelope" />
                              {t("room_pp.emailTitle")} :
                              <a className="ml-1 purple" href={`mailto:${t("room_pp.email")}`}>
                              {t("room_pp.email")}
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="room__container">
                          <div className="gg-map">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.898317763967!2d104.91757566157965!3d11.55914669421962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513c1345804d%3A0xeeaf7f7f10b9ffc1!2sAzumaya%20Hotel%20Phnom%20Penh!5e0!3m2!1sen!2s!4v1705458694367!5m2!1sen!2s"
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
    <Footer />
    </>
  );
}
