import Booking from "../Booking";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../JSON/data.json";
import classNames from "classnames";


export default function AnnexRoomDetail() {
  const { t } = useTranslation();
  const roomFeature = t("room_annex.features", { returnObjects: true });
  const branchName = t("branch", { returnObjects: true });
  const cityName = t("header", { returnObjects: true });
  const room = t("room_annex", { returnObjects: true });
  const annex = t("annex", { returnObjects: true });
  const room0 = t("annex.0", { returnObjects: true });
  const room1 = t("annex.1", { returnObjects: true });
  const room2 = t("annex.2", { returnObjects: true });
  const room3 = t("annex.3", { returnObjects: true });
  return (
    <>
      <div className="service__header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t("branch.annex")}</h1>
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
                <Link to="/Home">
                  <i className="fa-solid fa-house" />
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title" to="/HCMBranch">
                  {t("header.hcm")}
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title" href="">
                  {t("branch.annex")}
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div
          className="row"
          style={{ justifyContent: "space-around", padding: "10px" }}
        >
          <div className="service__location col-md-12 col-lg-2 col-xl-2 col-xxl-2">
            <a href="/HCM/TVL1" className="location_link">
              {t(branchName.tvl1)}
            </a>
          </div>
          <div className="service__location col-md-12 col-lg-2 col-xl-2 col-xxl-2">
            <a href="/HCM/TVL2" className="location_link">
              {t(branchName.tvl2)}
            </a>
          </div>
          <div className="service__location col-md-12 col-lg-2 col-xl-2 col-xxl-2">
            <a href="/HCM/LTT" className="location_link">
              {t(branchName.ltt)}
            </a>
          </div>
          <div className="service__location service__active col-md-12 col-lg-2 col-xl-2 col-xxl-2">
            <a href="/HCM/Annex" className="location_link">
              {t(branchName.annex)}
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
                    {t("room_annex.room")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                 />
                  </div>
                </div>
                <div className="container">
                    <h2 className="annex_h2">
                      {t("branch.annex")}
                    </h2>
                    <p className="annex_p pre-line">
                      {t("room_annex.roomContent")}
                    </p>
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
                          {data.m_annex.map((item) => (
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
                            {t("room_annex.reservation")}
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
                          {data.l_annex.map((item) => (
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
                            {t("room_annex.reservation")}
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
                    {t("room_annex.tariff")}
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
                              {t("room_annex.type")}
                            </th>
                            <th style={{ width: "20%" }} rowSpan={2}>
                              {t("room_annex.rate")}
                            </th>
                            <th style={{ width: "20%" }} colSpan={6}>
                              {t("room_annex.desc")}
                            </th>
                          </tr>
                          <tr>
                            <th style={{ width: "10%" }}>
                              {t("room_annex.size")} m&#178;
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_annex.window")}
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_annex.bath")}
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_annex.terrace")}
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_annex.elevator")}
                            </th>
                            <th style={{ width: "10%" }}>
                              {t("room_annex.bed")}
                            </th>
                          </tr>
                          {annex.map((item) => {
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
                                    <i
                                      className="fa fa-times red" />
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
                      {t("room_annex.vat")}
                    </div>
                    <div className="room__service">
                      <div className="container p-0">
                        <div className="row">
                          <div className="col-md-4">
                            <h2>{t("room_annex.service")}</h2>
                            <p className="pre-line">
                              {t("room_annex.serviceContent")}
                            </p>
                          </div>
                          <div className="col-md-4">
                            <h2>{t("room_annex.facility")}</h2>
                            <p className="pre-line">
                              {t("room_annex.facilityContent")}
                            </p>
                          </div>
                          <div className="col-md-4">
                            <h2>{t("room_annex.rental")}</h2>
                            <p className="pre-line">
                              {t("room_annex.rentalContent")}
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
                  <div className="room__title" style={{margin:0}}>
                    {t("room_annex.business")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                    <p style={{ fontSize: "1.4rem", paddingTop: "10px", textAlign:"justify" }}>
                      {t("room_annex.businessContent")}
                    </p>
                  </div>
                  <div className="room__container">
                    <div style={{display:"flex",justifyContent:"center"}}>
                    <p className="pre-line" style={{textAlign:"justify"}}>{t("room_annex.business_annex")}</p>
                    </div>
                    {/* <table className="room__table room__table-service">
                      <tbody>
                        <tr>
                          <th rowSpan={2}>{t("room_annex.pickup")}</th>
                          <td>{t("room_annex.pickup_fee1")}</td>
                          <td rowSpan={2}>{t("room_annex.pickup_car")}</td>
                        </tr>
                        <tr>
                          <td>{t("room_annex.pickup_fee2")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_annex.minibar")}</th>
                          <td>{t("room_annex.minibar_fee")}</td>
                          <td>{t("room_annex.minibar_type")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_annex.laundry")}</th>
                          <td>{t("room_annex.laundry_fee1")}</td>
                          <td>{t("room_annex.laundry_fee2")}</td>
                        </tr>
                        <tr>
                          <th rowSpan={2}>{t("room_annex.print")}</th>
                          <td colSpan={2}>{t("room_annex.print_fee1")}</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>{t("room_annex.print_fee2")}</td>
                        </tr>
                        <tr>
                          <th rowSpan={2}>{t("room_annex.tel")}</th>
                          <td colSpan={2}>{t("room_annex.tel_fee1")}</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>{t("room_annex.tel_fee2")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_annex.rental_car")}</th>
                          <td colSpan={2}>{t("room_annex.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_annex.tour")}</th>
                          <td colSpan={2}>{t("room_annex.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_annex.visa")}</th>
                          <td colSpan={2}>{t("room_annex.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_annex.food")}</th>
                          <td colSpan={2}>{t("room_annex.ask")}</td>
                        </tr>
                        <tr>
                          <th>{t("room_annex.roten")}</th>
                          <td className="pre-line" colSpan={2}>
                            {t("room_annex.rotenContent")}
                          </td>
                        </tr>
                        <tr>
                          <th>{t("room_annex.breakfast")}</th>
                          <td className="pre-line" colSpan={2}>
                            {t("room_annex.breakfastContent")}
                          </td>
                        </tr>
                      </tbody>
                    </table> */}
                    <div className="col-md-12">
                      <div className="table-footer">
                        {/* <h1>{t("room_annex.board")}</h1> */}
                        <p className="mt-5">
                          {t("room_annex.contact1")}
                          <a className="ml-1" href={`tel:${t("room_annex.phone")}`}>
                          {t("room_annex.phone")}
                          </a>
                          <br />
                          {t("room_annex.contact2")}
                          <a className="ml-1" href={`mailto:${t("room_annex.email")}`}>
                            {t("room_annex.email")}
                          </a>
                          <br />
                          {t("room_annex.contact3")}
                          <a className="ml-1" href={`https://${t("room_annex.website")}`}>
                            {t("room_annex.website")}
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
                    {t("room_annex.location")}
                    <img
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                      className="style-line"
                    />
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <p style={{ fontSize: "1.4rem", paddingTop: "10px", textAlign:"justify" }}>
                            {t("room_annex.locationContent")}
                          </p>
                          <div className="hotel__info">
                            <h1>{t("branch.annex")}</h1>
                            <p>
                              <i className="purple fa-solid fa-location-dot" />
                              {t("room_annex.address")}
                            </p>
                            <p>
                              <i className="purple fa fa-phone" />
                              {t("room_annex.tel")} : <a className="ml-1 purple" href={`tel:${t("room_annex.phone")}`}>
                              {t("room_annex.phone")}
                              </a>
                            </p>
                            <p>
                              <i className="purple fa fa-envelope" />
                              {t("room_annex.emailTitle")} :{" "}
                              <a className="ml-1 purple" href={`mailto:${t("room_annex.email")}`}>
                            {t("room_annex.email")}
                             </a>
                            </p>
                          </div>
                        </div>
                        <div className="room__container">
                          <div className="gg-map">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2199.698144276659!2d106.7045507240879!3d10.779387184617876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f6b3078e69f%3A0x6c318309761ace52!2sAZ%20ANNEX!5e0!3m2!1sen!2s!4v1704763802002!5m2!1sen!2s"
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
