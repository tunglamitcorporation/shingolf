import { useState } from "react";
import "flatpickr/dist/themes/airbnb.css";
import Booking from "./Booking";
import Header from "./Header";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import {Link} from "react-router-dom"
export default function Home() {
  const { t } = useTranslation();
  const featureItem = t("feature.feature_item", { returnObjects: true });
  const homeData = t("home_pp", { returnObjects: true });
  const pp = t("pp-branch.image", { returnObjects: true });
  console.log(pp);
  // console.log(homeData)
  const homeNewsData = t("home_pp.new_item", { returnObjects: true });
  // console.log(homeNewsData)
  const WelcomeData = t("home_pp.welcome", { returnObjects: true });

  return (
    <>
    <Header />
    <div className="homepage">
      <div className="content">
          <div className="content__background" style={{backgroundImage:`url(${pp})`, paddingTop:"35%"}}>
          </div>
          </div>
      <AnimatedOnScroll>
        <div className="content__news">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8 offset-md-1">
                <h2 className="content__news-title" style={{fontWeight:'bold'}}>{t("home_pp.news_title")}</h2>
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
      </AnimatedOnScroll>
      <div className="is-sticky">
        <Booking />
      </div>
      <AnimatedOnScroll>
        <div className="content__welcome">
          <div className="container">
            <div className="row">
              <div className="col-10 offset-0 col-md-10 offset-1">
                <h1 className="content__welcome-text">
                  {t("home_pp.welcome_title")}
                  <small>{t("home_pp.welcome_sub-title")}</small>
                </h1>
                <p>{t("home_pp.welcome_content")}</p>
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
                      <p style={{ textAlign: "justify" }}>{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedOnScroll>
    </div>
    <Footer />
    </>
  );
}
