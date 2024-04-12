import Booking from "../../container/Units/Booking";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {format, parse} from "date-fns"
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import HelmetLayout from "../HelmetLayout/HelmetLayout";


export default function HotelHP({news}) {
  const { t } = useTranslation();
  const HPDetail = t("hp-branch.branch", { returnObjects: true });
  const homeNews = news.slice(0,7)
  const hpArea = t('hp-branch.slider', {returnObjects: true})
  const a = t("header.hp")
  const b = t("header.title")
  const c = a + " | "+ b
  const AutoPlaySlider =  withAutoplay(AwesomeSlider)

  return (
    <div>
      <HelmetLayout title= {c} />
       <div className="area_header" >
              <div className="overlay"></div>
              <AutoPlaySlider
              animation = "scaleOutAnimation"
              mobileTouch
              infinite
              play
              interval = {5000}>
          {hpArea.map((item)=>(
              <div data-src={item.image} style={{height:'120%'}}>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                  <h1>{item.desc}</h1>
                  </div>
                  </div>
                  </div>
                  </div>
          ))}
      </AutoPlaySlider>
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
                <a href="/">
                  <i className="fa-solid fa-house"></i>
                </a>
              </li>
              <li className="breadcrumb__item">/</li>
              <li className="breadcrumb__item">
                <a
                  className="breadcrumb__title"
                  href="/hotel-hp"
                >
                  {t("header.hp")}
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
      <div className="branch__container">
        <div className="container">
          {HPDetail.map((item) => (
            <div className="feature__type-item">
              <div className="card">
                <div className="row p-0">
                  <div className="col-md-5">
                    <div
                      className="brand-img"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <div className="card-title">
                        <h2>{item.name}</h2>
                      </div>
                      <div className="card-text">
                        <p>{item.desc}</p>
                      </div>
                    </div>
                    <div className="btn-holder">
                      <div className="btn__detail control-position">
                        <Link to={item.link}>{t("hp-branch.btn-detail")}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="content__news">
          <div className="container">
            <div className="row align-item-center justify-content-center">
              <div className="col-md-12" style={{marginTop: 60}}>
                <h2 className="content__news-title" style={{fontWeight:'bold'}}>{t("home.news_title")}</h2>
                <ul className="content__news-list">
                {homeNews.map((article) => {
                  const encodedTitle = encodeURIComponent(article.title)
                  const modifiedTitle = encodedTitle.replace(/%20/g, '-');
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
                          <div className="allbranch allbranch_home">{t("header.vietnam")}</div>
                    </div>
                    <div className="col-md-7 mt-2 news_title-container">
                      <div key={article.id}>
                        <Link
                          className="news_title news_homeTitle"
                          to={`/News/${modifiedTitle}`}
                        >
                          <div className="article_title">{article.title}</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
               if (article.hp == true) {
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
                          className="news_title news_homeTitle"
                          to={`/News/${modifiedTitle}`}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
