import Booking from "./Booking";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RoomCarousel from "./Carousel";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function RoomDetail() {
  const { t } = useTranslation();
  const roomFeature = t("room.features", { returnObjects: true });
  const branchHN = t("hn-branch.branch", { returnObjects: true });
  const room = t("roomHN.hbt1", { returnObjects: true })
  const roomInstall = t("installationHN.install", { returnObjects: true });
  console.log(room);
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
      <Tabs selectedTabClassName="service__active" className="container-fluid">
        <TabList className="row" style={{ justifyContent: "space-around", padding:'10px' }}>
          {branchHN.map((item) => (
            <Tab className="service__location col-md-2">{item.name}</Tab>
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
                    Room
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                    <p style={{ fontSize: "1.2rem", paddingTop: "10px" }}>
                      The following services are included: Japanese breakfast,
                      Open-air hot tub (for men only), International TV
                      channels, Free high speed Wi-Fi (no wired internet
                      service), daily room making, 2 bottles of water every day.
                    </p>
                  </div>
                </div>
               
                <div className="container">
                  <div className="row">
                    {room.map((item)=>(
                        <div className="col-lg-6">
                      <div className="room-item">
                     <RoomCarousel />
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <div className="card-title room-name">
                                  {item.name}
                                </div>
                                <table className="room__des-table">
                                  <tr>
                                    <th>{item.sizeTitle}</th>
                                    <td className="installation">{item.size}m&#178;</td>
                                  </tr>
                                  <tr>
                                    <th>{item.bedTitle}</th>
                                    <td className="installation">{item.bed}</td>
                                  </tr>
                                  <tr>
                                    <th>{item.install}</th>
                                    <td className="installation">
                                    <i class="fa-solid fa-check purple"></i>{item.in1}<br/><i class="fa-solid fa-check purple"></i>{item.in2}<br/><i class="fa-solid fa-check purple"></i>{item.in3}<br/><i class="fa-solid fa-check purple"></i>{item.in4}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>{item.priceTitle}</th>
                                    <td className="installation">{item.price}</td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                         <button className="btn__reserve p-0 m-0">
                          <Link to = "/Component/Reservation"
                            style={{ textDecoration: "none", color: "white" }}>
                            Make a Reservation
                          </Link>
                        </button>
                      </div>
                    </div>
                    ))}
                    {/* <div className="col-lg-6">
                      <div className="room-item">
                        <RoomCarousel />
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <h2 className="card-title">
                                  DELUXE 1F (NO VIEW)
                                </h2>
                                <table className="room__des-table">
                                  <tr>
                                    <th>Size</th>
                                    <td>24m&#178;</td>
                                  </tr>
                                  <tr>
                                    <th>Bed</th>
                                    <td>1.6m Queen size bed</td>
                                  </tr>
                                  <tr>
                                    <th>Installation</th>
                                    <td>
                                      Windows: no view Bathtub LCD TV 32 inches
                                      Toilet with bidet function
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>Price</th>
                                    <td>$45</td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>

                        <button className="btn__reserve p-0 m-0">
                          <Link to = "/Component/Reservation"
                            style={{ textDecoration: "none", color: "white" }}>
                            Make a Reservation
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="room-item">
                        <RoomCarousel />
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <h2 className="card-title">
                                  DELUXE 1F (NO VIEW)
                                </h2>
                                <table className="room__des-table">
                                  <tr>
                                    <th>Size</th>
                                    <td>24m&#178;</td>
                                  </tr>
                                  <tr>
                                    <th>Bed</th>
                                    <td>1.6m Queen size bed</td>
                                  </tr>
                                  <tr>
                                    <th>Installation</th>
                                    <td>
                                      Windows: no view Bathtub LCD TV 32 inches
                                      Toilet with bidet function
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>Price</th>
                                    <td>$45</td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>

                        <button className="btn__reserve p-0 m-0">
                          <Link to = "/Component/Reservation"
                            style={{ textDecoration: "none", color: "white" }}>
                            Make a Reservation
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="room-item">
                        <RoomCarousel />
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <h2 className="card-title">
                                  DELUXE 1F (NO VIEW)
                                </h2>
                                <table className="room__des-table">
                                  <tr>
                                    <th>Size</th>
                                    <td>24m&#178;</td>
                                  </tr>
                                  <tr>
                                    <th>Bed</th>
                                    <td>1.6m Queen size bed</td>
                                  </tr>
                                  <tr>
                                    <th>Installation</th>
                                    <td>
                                      Windows: no view Bathtub LCD TV 32 inches
                                      Toilet with bidet function
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>Price</th>
                                    <td>$45</td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>

                        <button className="btn__reserve p-0 m-0">
                          <Link to = "/Component/Reservation"
                            style={{ textDecoration: "none", color: "white" }}>
                            Make a Reservation
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="room-item">
                        <RoomCarousel />
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <h2 className="card-title">
                                  DELUXE 1F (NO VIEW)
                                </h2>
                                <table className="room__des-table">
                                  <tr>
                                    <th>Size</th>
                                    <td>24m&#178;</td>
                                  </tr>
                                  <tr>
                                    <th>Bed</th>
                                    <td>1.6m Queen size bed</td>
                                  </tr>
                                  <tr>
                                    <th>Installation</th>
                                    <td>
                                      Windows: no view Bathtub LCD TV 32 inches
                                      Toilet with bidet function
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>Price</th>
                                    <td>$45</td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>

                        <button className="btn__reserve p-0 m-0">
                          <Link to = "/Component/Reservation"
                            style={{ textDecoration: "none", color: "white" }}>
                            Make a Reservation
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="room-item">
                        <RoomCarousel />
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <h2 className="card-title">
                                  DELUXE 1F (NO VIEW)
                                </h2>
                                <table className="room__des-table">
                                  <tr>
                                    <th>Size</th>
                                    <td>24m&#178;</td>
                                  </tr>
                                  <tr>
                                    <th>Bed</th>
                                    <td>1.6m Queen size bed</td>
                                  </tr>
                                  <tr>
                                    <th>Installation</th>
                                    <td>
                                      Windows: no view Bathtub LCD TV 32 inches
                                      Toilet with bidet function
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>Price</th>
                                    <td>$45</td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>

                        <button className="btn__reserve p-0 m-0">
                          <Link to = "/Component/Reservation"
                            style={{ textDecoration: "none", color: "white" }}>
                            Make a Reservation
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="room-item">
                        <RoomCarousel />
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <h2 className="card-title">
                                  DELUXE 1F (NO VIEW)
                                </h2>
                                <table className="room__des-table">
                                  <tr>
                                    <th>Size</th>
                                    <td>24m&#178;</td>
                                  </tr>
                                  <tr>
                                    <th>Bed</th>
                                    <td>1.6m Queen size bed</td>
                                  </tr>
                                  <tr>
                                    <th>Installation</th>
                                    <td>
                                      Windows: no view Bathtub LCD TV 32 inches
                                      Toilet with bidet function
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>Price</th>
                                    <td>$45</td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>

                        <button className="btn__reserve p-0 m-0">
                          <Link to = "/Component/Reservation"
                            style={{ textDecoration: "none", color: "white" }}>
                            Make a Reservation
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="room-item">
                        <RoomCarousel />
                        <div className="card" style={{ border: "none" }}>
                          <div className="row p-0">
                            <div className="col-md-12"></div>
                            <div className="col-md-12">
                              <div className="card-body">
                                <h2 className="card-title">
                                  DELUXE 1F (NO VIEW)
                                </h2>
                                <table className="room__des-table">
                                  <tr>
                                    <th>Size</th>
                                    <td>24m&#178;</td>
                                  </tr>
                                  <tr>
                                    <th>Bed</th>
                                    <td>1.6m Queen size bed</td>
                                  </tr>
                                  <tr>
                                    <th>Installation</th>
                                    <td>
                                      Windows: no view Bathtub LCD TV 32 inches
                                      Toilet with bidet function
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>Price</th>
                                    <td>$45</td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>

                        <button className="btn__reserve p-0 m-0">
                          <Link to = "/Component/Reservation"
                            style={{ textDecoration: "none", color: "white" }}>
                            Make a Reservation
                          </Link>
                        </button>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service__content">
                <div className="room__content">
                  <div className="room__title">
                    Room Tarrif
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                  </div>
                  <div className="room__container room__container-table">
                    <table className="room__tariff">
                      <tbody>
                        <tr>
                          <th style={{width:'40%'}} colSpan={2} rowSpan={2}>
                            Room Type
                          </th>
                          <th style={{width:'20%'}} rowSpan={2}> Room Rate</th>
                          <th style={{width:'20%'}} colSpan={3}>Description</th>
                        </tr>
                        <tr>
                          <th style={{width:'10%'}}>Size m&#178;</th>
                          <th style={{width:'10%'}}>Window</th>
                          <th style={{width:'10%'}}>Bathtub</th>
                        </tr>
                        <tr>
                          <td style={{width:'5%'}}>1</td>
                          <td className="room__tariff-name">DELUXE 1F</td>
                          <td>1.250.000VND+</td>
                          <td>24</td>
                          <td>
                            <i className="fa fa-times red" />
                          </td>
                          <td>
                            <i className="fa fa-check green" />
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td className="room__tariff-name">DELUXE INSIDE WINDOW (NO VIEW)</td>
                          <td>1.375.000VND+</td>
                          <td>24~26</td>
                          <td>
                            <i className="fa fa-times red" />
                          </td>
                          <td>
                            <i className="fa fa-check green" />
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td className="room__tariff-name">EXECUTIVE INSIDE WINDOW</td>
                          <td>1.450.000VND+</td>
                          <td>26</td>
                          <td>
                            <i className="fa fa-check green" />
                          </td>
                          <td>
                            <i className="fa fa-check green" />
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td className="room__tariff-name">EXECUTIVE</td>
                          <td>1.500.000VND+ </td>
                          <td>26</td>
                          <td>
                            <i className="fa fa-check green" />
                          </td>
                          <td>
                            <i className="fa fa-check green" />
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td className="room__tariff-name">EXECUTIVE WITH KITCHEN</td>
                          <td>1.575.000VND+ </td>
                          <td>26</td>
                          <td>
                            <i className="fa fa-check green" />
                          </td>
                          <td>
                            <i className="fa fa-check green" />
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td className="room__tariff-name">SEMI SUITE WITH KITCHEN</td>
                          <td>1.675.000VND+</td>
                          <td>35</td>
                          <td>
                            <i className="fa fa-check green" />
                          </td>
                          <td>
                            <i className="fa fa-check green" />
                          </td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td className="room__tariff-name"> SUITE</td>
                          <td>1.750.000VND+</td>
                          <td>48</td>
                          <td>
                            <i className="fa fa-check green" />
                          </td>
                          <td>
                            <i className="fa fa-check green" />
                          </td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td className="room__tariff-name">SEMI SUITE</td>
                          <td>1.750.000VND+</td>
                          <td>48</td>
                          <td>
                            <i className="fa fa-check green" />
                          </td>
                          <td>
                            <i className="fa fa-check green" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="required__note mt-4">
                      *Room price is excluded 10%
                    </div>
                    <div className="room__service">
                      <div className="container p-0">
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
              </div>
            </TabPanel>
            <TabPanel>
              <div className="service__content">
                <div className="room__content">
                  <div className="room__title">
                    Bussiness Service
                    <img
                      className="style-line"
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
                    <p style={{ fontSize: "1.2rem", paddingTop: "10px" }}>
                      For whom desire a comfortable business trip, Azumaya Hotel
                      provides various services to support you. Our staff are
                      Japanese available, so please do not hesitate to ask us
                      about any problem.
                    </p>
                  </div>
                  <div className="room__container room__container-table">
                    <table className="room__table room__table-service">
                      <tbody>
                        <tr>
                          <th rowSpan={2}>Pick up & Drop off Service </th>
                          <td>$25 (6am~9pm)</td>
                          <td rowSpan={2}>Car for 4-7 persons</td>
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
                          <th>Laundry</th>
                          <td>From 12.500 VND</td>
                          <td>Special price for long staying guest</td>
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
                            Opening time: Mon ~ Fri : 7:00 ~ 9:00/ 17:00 ~
                            23:00, Sat & Sun : 7:00 ~ 23:00 (Only Men), * We
                            open for ladies at 23:00 to 24:00 Weekday Please
                            reserve at reception until 16:00 in day.
                          </td>
                        </tr>
                        <tr>
                          <th>Breakfast</th>
                          <td colSpan={2}>
                            Mon ~ Sat: 6:00 ~ 8:00 Buffet/ 8:00 ~ 10:00 Set
                            menu, Sun: 6:00 ~ 10:00 Set menu
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="table-footer">
                            <h1>Azumaya Hotel Management Board</h1>
                            <p>
                              Reservation can be made via phone:
                              <a href="http://">(+842) 4 6278 6688;</a> <br />
                              or email:{" "}
                              <a href="http://">
                                reservationhanoi@azumayavietnam.com
                              </a>
                              <br />
                              or visit our website:{" "}
                              <a href="http://">www.azumayavietnam.com</a>
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
                    Location
                    <img
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                      className="style-line"
                    />
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <p style={{ fontSize: "1.2rem", paddingTop: "10px" }}>
                            We are located in the Japanese town of Hai Ba Trung
                            area and there are many Japanese restaurant, Karaoke
                            Lounge, Bar. Since it is accessible and convenient
                            to go anyplace, it is very popular area for many
                            Japanese business travelers and Japanese workers.
                          </p>
                          <div className="hotel__info">
                            <h1>AZUMAYA HOTEL HAI BA TRUNG 1</h1>
                            <p>
                              <i className="purple fa-solid fa-location-dot" />
                              Address : 16 Bui Thi Xuan Street, Hai Ba Trung
                              Dist, Hanoi. Vietnam.
                            </p>
                            <p>
                              <i className="purple fa fa-phone" />
                              Phone:(+842) 4 6278 6688
                            </p>
                            <p>
                              <i className="purple fa fa-envelope" />
                              Email: reservationhanoi@azumayavietnam.com
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
