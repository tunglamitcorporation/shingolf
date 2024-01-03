import Booking from "../Booking";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../JSON/data.json";
import classNames from "classnames";

export default function KM2RoomDetail() {
  const { t } = useTranslation();
  const roomFeature = t("room_km2.features", { returnObjects: true });
  const branchName = t("branch", { returnObjects: true });
  const cityName = t("header", { returnObjects: true });
  const room = t("room_km2", { returnObjects: true });
  const km2 = t("km2", { returnObjects: true });
  const room0 = t("km2.0", { returnObjects: true });
  const room1 = t("km2.1", { returnObjects: true });
  const room2 = t("km2.2", { returnObjects: true });
  const room3 = t("km2.3", { returnObjects: true });
  const room4 = t("km2.4", { returnObjects: true });
  const room5 = t("km2.5", { returnObjects: true });
  const room6 = t("km2.6", { returnObjects: true });
  const room7 = t("km2.7", { returnObjects: true });
  const room8 = t("km2.8", { returnObjects: true });
  const room9 = t("km2.9", { returnObjects: true });
  return (
    <>
      <div className="policies__header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t("branch.km2")}</h1>
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
                  {t("branch.km2")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div
          className="row"
          style={{ justifyContent: "space-around", padding: "10px" }}
        >
          <div className="service__location col-md-12 col-lg-12 col-xxl-2">
            <a href="/HN/HBT1RoomDetail" className="location_link">
              {t(branchName.hbt1)}
            </a>
          </div>
          <div className="service__location service__active col-md-12 col-lg-12 col-xxl-2">
            <a href="/HN/KM2RoomDetail" className="location_link">
              {t(branchName.km2)}
            </a>
          </div>
          <div className="service__location col-md-12 col-lg-12 col-xxl-2">
            <a href="/HN/KM3RoomDetail" className="location_link">
              {t(branchName.km3)}
            </a>
          </div>
          <div className="service__location col-md-12 col-lg-12 col-xxl-2">
            <a href="/HN/LLRoomDetail" className="location_link">
              {t(branchName.ll)}
            </a>
          </div>
        </div>
        </div>
        <Tabs className="container-fluid">
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
                    {t("room_km2.room")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                    <p style={{ fontSize: "1.4rem", paddingTop: "10px" }}>
                      {t("room_km2.roomContent")}
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
                          {data.image0.map((item) => (
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
                            {t("room_km2.reservation")}
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
                          {data.image1.map((item) => (
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
                            {t("room_km2.reservation")}
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
                          {data.image2.map((item) => (
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
                            {t("room_km2.reservation")}
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
                          {data.image3.map((item) => (
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
                            {t("room_km2.reservation")}
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
                          {data.image4.map((item) => (
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
                            {t("room_km2.reservation")}
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
                          {data.image5.map((item) => (
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
                                    <td className="installation">
                                      {room5.size}m&#178;
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room5.bedTitle}</th>
                                    <td className="installation">
                                      {room5.bed}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room5.install}</th>
                                    <td className="installation">
                                      <i class="fa-solid fa-check purple"></i>
                                      {room5.in1}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room5.in2}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room5.in3}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room5.in4}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room5.in5}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room5.priceTitle}</th>
                                    <td className="installation bold">
                                      {room5.price}
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
                            {t("room_km2.reservation")}
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
                          {data.image6.map((item) => (
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
                                    <td className="installation">
                                      {room6.size}m&#178;
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room6.bedTitle}</th>
                                    <td className="installation">
                                      {room6.bed}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room6.install}</th>
                                    <td className="installation">
                                      <i class="fa-solid fa-check purple"></i>
                                      {room6.in1}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room6.in2}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room6.in3}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room6.in4}
                                      <br />
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room6.priceTitle}</th>
                                    <td className="installation bold">
                                      {room6.price}
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
                            {t("room_km2.reservation")}
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
                          {data.image7.map((item) => (
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
                                    <td className="installation">
                                      {room7.size}m&#178;
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room7.bedTitle}</th>
                                    <td className="installation">
                                      {room7.bed}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room7.install}</th>
                                    <td className="installation">
                                      <i class="fa-solid fa-check purple"></i>
                                      {room7.in1}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room7.in2}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room7.in3}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room7.in4}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room7.in5}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room7.priceTitle}</th>
                                    <td className="installation bold">
                                      {room7.price}
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
                            {t("room_km2.reservation")}
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
                          {data.image7.map((item) => (
                            <img src={item} alt="" />
                          ))}
                        </Carousel>
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <div className="card-title room-name">
                                  {room8.name}
                                </div>
                                <table className="room__des-table">
                                  <tr>
                                    <th>{room8.sizeTitle}</th>
                                    <td className="installation">
                                      {room8.size}m&#178;
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room8.bedTitle}</th>
                                    <td className="installation">
                                      {room8.bed}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room8.install}</th>
                                    <td className="installation">
                                      <i class="fa-solid fa-check purple"></i>
                                      {room8.in1}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room8.in2}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room8.in3}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room8.in4}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room8.in5}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room8.priceTitle}</th>
                                    <td className="installation bold">
                                      {room8.price}
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
                            {t("room_km2.reservation")}
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
                          {data.image7.map((item) => (
                            <img src={item} alt="" />
                          ))}
                        </Carousel>
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <div className="card-title room-name">
                                  {room9.name}
                                </div>
                                <table className="room__des-table">
                                  <tr>
                                    <th>{room9.sizeTitle}</th>
                                    <td className="installation">
                                      {room9.size}m&#178;
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room9.bedTitle}</th>
                                    <td className="installation">
                                      {room9.bed}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room9.install}</th>
                                    <td className="installation">
                                      <i class="fa-solid fa-check purple"></i>
                                      {room9.in1}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room9.in2}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room9.in3}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room9.in4}
                                      <br />
                                      <i class="fa-solid fa-check purple"></i>
                                      {room9.in5}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{room9.priceTitle}</th>
                                    <td className="installation bold">
                                      {room9.price}
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
                            {t("room_km2.reservation")}
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
                    {t("room_km2.tariff")}
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
                              {t("room_km2.type")}
                            </th>
                            <th style={{ width: "20%" }} rowSpan={2}>
                              {t("room_km2.rate")}
                            </th>
                            <th style={{ width: "20%" }} colSpan={5}>
                              {t("room_km2.desc")}
                            </th>
                          </tr>
                          <tr>
                            <th style={{ width: "10%" }}>
                              {t("room_km2.size")} m&#178;
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_km2.kitchen")} m&#178;
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_km2.bath")}
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_km2.terrace")}
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_km2.window")}
                            </th>
                          </tr>
                          {km2.map((item) => (
                            <tr>
                              <td style={{ width: "5%" }}>{item.id}</td>
                              <td className="room__tariff-name">{item.name}</td>
                              <td>{item.price}</td>
                              <td>{item.size}</td>
                              <td>
                                <i
                                  className={classNames({
                                    "fa fa-times red": item.tick_k == false,
                                    "fa fa-check green": item.tick_k == true,
                                  })}
                                />
                              </td>
                              <td>
                                 <i className="fa fa-check green" />
                              </td>
                              <td>
                                <i
                                  className={classNames({
                                    "fa fa-times red": item.tick_t == false,
                                    "fa fa-check green": item.tick_t == true,
                                  })}
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
                      {t("room_km2.vat")}
                    </div>
                    <div className="room__service">
                      <div className="container p-0">
                        <div className="row">
                          <div className="col-md-4">
                            <h2>{t("room_km2.service")}</h2>
                            <p className="pre-line">
                              {t("room_km2.serviceContent")}
                            </p>
                          </div>
                          <div className="col-md-4">
                            <h2>{t("room_km2.facility")}</h2>
                            <p className="pre-line">
                              {t("room_km2.facilityContent")}
                            </p>
                          </div>
                          <div className="col-md-4">
                            <h2>{t("room_km2.rental")}</h2>
                            <p className="pre-line">
                              {t("room_km2.rentalContent")}
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
                    {t("room_km2.business")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                    <p style={{ fontSize: "1.4rem", paddingTop: "10px" }}>
                      {t("room_km2.businessContent")}
                    </p>
                  </div>
                  <div className="room__container">
                    <table className="room__table room__table-service">
                      <tbody>
                        <tr>
                          <th rowSpan={2}>{t("room_km2.pickup")}</th>
                          <td>{t("room_km2.pickup_fee1")}</td>
                          <td rowSpan={2}>{t("room_km2.pickup_car")}</td>
                        </tr>
                        <tr>
                          <td>{t("room_km2.pickup_fee2")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_km2.minibar")}</th>
                          <td>{t("room_km2.minibar_fee")}</td>
                          <td>{t("room_km2.minibar_type")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_km2.laundry")}</th>
                          <td>{t("room_km2.laundry_fee1")}</td>
                          <td>{t("room_km2.laundry_fee2")}</td>
                        </tr>
                        <tr>
                          <th rowSpan={2}>{t("room_km2.print")}</th>
                          <td colSpan={2}>{t("room_km2.print_fee1")}</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>{t("room_km2.print_fee2")}</td>
                        </tr>
                        <tr>
                          <th rowSpan={2}>{t("room_km2.tel")}</th>
                          <td colSpan={2}>{t("room_km2.tel_fee1")}</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>{t("room_km2.tel_fee2")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_km2.rental_car")}</th>
                          <td colSpan={2}>{t("room_km2.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_km2.tour")}</th>
                          <td colSpan={2}>{t("room_km2.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_km2.visa")}</th>
                          <td colSpan={2}>{t("room_km2.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_km2.food")}</th>
                          <td colSpan={2}>{t("room_km2.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_km2.rotenM")}</th>
                          <td className="pre-line" colSpan={2}>
                            {t("room_km2.rotenContent")}
                          </td>
                        </tr>
                        <tr>
                          <th>{t("room_km2.rotenF")}</th>
                          <td className="pre-line" colSpan={2}>
                            {t("room_km2.rotenFContent")}
                          </td>
                        </tr>
                        <tr>
                          <th>{t("room_km2.breakfast")}</th>
                          <td className="pre-line" colSpan={2}>
                            {t("room_km2.breakfastContent")}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="col-md-12">
                      <div className="table-footer">
                        <h1>{t("room_km2.board")}</h1>
                        <p className="mt-5">
                          {t("room_km2.contact1")}
                          <a className="ml-1" href="http://">
                            {t("room_km2.phone")}
                          </a>{" "}
                          <br />
                          {t("room_km2.contact2")}
                          <a className="ml-1" href="http://">
                            {t("room_km2.email")}
                          </a>
                          <br />
                          {t("room_km2.contact3")}
                          <a className="ml-1" href="http://">
                            {t("room_km2.website")}
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
                    {t("room_km2.location")}
                    <img
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                      className="style-line"
                    />
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <p style={{ fontSize: "1.4rem", paddingTop: "10px" }}>
                            {t("room_km2.locationContent")}
                          </p>
                          <div className="hotel__info">
                            <h1>{t("branch.km2")}</h1>
                            <p>
                              <i className="purple fa-solid fa-location-dot" />
                              {t("room_km2.address")}
                            </p>
                            <p>
                              <i className="purple fa fa-phone" />
                              {t("room_km2.tel")} : {t("room_km2.phone")}
                            </p>
                            <p>
                              <i className="purple fa fa-envelope" />
                              {t("room_km2.emailTitle")} :{" "}
                              {t("room_km2.email")}
                            </p>
                          </div>
                        </div>
                        <div className="room__container">
                          <div className="gg-map">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59589.61281346326!2d105.81481133159495!3d21.018645116070616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab695c3c7ed5%3A0x98d46b56d0e49ab8!2sAzumaya+Kim+Ma+2!5e0!3m2!1svi!2s!4v1480501292956"
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