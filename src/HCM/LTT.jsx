import Booking from "../Booking";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../JSON/data.json";
import classNames from "classnames";


export default function LTTRoomDetail() {
  const { t } = useTranslation();
  const roomFeature = t("room_ltt.features", { returnObjects: true });
  const branchName = t("branch", { returnObjects: true });
  const cityName = t("header", { returnObjects: true });
  const room = t("room_ltt", { returnObjects: true });
  const ltt = t("ltt", { returnObjects: true });
  const room0 = t("ltt.0", { returnObjects: true });
  const room1 = t("ltt.1", { returnObjects: true });
  const room2 = t("ltt.2", { returnObjects: true });
  const room3 = t("ltt.3", { returnObjects: true });
  return (
    <>
      <div className="service__header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t("branch.ltt")}</h1>
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
                  {t("branch.ltt")}
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
          style={{ justifyContent: "space-around", padding: "10px", textAlign:"justify" }}
        >
          <div className="service__location col-md-12 col-lg-12 col-xxl-2">
            <a href="/HCM/TVL1" className="location_link">
              {t(branchName.tvl1)}
            </a>
          </div>
          <div className="service__location col-md-12 col-lg-12 col-xxl-2">
            <a href="/HCM/TVL2" className="location_link">
              {t(branchName.tvl2)}
            </a>
          </div>
          <div className="service__location service__active col-md-12 col-lg-12 col-xxl-2">
            <a href="/HCM/LTT" className="location_link">
              {t(branchName.ltt)}
            </a>
          </div>
          <div className="service__location col-md-12 col-lg-12 col-xxl-2">
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
                    {t("room_ltt.room")}
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                    <p style={{ fontSize: "1.4rem", paddingTop: "10px" }}>
                      {t("room_ltt.roomContent")}
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
                          {data.d_ltt.map((item) => (
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
                            {t("room_ltt.reservation")}
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
                          {data.efs_ltt.map((item) => (
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
                            {t("room_ltt.reservation")}
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
                          {data.ebs_ltt.map((item) => (
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
                            {t("room_ltt.reservation")}
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
                          {data.dgf_ltt.map((item) => (
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
                            {t("room_ltt.reservation")}
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
                              {t("room_ltt.bath")} m&#178;
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
                    <p style={{ fontSize: "1.4rem", paddingTop: "10px" }}>
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
                          <p style={{ fontSize: "1.4rem", paddingTop: "10px" }}>
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
