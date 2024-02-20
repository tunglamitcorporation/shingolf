import "flatpickr/dist/themes/airbnb.css";
import Booking from "./Booking";
import { useTranslation } from "react-i18next";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import {Link, useNavigate} from "react-router-dom"
import { scroller } from "react-scroll";
import {format, parse} from "date-fns"
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import data from "./JSON/data.json";
import CityProvinceInput from "./Test";
export default function Home({news}) {
  const { t } = useTranslation();
  const featureItem = t("feature.feature_item", { returnObjects: true });
  const homeData = t("home", { returnObjects: true });
  const WelcomeData = t("home.welcome", { returnObjects: true });
  const homeNews = news.slice(0,4)

  const navigate = useNavigate()
  const headerData = t("header", { returnObjects: true });
  const feature = t("feature.feature_item", { returnObjects: true });
  const hcm = t("hcm-branch.branch", {returnObjects:true})
  const hn = t("hn-branch.branch", {returnObjects:true})
  const dn = t("dn-branch.branch", {returnObjects:true})
  const hp = t("hp-branch.branch", {returnObjects:true})
  const service = t("service.service_name", {returnObjects:true})
  const [isOpen, setIsOpen] = useState(false)
  const toggleHeader = () => {
    setIsOpen(!isOpen)
}
useEffect(()=>{
  if(isOpen) {
    document.body.style.position= "fixed";
  }else{
    document.body.style.position = "";
  }
})
  return (
    <>
    <div className="homepage">
      <div className="content">
      {/* <div className="content__background"> */}
      <Carousel
                          showArrows
                          showThumbs={false}
                          showStatus={false}
                          emulateTouch
                          interval={5000}
                          autoPlay
                          infiniteLoop
                        >
                          {data.home.map((item) => (
                            <img src={item} alt="" />
                          ))}
                        </Carousel>
      {/* </div> */}
          <div className="container-fluid">
            <div className="row g-0 p-0">
              <div className="col-6 col-md-3 offset-0">
                <div className="content__branch-item">
                  <Link className='link-route' to = '/hotel-hn' >
                  <img
                    className="content__branch-img"
                    src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1701493774/AzumayaWeb/hanoi_n4ucud.jpg"
                    alt=""
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
                    alt=""
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
                    alt=""
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
                    alt=""
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
                    alt=""
                  />
                  <button className="base__btn btn--detail">
                    {t("home.line_btn")}
                  </button>
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
              <div className="col-md-12">
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
                      <p style={{ textAlign: "justify" }}>{item.content.slice(0, 70)}...
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
    <CityProvinceInput />
    </>
  );
}
