import Booking from "./Booking"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";
import classNames from "classnames";
export default function HotelHN(){
    const { t } = useTranslation();
    const brandDetail = t("hn-branch",  {returnObjects: true});
    const header = t("header",{returnObjects:true})
    const homeNewsData = t("home.new_item", { returnObjects: true });
    const HanoiDetail = t("hn-branch.branch", { returnObjects: true });
    return(
        <div>
             <div className="policies__header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>{t("header.item7")}</h1>
                            </div>
                        </div>
                    </div>
            </div>
            <div classNameName = 'is-sticky'>
                <Booking />
            </div>
            <div className="re__breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"></div>
                        <ul className="breadcrumb__list">
                                   <li className = "breadcrumb__item">
                                       <a href="/AzumayaClone/index.html">
                                           <i className="fa-solid fa-house"></i>
                                       </a>
                                   </li>
                                   <li className = "breadcrumb__item">
                                       /
                                   </li>
                                   <li className = "breadcrumb__item">
                                        <a className ="breadcrumb__title" href="/AzumayaClone/html/hanoibranchdetail.html">{t("header.item7")}</a>
                                   </li>
                       </ul>
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
                                    <Link to = "/Component/RoomDetail">{t("hn-branch.btn-detail")}</Link>
                                </div>
                                </div>
                                </div>
                        </div>
                    </div>
                    </div>
                    ))}
                {/* <div className="feature__type-item">
                    <div className="card">
                    <div className="row p-0">
                                <div className="col-md-5">
                                <div className = "brand-img" style={{backgroundImage:"url(https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027481/AzumayaWeb/fersjcyqml9gtjpit7pk.jpg)"}} ></div>
                                </div>
                                <div className="col-md-7">
                                <div className="card-body">
                                    <div className="card-title">
                                    <h2>Kim Ma 2</h2>
                                    </div>
                                    <div className="card-text">
                                    <p>Azumaya Hotel Kim Ma 2 branch, standing at the location 3 minutes far by walk from Kim Ma Street, has 38 rooms supplied with shower toilet, bathtub, and Japanese TV shows. In addition, we provide 2 annex rooms with separate entry from the main front entrance. For the long stay customers, 11 rooms with a kitchen are available. Both hotel guests and visitors can enjoy our open-air hot bath, Japanese breakfast , original style foot massage which 90% of users are repeat customers, and Japanese restaurant “Suzunoya”. (5pm-1am) After relaxing at our open-air hot bath, soothe your fatigue at foot massage, and satisfy your appetite at “Suzunoya” ; we promise you will surely forget today’s fatigue and have a nice deep sleep for next day’s work.</p>
                                    <br/>
                                    <br/>
                                    </div>
                                </div>
                                <div className="btn__detail control-position">
                                    <a href="/AzumayaClone/html/hanoibranchroom.html">Click here for detail</a>
                                </div>
                                </div>
                                </div>
                                </div>
                    </div>
                <div className="feature__type-item">
                                <div className="card">
                                <div className="row p-0">
                                <div className="col-12 col-md-5">
                                <div className = "brand-img" style={{backgroundImage:"url(https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027488/AzumayaWeb/pdgz4cpsqdu7lmxznh1x.jpg)"}} ></div>
                                </div>
                                <div className="col-12 col-md-7">
                                <div className="card-body">
                                    <div className="card-title">
                                    <h2>Kim Ma 3</h2>
                                    </div>
                                    <div className="card-text">
                                    <p>Azumaya Hotel Kim Ma 3 branch has 42 rooms in total with shower toilet and Japanese TV shows for each room. Moreover, there are open-air hot bath and Japanese breakfast buffet. The Kin Ma 1  branch strands 10 seconds away by feet and Japanese restaurant street at Kim Ma Street is also near enough to walk (about 4 minutes). Its location is much convenient at dinner time. Moreover, far from the main street and nearby the silent pond in front, you can find it peaceful to be here.</p>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    </div>
                                </div>
                                <div className="btn__detail control-position">
                                    <a href="/AzumayaClone/html/hanoibranchroom.html">Click here for detail</a>
                                </div>
                                </div>
                                </div>
                                </div>
                    </div>
                <div className="feature__type-item">
                    <div className="card">
                        <div className="row p-0">
                            <div className="col-md-5">
                            <div className = "brand-img" style={{backgroundImage:"url(https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027481/AzumayaWeb/lqhzc2ytlokliy0rtgta.png)"}} ></div>
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <div className="card-title">
                                    <h2>Linh Lang</h2>
                                    </div>
                                    <div className="card-text">
                                    <p>Ling Lang branch has 46 rooms in total with open-air bath, Japanese breakfast , Japanese izakaya "ISSUN Boushi" . All the rooms are equipped with shower toilet, bathtub, and Japanese TV show. The hotel is within walking distance from Lotte Centre which is located along Linh Lang road where many Japanese restaurants have opened recently. At the hotel, high-tea massage is also available on the 7th floor. It records over 90% of repeat customer rate. Last order is 9:45 pm.. You can enjoy a night view from each massage chair. It features a spacious outdoor bath. You can have a pleasant morning at the breakfast venue on the 8th floor with a fine view.</p>
                                    <br/>
                                    <br/>
                                    <br/>
                                    </div>
                                </div>
                                <div className="btn__detail control-position">
                                    <a href="/AzumayaClone/html/hanoibranchroom.html">Click here for detail</a>
                                </div>
                                </div>
                                </div>
                                </div>
                    </div> */}
                    {/* </div> */}
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