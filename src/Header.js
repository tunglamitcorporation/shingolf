import {Link,Routes, Route} from 'react-router-dom'
import Feature from './Component/Feature'
function Header() {
    return(
        <div class="header">
        <div class="header__PC">
            <div class="header__logo">
                <div className='container'>
                    <div className = 'row'>
                        <div className='col-md-12'>
                                <img src='https://res.cloudinary.com/dtdfsaaei/image/upload/v1697875380/AzumayaWeb/oq0sv0woicgxankvnfin.png' alt="logo"  />
                        </div>
                    </div>
                </div>
            </div>
            <ul class="header__navbar-list">
                <li class="header__navbar-item">
                    <Link  class = "header__navbar-link" to ='/'>Home</Link>
                </li>
                <li class="header__navbar-item">
                    <Link  class = "header__navbar-link" to = './Component/Policies'>Hotel Policies</Link></li>
                <li class="header__navbar-item">
                    <Link  class = "header__navbar-link" to = '/Component/Reservation'>Reservation</Link></li>
                <li class="header__navbar-item">
                    <Link class="header__navbar-link" to ='./Component/Feature'>Feature</Link></li>
                <li class="header__navbar-item">
                    <Link  class = "header__navbar-link" to = '/Component/Service'>Service</Link></li>
                <li class="header__navbar-item">
                    <Link  class = "header__navbar-link" to ='/Component/Contract'>Contract</Link></li>
                <li class="header__navbar-item">
                    <Link  class = "header__navbar-link-branch .header__navbar-link--hover" to=''>Branch</Link>
                        <ul class="header__navbar-item-list">
                            <li class = "header__navbar-sub-link"><Link to = '/Component/BrandDetail'>Hanoi</Link></li>
                            <li class = "header__navbar-sub-link"><a href="">Ho Chi Minh</a></li>
                            <li class = "header__navbar-sub-link"><a href="">Haiphong</a></li>
                            <li class = "header__navbar-sub-link"><a href="">Danang</a></li>
                            <li class = "header__navbar-sub-link"><a href="">Cambodia</a></li>
                            <li class = "header__navbar-sub-link"><a href="">Malaysia</a></li>
                        </ul>
                 </li>
            </ul>  
        </div>
        <div className='header__mobile-logo'>
        <img src='https://res.cloudinary.com/dtdfsaaei/image/upload/v1697875380/AzumayaWeb/oq0sv0woicgxankvnfin.png' alt="logo"  />
        </div>
        <label for="header__mobile-input" class="header__mobile">
            <i class="fa-solid fa-bars"></i>
        </label>
        <input type="checkbox" name="" class = "header__input" id="header__mobile-input" />
        <label for="header__mobile-input" class="header__mobile-overlay"></label>
        <ul class="header__mobile-navbar-list">
            <label for="header__mobile-input" class="header__mobile-navbar-closed">
                <i class="fa-solid fa-xmark"></i>
            </label>
            <li class="header__mobile-navbar-item">
                <a  class = "header__mobile-navbar-link" href="">Home</a>
            </li>
            <li class="header__mobile-navbar-item">
                <a  class = "header__mobile-navbar-link" href="">Hotel Policies</a></li>
            <li class="header__mobile-navbar-item">
                <a  class = "header__mobile-navbar-link" href="">Reservation</a></li>
            <li class="header__mobile-navbar-item">
                <a  class = "header__mobile-navbar-link" href="">Feature</a></li>
            <li class="header__mobile-navbar-item">
                <a  class = "header__mobile-navbar-link" href="">Service</a></li>
            <li class="header__mobile-navbar-item">
                <a  class = "header__mobile-navbar-link" href="">Contract</a></li>
            </ul>
        </div>
        
    )
}
export default (Header)