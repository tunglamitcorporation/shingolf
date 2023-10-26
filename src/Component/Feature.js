import {Link} from 'react-router-dom'
import Booking from './Booking'
export default function Feature() {
    return(
        <div>
              <div class="policies__header">
                    <div className="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h1>Feature</h1>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="is-sticky">
            <Booking />
            </div>
            <div class="re__breadcrumb">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12"></div>
                        <ul class="breadcrumb__list">
                                   <li class = "breadcrumb__item">
                                           <i class="fa-solid fa-house"></i>
                                           <Link to = "/">Home</Link>
                                   </li>
                                   <li class = "breadcrumb__item">
                                       /
                                   </li>
                                   <li class = "breadcrumb__item">
                                       <Link class ="breadcrumb__title" to = '/Component/Feature'>Feature</Link>
                                   </li>
                       </ul>
                    </div>
                </div>
            </div>
            
            <div class="feature__characteristic">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                                <div class="feature__content-title">
                                    <h2>Azumaya Hotel's 8 Characteristic</h2>
                                </div>
                                <div class="feature__content-background">
                                <p class="highlight__text">Thank you always for your kind attention to Azumaya Hotel. Azumaya Hotel is a Japanese-style business hotel opened in Ho Chi Minh for whom are stressed out with their business trip and looking for comfortable place to be relieved. The first branch opened in Thai Van Lung St. in 2011 and now we have 5 branches in Ha Noi, one in Da Nang, 4 branches in Ho Chi Minh. We serve 8 characteristics of service with high-standard quality in all branches.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="feature__type-list">
                <div class="container">
                    <div class ="feature__type-item">
                    <div class="card mb-3" style={{border:'none'}}>
                            <div class="row g-4">
                                <div class="col-md-4">
                                    <img class = 'img-fluid' src='https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027481/AzumayaWeb/gfphcji3cfcq61hynkot.jpg' alt=''/>
                                    {/* <div class="feature__number">
                                        <span>No 1</span>
                                    </div> */}
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body" style={{padding:0}}>
                                    <h2 class="card-title">Reasonable price from $40 per night</h2>
                                    <p class="card-text">All rooms have shower toilet and amenity which are ordered from Japanese supplyer, 8 kinds of amenities including small head toothbrush, shaving and conditioner are prepared. You can stay with cheaper price with signing our contract. We would like offer more discounts for long term resident. Please feel free to contact to our receptionist.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div class="col-md-12">
                            <div class="feature__type-item">
                                <div class="col-md-5">
                                <div class="feature__type-img" style={{backgroundImage:"url('https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027482/AzumayaWeb/y59yjf0ygam0ohxazsfm.jpg')"}} >
                                    <div class="feature__number">
                                        <span>No 2</span>
                                    </div>
                                </div>
                                </div>
                                <div class="col-md-7">
                               
                                    <h2>Best location for Japanese businessmen</h2>
                                    <p>Every branches are located in center of the area which has many Japanese restaurants and Japanese pubs. Therefore, even if it’s the first time visiting Vietnam, the customers can stay with safe and comfortable feeling. For the companies which send the business traveler from Japan, it is fully safe for their businessmen to walk around by themselves.</p>
                              
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="feature__type-item">
                                <div class="col-md-5">
                                <div class="feature__type-img" style={{backgroundImage:"url('https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027481/AzumayaWeb/h027ndrvhudkswop9bee.jpg')"}} >
                                    <div class="feature__number">
                                        <span>No 3</span>
                                    </div>
                                </div>
                                </div>
                                <div class="col-md-7">
                               
                                    <h2>Japanese-style open-air hot bath with Sauna</h2>
                                    <p>Azumaya Hotel is the pioneer of providing Japanese style open air hot bath, an “oasis” for Japanese, in Ho Chi Minh. Before commuting and after coming back from a long day work, please feel free to soak into the “oasis” and relax. The business hour is from 6am to 10am in the morning and 5pm to 12am in the evening for weekdays. For weekends, we are open all day long from 7am to 12am. (*Each branch have different business hour, so please check the branch information.) It is also available for the visitors with 100.000VND. (The time & price depends on each branches)</p>
                      
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="feature__type-item">
                                <div class="col-md-5">
                                <div class="feature__type-img" style={{backgroundImage:"url('https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027483/AzumayaWeb/nlsyeqwpqkna8vrareip.jpg')"}} >
                                    <div class="feature__number">
                                        <span>No 4</span>
                             </div>
                                </div>
                                </div>
                                <div class="col-md-7">
                                    <h2>Japanese breakfast</h2>
                                    <p>For Japanese business travelers, high performance of working in foreign countries only can be produced by Japanese breakfast. Grilled fish, stewed meat, fried seafood, sauteed vegetables, and some other remarkable Japanese dishes can be enjoyed only in Azumaya Hotel. Both authentic Japanese breakfast set and continental set can be enjoyed, but there are also bowl dish, curry rice, gingered sautéed pork set, and other wide-range of Japanese set menu you can choose from. Buffet is served for limited time from 6am to 8am, and set menu is served after buffet time from 8am to 10am. We also serve the breakfast for visitors from 150.000VND (The price depends on each branches)</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="feature__type-item">
                                <div class="col-md-5">
                                <div class="feature__type-img" style={{backgroundImage:"url('https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027482/AzumayaWeb/errq8cemducbxlsk56nd.jpg')"}} >
                                    <div class="feature__number">
                                        <span>No 5</span>
                                    </div>
                                </div>
                                </div>
                                <div class="col-md-7">
                               
                                    <h2>Japanese TV shows available</h2>
                                    <p>You can watch the main local Japanese TV shows such as NHK, TBS, Fuji TV, Nihon TV in live same as you do in Japan. Please lean back and relax watching your favorite TV shows</p>
                      
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="feature__type-item">
                                <div class="col-md-5">
                                <div class="feature__type-img" style={{backgroundImage:"url('https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027483/AzumayaWeb/m3weovuhk4pgmsh2xgud.jpg')"}} >
                                    <div class="feature__number">
                                        <span>No 6</span>
                                    </div>
                                </div>
                                </div>
                                <div class="col-md-7">
                               
                                    <h2>Japanese hospitality</h2>
                                    <p>We serve you with our Japanese available staff and manager for whom are not confident with English speaking. Japanese way of saying “Have a nice day” and “Welcome back” is taught well to the staff for our customers to feel safe staying in Vietnam. Moreover, we are kindly waiting for your stay with our smile and high spirit of hospitality</p>
                            
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="feature__type-item">
                                <div class="col-md-5">
                                <div class="feature__type-img" style={{backgroundImage:"url('https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027483/AzumayaWeb/lmfoarojredf2s6aojoy.jpg')"}} >
                                    <div class="feature__number">
                                        <span>No 7</span>
                                    </div>
                                </div>
                                </div>
                                <div class="col-md-7">
                               
                                    <h2>Original style foot massage</h2>
                                  <p>Our well-trained massage staffs will serve completely outstanding and memorable massage just for you to soothe your hard day of working. With over 90% are the repeat customers in Vietnam, we have absolute confident in our massage. Mainly we rub and push the point from head, shoulder, back, and finally to feet. To release the fatigue find yourself great pleasure at our massage. You can enjoy in Thai Van Lung 1 branch in Ho Chi Minh, Hai Ba Trung 1 branch, Kim Ma 2 branch and Linh Lang branch in Ha Noi, and Da Nang branch</p>
                        
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="feature__type-item">
                                <div class="col-md-5">
                                <div class="feature__type-img" style={{backgroundImage:"url('https://res.cloudinary.com/dtdfsaaei/image/upload/v1698027480/AzumayaWeb/rrpqdg6q72mdlduygwfa.jpg')"}} >
                                    <div class="feature__number">
                                        <span>No 8</span>
                                    </div>
                                </div>
                                </div>
                                <div class="col-md-7">
                               
                                    <h2>Japanese Restaurant</h2>
                                    <p>We have Japanese restaurant combined together in hotel that is popular to both residents and travelers. Please enjoy and satisfy your appetite with your favorite Azumaya restaurant</p>
                          
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}