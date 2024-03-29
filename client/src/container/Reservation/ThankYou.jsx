import { useTranslation } from "react-i18next"
import { Link, useParams } from "react-router-dom"
import { useEffect } from "react"
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";

export default function ThankYou() {
    const { selectedCity } = useParams()
    const {t} = useTranslation()
    useEffect(() => {
        document.title = "Thank you - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル";
      }, []);
    
    if (selectedCity === 'hotel-hn'){
        return(
            <div>
              <HelmetLayout 
        title= "東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル"
        description="Information on the Ha noi Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease."
        pagelink="http://tunglam.site/"
        og_description="Information on the Ha noi Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease."
        og_sitename="東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル"
        og_type="website"
        
    />
      <div className="reservation__content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t('header.hn')}</h1>
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
                <Link className="breadcrumb__title">{t('thank_you.name')}</Link>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 pre-line">
                <h1>{t("thank_you.title")}</h1>
                <br />
                <h4>{t("thank_you.content")}</h4>
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
              <h1>{t('header.hcm')}</h1>
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
                <h1>{t("thank_you.title")}</h1>
                <br />
                <h4>{t("thank_you.content")}</h4>
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
              <h1>{t('header.hp')}</h1>
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
                <h1>{t("thank_you.title")}</h1>
                <br />
                <h4>{t("thank_you.content")}</h4>
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
              <h1>{t('header.dn')}</h1>
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
                <h1>{t("thank_you.title")}</h1>
                <br />
                <h4>{t("thank_you.content")}</h4>
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
              <h1>{t('reservation.title')}</h1>
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
                <h1>{t("thank_you.title")}</h1>
                <br />
                <h4>{t("thank_you.content")}</h4>
                </div>
            </div>
        </div>
      </div>
    )
}