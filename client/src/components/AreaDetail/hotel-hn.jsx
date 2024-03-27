import Booking from "../../container/Units/Booking";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { format, parse } from "date-fns";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
// import '../../../node_modules/react-awesome-slider/dist/styles.css';
// import '../../../node_modules/react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import { Helmet } from "react-helmet-async"
export default function HotelHN({ news }) {
  const { t } = useTranslation();
  const homeNews = news;
  const HanoiDetail = t("hn-branch.branch", { returnObjects: true });
  const hnArea = t('hn-branch.slider', {returnObjects: true})
  const AutoPlaySlider =  withAutoplay(AwesomeSlider)
  return (
    <div>
      {/* <div className="policies__header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t("header.hn")}</h1>
            </div>
          </div>
        </div>
      </div> */}
      <Helmet>
      <meta name="description" content="Information on the Ha noi Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease." />
      <meta name="robots" content="max-image-preview:large" />
      <link rel="canonical" href="http://tunglam.site/hotel-hn/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Hotel HN - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル" />
      <meta property="og:description" content="Information on the Ha noi Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease." />
      <meta property="og:url" content="http://tunglam.site/hotel-hn/" />
      <meta property="og:image" content="https://res.cloudinary.com/dtdfsaaei/image/upload/v1710735800/AzumayaWeb/hanoi1_yrqgvy.png" />
      <meta property="article:published_time" content="2016-11-22T03:28:09+00:00" />
      <meta property="article:modified_time" content="2020-07-06T03:29:20+00:00" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Hotel HN - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル" />
      <meta name="twitter:description" content="Information on the Ha noi Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease." />
      <script type="application/ld+json" class="aioseo-schema">
        {`"@context":"https:\/\/schema.org","@graph":[{"@type":"WebSite","@id":"https:\/\/azumayavietnam.com\/#website","url":"https:\/\/azumayavietnam.com\/","name":"\u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","description":"Azumaya,\u30cf\u30ce\u30a4\u3068\u30c0\u30ca\u30f3\u3001\u30db\u30fc\u30c1\u30df\u30f3\u306b\u3042\u308b\u3053\u3060\u308f\u308a\u306e\u548c\u671d\u98df\u3068\u9732\u5929\u98a8\u5442\u3001\u30d3\u30b8\u30cd\u30b9\u30d1\u30fc\u30bd\u30f3\u5411\u3051\u30db\u30c6\u30eb\u306e\u6771\u5c4b\u30d9\u30c8\u30ca\u30e0\u30db\u30c6\u30eb","inLanguage":"en-US","publisher":{"@id":"https:\/\/azumayavietnam.com\/#organization"}},{"@type":"Organization","@id":"https:\/\/azumayavietnam.com\/#organization","name":"\u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","url":"https:\/\/azumayavietnam.com\/"},{"@type":"BreadcrumbList","@id":"https:\/\/azumayavietnam.com\/hotel-hn\/#breadcrumblist","itemListElement":[{"@type":"ListItem","@id":"https:\/\/azumayavietnam.com\/#listItem","position":1,"item":{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/","name":"Home","description":"Azumaya,\u30cf\u30ce\u30a4\u3068\u30c0\u30ca\u30f3\u3001\u30db\u30fc\u30c1\u30df\u30f3\u306b\u3042\u308b\u3053\u3060\u308f\u308a\u306e\u548c\u671d\u98df\u3068\u9732\u5929\u98a8\u5442\u3001\u30d3\u30b8\u30cd\u30b9\u30d1\u30fc\u30bd\u30f3\u5411\u3051\u30db\u30c6\u30eb\u306e\u6771\u5c4b\u30d9\u30c8\u30ca\u30e0\u30db\u30c6\u30eb","url":"https:\/\/azumayavietnam.com\/"},"nextItem":"https:\/\/azumayavietnam.com\/hotel-hn\/#listItem"},{"@type":"ListItem","@id":"https:\/\/azumayavietnam.com\/hotel-hn\/#listItem","position":2,"item":{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/hotel-hn\/","name":"Hotel HN","description":"Information on the Ha noi Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen\/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease.","url":"https:\/\/azumayavietnam.com\/hotel-hn\/"},"previousItem":"https:\/\/azumayavietnam.com\/#listItem"}]},{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/hotel-hn\/#webpage","url":"https:\/\/azumayavietnam.com\/hotel-hn\/","name":"Hotel HN - \u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","description":"Information on the Ha noi Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen\/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease.","inLanguage":"en-US","isPartOf":{"@id":"https:\/\/azumayavietnam.com\/#website"},"breadcrumb":{"@id":"https:\/\/azumayavietnam.com\/hotel-hn\/#breadcrumblist"},"datePublished":"2016-11-22T03:28:09+07:00","dateModified":"2020-07-06T03:29:20+07:00"}]`}
      </script>
      </Helmet>
      <div className="area_header" >
              <div className="overlay"></div>
              <AutoPlaySlider
              style={{height: '600px'}}
              animation = "scaleOutAnimation"
              mobileTouch
              infinite
              play
              interval = {5000}>
          {hnArea.map((item)=>(
              <div data-src={item.image} style={{height:'100%'}}>
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
                  <Link to="/">
                    <i className="fa-solid fa-house"></i>
                  </Link>
                </li>
                <li className="breadcrumb__item">/</li>
                <li className="breadcrumb__item">
                  <a className="breadcrumb__title" href="">
                    {t("header.hn")}
                  </a>
                </li>
              </ul>
            </div>
          </div>                                                               
        </div>
      </div>
      <div className="branch__container">
        <div className="container">
          {HanoiDetail.map((item) => (
            <Link to ={item.link} style={{textDecoration:"none"}}>
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
                        <Link to={item.link}>{t("hn-branch.btn-detail")}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
        <div className="content__news">
          <div className="container">
            <div className="row align-item-center justify-content-center">
              <div className="col-md-12" style={{ marginTop: 60 }}>
                <h2
                  className="content__news-title"
                  style={{ fontWeight: "bold" }}
                >
                  {t("home.news_title")}
                </h2>
                <ul className="content__news-list">
                  {homeNews.map((article) => {
                    const parsedDate = parse(
                      article.date,
                      "yyyy-MM-dd",
                      new Date()
                    );
                    const formattedDate = format(parsedDate, "MMM do yyyy");
                    const [all, month, day, suffix, year] = formattedDate.match(
                      /(\w+) (\d+)(\w+) (\d+)/
                    );
                    console.log(formattedDate);
                    if (article.allBranch == true) {
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
                            <div className="allbranch allbranch_home">
                              {t("header.allbranch")}
                            </div>
                          </div>
                          <div className="col-md-7 mt-2 news_title-container">
                            <div key={article.id}>
                              <Link
                                className="news_title news_homeTitle"
                                to={`/News/${encodeURIComponent(
                                  article.title
                                )}`}
                              >
                                <div className="article_title">
                                  {article.title}
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    if (article.hn == true) {
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
                            <div className="hanoi hanoi_home">
                              {t("header.hn")}
                            </div>
                          </div>
                          <div className="col-md-7 mt-2 news_title-container">
                            <div key={article.id}>
                              <Link
                                className="news_title news_homeTitle"
                                to={`/News/${encodeURIComponent(
                                  article.title
                                )}`}
                              >
                                <div className="article_title">
                                  {article.title}
                                </div>
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
