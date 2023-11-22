import {Link} from 'react-router-dom'
import Booking from './Booking'
import { useTranslation } from 'react-i18next'
export default function Feature() {
    const {t} = useTranslation()
    const featureData = t('feature', {returnObjects:true})
    const featureItem = t('feature.feature_item', {returnObjects:true})
    return(
        <div>
              <div className="policies__header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>{t('feature.name')}</h1>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="is-sticky">
            <Booking />
            </div>
            <div className="re__breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"></div>
                        <ul className="breadcrumb__list">
                                   <li className = "breadcrumb__item">
                                           <i className="fa-solid fa-house"></i>
                                           <Link to = "/">Home</Link>
                                   </li>
                                   <li className = "breadcrumb__item">
                                       /
                                   </li>
                                   <li className = "breadcrumb__item">
                                       <Link className ="breadcrumb__title" to = '/Component/Feature'>Feature</Link>
                                   </li>
                       </ul>
                    </div>
                </div>
            </div>
            <div className="feature__characteristic">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                                <div className="feature__content-title">
                                        <h2>{t('feature.main_title')}</h2>
                                </div>
                                <div className="feature__content-background">
                                        <p className="highlight__text">{t('feature.main_content')}</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feature__type-list">
                <div className="container">
                        {featureItem.map((item)=>(
                    <div key={item.id} className ="feature__type-item">
                        <div className="card mb-3" style={{border:'none'}}>
                            <div className="row g-4">
                            <div className="col-md-4">
                                <img className = 'img-fluid' src={item.image} alt=''/>
                                <div className="feature__number">
                                    <span>{item.num}</span>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" style={{padding:0}}>
                                <h2 className="card-title">{item.title}</h2>
                                <p className="card-text">{item.content}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
                </div>
                </div>
                </div>
    )
}