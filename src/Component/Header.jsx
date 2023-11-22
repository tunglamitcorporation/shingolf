import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'
function Header() {
    const {t, i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
    const headerData = t('header',{returnObjects:true})
    return(
        <>
        <div className='top-header'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-11'>
                    <p style={{marginLeft:'110px'}}>{t('header.top-header')}</p>
                    </div>
                    <div className='col-md-1'>
                    <button className ='btn-en' onClick={()=>changeLanguage('en')}></button>                
                    <button className ='btn-ja' onClick={()=>changeLanguage('ja')}></button>  
                    </div>
                </div>
            </div>
        </div>
        <div className="header">
        <div className="header__PC">
            <div className="header__logo">
                <div className='container'>
                    <div className = 'row'>
                        <div className='col-md-12'>
                            <Link to ='/'>
                                <img src='https://res.cloudinary.com/dtdfsaaei/image/upload/v1697875380/AzumayaWeb/oq0sv0woicgxankvnfin.png' alt="logo"  />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="header__navbar-list">
                <li className="header__navbar-item">
                    <Link  className = "header__navbar-link" to ='/'>{t('header.item1')}</Link>
                </li>
                <li className="header__navbar-item">
                    <Link  className = "header__navbar-link" to = './Component/Policies'>{t('header.item2')}</Link></li>
                <li className="header__navbar-item">
                    <Link  className = "header__navbar-link" to = '/Component/Reservation'>{t('header.item3')}</Link></li>
                <li className="header__navbar-item">
                    <Link className="header__navbar-link" to ='./Component/Feature'>{t('header.item4')}</Link></li>
                <li className="header__navbar-item">
                    <Link  className = "header__navbar-link" to = '/Component/Service'>{t('header.item5')}</Link></li>
                <li className="header__navbar-item">
                    <Link  className = "header__navbar-link" to ='/Component/Contract'>{t('header.item6')}</Link></li>
                <li className="header__navbar-item">
                    <Link  className = "header__navbar-link-branch .header__navbar-link--hover" to=''>{t('header.item12')}</Link>
                        <ul className="header__navbar-item-list">
                            <li className = "header__navbar-sub-link"><Link to = '/Component/BrandDetail'>{t('header.item7')}</Link></li>
                            <li className = "header__navbar-sub-link"><a href="">{t('header.item8')}</a></li>
                            <li className = "header__navbar-sub-link"><a href="">{t('header.item9')}</a></li>
                            <li className = "header__navbar-sub-link"><a href="">{t('header.item10')}</a></li>
                            <li className = "header__navbar-sub-link"><a href="">{t('header.item11')}</a></li>
                        </ul>
                 </li>
            </ul>  
        </div>
        <div className='header__mobile-logo'>
            <Link to ='/'>
        <img src='https://res.cloudinary.com/dtdfsaaei/image/upload/v1697875380/AzumayaWeb/oq0sv0woicgxankvnfin.png' alt="logo"  />
            </Link>
        </div>
        <label htmlFor="header__mobile-input" className="header__mobile">
            <i className="fa-solid fa-bars"></i>
        </label>
        <input type="checkbox" name="" className = "header__input" id="header__mobile-input" />
        <label htmlFor="header__mobile-input" className="header__mobile-overlay"></label>
        <ul className="header__mobile-navbar-list">
            <label htmlFor="header__mobile-input" className="header__mobile-navbar-closed">
                <i className="fa-solid fa-xmark"></i>
            </label>
            <li className="header__mobile-navbar-item">
                <a  className = "header__mobile-navbar-link" href="">Home</a>
            </li>
            <li className="header__mobile-navbar-item">
                <a  className = "header__mobile-navbar-link" href="">Hotel Policies</a></li>
            <li className="header__mobile-navbar-item">
                <a  className = "header__mobile-navbar-link" href="">Reservation</a></li>
            <li className="header__mobile-navbar-item">
                <a  className = "header__mobile-navbar-link" href="">Feature</a></li>
            <li className="header__mobile-navbar-item">
                <a  className = "header__mobile-navbar-link" href="">Service</a></li>
            <li className="header__mobile-navbar-item">
                <a  className = "header__mobile-navbar-link" href="">Contract</a></li>
            </ul>
        </div>
        </>
        
    )
}
export default (Header)