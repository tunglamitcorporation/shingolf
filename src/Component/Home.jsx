import {useState} from "react"
import "flatpickr/dist/themes/airbnb.css";
import Booking from "./Booking";
import { useTranslation } from 'react-i18next'
import classNames from "classnames";

export default function Home(){
    const {t} = useTranslation()
    const featureItem = t('feature.feature_item', {returnObjects:true})
    const homeData = t('home', {returnObjects:true})
    // console.log(homeData)
    const homeNewsData = t('home.new_item', {returnObjects: true})
    // console.log(homeNewsData)
    const WelcomeData = t('home.welcome',{returnObjects:true})
   return(
    <div className ='homepage'>
    <div className="content">
     <div className="content__background-dark">
         <div className="content__background">
         </div>
         <div className="content__title">
             <img className= "content__title-logo" src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1697875380/AzumayaWeb/oq0sv0woicgxankvnfin.png" alt="" />
             <span>{t('home.name')}</span>
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
    <div className="content__news">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8 offset-md-1">
                     <h2 className ="content__news-title">{t('home.news_title')}</h2>
                     <ul className="content__news-list">
                        {homeNewsData.map(item=>(
                    <li className="content__news-item" key={item.id}>
                    <span className="content__news-date">{item.month} {item.day} {item.year} </span>
                    <span className={classNames({'content__news-branch':item.location == "Hanoi",'content__news-branch--bg':item.location == "All Branches"})}>{item.location}</span>
                    <span className="content__news-link">
                        <a href={item.link}>{item.new}</a>
                    </span>
                </li>
                    ))}
             </ul> 
            </div>  
            <div className="col-12 col-md-1">
                <div className="content__qr">
                <img className="content__qr-img" src={t('home.line_link')} alt="" />
                <button className="base__btn btn--detail">{t('home.line_btn')}</button>
            </div>
            </div>
        </div>
        </div>
            
                 
    </div>
    <div className="content__welcome">
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-0 col-md-10 offset-1">
                        <h1 className="content__welcome-text">{t('home.welcome_title')}
                        <small>
                            {t('home.welcome_sub-title')}</small> 
                        </h1>
                        <p>{t('home.welcome_content')}</p>
                </div>
            </div>
        </div>
    </div>
    <div className="content__feature">
            <div className="content__feature-title">{t('feature.name')}</div>
        <div className="container contain">
            <div className="row" style={{justifyContent:'center'}}>
                {featureItem.map(item => (
                <div className="col-12 col-md-6 col-lg-3">
                            <div className="content__feature-item">
                                <div className="content__feature-container">

                                    <div className="content__feature-img" style={{backgroundImage:`url(${item.image})`}}></div>
                                </div>
                                <div className="content__feature-name">
                                <a href="">{item.title}</a>
                                </div>
                                <div className="content__feature-text">
                                <p style={{textAlign:'justify'}}>{item.content}</p>
                            </div>
                            </div>
                        </div>
                    ))}
        </div>
        </div>
        </div>
        </div>  

   )

}
