import { useTranslation } from "react-i18next"
import { Link, useParams } from "react-router-dom"
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";

export default function ThankYouService() {
    const { selectedCity } = useParams()
    const {t} = useTranslation()
    const a = t("thankyou_service.name")
    const b = t("header.title")
    const c = a + " | "+ b
    
    if (selectedCity === 'hotel-hn'){
        return(
            <div>
              <HelmetLayout title= {c}
    />
      <div className="reservation__content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t('thankyou_service.thank_content')}</h1>
            </div>
          </div>
        </div>
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
                <Link className="breadcrumb__title">{t('thankyou_service.name')}</Link>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 pre-line">
                <h1>{t("thankyou_service.title")}</h1>
                <br />
                <h4>{t("thankyou_service.content")}</h4>
                </div>
            </div>
        </div>
      </div>
        )
    }else if(selectedCity === "hotel-hcm")
    return(
        <div>
      <div className="reservation__content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <h1>{t('thankyou_service.thank_content')}</h1>
            </div>
          </div>
        </div>
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
                <Link className="breadcrumb__title">{t('reservation.title')}</Link>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 pre-line">
                <h1>{t("thankyou_service.title")}</h1>
                <br />
                <h4>{t("thankyou_service.content")}</h4>
                </div>
            </div>
        </div>
      </div>
    )
    else if(selectedCity === "hotel-hp")
    return(
        <div>
      <div className="reservation__content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <h1>{t('thankyou_service.thank_content')}</h1>
            </div>
          </div>
        </div>
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
                <Link className="breadcrumb__title">{t('reservation.title')}</Link>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 pre-line">
                <h1>{t("thankyou_service.title")}</h1>
                <br />
                <h4>{t("thankyou_service.content")}</h4>
                </div>
            </div>
        </div>
      </div>
    )
    else if(selectedCity === "hotel-dn")
    return(
        <div>
      <div className="reservation__content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t('thankyou_service.thank_content')}</h1>
            </div>
          </div>
        </div>
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
                <Link className="breadcrumb__title">{t('reservation.title')}</Link>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 pre-line">
                <h1>{t("thankyou_service.title")}</h1>
                <br />
                <h4>{t("thankyou_service.content")}</h4>
                </div>
            </div>
        </div>
      </div>
    )
    return(
        <div>
      <div className="reservation__content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <h1>{t('thankyou_service.thank_content')}</h1>
            </div>
          </div>
        </div>
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
                <Link className="breadcrumb__title">{t('reservation.title')}</Link>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 pre-line">
                <h1>{t("thankyou_service.title")}</h1>
                <br />
                <h4>{t("thankyou_service.content")}</h4>
                </div>
            </div>
        </div>
      </div>
    )
}