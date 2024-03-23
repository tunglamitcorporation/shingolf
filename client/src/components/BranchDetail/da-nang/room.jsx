import React from "react";
import {useState, useEffect } from "react";
import BookingRoom from "../../../container/BookingRoom/BookingRoom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, useLocation, useNavigate  } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classNames from "classnames";
import { Helmet } from "react-helmet";

export default function DNRoomDetail() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const receivedData = location.state;
  const roomFeature = t("room_dn.features", { returnObjects: true });
  const dn = t("dn", { returnObjects: true });

  const [startDate, setStartDate] = useState(receivedData ? receivedData.startDate : '');
  const [endDate, setEndDate] = useState(receivedData ? receivedData.endDate : '');
  // const [selectedCity, setSelectedCity] = useState(receivedData ? receivedData.selectedCity : '');
  // const [selectedBranch, setSelectedBranch] = useState(receivedData ? receivedData.selectedBranch : '');

  const handleContinue = (selectedRoom) => {
    const data = {
      ...receivedData,
      startDate,
      endDate,
      selectedCity,
      selectedBranch,
      selectedRoom
    };
    navigate('/reservation', { state: data });
  };
  const [selectedCity, setSelectedCity] = useState('hotel-hcm');
  const [selectedBranch, setSelectedBranch] = useState('le-thanh-ton-detail');
  const handleBranchValue = (cityId) => {
    switch(cityId) {
       case 'hotel-hcm':
        setSelectedBranch('le-thanh-ton-detail')
        break;
      case 'hotel-hn':
        setSelectedBranch('hai-ba-trung-detail')
        break;
      case 'da-nang': 
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
  const [selectedRoom, setSelectedRoom] = useState(
    receivedData ? receivedData.selectedRoom : ""   
  );
  const RoomCard = ({room_id, name, size, sizeTitle, bedTitle, install, in1, in2, in3, in4, in5, priceTitle, bed, price, images}) => {
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
                alt={`${name} ${index} azumaya danang azumaya hotel da nang` }
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
    <meta name="description" content="Our hotel is situated 10 minutes by taxi from the center of Da Nang city and the traffic is not so crowded. Among all of the branches, Da Nang branch has the most beautiful view from the hotel and you can it from our open-air hot bath. Since it is easily accessible to resort area, it is best location to relax tiredness of both working and traveling."   />
    <meta name="robots" content="max-image-preview:large" />
		<link rel="canonical" href="https://azumayavietnam.com/da-nang/room" />
		<meta property="og:locale" content="en_US" />
		<meta property="og:site_name" content="東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル" />
		<meta property="og:type" content="article" />
		<meta property="og:title" content="Da Nang Detail - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル" />
    <meta property="og:description" content="Our hotel is situated 10 minutes by taxi from the center of Da Nang city and the traffic is not so crowded. Among all of the branches, Da Nang branch has the most beautiful view from the hotel and you can it from our open-air hot bath. Since it is easily accessible to resort area, it is best location to relax tiredness of both working and traveling." />
		<meta property="og:url" content="https://azumayavietnam.com/da-nang/room" />
    <meta property="og:image"content="https://res.cloudinary.com/dtdfsaaei/image/upload/v1703221743/AzumayaWeb/da-nang_v1v7t2.jpg" />
		<meta property="article:published_time" content="2016-11-29T09:34:30+00:00" />
		<meta property="article:modified_time" content="2016-11-29T09:34:30+00:00" />
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content="Da Nang Detail - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル" />
		<script type="application/ld+json" class="aioseo-schema">
			{`"@context":"https:\/\/schema.org","@graph":[{"@type":"WebSite","@id":"https:\/\/azumayavietnam.com\/#website","url":"https:\/\/azumayavietnam.com\/","name":"\u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","description":"Azumaya,\u30cf\u30ce\u30a4\u3068\u30c0\u30ca\u30f3\u3001\u30db\u30fc\u30c1\u30df\u30f3\u306b\u3042\u308b\u3053\u3060\u308f\u308a\u306e\u548c\u671d\u98df\u3068\u9732\u5929\u98a8\u5442\u3001\u30d3\u30b8\u30cd\u30b9\u30d1\u30fc\u30bd\u30f3\u5411\u3051\u30db\u30c6\u30eb\u306e\u6771\u5c4b\u30d9\u30c8\u30ca\u30e0\u30db\u30c6\u30eb","inLanguage":"en-US","publisher":{"@id":"https:\/\/azumayavietnam.com\/#organization"}},{"@type":"Organization","@id":"https:\/\/azumayavietnam.com\/#organization","name":"\u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","url":"https:\/\/azumayavietnam.com\/"},{"@type":"BreadcrumbList","@id":"https:\/\/azumayavietnam.com\/da-nang\/#breadcrumblist","itemListElement":[{"@type":"ListItem","@id":"https:\/\/azumayavietnam.com\/#listItem","position":1,"item":{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/","name":"Home","description":"Azumaya,\u30cf\u30ce\u30a4\u3068\u30c0\u30ca\u30f3\u3001\u30db\u30fc\u30c1\u30df\u30f3\u306b\u3042\u308b\u3053\u3060\u308f\u308a\u306e\u548c\u671d\u98df\u3068\u9732\u5929\u98a8\u5442\u3001\u30d3\u30b8\u30cd\u30b9\u30d1\u30fc\u30bd\u30f3\u5411\u3051\u30db\u30c6\u30eb\u306e\u6771\u5c4b\u30d9\u30c8\u30ca\u30e0\u30db\u30c6\u30eb","url":"https:\/\/azumayavietnam.com\/"},"nextItem":"https:\/\/azumayavietnam.com\/da-nang\/room"},{"@type":"ListItem","@id":"https:\/\/azumayavietnam.com\/da-nang\/room","position":2,"item":{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/da-nang\/","name":"da-nang","url":"https:\/\/azumayavietnam.com\/da-nang\/"},"previousItem":"https:\/\/azumayavietnam.com\/#listItem"}]},{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/da-nang\/#webpage","url":"https:\/\/azumayavietnam.com\/da-nang\/","name":"da-nang - \u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","inLanguage":"en-US","isPartOf":{"@id":"https:\/\/azumayavietnam.com\/#website"},"breadcrumb":{"@id":"https:\/\/azumayavietnam.com\/da-nang\/#breadcrumblist"},"datePublished":"2016-11-29T09:34:30+07:00","dateModified":"2016-11-29T09:34:30+07:00"}]`}
		</script>
    </Helmet>
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
                <Link className="breadcrumb__title" to="/da-nang/room">
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
                  {dn.map((item)=>(
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
    </>
  );
}
