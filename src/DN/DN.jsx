import Booking from "../Booking";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../JSON/data.json";
import classNames from "classnames";
import Header from "../Header";
import Footer from "../Footer";


export default function DNRoomDetail() {
  const { t } = useTranslation();
  const roomFeature = t("room_dn.features", { returnObjects: true });
  const branchName = t("branch", { returnObjects: true });
  const cityName = t("header", { returnObjects: true });
  const room = t("room_dn", { returnObjects: true });
  const dn = t("dn", { returnObjects: true });
  const room0 = t("dn.0", { returnObjects: true });
  const room1 = t("dn.1", { returnObjects: true });
  const room2 = t("dn.2", { returnObjects: true });
  const room3 = t("dn.3", { returnObjects: true });
  const room4 = t("dn.4", { returnObjects: true });
  return (
    <>
    <Header />
      <div className="service__header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t("branch.dn")}</h1>
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
                <Link className="breadcrumb__title" to="/DN/DNBranch">
                  {t("header.dn")}
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title" href="">
                  {t("branch.dn")}
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
                          {data.dnwd_dn.map((item) => (
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
                            {t("room_dn.reservation")}
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
                          {data.dnwt_dn.map((item) => (
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
                            {t("room_dn.reservation")}
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
                          {data.ed_dn.map((item) => (
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
                            {t("room_dn.reservation")}
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
                          {data.et_dn.map((item) => (
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
                            {t("room_dn.reservation")}
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
                          {data.s_dn.map((item) => (
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
                                    <th>{room0.bedTitle}</th>
                                    <td className="installation">
                                      {room0.bed}
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
                            {t("room_dn.reservation")}
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
    <Footer />
    </>
  );
}
