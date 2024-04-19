// import "flatpickr/dist/themes/airbnb.css";
import Booking from "../Units/Booking";
import { useTranslation } from "react-i18next";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import {Form, Link} from "react-router-dom"
import {format, parse} from "date-fns"
import { useState, useEffect } from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";
import MyForm from "../../Test";
import ImageUploader from "../../Test";

function LineModal(props) {
  return (
    <>
      <Modal
       {...props}
       size="lg"
       aria-labelledby="contained-modal-title-vcenter"
       centered
       backdrop="static"
       keyboard={false}
      >
        <Modal.Header className="justify-content-end">
          <Button variant="light right" onClick={props.onHide}>
          <i class="fa-solid fa-xmark purple"></i>
        </Button>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                  <img width={"100%"} src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1710388651/AzumayaWeb/img-ads_qlzhfp.jpg" alt="azumaya hotel line ads" />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default function Home({news}) {
  const { t } = useTranslation();
  const featureItem = t("feature.feature_item", { returnObjects: true });
  const homeNews = news.slice(0,4)
  const caption = t("caption", {returnObjects: true})
  const [isOpen, setIsOpen] = useState(false)
  const [modalShow, setModalShow] = useState(false);
  const c = t("header.title")
useEffect(()=>{
  if(isOpen) {
    document.body.style.position= "fixed";
  }else{
    document.body.style.position = "";
  }
})
const AutoPlaySlider =  withAutoplay(AwesomeSlider)

  return (
    <>
    <HelmetLayout title = {c} />
    <div className="homepage">
      <div className="content">
      <div className="overlay"></div>
      <AutoPlaySlider
      animation = "scaleOutAnimation"
      mobileTouch
      infinite
      play
      interval = {5000}>
            {caption.map((item) => (
               <div data-src={item.image}>
                                 <Link to = {item.link}>
                                  <p className="carousel_name">{item.name}<br />{item.caption}</p>
                                  </Link>
                                  </div>
                          ))}
        </AutoPlaySlider>
      </div>
      <div className="content">
          <div className="container-fluid">
            <div className="row g-0 p-0">
              <div className="col-6 col-md-3 offset-0">
                <div className="content__branch-item">
                  <Link className='link-route' to = '/hotel-hn' >
                  <img
                    className="content__branch-img"
                    src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1710735800/AzumayaWeb/hanoi1_yrqgvy.png"
                    alt="hotel hanoi azumaya hotel"
                  />
                  </Link>
                </div>
              </div>
              <div className="col-6 col-md-3 offset-0">
                <div className="content__branch-item">
                <Link className='link-route' to = '/hotel-hcm' >
                  <img
                    className="content__branch-img"
                    src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1710735801/AzumayaWeb/hochiminh1_glyoyn.png"
                    alt="hotel ho chi minh azumaya hotel"
                  />
                 </Link>
                </div>
              </div>
              <div className="col-6 col-md-3 offset-0">
                <div className="content__branch-item">
                <Link className='link-route' to = '/hotel-dn' >
                  <img
                    className="content__branch-img"
                    src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1710735801/AzumayaWeb/danang1_om37cr.png"
                    alt="hotel da nang azumaya hotel"
                  />
                 </Link>
                </div>
              </div>
              <div className="col-6 col-md-3 offset-0">
                <div className="content__branch-item">
                <Link className='link-route' to = '/hotel-hp' >
                  <img
                    className="content__branch-img"
                    src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1710735806/AzumayaWeb/haiphong1_vr2jyt.png"
                    alt="hotel hai phong azumaya"
                  />
                 </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="is-sticky">
        <Booking />
      </div>
        <div className="container mt-5">
          <div className="row justify-content-center align-item-center">
              <div className="col-md-6 d-flex align-items-center justify-content-center">
                <img style={{width: '70%', height:'100%'}} src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1712893321/promo-massage_gab00y.jpg" alt="massage" />
              </div>
              <div className="col-md-6 pre-line">
                <div className="promo-title">{t('service_massage.promo_title')}</div>
                <p className="promo-text mt-5">{t('service_massage.promo_content')}</p>
              <button
              style={{width:'200px'}}
                          class="button-57 call-btn mt-5"
                          role="button"
                        >
                          <Link to = "/massage/">
                          <span style={{color:'#482979'}} class="text">
                            {t("service_massage.reserve")}
                          </span>
                          <span><i class="fa-solid fa-circle-chevron-right"></i></span>
                          </Link>
                        </button>
              </div>
              <img
                      className="style-line col-md-2" style={{marginTop: '50px'}}
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/cyztqxdrc4jh9gqtxfbv.png"
                      alt=""
                    />
          </div>
        </div>
      <AnimatedOnScroll>
        <div className="content__news">
          <div className="container">
            <div className="row align-item-center justify-content-center">
              <div className="col-md-12 col-lg-10" style={{marginTop: 60}}>
                <h2 className="content__news-title" style={{fontWeight:'bold'}}>{t("home.news_title")}</h2>
                <ul className="content__news-list">
                {homeNews.map((article) => {
               const parsedDate = parse(article.date, 'yyyy-MM-dd', new Date()); 
               const formattedDate = format(parsedDate, 'MMM do yyyy')
               const [all, month, day, suffix, year] = formattedDate.match(/(\w+) (\d+)(\w+) (\d+)/);
               const encodedTitle = encodeURIComponent(article.title);
               const modifiedTitle = encodedTitle.replace(/%20/g, '-');
              if (article.allBranch == true)
               {
                return (
                  <div className="row justify-content-evenly">
                    <div className="col-md-2 mt-1 news_date-container">
                      <div className="news_box1">
                        <div className="news_time-home">
                        <div className="month">{month}</div>
                        <div className="day pl-2">{day}</div>
                        <sub className="suffix pt-2">{suffix}</sub>
                        <div className="year pl-2">{year}</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 news_branch-container">
                          <div className="allbranch allbranch_home">{t("header.vietnam")}</div>
                    </div>
                    <div className="col-md-7 mt-2 news_title-container">
                      <div >
                        <Link
                        key={article.id}
                          className="news_title news_homeTitle"
                          to={`/News/${modifiedTitle}`}
                        >
                          <div className="article_title">{article.news_title}</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              } else if (article.hn == true) {
                return (
                  <div className="row justify-content-evenly">
                    <div className="col-md-2 mt-1 news_date-container" >
                      <div className="news_box1">
                        <div className="news_time-home">
                        <div className="month">{month}</div>
                        <div className="day pl-2">{day}</div>
                        <sub className="suffix pt-2">{suffix}</sub>
                        <div className="year pl-2">{year}</div>
                        </div>
                      </div>
                    </div>
                        <div className="col-md-2 news_branch-container" >
                          <div className="hanoi hanoi_home">{t("header.hn")}</div>
                        </div>
                    <div className="col-md-7 mt-2 news_title-container">
                      <div key={article.id}>
                        <Link
                          className="news_title news_homeTitle"
                          to={`/News/${modifiedTitle}`}
                        >
                          <div className="article_title">{article.news_title}</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              } else if (article.hp == true) {
                return (
                  <div className="row justify-content-evenly">
                    <div className="col-md-2 mt-1 news_date-container" >
                      <div className="news_box1">
                        <div className="news_time-home">
                        <div className="month">{month}</div>
                        <div className="day pl-2">{day}</div>
                        <sub className="suffix pt-2">{suffix}</sub>
                        <div className="year pl-2">{year}</div>
                        </div>
                      </div>
                    </div>
                        <div className="col-md-2 news_branch-container" >
                          <div className="haiphong haiphong_home">{t("header.hp")}</div>
                        </div>
                    <div className="col-md-7 mt-2 news_title-container">
                      <div key={article.id}>
                        <Link
                          className="news_title news_homeTitle"
                          to={`/News/${modifiedTitle}`}
                        >
                          <div className="article_title">{article.news_title}</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              } else if (article.dn == true) {
                return (
                  <div className="row justify-content-evenly">
                    <div className="col-md-2 mt-1 news_date-container" >
                      <div className="news_box1">
                        <div className="news_time-home">
                          <div className="month">{month}</div>
                        <div className="day pl-2">{day}</div>
                        <sub className="suffix pt-2">{suffix}</sub>
                        <div className="year pl-2">{year}</div>
                        </div>
                      </div>
                    </div>
                        <div className="col-md-2 news_branch-container" >
                          <div className="danang danang_home">{t("header.dn")}</div>
                        </div>
                    <div className="col-md-7 mt-2 news_title-container"> 
                      <div key={article.id}>
                        <Link
                          className="news_title news_homeTitle"
                          to={`/News/${modifiedTitle}`}
                        >
                          <div className="article_title">{article.news_title}</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              } else if (article.hcm == true) {
                return (
                  <div className="row justify-content-evenly">
                    <div className="col-md-2 mt-1 news_date-container" >
                      <div className="news_box1">
                        <div className="news_time-home">
                          <div className="month">{month}</div>
                        <div className="day pl-2">{day}</div>
                        <sub className="suffix pt-2">{suffix}</sub>
                        <div className="year pl-2">{year}</div>
                        </div>
                      </div>
                    </div>
                        <div className="col-md-2 news_branch-container" >
                          <div className="hochiminh hochiminh_home">{t("header.hcm")}</div>
                        </div>
                    <div className="col-md-7 mt-2 news_title-container">
                      <div key={article.id}>
                        <Link
                          className="news_title news_homeTitle"
                          to={`/News/${modifiedTitle}`}
                        >
                          <div className="article_title">{article.news_title}</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              } else if (article.az == true) {
                return (
                  <div className="row justify-content-evenly">
                    <div className="col-md-2 mt-1 news_date-container" >
                      <div className="news_box1">
                        <div className="news_time-home">
                          <div className="month">{month}</div>
                        <div className="day pl-2">{day}</div>
                        <sub className="suffix pt-2">{suffix}</sub>
                        <div className="year pl-2">{year}</div>
                        </div>
                      </div>
                    </div>
                        <div className="col-md-2 news_branch-container" >
                          <div className="azumaya azumaya_home">{t("header.az")}</div>
                        </div>
                    <div className="col-md-7 mt-2 news_title-container">
                      <div key={article.id}>
                        <Link
                          className="news_title news_homeTitle"
                          to={`/News/${modifiedTitle}`}
                        >
                          <div className="article_title">{article.news_title}</div>
                        </Link>
                      </div>
                    </div>
                    </div>
                );
              }
            })}
                </ul>
              </div>
                <div className="col-md-2">
                  <div className="content__qr">
                    <img
                      className="content__qr-img"
                      src={t("home.line_link")}
                      alt="qr line azumaya hotel"
                    />
                    <button 
                    onClick={() => setModalShow(true)
                    }
                    className="base__btn btn--detail">
                      {t("home.line_btn")}
                    </button>
                   <LineModal
                   show = {modalShow}
                   onHide = {()=> setModalShow(false)}/>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </AnimatedOnScroll>
      <AnimatedOnScroll>
        <div className="content__welcome">
          <div className="container">
            <div className="row align-item-center">
              <div className="col-md-12 p-3">
                <h1 className="content__welcome-text">
                  {t("home.welcome_title")}
                  <small className="welcome_text-small">{t("home.welcome_sub-title")}</small>
                </h1>
                <p className="welcome-content">{t("home.welcome_content")}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <TabsInput /> */}
      </AnimatedOnScroll>
      <AnimatedOnScroll>
        <div className="content__feature">
          <div className="content__feature-title">{t("feature.name")}</div>
          <div className="container-fluid">
            <div className="row" style={{ justifyContent: "center" }}>
              {featureItem.map((item) => (
                <div className="col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: `url(${item.image})` }}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = {`/Feature/${item.id}`}
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <a href={`/Feature/${item.id}`}>{item.title}</a>
                    </div>
                    <div className="content__feature-text">
                      <p style={{ textAlign: "justify" }}>{item.content.slice(0, 75)}...
                      <Link 
                      className="continue_link" 
                      to = {`/Feature/${item.id}`}
                      >{t("feature.continue")}</Link></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedOnScroll>
    </div>
    </>
  );
}
