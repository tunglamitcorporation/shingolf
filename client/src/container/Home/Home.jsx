import "flatpickr/dist/themes/airbnb.css";
import Booking from "../Units/Booking";
import { useTranslation } from "react-i18next";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import {Link} from "react-router-dom"
import {format, parse} from "date-fns"
import { useState, useEffect } from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import FormValidationWithYup from "../../Test";
import BookingForm from "../../Test";
import FormExample from "../../Test2";

function Example(props) {
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
                              <div className="container">
                                <div className="row">
                                  <div className="col-md-12">
                                  <p className="carousel_name pre-line">{item.caption}</p>
                                  <div className="btn_container">
                                  <Link to = {item.link}><i class="fa-solid fa-angle-right"></i></Link>
                                  </div>
                                  </div>
                                  </div>
                              </div>
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
                    src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1701493774/AzumayaWeb/hanoi_n4ucud.jpg"
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
                    src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1701497032/AzumayaWeb/hochiminh_ongsjz.jpg"
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
                    src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1701494392/AzumayaWeb/danang_lxgklz.jpg"
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
                    src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1701496773/AzumayaWeb/haiphong_kllzzj.jpg"
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
        <FormExample />
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
               console.log(formattedDate);
              if (article.allBranch == true)
               {
                return (
                  <div className="row">
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
                          <div className="allbranch allbranch_home">{t("header.allbranch")}</div>
                    </div>
                    <div className="col-md-7 mt-2 news_title-container">
                      <div key={article.id}>
                        <Link
                          className="news_title news_homeTitle"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          <div className="article_title">{article.title}</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              } else if (article.hn == true) {
                return (
                  <div className="row">
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
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          <div className="article_title">{article.title}</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              } else if (article.hp == true) {
                return (
                  <div className="row">
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
                          className="news_title"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          <div className="article_title">{article.title}</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              } else if (article.dn == true) {
                return (
                  <div className="row">
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
                          className="news_title"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          <div className="article_title">{article.title}</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              } else if (article.hcm == true) {
                return (
                  <div className="row">
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
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          <div className="article_title">{article.title}</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              } else if (article.az == true) {
                return (
                  <div className="row">
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
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          <div className="article_title">{article.title}</div>
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
                   <Example 
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
                  <small>{t("home.welcome_sub-title")}</small>
                </h1>
                <p>{t("home.welcome_content")}</p>
              </div>
            </div>
          </div>
        </div>
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
                      ></div>
                    </div>
                    <div className="content__feature-name">
                      <a href="">{item.title}</a>
                    </div>
                    <div className="content__feature-text">
                      <p style={{ textAlign: "justify" }}>{item.content.slice(0, 55)}...
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
