import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
export default function NewsList({ news }) {
  const { t } = useTranslation();
  const branch = t("booking.city", { returnObjects: true });
  console.log(branch);
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
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
            <div className="new_container col-md-8">
              {news.map((article) => {
                if (article.allBranch == true) {
                  return (
                    <div className="row news_block">
                      <div className="col-md-2 mt-1">
                        <div className="news_box1">
                          <div className="news_time">{article.time}</div>
                          <div className="danang">{t("header.dn")}</div>
                          <div className="hanoi">{t("header.hn")}</div>
                          <div className="haiphong">{t("header.hp")}</div>
                          <div className="hochiminh">{t("header.hcm")}</div>
                        </div>
                      </div>
                      <div className="col-md-10">
                        <div key={article.id}>
                          <Link className="news_title" to={`/News/${encodeURIComponent(article.title)}`}>
                            <div>{article.title}</div>
                          </Link>
                          <p className="news_content">
                            {`${article.content.slice(0, 250)}...`}
                          </p>
                        </div>
                      <div className="continue_read">
                      <Link className="continue_link" to={`/News/${encodeURIComponent(article.title)}`}>
                              Continue Reading <i class="fa-solid fa-arrow-right"></i>
                            </Link>
                      </div>
                      </div>
                    </div>
                  );
                } else if (article.hn == true) {
                  return (
                    <div className="row news_block">
                      <div className="col-md-2 mt-1">
                        <div className="news_box1">
                          <div className="news_time">{article.time}</div>
                          <div className="hanoi">{t("header.hn")}</div>
                        </div>
                      </div>
                      <div className="col-md-10">
                        <div key={article.id}>
                          <Link className="news_title" to={`/News/${encodeURIComponent(article.title)}`}>
                            <div>{article.title}</div>
                          </Link>
                          <p className="news_content">
                            {`${article.content.slice(0, 250)}...`}
                          </p>
                        </div>
                      <div className="continue_read">
                      <Link className="continue_link" to={`/News/${encodeURIComponent(article.title)}`}>
                              Continue Reading <i class="fa-solid fa-arrow-right"></i>
                            </Link>
                      </div>
                      </div>
                    </div>
                  );
                } else if (article.hp == true) {
                  return (
                    <div className="row news_block">
                      <div className="col-md-2 mt-1">
                        <div className="news_box1">
                          <div className="news_time">{article.time}</div>
                          <div className="haiphong">{t("header.hp")}</div>
                        </div>
                      </div>
                      <div className="col-md-10">
                        <div key={article.id}>
                          <Link className="news_title" to={`/News/${encodeURIComponent(article.title)}`}>
                            <div>{article.title}</div>
                          </Link>
                          <p className="news_content">
                            {`${article.content.slice(0, 250)}...`}
                          </p>
                        </div>
                      <div className="continue_read">
                      <Link className="continue_link" to={`/News/${encodeURIComponent(article.title)}`}>
                              Continue Reading <i class="fa-solid fa-arrow-right"></i>
                            </Link>
                      </div>
                      </div>
                    </div>
                  );
                } else if (article.dn == true) {
                  return (
                    <div className="row news_block">
                      <div className="col-md-2 mt-1">
                        <div className="news_box1">
                          <div className="news_time">{article.time}</div>
                          <div className="danang">{t("header.dn")}</div>
                        </div>
                      </div>
                      <div className="col-md-10">
                        <div key={article.id}>
                          <Link className="news_title" to={`/News/${encodeURIComponent(article.title)}`}>
                            <div>{article.title}</div>
                          </Link>
                          <p className="news_content">
                            {`${article.content.slice(0, 250)}...`}
                          </p>
                        </div>
                      <div className="continue_read">
                      <Link className="continue_link" to={`/News/${encodeURIComponent(article.title)}`}>
                              Continue Reading <i class="fa-solid fa-arrow-right"></i>
                            </Link>
                      </div>
                      </div>
                    </div>
                  );
                } else if (article.hcm == true) {
                  return (
                    <div className="row news_block">
                      <div className="col-md-2 mt-1 ">
                        <div className="news_box1">
                          <div className="news_time">{article.time}</div>
                          <div className="hochiminh">{t("header.hcm")}</div>
                        </div>
                      </div>
                      <div className="col-md-10">
                        <div key={article.id}>
                          <Link className="news_title" to={`/News/${encodeURIComponent(article.title)}`}>
                            <div>{article.title}</div>
                          </Link>
                          <p className="news_content">
                            {`${article.content.slice(0, 250)}...`}
                          </p>
                        </div>
                      <div className="continue_read">
                      <Link className="continue_link" to={`/News/${encodeURIComponent(article.title)}`}>
                              Continue Reading <i class="fa-solid fa-arrow-right"></i>
                            </Link>
                      </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <div className="row news_block">
                    <div className="col-md-2 mt-1">
                      <div className="news_box1">
                        <div className="news_time">{article.time}</div>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div key={article.id}>
                        <Link className="news_title" to={`/News/${article.id}`}>
                          <div>{article.title}</div>
                        </Link>
                        <p className="news_content">
                          {`${article.content.slice(0, 250)}...`}
                        </p>
                      </div>
                    </div>
                    <div className="continue_read">
                      <Link className="continue_link" to={`/News/${article.id}`}>
                              Continue Reading <i class="fa-solid fa-arrow-right"></i>
                            </Link>
                      </div>
                  </div>
                );
              })}
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
      </div>
  );
}
