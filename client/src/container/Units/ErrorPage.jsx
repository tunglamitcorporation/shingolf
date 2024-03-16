import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

export default function ErrorPage() {
    const {t} = useTranslation()

    return(
        <div>
      <div className="reservation__content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t('error.title')}</h1>
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
                <Link className="breadcrumb__title">{t('error.title')}</Link>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 pre-line">
                <h1>{t("error.title")}</h1>
                <br />
                <h4>{t("error.content")} <Link to = '/'>{t('header.home')}</Link></h4>
                </div>
            </div>
        </div>
      </div>
    )
}