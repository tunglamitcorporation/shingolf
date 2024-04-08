import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { format, parse } from "date-fns";
import HelmetLayout from "../HelmetLayout/HelmetLayout";

export default function News ({ news })  {
  const { t } = useTranslation();
  const a = t("header.news")
  const b = t("header.title")
  const c = a + " | "+ b
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const article = news.find((article) => article.title === decodedTitle);
  const parsedDate = parse(article.date, 'yyyy-MM-dd', new Date());
  const formattedDate = format(parsedDate, 'MMM do yyyy')
  const [all, month, day, suffix, year] = formattedDate.match(/(\w+) (\d+)(\w+) (\d+)/);
  if (!article) {
    return <div>Article not found</div>;
  }
  return (
    <div>
      <HelmetLayout title= {c}/>
      <div className="policies__header">
        <div classNameName="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{t("news.news")}</h1>
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
                  <Link className="breadcrumb__title" to="/news">
                    {t("news.news")}
                  </Link>
                </li>
                <li className="breadcrumb__item">/</li>
                <li className="breadcrumb__item">
                  <span className="breadcrumb__title">{article.title}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {article.allBranch == true && (
        <div className="container">
          <div className="row">
            <div className="col-md-2 mt-1">
              <div className="news_box1">
                <div className="news_time">
                  <div className="month pl-2">{month}</div>
                        <div className="day pl-2">{day}</div>
                        <sub className="suffix pt-2">{suffix}</sub>
                        <div className="year pl-2">{year}</div>
                </div>
                <div className="area">
                <div className="danang">{t("header.dn")}</div>
                <div className="hanoi">{t("header.hn")}</div>
                <div className="haiphong">{t("header.hp")}</div>
                <div className="hochiminh">{t("header.hcm")}</div>
                </div>
              </div>
            </div>
            <div className="col-md-8 pre-line">
              <div key={article.id}>
                <div className="news_title">{article.title}</div>
                <div className="news_content">{article.content}</div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="recent_post-container">
                <div className="recent_post">Recent Post</div>
                <ul className="recent_news-list">
                  {news.map((article) => (
                    <li className="recent_news-item">
                      <Link
                        className="recent_news-link"
                        to={`/News/${encodeURIComponent(article.title)}`}
                      >
                        <div>{article.title}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {article.hn == true && (
        <div className="container">
          <div className="row">
            <div className="col-md-2 mt-1">
              <div className="news_box1">
                <div className="news_time">
                  <div className="month pl-2">{month}</div>
                        <div className="day pl-2">{day}</div>
                        <sub className="suffix pt-2">{suffix}</sub>
                        <div className="year pl-2">{year}</div>
                </div>
                <div className="hanoi">{t("header.hn")}</div>
              </div>
            </div>
            <div className="col-md-8 pre-line">
              <div key={article.id}>
                <div className="news_title">{article.title}</div>
                <div className="news_content">{article.content}</div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="recent_post-container">
                <div className="recent_post">Recent Post</div>
                <ul className="recent_news-list">
                  {news.map((article) => (
                    <li className="recent_news-item">
                      <Link
                        className="recent_news-link"
                        to={`/News/${encodeURIComponent(article.title)}`}
                      >
                        <div>{article.title}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {article.hp == true && (
        <div className="container">
          <div className="row">
            <div className="col-md-2 mt-1">
              <div className="news_box1">
                <div className="news_time">
                  <div className="month pl-2">{month}</div>
                        <div className="day pl-2">{day}</div>
                        <sub className="suffix pt-2">{suffix}</sub>
                        <div className="year pl-2">{year}</div>
                </div>
                <div className="haiphong">{t("header.hp")}</div>
              </div>
            </div>
            <div className="col-md-8 pre-line">
              <div key={article.id}>
                <div className="news_title">{article.title}</div>
                <div className="news_content">{article.content}</div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="recent_post-container">
                <div className="recent_post">Recent Post</div>
                <ul className="recent_news-list">
                  {news.map((article) => (
                    <li className="recent_news-item">
                      <Link
                        className="recent_news-link"
                        to={`/News/${encodeURIComponent(article.title)}`}
                      >
                        <div>{article.title}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {article.dn == true && (
        <div className="container">
          <div className="row">
            <div className="col-md-2 mt-1">
              <div className="news_box1">
                <div className="news_time">
                  <div className="month pl-2">{month}</div>
                        <div className="day pl-2">{day}</div>
                        <sub className="suffix pt-2">{suffix}</sub>
                        <div className="year pl-2">{year}</div>
                </div>
                <div className="danang">{t("header.dn")}</div>
              </div>
            </div>
            <div className="col-md-8 pre-line">
              <div key={article.id}>
                <div className="news_title">{article.title}</div>
                <div className="news_content">{article.content}</div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="recent_post-container">
                <div className="recent_post">Recent Post</div>
                <ul className="recent_news-list">
                  {news.map((article) => (
                    <li className="recent_news-item">
                      <Link
                        className="recent_news-link"
                        to={`/News/${encodeURIComponent(article.title)}`}
                      >
                        <div>{article.title}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {article.hcm == true && (
        <div className="container">
          <div className="row">
            <div className="col-md-2 mt-1">
              <div className="news_box1">
                <div className="news_time">
                  <div className="month pl-2">{month}</div>
                        <div className="day pl-2">{day}</div>
                        <sub className="suffix pt-2">{suffix}</sub>
                        <div className="year pl-2">{year}</div>
                </div>
                <div className="hochiminh">{t("header.hcm")}</div>
              </div>
            </div>
            <div className="col-md-8 pre-line">
              <div key={article.id}>
                <div className="news_title">{article.title}</div>
                <div className="news_content">{article.content}</div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="recent_post-container">
                <div className="recent_post">Recent Post</div>
                <ul className="recent_news-list">
                  {news.map((article) => (
                    <li className="recent_news-item">
                      <Link
                        className="recent_news-link"
                        to={`/News/${encodeURIComponent(article.title)}`}
                      >
                        <div>{article.title}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {article.az == true && (
        <div className="container">
          <div className="row">
            <div className="col-md-2 mt-1">
              <div className="news_box1">
                <div className="news_time">
                  <div className="month pl-2">{month}</div>
                        <div className="day pl-2">{day}</div>
                        <sub className="suffix pt-2">{suffix}</sub>
                        <div className="year pl-2">{year}</div>
                </div>
                <div className="azumaya">{t("header.az")}</div>
              </div>
            </div>
            <div className="col-md-8 pre-line">
              <div key={article.id}>
                <div className="news_title">{article.title}</div>
                <div className="news_content">{article.content}</div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="recent_post-container">
                <div className="recent_post">Recent Post</div>
                <ul className="recent_news-list">
                  {news.map((article) => (
                    <li className="recent_news-item">
                      <Link
                        className="recent_news-link"
                        to={`/news/${encodeURIComponent(article.title)}`}
                      >
                        <div>{article.title}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

