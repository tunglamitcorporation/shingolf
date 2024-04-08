import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { format, parse } from "date-fns";
// import { Helmet } from "react-helmet-async"
import HelmetLayout from "../HelmetLayout/HelmetLayout";

export default function NewsList({ news }) {
  const { t } = useTranslation();
  const groupedNews = groupNewsByDate(news);
  const a = t("header.news")
  const b = t("header.title")
  const c = a + " | "+ b
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
                  <span className="breadcrumb__title">{t("news.news")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="new_container col-md-10">
            {news.map((article) => {
               const parsedDate = parse(article.date, 'yyyy-MM-dd', new Date()); 
               const formattedDate = format(parsedDate, 'MMM do yyyy')
               const [all, month, day, suffix, year] = formattedDate.match(/(\w+) (\d+)(\w+) (\d+)/);
               console.log(formattedDate);
              if (article.allBranch == true)
               {
                return (
                  <div className="row news_block">
                    <div className="col-md-2 mt-1">
                      <div className="news_box1">
                        <div className="news_time">
                        <div className="month pl-2">{month}</div>
                        <div className="day pl-2">{day}</div>
                        <sub className="suffix pt-2">{suffix}</sub>
                        <div className="year pl-2">{year}</div>
                        </div>
                        <div className="danang">{t("header.dn")}</div>
                        <div className="hanoi">{t("header.hn")}</div>
                        <div className="haiphong">{t("header.hp")}</div>
                        <div className="hochiminh">{t("header.hcm")}</div>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div key={article.id}>
                        <Link
                          className="news_title"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          <div>{article.title}</div>
                        </Link>
                        <p className="news_content">
                          {`${article.content.slice(0, 250)}...`}
                        </p>
                      </div>
                      <div className="continue_read">
                        <Link
                          className="continue_link"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          {t("feature.continue")}{" "}
                          <i class="fa-solid fa-arrow-right"></i>
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
                        <div className="news_time">
                          <div className="month pl-2">{month}</div>
                        <div className="day pl-2">{day}</div>
                        <sub className="suffix pt-2">{suffix}</sub>
                        <div className="year pl-2">{year}</div>
                        </div>
                        <div className="hanoi">{t("header.hn")}</div>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div key={article.id}>
                        <Link
                          className="news_title"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          <div>{article.title}</div>
                        </Link>
                        <p className="news_content">
                          {`${article.content.slice(0, 250)}...`}
                        </p>
                      </div>
                      <div className="continue_read">
                        <Link
                          className="continue_link"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          {t("feature.continue")}{" "}
                          <i class="fa-solid fa-arrow-right"></i>
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
                        <div className="news_time">
                          <div className="month pl-2">{month}</div>
                        <div className="day pl-2">{day}</div>
                        <sub className="suffix pt-2">{suffix}</sub>
                        <div className="year pl-2">{year}</div>
                        </div>
                        <div className="haiphong">{t("header.hp")}</div>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div key={article.id}>
                        <Link
                          className="news_title"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          <div>{article.title}</div>
                        </Link>
                        <p className="news_content">
                          {`${article.content.slice(0, 250)}...`}
                        </p>
                      </div>
                      <div className="continue_read">
                        <Link
                          className="continue_link"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          {t("feature.continue")}{" "}
                          <i class="fa-solid fa-arrow-right"></i>
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
                        <div className="news_time">
                          <div className="month pl-2">{month}</div>
                        <div className="day pl-2">{day}</div>
                        <sub className="suffix pt-2">{suffix}</sub>
                        <div className="year pl-2">{year}</div>
                        </div>
                        <div className="danang">{t("header.dn")}</div>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div key={article.id}>
                        <Link
                          className="news_title"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          <div>{article.title}</div>
                        </Link>
                        <p className="news_content">
                          {`${article.content.slice(0, 250)}...`}
                        </p>
                      </div>
                      <div className="continue_read">
                        <Link
                          className="continue_link"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          {t("feature.continue")}{" "}
                          <i class="fa-solid fa-arrow-right"></i>
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
                        <div className="news_time">
                          <div className="month pl-2">{month}</div>
                        <div className="day pl-2">{day}</div>
                        <sub className="suffix pt-2">{suffix}</sub>
                        <div className="year pl-2">{year}</div>
                        </div>
                        <div className="hochiminh">{t("header.hcm")}</div>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div key={article.id}>
                        <Link
                          className="news_title"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          <div>{article.title}</div>
                        </Link>
                        <p className="news_content">
                          {`${article.content.slice(0, 250)}...`}
                        </p>
                      </div>
                      <div className="continue_read">
                        <Link
                          className="continue_link"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          {t("feature.continue")}{" "}
                          <i class="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              } else if (article.az == true) {
                return (
                  <div className="row news_block">
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
                    <div className="col-md-10">
                      <div key={article.id}>
                        <Link
                          className="news_title"
                          to={`/News/${encodeURIComponent(article.title)}`}
                        >
                          <div>{article.title}</div>
                        </Link>
                        <p className="news_content">
                          {`${article.content.slice(0, 250)}...`}
                        </p>
                      </div>
                    </div>
                    <div className="continue_read">
                      <Link
                        className="continue_link"
                        to={`/News/${encodeURIComponent(article.title)}`}
                      >
                        {t("feature.continue")} <i class="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="col-md-2">
            <div className="recent_post-container">
              <div className="recent_post">Recent Post</div>
              <ul className="recent_news-list">
                {Object.keys(groupedNews).map((date) => (
                  <li className="recent_news-item" key={date}>
                    {/* Link to the News by Date component */}
                    <Link
                      className="recent_news-link"
                      to={`/news-by-date/${encodeURIComponent(date)}`}
                    >
                      {formatDate(date)}
                    </Link>
                  </li>
                ))}
              </ul> 
              </div>
              <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// Function to group news by date
const groupNewsByDate = (news) => {
  const groupedNews = {};

  news.forEach((article) => {
    const date = formatDate(article.date); // Assuming each article has a 'date' property
    if (!groupedNews[date]) {
      groupedNews[date] = [];
    }
    groupedNews[date].push(article);
  });

  return groupedNews;
};
const formatDate = (dateString) => {
  const parts = dateString.split('-');
  
  if (parts.length === 3) {
    // Ensure there are three parts (year, month, day) in the split array
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1; // Months are zero-indexed in JavaScript Date
    const day = parseInt(parts[2]);

    const date = new Date(year, month, day);
    if (!isNaN(date.getTime())) {
      return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    }
  }

  // If the date string is not in the expected format or parsing fails, return the original string
  return dateString;
};