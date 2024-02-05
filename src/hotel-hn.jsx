import Booking from "./Booking"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";
import classNames from "classnames";
export default function HotelHN(){
    const { t } = useTranslation();
    const brandDetail = t("hn-branch.branch",  {returnObjects: true});
    const header = t("header",{returnObjects:true})
    const homeNewsData = t("home.new_item", { returnObjects: true });
    const HanoiDetail = t("hn-branch.branch", { returnObjects: true });
    return(
        <div>
             <div className="policies__header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>{t("header.hn")}</h1>
                            </div>
                        </div>
                    </div>
            </div>
            <div className = 'is-sticky'>
                <Booking />
            </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
            <div className="re__breadcrumb">
                        <ul className="breadcrumb__list">
                                   <li className = "breadcrumb__item">
                                       <Link to = "/">
                                           <i className="fa-solid fa-house"></i>
                                          </Link>
                                   </li>
                                   <li className = "breadcrumb__item">
                                       /
                                   </li>
                                   <li className = "breadcrumb__item">
                                        <a className ="breadcrumb__title" href="">{t("header.hn")}</a>
                                   </li>
                       </ul>
                    </div>
                    </div>
                </div>
            </div>
            <div className="branch__container">
                <div className="container">
                    {HanoiDetail.map((item)=>(
                <div className="feature__type-item">
                    <div className="card">
                    <div className="row p-0">
                        <div className="col-md-5">
                        <div className = "brand-img" style={{backgroundImage:`url(${item.image})`}} ></div>
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
                                    <Link to = {item.link}>{t("hn-branch.btn-detail")}</Link>
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
            <div className="row">
              <div className="col-12 col-md-8 offset-md-3">
                <h2 className="content__news-title" style={{fontWeight:'bold'}}>{t("home.news_title")}</h2>
                <ul className="content__news-list">
                  {homeNewsData.map((item) => (
                    <li className="content__news-item" key={item.id}>
                      <span className="content__news-date">
                        {item.month} {item.day} {item.year}{" "}
                      </span>
                      <span
                        className={classNames({
                          "content__news-branch": item.location == "Hanoi",
                          "content__news-branch--bg":
                            item.location == "All Branches",
                        })}
                      >
                        {item.location}
                      </span>
                      <span className="content__news-link">
                        <a href={item.link}>{item.new}</a>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              </div>
              </div>
              </div>
        </div>
        </div> 
    )
}