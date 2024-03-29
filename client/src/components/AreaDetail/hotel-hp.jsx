import Booking from "../../container/Units/Booking";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {format, parse} from "date-fns"
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
// import '../../../node_modules/react-awesome-slider/dist/styles.css';
// import '../../../node_modules/react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import { Helmet } from "react-helmet-async"
import HelmetLayout from "../HelmetLayout/HelmetLayout";


export default function HotelHP({news}) {
  const { t } = useTranslation();
  const HPDetail = t("hp-branch.branch", { returnObjects: true });
  const homeNews = news
  const hpArea = t('hp-branch.slider', {returnObjects: true})
  const AutoPlaySlider =  withAutoplay(AwesomeSlider)

  return (
    <div>
      <HelmetLayout 
        title= "東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル"
        description="Information on the Ha noi Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease."
        pagelink="http://tunglam.site/"
        og_description="Information on the Ha noi Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease."
        og_sitename="東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル"
        og_type="website"
        
    />
      {/* <Helmet>
    <meta name="description" content="A very warm welcome from Azumaya Hotel Hai Phong! It is indeed our pleasure to serve you at Azumaya. Out hotel is conveniently located near Japanese restaurants area in Hai Phong, on the way to industrial zones and far 10 minutes from airport. At Azumaya Hotel, our friendly staffs will always be happy to assist you anytime in both Japanese and English. We hope to bring you the best services as you deserve so that you can enjoy every day of your staying. Therefore, we strive to provide you not only comfortable guest rooms but also a relax environment with enjoyable feelings like “Open-air Hot Bath-tub & Sauna” on 7F of the building (men only), and “Japanese Breakfast” which is the vitality of a day. Thank you for choosing us! Heartfelt hope you an unforgettable and enjoyable experience with us."   />
      <meta name="robots" content="max-image-preview:large" />
      <link rel="canonical" href="http://tunglam.site/hotel-hp/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Hotel HP - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル" />
      <meta property="og:description" content="A very warm welcome from Azumaya Hotel Hai Phong! It is indeed our pleasure to serve you at Azumaya. Out hotel is conveniently located near Japanese restaurants area in Hai Phong, on the way to industrial zones and far 10 minutes from airport. At Azumaya Hotel, our friendly staffs will always be happy to assist you anytime in both Japanese and English. We hope to bring you the best services as you deserve so that you can enjoy every day of your staying. Therefore, we strive to provide you not only comfortable guest rooms but also a relax environment with enjoyable feelings like “Open-air Hot Bath-tub & Sauna” on 7F of the building (men only), and “Japanese Breakfast” which is the vitality of a day. Thank you for choosing us! Heartfelt hope you an unforgettable and enjoyable experience with us."/>
      <meta property="og:url" content="http://tunglam.site/hotel-hp/" />
      <meta property="og:image" content = "https://res.cloudinary.com/dtdfsaaei/image/upload/v1710735806/AzumayaWeb/haiphong1_vr2jyt.png" />
      <meta property="article:published_time" content="2018-12-18T11:01:22+00:00" />
      <meta property="article:modified_time" content="2018-12-18T11:01:22+00:00" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Hotel HP - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル" />
      <script type="application/ld+json" class="aioseo-schema">
        {`"@context":"https:\/\/schema.org","@graph":[{"@type":"WebSite","@id":"https:\/\/azumayavietnam.com\/#website","url":"https:\/\/azumayavietnam.com\/","name":"\u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","description":"Azumaya,\u30cf\u30ce\u30a4\u3068\u30c0\u30ca\u30f3\u3001\u30db\u30fc\u30c1\u30df\u30f3\u306b\u3042\u308b\u3053\u3060\u308f\u308a\u306e\u548c\u671d\u98df\u3068\u9732\u5929\u98a8\u5442\u3001\u30d3\u30b8\u30cd\u30b9\u30d1\u30fc\u30bd\u30f3\u5411\u3051\u30db\u30c6\u30eb\u306e\u6771\u5c4b\u30d9\u30c8\u30ca\u30e0\u30db\u30c6\u30eb","inLanguage":"en-US","publisher":{"@id":"https:\/\/azumayavietnam.com\/#organization"}},{"@type":"Organization","@id":"https:\/\/azumayavietnam.com\/#organization","name":"\u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","url":"https:\/\/azumayavietnam.com\/"},{"@type":"BreadcrumbList","@id":"https:\/\/azumayavietnam.com\/hotel-hp\/#breadcrumblist","itemListElement":[{"@type":"ListItem","@id":"https:\/\/azumayavietnam.com\/#listItem","position":1,"item":{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/","name":"Home","description":"Azumaya,\u30cf\u30ce\u30a4\u3068\u30c0\u30ca\u30f3\u3001\u30db\u30fc\u30c1\u30df\u30f3\u306b\u3042\u308b\u3053\u3060\u308f\u308a\u306e\u548c\u671d\u98df\u3068\u9732\u5929\u98a8\u5442\u3001\u30d3\u30b8\u30cd\u30b9\u30d1\u30fc\u30bd\u30f3\u5411\u3051\u30db\u30c6\u30eb\u306e\u6771\u5c4b\u30d9\u30c8\u30ca\u30e0\u30db\u30c6\u30eb","url":"https:\/\/azumayavietnam.com\/"},"nextItem":"https:\/\/azumayavietnam.com\/hotel-hp\/#listItem"},{"@type":"ListItem","@id":"https:\/\/azumayavietnam.com\/hotel-hp\/#listItem","position":2,"item":{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/hotel-hp\/","name":"Hotel HP","url":"https:\/\/azumayavietnam.com\/hotel-hp\/"},"previousItem":"https:\/\/azumayavietnam.com\/#listItem"}]},{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/hotel-hp\/#webpage","url":"https:\/\/azumayavietnam.com\/hotel-hp\/","name":"Hotel HP - \u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","inLanguage":"en-US","isPartOf":{"@id":"https:\/\/azumayavietnam.com\/#website"},"breadcrumb":{"@id":"https:\/\/azumayavietnam.com\/hotel-hp\/#breadcrumblist"},"datePublished":"2018-12-18T11:01:22+07:00","dateModified":"2018-12-18T11:01:22+07:00"}]`}
      </script>
      </Helmet> */}
      {/* <div className="policies__header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t("header.hp")}</h1>
            </div>
          </div>
        </div>
      </div> */}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
