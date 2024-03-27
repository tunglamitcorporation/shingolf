import React from "react";
import {useState, useEffect } from "react";
import BookingRoom from "../../../container/BookingRoom/BookingRoom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classNames from "classnames";
import { Helmet } from "react-helmet-async"

export default function HPRoomDetail() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const receivedData = location.state;
  const roomFeature = t("room_hp.features", { returnObjects: true });
  const hp = t("hp", { returnObjects: true });

  const [startDate, setStartDate] = useState(receivedData ? receivedData.startDate : '');
  const [endDate, setEndDate] = useState(receivedData ? receivedData.endDate : '');
  // const [selectedCity, setSelectedCity] = useState(receivedData ? receivedData.selectedCity : '');
  // const [selectedBranch, setSelectedBranch] = useState(receivedData ? receivedData.selectedBranch : '');

  const handleContinue = (selectedRoom) => {
    // Prepare data to pass to Receiver2Page
    const data = {
      ...receivedData,
      startDate,
      endDate,
      selectedCity,
      selectedBranch,
      selectedRoom
    };
   
    // Navigate to Receiver2Page and pass data
    navigate('/reservation', { state: data });
  }
   const [selectedCity, setSelectedCity] = useState('hotel-hcm');
    const [selectedBranch, setSelectedBranch] = useState('le-thanh-ton-detail');
    const handleBranchValue = (cityId) => {
      switch(cityId) {
         case 'hotel-hcm':
          setSelectedBranch('le-thanh-ton-detail')
          break;
        case 'hotel-hn':
          setSelectedBranch('hai-phong')
          break;
        case 'hotel-dn': 
          setSelectedBranch('da-nang');
          break;
        case 'hotel-hp':
          setSelectedBranch('hai-phong');
          break;
        default:
          setSelectedBranch('');
      }
    };
    const handleCityChange = (e) => {
      const cityId = e.target.value;
      setSelectedCity(cityId);
      handleBranchValue(cityId);
    };
    useEffect(() => {
      if (receivedData && receivedData.selectedCity) {
        setSelectedCity(receivedData.selectedCity);
      }
      if (receivedData && receivedData.selectedBranch) {
        setSelectedBranch(receivedData.selectedBranch);
      }
    }, [receivedData]);
  const RoomCard = ({room_id, name, size, sizeTitle,  install, in1, in2, in3, in4, in5, priceTitle, price, images}) => {
    const { t } = useTranslation();
      return(
        <div key={room_id} className="room-item">
                          <Carousel 
         showArrows
         showThumbs={false}
         showStatus={false}
         emulateTouch
         stopOnHover
         autoPlay
         infiniteLoop>
          {images.map((image, index) => (
              <img
                src={image}
                alt={`${name} ${index} azumaya haiphong azumaya hotel haiphong`}
              />
           
          ))}
        </Carousel>
                          <div className="card" style={{ border: "none" }}>
                            <div className="row p-0">
                              <div className="col-md-12"></div>
                              <div className="col-md-12">
                                <div className="card-body">
                                  <div className="card-title room-name">
                                    {name}
                                  </div>
                                  <table className="room__des-table">
                                    <tr>
                                      <th>{sizeTitle}</th>
                                      <td className="installation">
                                        {size}m&#178;
                                      </td>
                                    </tr>
                                    <tr>
                                      <th>{install}</th>
                                      <td className="installation">
                                        <i class="fa-solid fa-check purple mr-2"></i>
                                        {in1}
                                        <br />
                                        <i class="fa-solid fa-check purple mr-2"></i>
                                        {in2}
                                        <br />
                                        <i class="fa-solid fa-check purple mr-2"></i>
                                        {in3}
                                        <br />
                                        <i class="fa-solid fa-check purple mr-2"></i>
                                        {in4}
                                        <br />
                                      </td>
                                    </tr>
                                    <tr>
                                      <th>{priceTitle}</th>
                                      <td className="installation bold">
                                        {price}
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                          onClick={() => handleContinue(`${name}`)} 
                          className="btn__reserve p-0 m-0">                       
                              {t("room_tvl1.reservation")}                       
                          </button>
                        </div>
      
  )
  }
  return (
    <>
    <Helmet>
    <meta name="description" content="Azumaya Hotel Hai Phong branch is located in the middle of city; just 10 minutes far from airport and 30 minutes far from Nomura Industrial Zone."   />
    <meta name="robots" content="max-image-preview:large" />
		<link rel="canonical" href="https://azumayavietnam.com/hai-phong/room" />
		<meta property="og:locale" content="en_US" />
		<meta property="og:site_name" content="東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル" />
		<meta property="og:type" content="article" />
		<meta property="og:title" content="hai-phong - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル" />
    <meta property="og:description" content="Located right behind Azumaya Hotel and far 1 minute on foot, Azumaya Hai Phong is considered as a quiet apartment suitable for long term customers. Azumaya hai-phong mainly affords to satisfy customers with not only wide rooms (27.2m2 ~ 30.2 m2), big windows (6/ 7 rooms), WIFI, bathtub & toilet with bidet function in all rooms.
All additional services are served at Azumaya hotel and the same with hotel guests. Hope you to spend your business trip enjoyably and comfortably at Azumaya Hai pPong. If you have any questions, please feel free to contact to our reception" />
		<meta property="og:url" content="https://azumayavietnam.com/hai-phong/room" />
    <meta property="og:image"content="https://res.cloudinary.com/dtdfsaaei/image/upload/v1703217951/AzumayaWeb/Annex_trh5ka.jpg" />
		<meta property="article:published_time" content="2016-11-29T09:34:30+00:00" />
		<meta property="article:modified_time" content="2016-11-29T09:34:30+00:00" />
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content="hai-phong - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル" />
		<script type="application/ld+json" class="aioseo-schema">
			{`"@context":"https:\/\/schema.org","@graph":[{"@type":"WebSite","@id":"https:\/\/azumayavietnam.com\/#website","url":"https:\/\/azumayavietnam.com\/","name":"\u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","description":"Azumaya,\u30cf\u30ce\u30a4\u3068\u30c0\u30ca\u30f3\u3001\u30db\u30fc\u30c1\u30df\u30f3\u306b\u3042\u308b\u3053\u3060\u308f\u308a\u306e\u548c\u671d\u98df\u3068\u9732\u5929\u98a8\u5442\u3001\u30d3\u30b8\u30cd\u30b9\u30d1\u30fc\u30bd\u30f3\u5411\u3051\u30db\u30c6\u30eb\u306e\u6771\u5c4b\u30d9\u30c8\u30ca\u30e0\u30db\u30c6\u30eb","inLanguage":"en-US","publisher":{"@id":"https:\/\/azumayavietnam.com\/#organization"}},{"@type":"Organization","@id":"https:\/\/azumayavietnam.com\/#organization","name":"\u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","url":"https:\/\/azumayavietnam.com\/"},{"@type":"BreadcrumbList","@id":"https:\/\/azumayavietnam.com\/hai-phong\/#breadcrumblist","itemListElement":[{"@type":"ListItem","@id":"https:\/\/azumayavietnam.com\/#listItem","position":1,"item":{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/","name":"Home","description":"Azumaya,\u30cf\u30ce\u30a4\u3068\u30c0\u30ca\u30f3\u3001\u30db\u30fc\u30c1\u30df\u30f3\u306b\u3042\u308b\u3053\u3060\u308f\u308a\u306e\u548c\u671d\u98df\u3068\u9732\u5929\u98a8\u5442\u3001\u30d3\u30b8\u30cd\u30b9\u30d1\u30fc\u30bd\u30f3\u5411\u3051\u30db\u30c6\u30eb\u306e\u6771\u5c4b\u30d9\u30c8\u30ca\u30e0\u30db\u30c6\u30eb","url":"https:\/\/azumayavietnam.com\/"},"nextItem":"https:\/\/azumayavietnam.com\/hai-phong\/room"},{"@type":"ListItem","@id":"https:\/\/azumayavietnam.com\/hai-phong\/room","position":2,"item":{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/hai-phong\/","name":"hai-phong","url":"https:\/\/azumayavietnam.com\/hai-phong\/"},"previousItem":"https:\/\/azumayavietnam.com\/#listItem"}]},{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/hai-phong\/#webpage","url":"https:\/\/azumayavietnam.com\/hai-phong\/","name":"hai-phong - \u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","inLanguage":"en-US","isPartOf":{"@id":"https:\/\/azumayavietnam.com\/#website"},"breadcrumb":{"@id":"https:\/\/azumayavietnam.com\/hai-phong\/#breadcrumblist"},"datePublished":"2016-11-29T09:34:30+07:00","dateModified":"2016-11-29T09:34:30+07:00"}]`}
		</script>
    </Helmet>
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
      <BookingRoom 
      startDate={startDate} 
      endDate={endDate} 
      selectedCity={selectedCity} 
      selectedBranch={selectedBranch}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      setSelectedCity={handleCityChange}
      setSelectedBranch={setSelectedBranch} />
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
                  {hp.map((item)=>(
                    <div className="col-md-12 col-lg-6">
                      <RoomCard {...item}/>
                       </div>       
                ))}
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
                        {/* <tr>
                          <th>{t("room_hp.massage")}</th>
                          <td className="pre-line" colSpan={2}>
                            {t("room_hp.massageContent")}
                          </td>
                        </tr> */}
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
