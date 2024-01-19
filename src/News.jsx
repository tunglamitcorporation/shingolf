import React from 'react';
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
const News = ({ news }) => {
  const { t } = useTranslation();
  const branch = t("booking.city", { returnObjects: true });
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const article = news.find(article => article.title === decodedTitle);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
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
                  <Link to="/Home">
                    <i className="fa-solid fa-house"></i>
                  </Link>
                </li>
                <li className="breadcrumb__item">/</li>
                <li className="breadcrumb__item">
                  <Link className="breadcrumb__title" to="/Policies">
                  {t("news.news")}
                  </Link></li>
                <li className="breadcrumb__item">/</li>
                <li className="breadcrumb__item">
                  <Link className="breadcrumb__title" to="/Policies">
                  {article.title}
                  </Link>
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
                             <div className="news_time">{article.time}</div>
                             <div className="danang">{t("header.dn")}</div>
                             <div className="hanoi">{t("header.hn")}</div>
                             <div className="haiphong">{t("header.hp")}</div>
                             <div className="hochiminh">{t("header.hcm")}</div>
                           </div>
                         </div>
               <div className="col-md-8 pre-line">
                         <div key={article.id}>
                         <div className='news_title'>{article.title}</div>
                           <div className="news_content">{article.content}</div>
                         </div>
               </div>
               <div className="col-md-2">
                   <div className="recent_post-container">
                       <div className="recent_post">Recent Post</div>
                       <ul className="recent_news-list">
                           {news.map(article => (
                               <li className="recent_news-item">
                               <Link className="recent_news-link" to={`/News/${encodeURIComponent(article.title)}`}>
                               <div>{article.title}</div>
                             </Link>
                             </li>
                           ))}
                       </ul>
                   </div>
               </div>
             </div>
             </div>
             
          )
          }
          {article.hn == true && (
            <div className="container">
            <div className="row">
                        <div className="col-md-2 mt-1">
                          <div className="news_box1">
                            <div className="news_time">{article.time}</div>
                            <div className="hanoi">{t("header.hn")}</div>
                          </div>
                        </div>
              <div className="col-md-8 pre-line">
                        <div key={article.id}>
                        <div className='news_title'>{article.title}</div>
                          <div className="news_content">{article.content}</div>
                        </div>
              </div>
              <div className="col-md-2">
                  <div className="recent_post-container">
                      <div className="recent_post">Recent Post</div>
                      <ul className="recent_news-list">
                          {news.map(article => (
                              <li className="recent_news-item">
                              <Link className="recent_news-link" to={`/News/${encodeURIComponent(article.title)}`}>
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
                            <div className="news_time">{article.time}</div>
                            <div className="haiphong">{t("header.hp")}</div>
                          </div>
                        </div>
              <div className="col-md-8 pre-line">
                        <div key={article.id}>
                        <div className='news_title'>{article.title}</div>
                          <div className="news_content">{article.content}</div>
                        </div>
              </div>
              <div className="col-md-2">
                  <div className="recent_post-container">
                      <div className="recent_post">Recent Post</div>
                      <ul className="recent_news-list">
                          {news.map(article => (
                              <li className="recent_news-item">
                              <Link className="recent_news-link" to={`/News/${encodeURIComponent(article.title)}`}>
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
                            <div className="news_time">{article.time}</div>
                            <div className="danang">{t("header.dn")}</div>
                          </div>
                        </div>
              <div className="col-md-8 pre-line">
                        <div key={article.id}>
                        <div className='news_title'>{article.title}</div>
                          <div className="news_content">{article.content}</div>
                        </div>
              </div>
              <div className="col-md-2">
                  <div className="recent_post-container">
                      <div className="recent_post">Recent Post</div>
                      <ul className="recent_news-list">
                          {news.map(article => (
                              <li className="recent_news-item">
                              <Link className="recent_news-link" to={`/News/${encodeURIComponent(article.title)}`}>
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
                            <div className="news_time">{article.time}</div>
                            <div className="hochiminh">{t("header.hcm")}</div>
                          </div>
                        </div>
              <div className="col-md-8 pre-line">
                        <div key={article.id}>
                        <div className='news_title'>{article.title}</div>
                          <div className="news_content">{article.content}</div>
                        </div>
              </div>
              <div className="col-md-2">
                  <div className="recent_post-container">
                      <div className="recent_post">Recent Post</div>
                      <ul className="recent_news-list">
                          {news.map(article => (
                              <li className="recent_news-item">
                              <Link className="recent_news-link" to={`/News/${encodeURIComponent(article.title)}`}>
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
          {/* {!article.allBranch && !article.hn && !article.dn && !article.hp && !article.hcm 
          (
             <div className="container">
             <div className="row">
                         <div className="col-md-2 mt-1">
                           <div className="news_box1">
                             <div className="news_time">{article.time}</div>
                           </div>
                         </div>
               <div className="col-md-8 pre-line">
                         <div key={article.id}>
                         <div className='news_title'>{article.title}</div>
                           <div className="news_content">{article.content}</div>
                         </div>
               </div>
               <div className="col-md-2">
                   <div className="recent_post-container">
                       <div className="recent_post">Recent Post</div>
                       <ul className="recent_news-list">
                           {news.map(article => (
                               <li className="recent_news-item">
                               <Link className="recent_news-link" to={`/News/${encodeURIComponent(article.title)}`}>
                               <div>{article.title}</div>
                             </Link>
                             </li>
                           ))}
                       </ul>
                   </div>
               </div>
             </div>
             </div>
          )} */}
          </div>
          
  )
};

export default News;