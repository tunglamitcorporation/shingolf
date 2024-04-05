import React from "react";
import {useState, useEffect } from "react";
import BookingRoom from "../../../container/BookingRoom/BookingRoom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classNames from "classnames";
import HelmetLayout from "../../HelmetLayout/HelmetLayout";

export default function AnnexRoomDetail() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const receivedData = location.state;
  const roomFeature = t("room_annex.features", { returnObjects: true });
  const branchName = t("branch", { returnObjects: true });
  const annex = t("annex", { returnObjects: true });

  const [startDate, setStartDate] = useState(receivedData ? receivedData.startDate : '');
  const [endDate, setEndDate] = useState(receivedData ? receivedData.endDate : '');
  // const [selectedCity, setSelectedCity] = useState(receivedData ? receivedData.selectedCity : '');
  // const [selectedBranch, setSelectedBranch] = useState(receivedData ? receivedData.selectedBranch : '');

  const handleContinue = (selectedRoom) => {
    if(startDate = '' ){
    }
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
  };
  const [selectedCity, setSelectedCity] = useState('hotel-hcm');
  const [selectedBranch, setSelectedBranch] = useState('annex-detail');
  useEffect(() => {
    if (receivedData && receivedData.selectedCity) {
      setSelectedCity(receivedData.selectedCity);
    } else {
      setSelectedCity(selectedCity)
    }
    if (receivedData && receivedData.selectedBranch) {
      setSelectedBranch(receivedData.selectedBranch);
    } else {
      setSelectedBranch(selectedBranch)
    }
  }, [receivedData]);

  const RoomCard = ({room_id, name, size, sizeTitle, bedTitle, install, in1, in2, in3, in4, in5,in6, priceTitle, bed, price, images}) => {
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
                alt={`${name} ${index} azumaya annex azumaya hotel ho chi minh `}
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
                                      <th>{bedTitle}</th>
                                      <td className="installation">
                                        {bed}
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
                                        <i class="fa-solid fa-check purple mr-2"></i>
                                          {in5}        
                                        <br />
                                        <i class="fa-solid fa-check purple mr-2"></i>
                                          {in6}        
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
                          onClick = {() => handleContinue(`${name}`) }
                          className="btn__reserve p-0 m-0">
                              {t("room_tvl1.reservation")}
                          </button>
                        </div>
      
  )
  }
  return (
    <>
    <HelmetLayout 
        title= "東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル"
        description="Information on the Ha noi Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease."
        pagelink="http://tunglam.site/"
        og_description="Information on the Ha noi Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease."
        og_sitename="東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル"
        og_type="website"
        
    />
    {/* <Helmet>
    <meta name="description" content="The hotel is located in the Japanese town near the biggest shopping center in Hanoi city center, and there are many Japanese restaurants, karaoke lounges and bars in the vicinity. Because it is easy to access anywhere you go, it is one of the popular areas for many Japanese business travelers and resident."   />
    <meta name="robots" content="max-image-preview:large" />
		<link rel="canonical" href="https://azumayavietnam.com/annex/room" />
		<meta property="og:locale" content="en_US" />
		<meta property="og:site_name" content="東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル" />
		<meta property="og:type" content="article" />
		<meta property="og:title" content="Annex - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル" />
    <meta property="og:description" content="Located right behind Azumaya Hotel and far 1 minute on foot, Azumaya Annex is considered as a quiet apartment suitable for long term customers. Azumaya Annex mainly affords to satisfy customers with not only wide rooms (27.2m2 ~ 30.2 m2), big windows (6/ 7 rooms), WIFI, bathtub & toilet with bidet function in all rooms.
All additional services are served at Azumaya hotel and the same with hotel guests. Hope you to spend your business trip enjoyably and comfortably at Azumaya Annex. If you have any questions, please feel free to contact to our reception" />
		<meta property="og:url" content="https://azumayavietnam.com/annex/room" />
    <meta property="og:image"content="https://res.cloudinary.com/dtdfsaaei/image/upload/v1703217951/AzumayaWeb/Annex_trh5ka.jpg" />
		<meta property="article:published_time" content="2016-11-29T09:34:30+00:00" />
		<meta property="article:modified_time" content="2016-11-29T09:34:30+00:00" />
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content="Annex - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル" />
		<script type="application/ld+json" class="aioseo-schema">
			{`"@context":"https:\/\/schema.org","@graph":[{"@type":"WebSite","@id":"https:\/\/azumayavietnam.com\/#website","url":"https:\/\/azumayavietnam.com\/","name":"\u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","description":"Azumaya,\u30cf\u30ce\u30a4\u3068\u30c0\u30ca\u30f3\u3001\u30db\u30fc\u30c1\u30df\u30f3\u306b\u3042\u308b\u3053\u3060\u308f\u308a\u306e\u548c\u671d\u98df\u3068\u9732\u5929\u98a8\u5442\u3001\u30d3\u30b8\u30cd\u30b9\u30d1\u30fc\u30bd\u30f3\u5411\u3051\u30db\u30c6\u30eb\u306e\u6771\u5c4b\u30d9\u30c8\u30ca\u30e0\u30db\u30c6\u30eb","inLanguage":"en-US","publisher":{"@id":"https:\/\/azumayavietnam.com\/#organization"}},{"@type":"Organization","@id":"https:\/\/azumayavietnam.com\/#organization","name":"\u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","url":"https:\/\/azumayavietnam.com\/"},{"@type":"BreadcrumbList","@id":"https:\/\/azumayavietnam.com\/annex\/#breadcrumblist","itemListElement":[{"@type":"ListItem","@id":"https:\/\/azumayavietnam.com\/#listItem","position":1,"item":{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/","name":"Home","description":"Azumaya,\u30cf\u30ce\u30a4\u3068\u30c0\u30ca\u30f3\u3001\u30db\u30fc\u30c1\u30df\u30f3\u306b\u3042\u308b\u3053\u3060\u308f\u308a\u306e\u548c\u671d\u98df\u3068\u9732\u5929\u98a8\u5442\u3001\u30d3\u30b8\u30cd\u30b9\u30d1\u30fc\u30bd\u30f3\u5411\u3051\u30db\u30c6\u30eb\u306e\u6771\u5c4b\u30d9\u30c8\u30ca\u30e0\u30db\u30c6\u30eb","url":"https:\/\/azumayavietnam.com\/"},"nextItem":"https:\/\/azumayavietnam.com\/annex\/room"},{"@type":"ListItem","@id":"https:\/\/azumayavietnam.com\/annex\/room","position":2,"item":{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/annex\/","name":"Annex","url":"https:\/\/azumayavietnam.com\/annex\/"},"previousItem":"https:\/\/azumayavietnam.com\/#listItem"}]},{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/annex\/#webpage","url":"https:\/\/azumayavietnam.com\/annex\/","name":"Annex - \u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","inLanguage":"en-US","isPartOf":{"@id":"https:\/\/azumayavietnam.com\/#website"},"breadcrumb":{"@id":"https:\/\/azumayavietnam.com\/annex\/#breadcrumblist"},"datePublished":"2016-11-29T09:34:30+07:00","dateModified":"2016-11-29T09:34:30+07:00"}]`}
		</script>
    </Helmet> */}
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
      <BookingRoom 
      startDate={startDate} 
      endDate={endDate} 
      selectedCity={selectedCity} 
      selectedBranch={selectedBranch}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      setSelectedCity={setSelectedCity}
      setSelectedBranch={setSelectedBranch} />
      </div>
      <div className="container p-0">
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
                <Link className="breadcrumb__title" to="/hotel-hcm">
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
      <div className="container p-0">
        <div
          className="row"
          style={{ justifyContent: "left", padding: "10px", textAlign:"justify" }}
        >
          <div className="service__location col-md-12 col-lg-3 col-xl-3">
            <a href="/thai-van-lung-1-detail/room" className="location_link">
              {t(branchName.tvl1)}
            </a>
          </div>
          <div className="service__location col-md-12 col-lg-3 col-xl-3">
            <a href="/thai-van-lung-2-detail/room" className="location_link">
              {t(branchName.tvl2)}
            </a>
          </div>
          <div className="service__location col-md-12 col-lg-3 col-xl-3">
            <a href="/le-thanh-ton-detail/room" className="location_link">
              {t(branchName.ltt)}
            </a>
          </div>
          <div className="service__location service__active col-md-12 col-lg-3 col-xl-3">
            <a href="/annex-detail/room" className="location_link">
              {t(branchName.annex)}
            </a>
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
                  {annex.map((item)=>(
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
