import Booking from "../Booking";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../JSON/data.json";
import classNames from "classnames";


export default function HPRoomDetail() {
  const { t } = useTranslation();
  const roomFeature = t("room_hp.features", { returnObjects: true });
  const branchName = t("branch", { returnObjects: true });
  const cityName = t("header", { returnObjects: true });
  const room = t("room_hp", { returnObjects: true });
  const hp = t("hp", { returnObjects: true });
  const room0 = t("hp.0", { returnObjects: true });
  const room1 = t("hp.1", { returnObjects: true });
  const room2 = t("hp.2", { returnObjects: true });
  const room3 = t("hp.3", { returnObjects: true });
  const room4 = t("hp.4", { returnObjects: true });
  const room5 = t("hp.5", { returnObjects: true });
  const room6 = t("hp.6", { returnObjects: true });
  const room7 = t("hp.7", { returnObjects: true });
  const room8 = t("hp.8", { returnObjects: true });
  return (
    <>
      <div className="service__header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t("branch.hp")}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="is-sticky">
        <Booking />
      </div>
      <div className="container p-0">
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
                  {t("header.hp")}
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title" href="">
                  {t("branch.hp")}
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
                    {t("room_hp.room")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                    <p style={{ fontSize: "1.4rem", paddingTop: "10px", textAlign:"justify" }}>
                      {t("room_hp.roomContent")}
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
                          {data.snw_hp.map((item) => (
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
                            {t("room_hp.reservation")}
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
                          {data.s_hp.map((item) => (
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
                                    <th>{room0.bedTitle}</th>
                                    <td className="installation">
                                      {room0.bed}
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
                            {t("room_hp.reservation")}
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
                          {data.dm_hp.map((item) => (
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
                                    <th>{room0.bedTitle}</th>
                                    <td className="installation">
                                      {room0.bed}
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
                            {t("room_hp.reservation")}
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
                          {data.dl_hp.map((item) => (
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
                                    <th>{room0.bedTitle}</th>
                                    <td className="installation">
                                      {room0.bed}
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
                            {t("room_hp.reservation")}
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
                          {data.ecv_hp.map((item) => (
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
                            {t("room_hp.reservation")}
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
                          {data.elv_hp.map((item) => (
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
                            {t("room_hp.reservation")}
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
                          {data.suite_hp.map((item) => (
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
                                    <th>{room0.bedTitle}</th>
                                    <td className="installation">
                                      {room0.bed}
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
                            {t("room_hp.reservation")}
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
                          {data.elvwk_hp.map((item) => (
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
                            {t("room_hp.reservation")}
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
                          {data.swk_hp.map((item) => (
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
                            {t("room_hp.reservation")}
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
                    {t("room_hp.tariff")}
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
                              {t("room_hp.type")}
                            </th>
                            <th style={{ width: "20%" }} rowSpan={2}>
                              {t("room_hp.rate")}
                            </th>
                            <th style={{ width: "20%" }} colSpan={5}>
                              {t("room_hp.desc")}
                            </th>
                          </tr>
                          <tr>
                            <th style={{ width: "10%" }}>
                              {t("room_hp.size")} m&#178;
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_hp.window")}
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_hp.bath")} 
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_hp.kitchen")} 
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_hp.bed")}
                            </th>
                          </tr>
                          {hp.map((item) => {
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
                                  <i className="fa fa-check green" />
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
                    <div className="required__note mt-4 pre-line">
                      {t("room_hp.vat")}
                    </div>
                    <div className="room__service">
                      <div className="container p-0">
                        <div className="row">
                          <div className="col-md-4">
                            <h2>{t("room_hp.service")}</h2>
                            <p className="pre-line">
                              {t("room_hp.serviceContent")}
                            </p>
                          </div>
                          <div className="col-md-4">
                            <h2>{t("room_hp.facility")}</h2>
                            <p className="pre-line">
                              {t("room_hp.facilityContent")}
                            </p>
                          </div>
                          <div className="col-md-4">
                            <h2>{t("room_hp.rental")}</h2>
                            <p className="pre-line">
                              {t("room_hp.rentalContent")}
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
                    {t("room_hp.business")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                    <p style={{ fontSize: "1.4rem", paddingTop: "10px", textAlign:"justify" }}>
                      {t("room_hp.businessContent")}
                    </p>
                  </div>
                  <div className="room__container">
                    <table className="room__table room__table-service pre-line">
                      <tbody>
                        <tr>    
                          <th rowSpan={3}>{t("room_hp.pickup")}</th>
                          <td>{t("room_hp.pickup_fee1")}</td>
                          <td rowSpan={2}>{t("room_hp.pickup_car")}</td>
                        </tr>
                        <tr>
                          <td>{t("room_hp.pickup_fee2")}</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>{t("room_hp.pickup_car2")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_hp.minibar")}</th>
                          <td>{t("room_hp.minibar_fee")}</td>
                          <td>{t("room_hp.minibar_type")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_hp.laundry")}</th>
                          <td>{t("room_hp.laundry_fee1")}</td>
                          <td>{t("room_hp.laundry_fee2")}</td>
                        </tr>
                        <tr>
                          <th rowSpan={2}>{t("room_hp.print")}</th>
                          <td colSpan={2}>{t("room_hp.print_fee1")}</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>{t("room_hp.print_fee2")}</td>
                        </tr>
                        <tr>
                          <th rowSpan={2}>{t("room_hp.tel")}</th>
                          <td colSpan={2}>{t("room_hp.tel_fee1")}</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>{t("room_hp.tel_fee2")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_hp.rental_car")}</th>
                          <td colSpan={2}>{t("room_hp.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_hp.tour")}</th>
                          <td colSpan={2}>{t("room_hp.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_hp.visa")}</th>
                          <td colSpan={2}>{t("room_hp.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_hp.food")}</th>
                          <td colSpan={2}>{t("room_hp.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_hp.roten")}</th>
                          <td className="pre-line" colSpan={2}>
                            {t("room_hp.rotenContent")}
                          </td>
                        </tr>
                        <tr>
                          <th>{t("room_hp.breakfast")}</th>
                          <td colSpan={2}>
                            {t("room_hp.breakfastContent")}
                          </td>
                        </tr>
                        <tr>
                          <th>{t("room_hp.massage")}</th>
                          <td className="pre-line" colSpan={2}>
                            {t("room_hp.massageContent")}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="col-md-12">
                      <div className="table-footer">
                        <h1>{t("room_hp.board")}</h1>
                        <p className="mt-5">
                          {t("room_hp.contact1")}
                          <a className="ml-1" href={`tel:${t("room_hp.phone")}`}>
                          {t("room_hp.phone")}
                          </a>
                          <br />
                          {t("room_hp.contact2")}
                          <a className="ml-1" href={`mailto:${t("room_hp.email")}`}>
                            {t("room_hp.email")}
                          </a>
                          <br />
                          {t("room_hp.contact3")}
                          <a className="ml-1" href={`https://${t("room_hp.website")}`}>
                            {t("room_hp.website")}
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
                    {t("room_hp.location")}
                    <img
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                      className="style-line"
                    />
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <p style={{ fontSize: "1.4rem", paddingTop: "10px", textAlign:"justify" }}>
                            {t("room_hp.locationContent")}
                          </p>
                          <div className="hotel__info">
                            <h1>{t("branch.hp")}</h1>
                            <p>
                              <i className="purple fa-solid fa-location-dot" />
                              {t("room_hp.address")}
                            </p>
                            <p>
                              <i className="purple fa fa-phone" />
                              {t("room_hp.tel")} : <a className="ml-1 purple" href={`tel:${t("room_hp.phone")}`}>
                              {t("room_hp.phone")}
                              </a>
                            </p>
                            <p>
                              <i className="purple fa fa-envelope" />
                              {t("room_hp.emailTitle")} :{" "}
                              <a className="ml-1 purple" href={`mailto:${t("room_hp.email")}`}>
                            {t("room_hp.email")}
                             </a>
                            </p>
                          </div>
                        </div>
                        <div className="room__container">
                          <div className="gg-map">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1567.8573156698833!2d106.69658669894982!3d20.831135067145226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7128d14990fb%3A0xc186e81a79dc705a!2zQXp1bWF5YSBIb3RlbCBI4bqjaSBQaMOybmc!5e0!3m2!1sen!2s!4v1551337252938"
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
