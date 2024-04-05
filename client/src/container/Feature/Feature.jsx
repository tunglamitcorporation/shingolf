import { Link, useParams } from "react-router-dom";
import Booking from "../Units/Booking";
import { useTranslation } from "react-i18next"; 
import { useEffect} from 'react';
// import { Helmet } from "react-helmet-async"
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";


export default function Feature() {
  const { t } = useTranslation();
  const featureItem = t("feature.feature_item", { returnObjects: true });
    const {featureID} = useParams()
    useEffect(() => {
      if (featureID !== undefined) {
        const elementToScroll = document.getElementById(`${featureID}`);
        if (elementToScroll) {
          elementToScroll.scrollIntoView({ behavior: 'smooth', block:'center', inline:'nearest' });
        }
        
      }
    }, [featureID]);
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
      <meta name="description" content="We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No chips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease. We would like to introduce you to the greatest charm of Azumaya." />
		<meta name="robots" content="max-image-preview:large" />
		<link rel="canonical" href="https://azumayavietnam.com/feature/" />
		<meta property="og:locale" content="en_US" />
		<meta property="og:site_name" content="東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル" />
		<meta property="og:type" content="article" />
		<meta property="og:title" content="Feature - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル" />
		<meta property="og:description" content="We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No chips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease. We would like to introduce you to the greatest charm of Azumaya." />
		<meta property="og:url" content="https://azumayavietnam.com/feature/" />
    <meta property="og:image" content="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027483/AzumayaWeb/m3weovuhk4pgmsh2xgud.jpg" />
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content="Feature - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル" />
		<meta name="twitter:description" content="We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No chips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease. We would like to introduce you to the greatest charm of Azumaya." />
    <script type="application/ld+json" class="aioseo-schema">
			{`"@context":"https:\/\/schema.org","@graph":[{"@type":"WebSite","@id":"https:\/\/azumayavietnam.com\/#website","url":"https:\/\/azumayavietnam.com\/","name":"\u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","description":"Azumaya,\u30cf\u30ce\u30a4\u3068\u30c0\u30ca\u30f3\u3001\u30db\u30fc\u30c1\u30df\u30f3\u306b\u3042\u308b\u3053\u3060\u308f\u308a\u306e\u548c\u671d\u98df\u3068\u9732\u5929\u98a8\u5442\u3001\u30d3\u30b8\u30cd\u30b9\u30d1\u30fc\u30bd\u30f3\u5411\u3051\u30db\u30c6\u30eb\u306e\u6771\u5c4b\u30d9\u30c8\u30ca\u30e0\u30db\u30c6\u30eb","inLanguage":"en-US","publisher":{"@id":"https:\/\/azumayavietnam.com\/#organization"}},{"@type":"Organization","@id":"https:\/\/azumayavietnam.com\/#organization","name":"\u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","url":"https:\/\/azumayavietnam.com\/"},{"@type":"BreadcrumbList","@id":"https:\/\/azumayavietnam.com\/feature\/#breadcrumblist","itemListElement":[{"@type":"ListItem","@id":"https:\/\/azumayavietnam.com\/#listItem","position":1,"item":{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/","name":"Home","description":"Azumaya,\u30cf\u30ce\u30a4\u3068\u30c0\u30ca\u30f3\u3001\u30db\u30fc\u30c1\u30df\u30f3\u306b\u3042\u308b\u3053\u3060\u308f\u308a\u306e\u548c\u671d\u98df\u3068\u9732\u5929\u98a8\u5442\u3001\u30d3\u30b8\u30cd\u30b9\u30d1\u30fc\u30bd\u30f3\u5411\u3051\u30db\u30c6\u30eb\u306e\u6771\u5c4b\u30d9\u30c8\u30ca\u30e0\u30db\u30c6\u30eb","url":"https:\/\/azumayavietnam.com\/"},"nextItem":"https:\/\/azumayavietnam.com\/feature\/#listItem"},{"@type":"ListItem","@id":"https:\/\/azumayavietnam.com\/feature\/#listItem","position":2,"item":{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/feature\/","name":"Feature","description":"We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No chips required, the reception desk can speak Japanese, the payment currency can be yen\/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease. We would like to introduce you to the greatest charm of Azumaya.","url":"https:\/\/azumayavietnam.com\/feature\/"},"previousItem":"https:\/\/azumayavietnam.com\/#listItem"}]},{"@type":"WebPage","@id":"https:\/\/azumayavietnam.com\/feature\/#webpage","url":"https:\/\/azumayavietnam.com\/feature\/","name":"Feature - \u6771\u5c4b\u30db\u30c6\u30eb\u30d9\u30c8\u30ca\u30e0\uff5c\u30cf\u30ce\u30a4\u30db\u30fc\u30c1\u30df\u30f3\u30c0\u30ca\u30f3\u306e\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb","description":"We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No chips required, the reception desk can speak Japanese, the payment currency can be yen\/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease. We would like to introduce you to the greatest charm of Azumaya.","inLanguage":"en-US","isPartOf":{"@id":"https:\/\/azumayavietnam.com\/#website"},"breadcrumb":{"@id":"https:\/\/azumayavietnam.com\/feature\/#breadcrumblist"},"datePublished":"2016-10-25T08:05:01+07:00","dateModified":"2023-11-22T08:57:52+07:00"}]`}
		</script>
      </Helmet> */}
      <div className="policies__header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t("feature.name")}</h1>
            </div>
          </div>
        </div>
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
                  <i className="fa-solid fa-house"></i>
                  <Link to="/"></Link>
                </li>
                <li className="breadcrumb__item">/</li>
                <li className="breadcrumb__item">
                  <Link className="breadcrumb__title" to="/feature">
                    {t('header.feature')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="feature__characteristic">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="feature__content-title">
                <h2>{t("feature.main_title")}</h2>
              </div>
              <div className="feature__content-background">
                <p className="highlight__text">{t("feature.main_content")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature__type-list">
        <div className="container" id="containerID">
          {featureItem.map((item) => 
            {
              if(item.hasLink==true){
                return(
              <div key={item.id} className="feature__type-item" id={item.id}>
              <div className="card mb-3" style={{ border: "none" }}>
                <div className="row g-4">
                  <div className="col-md-4">
                    <img className="img-fluid" src={item.image} alt="" />
                    <div className="feature__number">
                      <span>{item.num}</span>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body" style={{ padding: 0 }}>
                      <h2 className="card-title">{item.title}</h2>
                      <p className="card-text">{item.content}</p>
                      <div className="btn-holder">
                      <div className="btn__detail control-position">
                        <Link to = {item.link}>{t("hn-branch.btn-detail")}</Link>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                )
              }
              return(
                <div key={item.id} className="feature__type-item" id={item.id}>
                <div className="card mb-3" style={{ border: "none" }}>
                  <div className="row g-4">
                    <div className="col-md-4">
                      <img className="img-fluid" src={item.image} alt="" />
                      <div className="feature__number">
                        <span>{item.num}</span>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body" style={{ padding: 0 }}>
                        <h2 className="card-title">{item.title}</h2>
                        <p className="card-text">{item.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                )
            }
            
            )}
        </div>
      </div>
    </div>
  );
}
