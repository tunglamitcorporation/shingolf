import BookingRoom from "../../../container/BookingRoom/BookingRoom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
//import RoomCarousel from "../Carousel";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../../../JSON/data.json"; //"../JSON/data.json";
import classNames from "classnames";

export default function LLRoomDetail() {
  const { t } = useTranslation();
  const roomFeature = t("room_ll.features", { returnObjects: true });
  const branchName = t("branch", { returnObjects: true });
  const cityName = t("header", { returnObjects: true });
  const room = t("room_ll", { returnObjects: true });
  const ll = t("ll", { returnObjects: true });
  const room0 = t("ll.0", { returnObjects: true });
  const room1 = t("ll.1", { returnObjects: true });
  const room2 = t("ll.2", { returnObjects: true });
  const room3 = t("ll.3", { returnObjects: true });
  const room4 = t("ll.4", { returnObjects: true });
  return (
    <>
      <div className="service__header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t("branch.ll")}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="is-sticky">
      <BookingRoom />
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
                <Link className="breadcrumb__title" to="/BrandDetail">
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
          <li className="service__location  col-md-12 col-lg-2 col-xl-2 col-xxl-2">
            <a href="/hai-ba-trung-detail/room" className="location_link">
              {t(branchName.hbt1)}
            </a>
          </li>
          <li className="service__location col-md-12 col-lg-2 col-xl-2 col-xxl-2">
            <a href="/kim-ma-2-detail/room" className="location_link">
              {t(branchName.km2)}
            </a>
          </li>
          <li className="service__location col-md-12 col-lg-2 col-xl-2 col-xxl-2">
            <a href="/kim-ma-2-detail/room" className="location_link">
              {t(branchName.km3)}
            </a>
          </li>
          <li className="service__location service__active col-md-12 col-lg-2 col-xl-2 col-xxl-2">
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
                    <div className="col-md-12 col-lg-6">
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
                          {data.siw_ll.map((item) => (
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
                            {t("room_ll.reservation")}
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
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
                          {data.d_ll.map((item) => (
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
                            {t("room_ll.reservation")}
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
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
                          {data.enw_ll.map((item) => (
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
                            {t("room_ll.reservation")}
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
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
                          {data.e_ll.map((item) => (
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
                            {t("room_ll.reservation")}
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
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
                          {data.swk_ll.map((item) => (
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
                            {t("room_ll.reservation")}
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
