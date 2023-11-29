import Booking from "./Booking";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function RoomDetail() {
  const { t } = useTranslation();
  const serviceData = t("service", { returnObjects: true });
  const serviceLocation = t("service.location", { returnObjects: true });
  const roomHN = t("hn-room.branch", { returnObjects: true });
  const branchHCM = t("service.hcm-branch", { returnObjects: true });
  const branchDN = t("service.dn-branch", { returnObjects: true });
  const branchHN = t("service.hn-branch", { returnObjects: true });
  const branchHP = t("service.hp-branch", { returnObjects: true });
  return (
    <>
      <div className="policies__header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="feature__title" style={{ left: "35%" }}>
                Hai Ba Trung 1
              </div>
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
                <Link to="/Component/Home">
                  <i className="fa-solid fa-house" />
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title" to="/Component/BrandDetail">
                  Ha Noi
                </Link>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <Link className="breadcrumb__title" href="">
                  Hai Ba Trung 1
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Tabs selectedTabClassName="service__active" className="container">
        <TabList className="row" style={{ justifyContent: "space-around" }}>
          {roomHN.map((item) => (
            <Tab className="service__location col-md-2">{item.name}</Tab>
          ))}
        </TabList>

        <TabPanel>
          <Tabs
            selectedTabClassName="service__active"
            className="col-md-10 offset-md-1"
          >
            <TabList className="service__list">
              {roomHN.map((item) => (
                <Tab className="service">{item.roomfeature}</Tab>
              ))}
            </TabList>
            <TabPanel>
              <div className="service__content">
                <div className="room__content">
                  <div className="room__title">
                    Room
                    <img
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                      style={{ verticalAlign: "middle" }}
                    />
                    <p style={{ fontSize: "1.2rem", paddingTop: "20px" }}>
                      The following services are included: Japanese breakfast,
                      Open-air hot tub (for men only), International TV
                      channels, Free high speed Wi-Fi (no wired internet
                      service), daily room making, 2 bottles of water every day.
                    </p>
                  </div>
                  </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                            <div
                        className="room-item"
                      >
                          <div className="card mb-3" style={{ border: "none" }}>
                            <div className="row g-4">
                              <div className="col-md-12">
                                <img
                                  className="img-fluid"
                                  src="https://azumayavietnam.com/wp-content/themes/azumaya-2023/img/room/HN/HBT-New/DuluxeF1NoView1.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="col-md-12">
                                <div
                                  className="card-body"
                                >
                                  <h2 className="card-title">
                                    DELUXE 1F (NO VIEW)
                                  </h2>
                                    <table className="service__table">
                                      <tr>
                                        <th>Size</th>
                                        <th>Bed</th>
                                        <th>Installation</th>
                                        <th>Price</th>
                                      </tr>
                                      <tr>
                                        <td>24m2</td>
                                        <td>1.6m Queen size bed</td>
                                        <td>
                                          Windows: no view Bathtub LCD TV 32
                                          inches Toilet with bidet function
                                        </td>
                                        <td>1.250.000VND+</td>
                                      </tr>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                        <div className="btn__detail">
                          <a
                            href="/AzumayaClone/html/reservation.html"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Make a Reservation
                          </a>
                        </div>
                            </div>
                            <div
                        className="room-item"
                      >
                          <div className="card mb-3" style={{ border: "none" }}>
                            <div className="row g-4">
                              <div className="col-md-12">
                                <img
                                  className="img-fluid"
                                  src="https://azumayavietnam.com/wp-content/themes/azumaya-2023/img/room/HN/HBT-New/DuluxeF1NoView1.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="col-md-12">
                                <div
                                  className="card-body"
                                >
                                  <h2 className="card-title">
                                    DELUXE 1F (NO VIEW)
                                  </h2>
                                    <table className="service__table">
                                      <tr>
                                        <th>Size</th>
                                        <th>Bed</th>
                                        <th>Installation</th>
                                        <th>Price</th>
                                      </tr>
                                      <tr>
                                        <td>24m2</td>
                                        <td>1.6m Queen size bed</td>
                                        <td>
                                          Windows: no view Bathtub LCD TV 32
                                          inches Toilet with bidet function
                                        </td>
                                        <td>1.250.000VND+</td>
                                      </tr>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                        <div className="btn__detail">
                          <a
                            href="/AzumayaClone/html/reservation.html"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Make a Reservation
                          </a>
                        </div>
                            </div>
                            </div>
                        </div>
                    </div>
                  </div>
            </TabPanel>
            <TabPanel>
              <div className="service__content">
                <div className="service__content-title"></div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service__content">
                <div className="service__content-title"></div>
                <div className="service__content-body"></div>
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
      <div className="service__container">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="service__location service__active">
                <h2>Hai Ba Trung 1</h2>
              </div>
            </div>
            <div className="col-md-3">
              <div className="service__location">
                <h2>Kim Ma 2</h2>
              </div>
            </div>
            <div className="col-md-3">
              <div className="service__location">
                <h2>Kim Ma 3</h2>
              </div>
            </div>
            <div className="col-md-3">
              <div className="service__location">
                <h2>Linh Lang</h2>
              </div>
            </div>
            <div className="branch__container" style={{ marginLeft: "15px" }}>
              <div className="service__list-container">
                <ul className="service__list">
                  <li className="service service__active">Room</li>
                  <li className="service">Room Tarrif</li>
                  <li className="service">Bussiness Service</li>
                  <li className="service">Location</li>
                </ul>
                <div className="room__content">
                  <div className="room__title">
                    Room
                    <img
                      src="../assets/img/line.png"
                      alt=""
                      style={{ verticalAlign: "middle" }}
                    />
                    <p style={{ fontSize: "1.2rem", paddingTop: "20px" }}>
                      The following services are included: Japanese breakfast,
                      Open-air hot tub (for men only), International TV
                      channels, Free high speed Wi-Fi (no wired internet
                      service), daily room making, 2 bottles of water every day.
                    </p>
                  </div>
                  <div className="room__container">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div
                            className="feature__type-item"
                            style={{ height: "350px" }}
                          >
                            <div className="col-md-5">
                              <div className="carousel">
                                <div
                                  id="demo"
                                  className="carousel slide"
                                  data-ride="carousel"
                                >
                                  {/* Indicators */}
                                  <ul className="carousel-indicators">
                                    <li
                                      data-target="#demo"
                                      data-slide-to={0}
                                      className="active"
                                    />
                                    <li data-target="#demo" data-slide-to={1} />
                                    <li data-target="#demo" data-slide-to={2} />
                                  </ul>
                                  {/* The slideshow */}
                                  <div className="carousel-inner">
                                    <div className="carousel-item active">
                                      <img
                                        src="../assets/img/Deluxe1F(No View) HBT1.jpg"
                                        alt="Los Angeles"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                    <div className="carousel-item">
                                      <img
                                        src="../assets/img/Deluxe1F(No View)2 HBT1.jpg"
                                        alt="Chicago"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                    <div className="carousel-item">
                                      <img
                                        src="../assets/img/Deluxe1F(No View)3 HBT1.jpg"
                                        alt="New York"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                  </div>
                                  {/* Left and right controls */}
                                  <a
                                    className="carousel-control-prev"
                                    href="#demo"
                                    data-slide="prev"
                                  >
                                    <span className="carousel-control-prev-icon" />
                                  </a>
                                  <a
                                    className="carousel-control-next"
                                    href="#demo"
                                    data-slide="next"
                                  >
                                    <span className="carousel-control-next-icon" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7">
                              <div className="feature__type-content">
                                <h2>DELUXE 1F (NO VIEW)</h2>
                                <table
                                  className="service__table"
                                  style={{
                                    width: "600px",
                                    tableLayout: "fixed",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <th>Size</th>
                                      <th>Bed</th>
                                      <th>Installation</th>
                                      <th>Price</th>
                                    </tr>
                                    <tr>
                                      <td>24m2</td>
                                      <td>1.6m Queen size bed</td>
                                      <td>
                                        Windows: no view Bathtub LCD TV 32
                                        inches Toilet with bidet function
                                      </td>
                                      <td>1.250.000VND+</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="btn__detail">
                                <a
                                  href="/AzumayaClone/html/reservation.html"
                                  style={{
                                    textDecoration: "none",
                                    color: "white",
                                  }}
                                >
                                  Make a Reservation
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div
                            className="feature__type-item"
                            style={{ height: "350px" }}
                          >
                            <div className="col-md-5">
                              <div className="carousel">
                                <div
                                  id="demo1"
                                  className="carousel slide"
                                  data-ride="carousel"
                                >
                                  {/* Indicators */}
                                  <ul className="carousel-indicators">
                                    <li
                                      data-target="#demo1"
                                      data-slide-to={0}
                                      className="active"
                                    />
                                    <li
                                      data-target="#demo1"
                                      data-slide-to={1}
                                    />
                                    <li
                                      data-target="#demo1"
                                      data-slide-to={2}
                                    />
                                  </ul>
                                  {/* The slideshow */}
                                  <div className="carousel-inner">
                                    <div className="carousel-item active">
                                      <img
                                        src="../assets/img/Deluxe1F(No View) HBT1.jpg"
                                        alt="Los Angeles"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                    <div className="carousel-item">
                                      <img
                                        src="../assets/img/Deluxe1F(No View)2 HBT1.jpg"
                                        alt="Chicago"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                    <div className="carousel-item">
                                      <img
                                        src="../assets/img/Deluxe1F(No View)3 HBT1.jpg"
                                        alt="New York"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                  </div>
                                  {/* Left and right controls */}
                                  <a
                                    className="carousel-control-prev"
                                    href="#demo1"
                                    data-slide="prev"
                                  >
                                    <span className="carousel-control-prev-icon" />
                                  </a>
                                  <a
                                    className="carousel-control-next"
                                    href="#demo1"
                                    data-slide="next"
                                  >
                                    <span className="carousel-control-next-icon" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7">
                              <div className="feature__type-content">
                                <h2>DELUXE - INSIDE WINDOW (NO VIEW)</h2>
                                <table
                                  className="service__table"
                                  style={{
                                    width: "600px",
                                    tableLayout: "fixed",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <th>Size</th>
                                      <th>Bed</th>
                                      <th>Installation</th>
                                      <th>Price</th>
                                    </tr>
                                    <tr>
                                      <td>24m2</td>
                                      <td>1.6m Queen size bed</td>
                                      <td>
                                        Windows: no view Bathtub LCD TV 32
                                        inches Toilet with bidet function
                                      </td>
                                      <td>1.375.000VND+</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="btn__detail">
                                <a
                                  href="/AzumayaClone/html/reservation.html"
                                  style={{
                                    textDecoration: "none",
                                    color: "white",
                                  }}
                                >
                                  Make a Reservation
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div
                            className="feature__type-item"
                            style={{ height: "350px" }}
                          >
                            <div className="col-md-5">
                              <div className="carousel">
                                <div
                                  id="demo2"
                                  className="carousel slide"
                                  data-ride="carousel"
                                >
                                  {/* Indicators */}
                                  <ul className="carousel-indicators">
                                    <li
                                      data-target="#demo2"
                                      data-slide-to={0}
                                      className="active"
                                    />
                                    <li
                                      data-target="#demo2"
                                      data-slide-to={1}
                                    />
                                    <li
                                      data-target="#demo2"
                                      data-slide-to={2}
                                    />
                                  </ul>
                                  {/* The slideshow */}
                                  <div className="carousel-inner">
                                    <div className="carousel-item active">
                                      <img
                                        src="../assets/img/Deluxe1F(No View) HBT1.jpg"
                                        alt="Los Angeles"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                    <div className="carousel-item">
                                      <img
                                        src="../assets/img/Deluxe1F(No View)2 HBT1.jpg"
                                        alt="Chicago"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                    <div className="carousel-item">
                                      <img
                                        src="../assets/img/Deluxe1F(No View)3 HBT1.jpg"
                                        alt="New York"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                  </div>
                                  {/* Left and right controls */}
                                  <a
                                    className="carousel-control-prev"
                                    href="#demo2"
                                    data-slide="prev"
                                  >
                                    <span className="carousel-control-prev-icon" />
                                  </a>
                                  <a
                                    className="carousel-control-next"
                                    href="#demo2"
                                    data-slide="next"
                                  >
                                    <span className="carousel-control-next-icon" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7">
                              <div className="feature__type-content">
                                <h2>DELUXE 1F (NO VIEW)</h2>
                                <table
                                  className="service__table"
                                  style={{
                                    width: "600px",
                                    tableLayout: "fixed",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <th>Size</th>
                                      <th>Bed</th>
                                      <th>Installation</th>
                                      <th>Price</th>
                                    </tr>
                                    <tr>
                                      <td>24m2</td>
                                      <td>1.6m Queen size bed</td>
                                      <td>
                                        Windows: no view Bathtub LCD TV 32
                                        inches Toilet with bidet function
                                      </td>
                                      <td>1.250.000VND+</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="btn__detail">
                                <a
                                  href="/AzumayaClone/html/reservation.html"
                                  style={{
                                    textDecoration: "none",
                                    color: "white",
                                  }}
                                >
                                  Make a Reservation
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div
                            className="feature__type-item"
                            style={{ height: "350px" }}
                          >
                            <div className="col-md-5">
                              <div className="carousel">
                                <div
                                  id="demo3"
                                  className="carousel slide"
                                  data-ride="carousel"
                                >
                                  {/* Indicators */}
                                  <ul className="carousel-indicators">
                                    <li
                                      data-target="#demo3"
                                      data-slide-to={0}
                                      className="active"
                                    />
                                    <li
                                      data-target="#demo3"
                                      data-slide-to={1}
                                    />
                                    <li
                                      data-target="#demo3"
                                      data-slide-to={2}
                                    />
                                  </ul>
                                  {/* The slideshow */}
                                  <div className="carousel-inner">
                                    <div className="carousel-item active">
                                      <img
                                        src="../assets/img/Deluxe1F(No View) HBT1.jpg"
                                        alt="Los Angeles"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                    <div className="carousel-item">
                                      <img
                                        src="../assets/img/Deluxe1F(No View)2 HBT1.jpg"
                                        alt="Chicago"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                    <div className="carousel-item">
                                      <img
                                        src="../assets/img/Deluxe1F(No View)3 HBT1.jpg"
                                        alt="New York"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                  </div>
                                  {/* Left and right controls */}
                                  <a
                                    className="carousel-control-prev"
                                    href="#demo3"
                                    data-slide="prev"
                                  >
                                    <span className="carousel-control-prev-icon" />
                                  </a>
                                  <a
                                    className="carousel-control-next"
                                    href="#demo3"
                                    data-slide="next"
                                  >
                                    <span className="carousel-control-next-icon" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7">
                              <div className="feature__type-content">
                                <h2>EXECUTIVE INSIDE WINDOW</h2>
                                <table
                                  className="service__table"
                                  style={{
                                    width: "600px",
                                    tableLayout: "fixed",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <th>Size</th>
                                      <th>Bed</th>
                                      <th>Installation</th>
                                      <th>Price</th>
                                    </tr>
                                    <tr>
                                      <td>26m2</td>
                                      <td>1.6m Queen size bed</td>
                                      <td>
                                        Inside windows Bathtub LCD TV 32 inches
                                        Toilet with bidet function
                                      </td>
                                      <td>1.450.000VND+</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="btn__detail">
                                <a
                                  href="/AzumayaClone/html/reservation.html"
                                  style={{
                                    textDecoration: "none",
                                    color: "white",
                                  }}
                                >
                                  Make a Reservation
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div
                            className="feature__type-item"
                            style={{ height: "350px" }}
                          >
                            <div className="col-md-5">
                              <div className="carousel">
                                <div
                                  id="demo4"
                                  className="carousel slide"
                                  data-ride="carousel"
                                >
                                  {/* Indicators */}
                                  <ul className="carousel-indicators">
                                    <li
                                      data-target="#demo4"
                                      data-slide-to={0}
                                      className="active"
                                    />
                                    <li
                                      data-target="#demo4"
                                      data-slide-to={1}
                                    />
                                    <li
                                      data-target="#demo4"
                                      data-slide-to={2}
                                    />
                                  </ul>
                                  {/* The slideshow */}
                                  <div className="carousel-inner">
                                    <div className="carousel-item active">
                                      <img
                                        src="../assets/img/Deluxe1F(No View) HBT1.jpg"
                                        alt="Los Angeles"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                    <div className="carousel-item">
                                      <img
                                        src="../assets/img/Deluxe1F(No View)2 HBT1.jpg"
                                        alt="Chicago"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                    <div className="carousel-item">
                                      <img
                                        src="../assets/img/Deluxe1F(No View)3 HBT1.jpg"
                                        alt="New York"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                  </div>
                                  {/* Left and right controls */}
                                  <a
                                    className="carousel-control-prev"
                                    href="#demo4"
                                    data-slide="prev"
                                  >
                                    <span className="carousel-control-prev-icon" />
                                  </a>
                                  <a
                                    className="carousel-control-next"
                                    href="#demo4"
                                    data-slide="next"
                                  >
                                    <span className="carousel-control-next-icon" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7">
                              <div className="feature__type-content">
                                <h2>EXECUTIVE</h2>
                                <table
                                  className="service__table"
                                  style={{
                                    width: "600px",
                                    tableLayout: "fixed",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <th>Size</th>
                                      <th>Bed</th>
                                      <th>Installation</th>
                                      <th>Price</th>
                                    </tr>
                                    <tr>
                                      <td>24m2</td>
                                      <td>1.6m Queen size bed</td>
                                      <td>
                                        Outside windows Bathtub LCD TV 32 inches
                                        Toilet with bidet function
                                      </td>
                                      <td>1.500.000VND+</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="btn__detail">
                                <a
                                  href="/AzumayaClone/html/reservation.html"
                                  style={{
                                    textDecoration: "none",
                                    color: "white",
                                  }}
                                >
                                  Make a Reservation
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div
                            className="feature__type-item"
                            style={{ height: "350px" }}
                          >
                            <div className="col-md-5">
                              <div className="carousel">
                                <div
                                  id="demo5"
                                  className="carousel slide"
                                  data-ride="carousel"
                                >
                                  {/* Indicators */}
                                  <ul className="carousel-indicators">
                                    <li
                                      data-target="#demo5"
                                      data-slide-to={0}
                                      className="active"
                                    />
                                    <li
                                      data-target="#demo5"
                                      data-slide-to={1}
                                    />
                                    <li
                                      data-target="#demo5"
                                      data-slide-to={2}
                                    />
                                  </ul>
                                  {/* The slideshow */}
                                  <div className="carousel-inner">
                                    <div className="carousel-item active">
                                      <img
                                        src="../assets/img/Deluxe1F(No View) HBT1.jpg"
                                        alt="Los Angeles"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                    <div className="carousel-item">
                                      <img
                                        src="../assets/img/Deluxe1F(No View)2 HBT1.jpg"
                                        alt="Chicago"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                    <div className="carousel-item">
                                      <img
                                        src="../assets/img/Deluxe1F(No View)3 HBT1.jpg"
                                        alt="New York"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                  </div>
                                  {/* Left and right controls */}
                                  <a
                                    className="carousel-control-prev"
                                    href="#demo5"
                                    data-slide="prev"
                                  >
                                    <span className="carousel-control-prev-icon" />
                                  </a>
                                  <a
                                    className="carousel-control-next"
                                    href="#demo5"
                                    data-slide="next"
                                  >
                                    <span className="carousel-control-next-icon" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7">
                              <div className="feature__type-content">
                                <h2>EXECUTIVE WITH KITCHEN</h2>
                                <table
                                  className="service__table"
                                  style={{
                                    width: "600px",
                                    tableLayout: "fixed",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <th>Size</th>
                                      <th>Bed</th>
                                      <th>Installation</th>
                                      <th>Price</th>
                                    </tr>
                                    <tr>
                                      <td>24m2</td>
                                      <td>1.6m Queen size bed</td>
                                      <td>
                                        Outside windows Bathtub LCD TV 32 inches
                                        Toilet with bidet function
                                      </td>
                                      <td>1.575.000VND+</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="btn__detail">
                                <a
                                  href="/AzumayaClone/html/reservation.html"
                                  style={{
                                    textDecoration: "none",
                                    color: "white",
                                  }}
                                >
                                  Make a Reservation
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div
                            className="feature__type-item"
                            style={{ height: "350px" }}
                          >
                            <div className="col-md-5">
                              <div className="carousel">
                                <div
                                  id="demo6"
                                  className="carousel slide"
                                  data-ride="carousel"
                                >
                                  {/* Indicators */}
                                  <ul className="carousel-indicators">
                                    <li
                                      data-target="#demo6"
                                      data-slide-to={0}
                                      className="active"
                                    />
                                    <li
                                      data-target="#demo6"
                                      data-slide-to={1}
                                    />
                                    <li
                                      data-target="#demo6"
                                      data-slide-to={2}
                                    />
                                  </ul>
                                  {/* The slideshow */}
                                  <div className="carousel-inner">
                                    <div className="carousel-item active">
                                      <img
                                        src="../assets/img/Deluxe1F(No View) HBT1.jpg"
                                        alt="Los Angeles"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                    <div className="carousel-item">
                                      <img
                                        src="../assets/img/Deluxe1F(No View)2 HBT1.jpg"
                                        alt="Chicago"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                    <div className="carousel-item">
                                      <img
                                        src="../assets/img/Deluxe1F(No View)3 HBT1.jpg"
                                        alt="New York"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                  </div>
                                  {/* Left and right controls */}
                                  <a
                                    className="carousel-control-prev"
                                    href="#demo6"
                                    data-slide="prev"
                                  >
                                    <span className="carousel-control-prev-icon" />
                                  </a>
                                  <a
                                    className="carousel-control-next"
                                    href="#demo6"
                                    data-slide="next"
                                  >
                                    <span className="carousel-control-next-icon" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7">
                              <div className="feature__type-content">
                                <h2>SEMI SUITE WITH KITCHEN</h2>
                                <table
                                  className="service__table"
                                  style={{
                                    width: "600px",
                                    tableLayout: "fixed",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <th>Size</th>
                                      <th>Bed</th>
                                      <th>Installation</th>
                                      <th>Price</th>
                                    </tr>
                                    <tr>
                                      <td>35m2</td>
                                      <td>Queen size bed/ Twin beds</td>
                                      <td>
                                        Outside windows Bathtub LCD TV 32 inches
                                        Toilet with bidet function
                                      </td>
                                      <td>1.675.000VND+</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="btn__detail">
                                <a
                                  href="/AzumayaClone/html/reservation.html"
                                  style={{
                                    textDecoration: "none",
                                    color: "white",
                                  }}
                                >
                                  Make a Reservation
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div
                            className="feature__type-item"
                            style={{ height: "350px" }}
                          >
                            <div className="col-md-5">
                              <div className="carousel">
                                <div
                                  id="demo7"
                                  className="carousel slide"
                                  data-ride="carousel"
                                >
                                  {/* Indicators */}
                                  <ul className="carousel-indicators">
                                    <li
                                      data-target="#demo7"
                                      data-slide-to={0}
                                      className="active"
                                    />
                                    <li
                                      data-target="#demo7"
                                      data-slide-to={1}
                                    />
                                    <li
                                      data-target="#demo7"
                                      data-slide-to={2}
                                    />
                                  </ul>
                                  {/* The slideshow */}
                                  <div className="carousel-inner">
                                    <div className="carousel-item active">
                                      <img
                                        src="../assets/img/Deluxe1F(No View) HBT1.jpg"
                                        alt="Los Angeles"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                    <div className="carousel-item">
                                      <img
                                        src="../assets/img/Deluxe1F(No View)2 HBT1.jpg"
                                        alt="Chicago"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                    <div className="carousel-item">
                                      <img
                                        src="../assets/img/Deluxe1F(No View)3 HBT1.jpg"
                                        alt="New York"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                  </div>
                                  {/* Left and right controls */}
                                  <a
                                    className="carousel-control-prev"
                                    href="#demo7"
                                    data-slide="prev"
                                  >
                                    <span className="carousel-control-prev-icon" />
                                  </a>
                                  <a
                                    className="carousel-control-next"
                                    href="#demo7"
                                    data-slide="next"
                                  >
                                    <span className="carousel-control-next-icon" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7">
                              <div className="feature__type-content">
                                <h2>SUITE WITH KITCHEN</h2>
                                <table
                                  className="service__table"
                                  style={{
                                    width: "600px",
                                    tableLayout: "fixed",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <th>Size</th>
                                      <th>Bed</th>
                                      <th>Installation</th>
                                      <th>Price</th>
                                    </tr>
                                    <tr>
                                      <td>48m2</td>
                                      <td>1.8m Queen size bed</td>
                                      <td>
                                        Outside windows Bathtub LCD TV 32 inches
                                        Toilet with bidet function
                                      </td>
                                      <td>1.750.000VND+</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="btn__detail">
                                <a
                                  href="/AzumayaClone/html/reservation.html"
                                  style={{
                                    textDecoration: "none",
                                    color: "white",
                                  }}
                                >
                                  Make a Reservation
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div
                            className="feature__type-item"
                            style={{ height: "350px" }}
                          >
                            <div className="col-md-5">
                              <div className="carousel">
                                <div
                                  id="demo8"
                                  className="carousel slide"
                                  data-ride="carousel"
                                >
                                  {/* Indicators */}
                                  <ul className="carousel-indicators">
                                    <li
                                      data-target="#demo8"
                                      data-slide-to={0}
                                      className="active"
                                    />
                                    <li
                                      data-target="#demo8"
                                      data-slide-to={1}
                                    />
                                    <li
                                      data-target="#demo8"
                                      data-slide-to={2}
                                    />
                                  </ul>
                                  {/* The slideshow */}
                                  <div className="carousel-inner">
                                    <div className="carousel-item active">
                                      <img
                                        src="../assets/img/Deluxe1F(No View) HBT1.jpg"
                                        alt="Los Angeles"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                    <div className="carousel-item">
                                      <img
                                        src="../assets/img/Deluxe1F(No View)2 HBT1.jpg"
                                        alt="Chicago"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                    <div className="carousel-item">
                                      <img
                                        src="../assets/img/Deluxe1F(No View)3 HBT1.jpg"
                                        alt="New York"
                                        width={1100}
                                        height={500}
                                      />
                                    </div>
                                  </div>
                                  {/* Left and right controls */}
                                  <a
                                    className="carousel-control-prev"
                                    href="#demo8"
                                    data-slide="prev"
                                  >
                                    <span className="carousel-control-prev-icon" />
                                  </a>
                                  <a
                                    className="carousel-control-next"
                                    href="#demo8"
                                    data-slide="next"
                                  >
                                    <span className="carousel-control-next-icon" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7">
                              <div className="feature__type-content">
                                <h2>SUITE</h2>
                                <table
                                  className="service__table"
                                  style={{
                                    width: "600px",
                                    tableLayout: "fixed",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <th>Size</th>
                                      <th>Bed</th>
                                      <th>Installation</th>
                                      <th>Price</th>
                                    </tr>
                                    <tr>
                                      <td>48m2</td>
                                      <td>1.8m King size bed</td>
                                      <td>
                                        Outside windows Bathtub LCD TV 32 inches
                                        Toilet with bidet function
                                      </td>
                                      <td>1.750.000VND+</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="btn__detail">
                                <a
                                  href="/AzumayaClone/html/reservation.html"
                                  style={{
                                    textDecoration: "none",
                                    color: "white",
                                  }}
                                >
                                  Make a Reservation
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="room__content" style={{ height: "1100px" }}>
                  <div className="room__title">
                    Room Tarrif
                    <img
                      src="../assets/img/line.png"
                      alt=""
                      style={{ verticalAlign: "middle" }}
                    />
                  </div>
                  <div className="room__container room__container-table">
                    <table className="room__table">
                      <tbody>
                        <tr>
                          <th colSpan={2} rowSpan={2}>
                            Room Type
                          </th>
                          <th rowSpan={2}> Room Rate</th>
                          <th colSpan={3}>Description</th>
                        </tr>
                        <tr>
                          <th>Size m2</th>
                          <th>Window</th>
                          <th>Bathtub</th>
                        </tr>
                        <tr>
                          <td style={{ width: "50px" }}>1</td>
                          <td>DELUXE 1F</td>
                          <td>1.250.000VND+</td>
                          <td>24</td>
                          <td>
                            <i
                              className="fa fa-times red"
                              style={{ color: "red" }}
                            />
                          </td>
                          <td>
                            <i
                              className="fa fa-check green"
                              style={{ color: "green" }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "50px" }}>2</td>
                          <td>DELUXE INSIDE WINDOW (NO VIEW)</td>
                          <td>1.375.000VND+</td>
                          <td>24~26</td>
                          <td>
                            <i
                              className="fa fa-times red"
                              style={{ color: "red" }}
                            />
                          </td>
                          <td>
                            <i
                              className="fa fa-check green"
                              style={{ color: "green" }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "50px" }}>3</td>
                          <td>EXECUTIVE INSIDE WINDOW</td>
                          <td>1.450.000VND+</td>
                          <td>26</td>
                          <td>
                            <i
                              className="fa fa-check green"
                              style={{ color: "green" }}
                            />
                          </td>
                          <td>
                            <i
                              className="fa fa-check green"
                              style={{ color: "green" }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "50px" }}>4</td>
                          <td>EXECUTIVE</td>
                          <td>1.500.000VND+ </td>
                          <td>26</td>
                          <td>
                            <i
                              className="fa fa-check green"
                              style={{ color: "green" }}
                            />
                          </td>
                          <td>
                            <i
                              className="fa fa-check green"
                              style={{ color: "green" }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "50px" }}>5</td>
                          <td>EXECUTIVE WITH KITCHEN</td>
                          <td>1.575.000VND+ </td>
                          <td>26</td>
                          <td>
                            <i
                              className="fa fa-check green"
                              style={{ color: "green" }}
                            />
                          </td>
                          <td>
                            <i
                              className="fa fa-check green"
                              style={{ color: "green" }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "50px" }}>6</td>
                          <td>SEMI SUITE WITH KITCHEN</td>
                          <td>1.675.000VND+</td>
                          <td>35</td>
                          <td>
                            <i
                              className="fa fa-check green"
                              style={{ color: "green" }}
                            />
                          </td>
                          <td>
                            <i
                              className="fa fa-check green"
                              style={{ color: "green" }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "50px" }}>7</td>
                          <td> SUITE</td>
                          <td>1.750.000VND+</td>
                          <td>48</td>
                          <td>
                            <i
                              className="fa fa-check green"
                              style={{ color: "green" }}
                            />
                          </td>
                          <td>
                            <i
                              className="fa fa-check green"
                              style={{ color: "green" }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "50px" }}>8</td>
                          <td>SEMI SUITE</td>
                          <td>1.750.000VND+</td>
                          <td>48</td>
                          <td>
                            <i
                              className="fa fa-check green"
                              style={{ color: "green" }}
                            />
                          </td>
                          <td>
                            <i
                              className="fa fa-check green"
                              style={{ color: "green" }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="required__note">
                      *Room price is excluded 10%
                    </div>
                    <div className="room__service">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-4">
                            <h2>Serviced included :</h2>
                            <p>
                              Japanese breakfast
                              <br />
                              Open-air hot tub
                              <br />
                              High-speed internet connection
                              <br />
                              Daily room making
                              <br />
                              Daily complimentary water + Free 3 drinks
                            </p>
                          </div>
                          <div className="col-md-4">
                            <h2>Amenities &amp; Facilities:</h2>
                            <p>
                              Bathtub
                              <br />
                              Working desk
                              <br />
                              32 inch Sony TV
                              <br />
                              Free Wi-Fi
                              <br />
                              Security box
                              <br />
                              Hair drier
                              <br />
                              Shaving razor &amp; tooth brush
                              <br />
                              Shampoo, conditioner, and body soap
                              <br />
                              Toilet with bidet function
                            </p>
                          </div>
                          <div className="col-md-4">
                            <h2>Free rental:</h2>
                            <p>
                              Transformer (220V → 110V)
                              <br />
                              Additional socket hub
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="room__content" style={{ height: "1200px" }}>
                  <div className="room__title">
                    Bussiness Service
                    <img
                      src="../assets/img/line.png"
                      alt=""
                      style={{ verticalAlign: "middle" }}
                    />
                    <p style={{ fontSize: "1.2rem", paddingTop: "20px" }}>
                      For whom desire a comfortable business trip, Azumaya Hotel
                      provides various services to support you. Our staff are
                      Japanese available, so please do not hesitate to ask us
                      about any problem.
                    </p>
                  </div>
                  <div className="room__container room__container-table">
                    <table className="room__table">
                      <tbody>
                        <tr>
                          <th rowSpan={2}>Pickup Service (空港送迎)</th>
                          <td>$25 (6am~9pm)</td>
                          <td rowSpan={2}>
                            Car for 4-7 persons (4-7 人乗り、出待ち)
                          </td>
                        </tr>
                        <tr>
                          <td>$30 (9pm-6am)</td>
                        </tr>
                        <tr>
                          <th>Minibar</th>
                          <td>From 15.000 VND</td>
                          <td>Soft drink, beer, etc.</td>
                        </tr>
                        <tr>
                          <th rowSpan={2}>Laundry （クリーニング）</th>
                          <td rowSpan={2}>From 12.500 VND</td>
                          <td>Special price for long staying guest</td>
                        </tr>
                        <tr>
                          <td>長期滞在者のためのスペシャル価格あり</td>
                        </tr>
                        <tr>
                          <th rowSpan={2}>Print &amp; Copy</th>
                          <td colSpan={2}>FREE for first 10 pages / day</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            From 11th page, 2.000VND charged per page
                          </td>
                        </tr>
                        <tr>
                          <th rowSpan={2}>Tel</th>
                          <td colSpan={2}>FREE for local number</td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            1$ charged for international number
                          </td>
                        </tr>
                        <tr>
                          <th>Rental Car</th>
                          <td colSpan={2}>Ask receptionist</td>
                        </tr>
                        <tr>
                          <th>Tour</th>
                          <td colSpan={2}>Ask receptionist</td>
                        </tr>
                        <tr>
                          <th>Extend Visa </th>
                          <td colSpan={2}>Ask receptionist</td>
                        </tr>
                        <tr>
                          <th>Food Delivery</th>
                          <td colSpan={2}>Ask receptionist</td>
                        </tr>
                        <tr>
                          <th>Rotenburo</th>
                          <td colSpan={2}>
                            月〜金：6:00-9:00/17:00-23:00 土日：7:00-23:00
                            ＊女性のご宿泊のお客様はハイバーチュン2号店にて、平日
                            23:00～24：00の間にご利用いただけます。
                            当日16時までに受付でご予約いただきますようお願い致します。
                            平日 23:00～24：00
                          </td>
                        </tr>
                        <tr>
                          <th>Breakfast</th>
                          <td colSpan={2}>
                            月〜土：6:00-8:00 ビュッフェ8:00-10:00
                            セットメニュー 日：6:00-10:00　セットメニューのみ
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h1>Azumaya Hotel Management Board</h1>
                    <p>
                      Reservation can be made via phone:
                      <a href="http://">(+842) 4 6278 6688;</a> <br />
                      or email:{" "}
                      <a href="http://">reservationhanoi@azumayavietnam.com</a>
                      <br />
                      or visit our website:{" "}
                      <a href="http://">www.azumayavietnam.com</a>
                    </p>
                  </div>
                </div>
                <div className="room__content" style={{ height: "800px" }}>
                  <div className="room__title">
                    Location
                    <img
                      src="../assets/img/line.png"
                      alt=""
                      style={{ verticalAlign: "middle" }}
                    />
                    <p style={{ fontSize: "1.2rem", paddingTop: "20px" }}>
                      We are located in the Japanese town of Hai Ba Trung area
                      and there are many Japanese restaurant, Karaoke Lounge,
                      Bar. Since it is accessible and convenient to go anyplace,
                      it is very popular area for many Japanese business
                      travelers and Japanese workers.
                    </p>
                    <div className="hotel__info">
                      <h1>東屋ホテル　ハイバーチュン１号店</h1>
                      <p>
                        <i
                          className="purple fa fa-map-marker"
                          style={{ color: "#482979" }}
                        />
                        Address : 16 Bui Thi Xuan Street, Hai Ba Trung Dist,
                        Hanoi. Vietnam.
                      </p>
                      <p>
                        <i
                          className="purple fa fa-phone"
                          style={{ color: "#482979" }}
                        />
                        Phone:(+842) 4 6278 6688
                      </p>
                      <p>
                        <i
                          className="purple fa fa-envelope"
                          style={{ color: "#482979" }}
                        />
                        Email: reservationhanoi@azumayavietnam.com
                      </p>
                    </div>
                  </div>
                  <div className="room__container">
                    <div className="gg-map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.195372793994!2d105.84877970794305!3d21.01704575027471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab8d06272085%3A0xa2c488173a2bd380!2sAzumaya+Hotel+Ha+Noi!5e0!3m2!1svi!2s!4v1480500914009"
                        frameBorder={0}
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
      </div>
    </>
  );
}
