import Booking from "./Booking"
import { Link } from "react-router-dom"
export default function BrandDetail(){
    return(
        <div>
             <div className="policies__header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Ha Noi</h1>
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
                                        <a className ="breadcrumb__title" href="/AzumayaClone/html/hanoibranchdetail.html">Ha Noi</a>
                                   </li>
                       </ul>
                    </div>
                </div>
            </div>
            <div className="branch__container">
                <div className="container">
                <div className="feature__type-item">
                    <div className="card">
                    <div className="row">
                        <div className="col-md-5">
                            <img className = "img-fluid" src ="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027483/AzumayaWeb/o8dg6xz425tf0blhj1hz.jpg" alt="" />
                        </div>
                        <div className="col-md-7">
                            <div className="card__body">
                                <div className="card_title">
                                <h2>Hai Ba Trung 1</h2>
                                </div>
                                <div className="card_text">
                                <p>Azumaya Hotel Hai Ba Trung 1 is a 31 room hotel located in the middle of Hai Ba Trung district with shower toilet, bathtub, and Japanese TV shows supplied for each room. We have a giant open-air hot bath, Japanese breakfast buffet, Japanese restaurant “Mangetsu” (6pm-2am)original style foot massage which 90% of the customers are repeating. (The last order for massage is 9:45pm.) of all branches, only Hai Ba Trung 1 branch uses the natural stone for open-air hot baths. After relaxing in the open-air hot bath, have our soothing massage, and come satisfy your appetite in “Mangetsu”; we promise you will surely forget today’s fatigue and have a nice deep sleep for next day’s work.</p>
                                </div>
                                </div>
                                <div className="btn__detail">
                                    <Link to = "/Component/RoomDetail">Click here for detail</Link>
                                </div>
                        </div>
                    </div>
                    </div>
                    </div>
                <div className="feature__type-item">
                    <div className="card">
                    <div className="row">
                                <div className="col-md-5">
                                <img className = "img-fluid" src ="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027481/AzumayaWeb/fersjcyqml9gtjpit7pk.jpg" alt="" />
                                </div>
                                <div className="col-md-7">
                                <div className="card__body">
                                    <div className="card_title">
                                    <h2>Kim Ma 2</h2>
                                    </div>
                                    <div className="card_text">
                                    <p>Azumaya Hotel Kim Ma 2 branch, standing at the location 3 minutes far by walk from Kim Ma Street, has 38 rooms supplied with shower toilet, bathtub, and Japanese TV shows. In addition, we provide 2 annex rooms with separate entry from the main front entrance. For the long stay customers, 11 rooms with a kitchen are available. Both hotel guests and visitors can enjoy our open-air hot bath, Japanese breakfast , original style foot massage which 90% of users are repeat customers, and Japanese restaurant “Suzunoya”. (5pm-1am) After relaxing at our open-air hot bath, soothe your fatigue at foot massage, and satisfy your appetite at “Suzunoya” ; we promise you will surely forget today’s fatigue and have a nice deep sleep for next day’s work.</p>
                                    </div>
                                </div>
                                <div className="btn__detail">
                                    <a href="/AzumayaClone/html/hanoibranchroom.html">Click here for detail</a>
                                </div>
                                </div>
                                </div>
                                </div>
                    </div>
                <div className="feature__type-item">
                                <div className="card">
                                <div className="row">
                                <div className="col-12 col-md-5">
                                <img className = "img-fluid" src ="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027488/AzumayaWeb/pdgz4cpsqdu7lmxznh1x.jpg" alt="" />
                                </div>
                                <div className="col-12 col-md-7">
                                <div className="card__body">
                                    <div className="card_title">
                                    <h2>Kim Ma 3</h2>
                                    </div>
                                    <div className="card_text">
                                    <p>Azumaya Hotel Kim Ma 3 branch has 42 rooms in total with shower toilet and Japanese TV shows for each room. Moreover, there are open-air hot bath and Japanese breakfast buffet. The Kin Ma 1  branch strands 10 seconds away by feet and Japanese restaurant street at Kim Ma Street is also near enough to walk (about 4 minutes). Its location is much convenient at dinner time. Moreover, far from the main street and nearby the silent pond in front, you can find it peaceful to be here.</p>
                                    </div>
                                </div>
                                <div className="btn__detail">
                                    <a href="/AzumayaClone/html/hanoibranchroom.html">Click here for detail</a>
                                </div>
                                </div>
                                </div>
                                </div>
                    </div>
                <div className="feature__type-item">
                    <div className="card">
                        <div className="row">
                            <div className="col-md-5">
                            <img className = "img-fluid" src ="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027481/AzumayaWeb/lqhzc2ytlokliy0rtgta.png" alt="" />
                            </div>
                            <div className="col-md-7">
                                <div className="card__body">
                                    <div className="card_title">
                                    <h2>Linh  Lang</h2>
                                    </div>
                                    <div className="card_text">
                                    <p>Ling Lang branch has 46 rooms in total with open-air bath, Japanese breakfast , Japanese izakaya "ISSUN Boushi" . All the rooms are equipped with shower toilet, bathtub, and Japanese TV show. The hotel is within walking distance from Lotte Centre which is located along Linh Lang road where many Japanese restaurants have opened recently. At the hotel, high-tea massage is also available on the 7th floor. It records over 90% of repeat customer rate. Last order is 9:45 pm.. You can enjoy a night view from each massage chair. It features a spacious outdoor bath. You can have a pleasant morning at the breakfast venue on the 8th floor with a fine view.</p>
                                    </div>
                                </div>
                                <div className="btn__detail">
                                    <a href="/AzumayaClone/html/hanoibranchroom.html">Click here for detail</a>
                                </div>
                                </div>
                                </div>
                                </div>
                    </div>
                    {/* </div> */}
            </div>
            <div className="content__news" style={{marginLeft:'15%',height:'250px'}}>
                <h2 className ="content__news-title">What's new ?</h2>
                 <ul className="content__news-list" style={{marginTop:'20px'}}>
                    <li className="content__news-item">
                        <span className="content__news-date">Jul 7<sup>th</sup> 2023</span>
                        <span className="content__news-branch">Hanoi</span>
                        <span className="content__news-link">
                            <a href="https://azumayavietnam.com/open-women-rotenburo-in-azumaya-kim-ma-2-branch/"> Open women Rotenburo in Azumaya Kim Ma 2 Branch</a>
                        </span>
                    </li>
                    <li className="content__news-item">
                        <span className="content__news-date">Jul 7<sup>th</sup> 2023</span>
                        <span className="content__news-branch">Hanoi</span>
                        <span className="content__news-link">
                            <a href="https://azumayavietnam.com/open-women-rotenburo-in-azumaya-kim-ma-2-branch/">  ★ Notice of Vietnam Value Added Tax (VAT) change ★</a>
                        </span>
                    </li>
                    <li className="content__news-item">
                        <span className="content__news-date">Jul 7<sup>th</sup> 2023</span>
                        <span className="content__news-branch">Hanoi</span>
                        <span className="content__news-link">
                            <a href="https://azumayavietnam.com/open-women-rotenburo-in-azumaya-kim-ma-2-branch/"> 2023 Tet (Lunar New Year) Information</a>
                        </span>
                    </li>
                    <li className="content__news-item">
                        <span className="content__news-date">Jul 7<sup>th</sup> 2023</span>
                        <span className="content__news-branch">Hanoi</span>
                        <span className="content__news-link">
                            <a href="https://azumayavietnam.com/azumaya-hanoi-massage-service-notice-of-suspension/">  Azumaya Hanoi Massage service / Notice of suspension</a>
                        </span>
                    </li>
                 </ul> 
            </div>
        </div>
        </div> 
    )
}