import React, {useRef, useEffect, useState, memo } from "react"
import "flatpickr/dist/themes/airbnb.css";
import Flatpickr from "react-flatpickr";
import { Routes, Route } from "react-router-dom";
import Reservation from "./Component/Reservation";
import Booking from "./Component/Booking";

export default function Home(){
    const [showTop, setShowTop] = useState(false)
    useEffect(() =>{
                const handleScroll = () => {
                    setShowTop(window.scrollY >= 1000)
                }
                window.addEventListener('scroll', handleScroll);
        
                return () => {
                window.removeEventListener('scroll', handleScroll);
                }
            }
    )
    function scrollToTop() {
               window.scrollTo({top:0, behavior: 'smooth'})
            }
    const [startDate, setStartDate] = useState(new Date());
   return(
    
    <div className ='homepage'>
            <div className ="top">
            {showTop && (<button className="btn__top" onClick={scrollToTop}>
                    <i className="fa-solid fa-angle-up"></i></button>)}
            </div>
   
    <div className="content">
     <div className="content__background-dark">
         <div className="content__background">
         </div>
         <div className="content__title">
             <img className= "content__title-logo" src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1697875380/AzumayaWeb/oq0sv0woicgxankvnfin.png" alt="" />
             <span>Azumaya Hotel</span>
         </div>
         <div className="container-fluid">
             <div className="row g-0">
                 <div className="col-6 col-md-3 offset-0">
                      <div className="content__branch-item"> 
                         <img className= "content__branch-img" src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027483/AzumayaWeb/ia1cmus6y6uavcgxbsw6.jpg" alt="" />
                     </div>
                 </div>
                 <div className="col-6 col-md-3 offset-0">
                     <div className="content__branch-item"> 
                         <img className= "content__branch-img" src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027484/AzumayaWeb/oqrb129p93e5gz6l3xle.jpg" alt="" />
                    </div>
                </div>
                <div className="col-6 col-md-3 offset-0">
                 <div className="content__branch-item"> 
                     <img className= "content__branch-img" src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027488/AzumayaWeb/vyrhhbx7rnguthojdzed.jpg" alt="" />
                </div>
            </div>
            <div className="col-6 col-md-3 offset-0">
                 <div className="content__branch-item"> 
                 <img className= "content__branch-img" src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027483/AzumayaWeb/zgf5mj2fz1momv44izw3.jpg" alt="" />
             </div>
              </div>
              
             </div>
         </div>
         </div>
    </div>  
    <div className="is-sticky">
    <Booking />
    </div>
    {/* <div className="content__booking">
        <div className="container">
            <div className="row gx-3">
                <div className="col-md-12 ">
                <div className="content__booking-title">Book Here</div>
                </div>
                <div className="col-12 col-md-2 offset-md-1">
                <div className="content__booking-date-in">
                <Flatpickr className="flatpickr" placeholder="Check in date" onChange={([date]) => {setStartDate({ date }); }} />
                </div>
                </div>
                <div className="col-12 col-md-2">
                <div className="content__booking-date-out">
                <Flatpickr className="flatpickr" placeholder="Check out date"onChange={([date]) => {setStartDate({ date }); }} />
                </div>
                </div>
                <div className="col-12 col-md-2">
                <div className="content__booking-branch">
                    <select className="content__booking-branch-select">
                        <option value="Hanoi Capital">Hanoi Capital</option>
                        <option value="Ho Chi Minh City">Ho Chi Minh City</option>
                        <option value="Haiphong City">Haiphong City</option>
                        <option value="Danang City">Danang City</option>
                    </select>
                </div>
                </div>
                <div className="col-12 col-md-2">
                <div className="content__booking-hotel-select">
                    <select className="content__booking-hotel-name-select">
                        <option value="Hanoi Capital">Azumaya Linh Lang</option>
                        <option value="Ho Chi Minh City">Azumaya Hai Ba Trung</option>
                        <option value="Haiphong City">Azumaya Kim Ma I</option>
                        <option value="Danang City">Azumaya Kim Ma II</option>
                    </select>
                </div>
                </div>
                <div className="col-12 col-md-2">
                <button className="base__btn btn--mobile">Reserve
                </button> 
                </div>  
                </div>
            </div>
    </div> */}
    <div className="content__news">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8 offset-md-1">
                     <h2 className ="content__news-title">What's new ?</h2>
                     <ul className="content__news-list">
                <li className="content__news-item">
                    <span className="content__news-date">Jul 7<sup>th</sup> 2023</span>
                    <span className="content__news-branch">Hanoi</span>
                    <span className="content__news-link">
                        <a href="https://azumayavietnam.com/open-women-rotenburo-in-azumaya-kim-ma-2-branch/"> Open women Rotenburo in Azumaya Kim Ma 2 Branch</a>
                    </span>
                </li>
                <li className="content__news-item">
                    <span className="content__news-date">Jul 7<sup>th</sup> 2023</span>
                    <span className="content__news-branch content__news-branch--bg">All Branches</span>
                    <span className="content__news-link">
                        <a href="https://azumayavietnam.com/open-women-rotenburo-in-azumaya-kim-ma-2-branch/">  ★ Notice of Vietnam Value Added Tax (VAT) change ★</a>
                    </span>
                </li>
                <li className="content__news-item">
                    <span className="content__news-date">Jul 7<sup>th</sup> 2023</span>
                    <span className="content__news-branch content__news-branch--bg">All Branches</span>
                    <span className="content__news-link">
                        <a href="https://azumayavietnam.com/open-women-rotenburo-in-azumaya-kim-ma-2-branch/"> 2023 Tet (Lunar New Year) Information</a>
                    </span>
                </li>
                <li className="content__news-item">
                    <span className="content__news-date">Jul 7<sup>th</sup> 2023</span>
                    <span className="content__news-branch content__news-branch--bg2">Ho Chi Minh</span>
                    <span className="content__news-link">
                        <a href="https://azumayavietnam.com/open-women-rotenburo-in-azumaya-kim-ma-2-branch/"> Azumaya Thai Van Lung 1 Rotenburo Visitor price change</a>
                    </span>
                </li>
             </ul> 
            </div>  
            <div className="col-12 col-md-1">
                <div className="content__qr">
                <img className="content__qr-img" src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027481/AzumayaWeb/osinqzr0vyumuje789dn.jpg" alt="" />
                <button className="base__btn btn--detail">Click here for detail</button>
            </div>
            </div>
        </div>
        </div>
            
                 
    </div>
    <div className="content__welcome">
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-0 col-md-10 offset-1">
                        <h1 className="content__welcome-text">Welcome to Azumaya Hotel
                        <small>
                            Comfort served for business travelers</small> 
                        </h1>
                        <p>Nowadays, more and more businessmen from advanced countries move into Vietnam. 
                        However, during the stay, there must be many anxieties to face; such as languages and food. 
                        For their distress, we had one mission came into our mind. “Why don’t we provide comfortable space to relieve their stress?” 
                        The answer was clear: we prepare Rotenburo (open air hot bath) and foot massage to soothe their tiredness, and authentic 
                        Japanese breakfast & continental breakfast for their daily vitality. 
                        Following ― Japanese-available receptionist, pick-up / drop-off service from / to airport,
                        free laundry service for long-stay customers, free high-speed Wi-Fi service, Japanese TV program, 
                        arrangement service for rental car / tour, etc. Moreover, “Omotenashi” (Japanese hospitality) is always 
                        in our heart to serve you a pleasure in life of foreign land.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="content__feature">
            <div className="content__feature-title">Feature</div>
        <div className="container contain">
            <div className="row" style={{justifyContent:'center'}}>
                <div className="col-12 col-md-6 col-lg-3">
                    
                            <div className="content__feature-item">
                                <div className="content__feature-container">

                                    <div className="content__feature-img" style={{backgroundImage:"url('https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027481/AzumayaWeb/gfphcji3cfcq61hynkot.jpg')"}}></div>
                                </div>
                                <div className="content__feature-name">
                                <a href="">Resonable price from $40 per night</a>
                                </div>
                                <div className="content__feature-text">
                                <p style={{textAlign:'justify'}}>All rooms have shower toilet and amenity which are ordered from Japanese supplyer, 8 kinds of amenities including small head toothbrush, shaving and conditioner are prepared. You can stay with cheaper price with signing our contract. We would like offer more discounts for long term resident. Please feel free to contact to our receptionist.</p>
                            </div>
                            </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                            <div className="content__feature-item">
                                <div className="content__feature-container">
                                    <div className="content__feature-img" style={{backgroundImage:"url('https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027482/AzumayaWeb/y59yjf0ygam0ohxazsfm.jpg')"}}></div>

                                </div>
                                <div className="content__feature-name">
                                <a href="">Best location for Japanese businessmen</a>
                                </div>
                                <div className="content__feature-text">
                                <p style={{textAlign:'justify'}}>Every branches are located in center of the area which has many Japanese restaurants and Japanese pubs. Therefore, even if it’s the first time visiting Vietnam, the customers can stay with safe and comfortable feeling. For the companies which send the business traveler from Japan, it is fully safe for their businessmen to walk around by themselves.</p>
                            </div>
                            </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                            <div className="content__feature-item">
                                <div className="content__feature-container">

                                    <div className="content__feature-img" style={{backgroundImage:"url('https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027481/AzumayaWeb/h027ndrvhudkswop9bee.jpg')"}}></div>
                                </div>
                                <div className="content__feature-name">
                                <a href="">Japanese-style open-air hot bath with Sauna</a>
                                </div>
                                <div className="content__feature-text">
                                <p style={{textAlign:'justify'}}>Azumaya Hotel is the pioneer of providing Japanese style open air hot bath, an “oasis” for Japanese, in Ho Chi Minh. Before commuting and after coming back from a long day work, please feel free to soak into the “oasis” and relax. The business hour is from 6am to 10am in the morning and 5pm to 12am in the evening for weekdays. For weekends, we are open all day long from 7am to 12am. (*Each branch have different business hour, so please check the branch information.) It is also available for the visitors with 100.000VND. (The time & price depends on each branches)</p>
                            </div>
                            </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                            <div className="content__feature-item">
                                <div className="content__feature-container">
                                    <div className="content__feature-img" style={{backgroundImage:"url('https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027483/AzumayaWeb/nlsyeqwpqkna8vrareip.jpg')"}}></div>

                                </div>
                                <div className="content__feature-name">
                                <a href="">Japanese TV shows available</a>
                                </div>
                                <div className="content__feature-text">
                                <p style={{textAlign:'justify'}}>You can watch the main local Japanese TV shows such as NHK, TBS, Fuji TV, Nihon TV in live same as you do in Japan. Please lean back and relax watching your favorite TV shows..</p>
                            </div>
                            </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                            <div className="content__feature-item">
                                <div className="content__feature-container">

                                    <div className="content__feature-img" style={{backgroundImage:"url('https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027482/AzumayaWeb/errq8cemducbxlsk56nd.jpg')"}}></div>
                                </div>
                                <div className="content__feature-name">
                                <a href="">Japanese breakfast</a>
                                </div>
                                <div className="content__feature-text">
                                <p style={{textAlign:'justify'}}>For Japanese business travelers, high performance of working in foreign countries only can be produced by Japanese breakfast. Grilled fish, stewed meat, fried seafood, sauteed vegetables, and some other remarkable Japanese dishes can be enjoyed only in Azumaya Hotel. Both authentic Japanese breakfast set and continental set can be enjoyed, but there are also bowl dish, curry rice, gingered sautéed pork set, and other wide-range of Japanese set menu you can choose from. Buffet is served for limited time from 6am to 8am, and set menu is served after buffet time from 8am to 10am. We also serve the breakfast for visitors from 150.000VND (The price depends on each branches).</p>
                            </div>
                            </div>
                </div>
             
                <div className="col-12 col-md-6 col-lg-3">
                            <div className="content__feature-item">
                                <div className="content__feature-container">

                                    <div className="content__feature-img" style={{backgroundImage:"url('https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027483/AzumayaWeb/m3weovuhk4pgmsh2xgud.jpg')"}}></div>
                                </div>
                                <div className="content__feature-name">
                                <a href="">Japanese hospitality</a>
                                </div>
                                <div className="content__feature-text">
                                <p style={{textAlign:'justify'}}>We serve you with our Japanese available staff and manager for whom are not confident with English speaking. Japanese way of saying “Have a nice day” and “Welcome back” is taught well to the staff for our customers to feel safe staying in Vietnam. Moreover, we are kindly waiting for your stay with our smile and high spirit of hospitality.</p>
                            </div>
                            </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                            <div className="content__feature-item">
                                <div className="content__feature-container">

                                    <div className="content__feature-img" style={{backgroundImage:"url('https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027483/AzumayaWeb/lmfoarojredf2s6aojoy.jpg')"}}></div>
                                </div>
                                <div className="content__feature-name">
                                <a href="">Original style foot massage</a>
                                </div>
                                <div className="content__feature-text">
                                <p style={{textAlign:'justify'}}>Our well-trained massage staffs will serve completely outstanding and memorable massage just for you to soothe your hard day of working. With over 90% are the repeat customers in Vietnam, we have absolute confident in our massage. Mainly we rub and push the point from head, shoulder, back, and finally to feet. To release the fatigue find yourself great pleasure at our massage. You can enjoy in Thai Van Lung 1 branch in Ho Chi Minh, Hai Ba Trung 1 branch, Kim Ma 2 branch and Linh Lang branch in Ha Noi, and Da Nang branch..</p>
                            </div>
                            </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                            <div className="content__feature-item">
                                    <div className="content__feature-container">
                                        
                                        <div className="content__feature-img" style={{backgroundImage:"url('https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027480/AzumayaWeb/rrpqdg6q72mdlduygwfa.jpg')"}}></div>
                                    </div>
                                <div className="content__feature-name">
                                <a href="">Japanese restaurant</a>
                                </div>
                                <div className="content__feature-text">
                                <p style={{textAlign:'justify'}}>We have Japanese restaurant combined together in hotel that is popular to both residents and travelers. Please enjoy and satisfy your appetite with your favorite Azumaya restaurant.</p>
                            </div>
                            </div>
                </div>
        </div>

        </div>
        </div>
        </div>  

   )

}
