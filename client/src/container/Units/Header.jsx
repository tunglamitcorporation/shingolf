import { Link} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import Cookies from "js-cookie";
import logo from '../../image/logo.jpg'
import axios from "axios";
function Header() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    Cookies.set('selectedLanguage', lng, {expires: 365})
    
  };
  const feature = t("feature.feature_item", { returnObjects: true });
  const hcm = t("hcm-branch.branch", {returnObjects:true})
  const hn = t("hn-branch.branch", {returnObjects:true})
  const dn = t("dn-branch.branch", {returnObjects:true})
  const hp = t("hp-branch.branch", {returnObjects:true})
  const service = t("service.service_name", {returnObjects:true})
  const [isOpen, setIsOpen] = useState(false)
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('transparent');

    useEffect(()=>{
      const savedLang = Cookies.get('selectedLanguage');
      if(savedLang && i18n.language !== savedLang){
        i18n.changeLanguage(savedLang)
      }
    })

  const toggleHeader = () => {
      setIsOpen(!isOpen)
  }
  useEffect(()=>{
    if(isOpen) {
      document.body.style.position= "fixed";
    }else{
      document.body.style.position = "";
    }
  })
;
 
  const HeaderMobile = () => {
    return(
    <ul className={`header__mobile-navbar-list ${isOpen ? 'open' :''}`}>
          <button
            onClick={()=> setIsOpen(false)}
            className="header__mobile-navbar-closed"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <li className="header__mobile-navbar-item">
            <Link
              onClick={()=> setIsOpen(false)}
              Link
              to="/"
              className="header__mobile-navbar-link"
            >
              TRANG CHỦ 
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              onClick={()=> setIsOpen(false)}
              Link
              to="/service/"
              className="header__mobile-navbar-link"
            >
             SẢN PHẨM
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to=""
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              GIỚI THIỆU 
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to=""
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              LIÊN HỆ
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to=""
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              KIỂM TRA ĐƠN HÀNG
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to=""
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              TIN TỨC GOLF
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to=""
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              TRUYỀN HÌNH GOLF
            </Link>
          </li>
        </ul>
    )
  }
    
    useEffect(() => {
      const fetchExchangeRate = async () => {
        try {
          const response = await axios.get('https://portal.vietcombank.com.vn/Usercontrols/TVPortal.TyGia/pXML.aspx?b=8');
          const parser = new DOMParser();
          const xml = parser.parseFromString(response.data, 'application/xml');
          const rates = Array.from(xml.getElementsByTagName('Exrate'));
          const usdRate = rates.find(rate => rate.getAttribute('CurrencyCode') === 'JPY');
          setExchangeRate(usdRate.getAttribute('Sell'));
        } catch (error) {
          setError('Error fetching exchange rates');
        } finally {
          setLoading(false);
        }
      };
  
      fetchExchangeRate();
    }, []);

  const [active, setActive] = useState(false)
  const handleActive = () => {
    setActive(!active)
  }
  return (
    <>
      <div className='top-header'>
                <div className='container-fluid'>
                    <div className='row align-items-center'>
                    <div className="col-md-6">
                        <div className="header-text">Liên hệ: 0123456789</div>
                        <div className="header-text">Tỉ giá hôm nay: {exchangeRate}</div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="search-bar d-flex align-items-center">
                            <input 
                            type="text"
                            className="input-style" />
                            <div className="search-bar-icon d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                    <select
                        className="header-list"
                        >
                        <option>Tất cả</option> 
                        <option>Danh mục</option>
                        <option>Hãng</option>
                        <option>Tình Trạng</option>
                        <option>Sale</option>
                        <option>Outlet</option>
                     </select>
                       <select
                        className="header-list"
                        >
                        <option>Mới nhất</option>
                        <option>Đánh giá</option>
                        <option>Giá thấp đến cao</option>
                        <option>Giá cao đến thấp</option>
                     </select>
                        </div>
                        <Link to = "/cart/"className="header-link"><i className="fa-solid fa-cart-shopping" style={{color: "#FF3131", fontSize: '2rem'}} /></Link>
                        </div>
                      </div>
                        </div>
                    </div>
                </div>
                <div className="header_container">
      <div className="header-2">
          <div className="d-flex align-items-center">
            <div className="col-md-4">
            <div className="btn__header-mobile">
          <button
           onClick={toggleHeader}
           className="header__mobile">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
            </div>
            <div className="col-md-4">
              <div className="header__mobile-logo">
                <Link to="/">
                  <img
                    src={logo}
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="header-cart">
            <Link to = "/cart/"className="header-link"><i className="fa-solid fa-cart-shopping header-cart-icon"/></Link>
              </div>
            </div>
        </div>
        <div className="d-flex mb-5 align-items-center">
          <div className="col-md-6 ml-3 p-0">
          <div className="search-bar d-flex align-items-center">
                            <input 
                            type="text"
                            className="input-style" />
                            <div className="search-bar-icon d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            </div>
                            <div className="mt-2" style={{fontSize: "1.4rem", fontWeight:'bold'}}>Tỉ giá hôm nay:  {exchangeRate}</div>
          </div>
          <div className="col-md-6 ml-5">
            <a href="tel:01541251" className="text-decoration-none d-flex align-items-center phone-container">
              <i class="fa-solid fa-phone mr-3"></i>
              <div>0123141235</div>
            </a>
            <a href="" className="text-decoration-none d-flex align-items-center phone-container">
            <i class="fa-solid fa-globe mr-3"></i>
              <div>ShinGolf</div>
            </a>
            <a href="" className="text-decoration-none d-flex align-items-center phone-container">
            <i class="fa-brands fa-facebook mr-3" style={{color: '#0866FF'}}></i>
              <div>ShinGolf</div>
            </a>
          </div>
        </div>
        
      </div>
      </div>
        <HeaderMobile />
     <div className="container-fluid header-container-all">
      <div className="header">
        <Tabs
        className="header__PC">
             <TabList className="header__navbar-list mb-0 justify-content-start">
             <Tab className="header__navbar-item">
             <div className="header__logo">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <Link to="/">
                    <img
                      src={logo}
                      alt="logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
                </Tab>
               
              </TabList>      
                  <TabList className="header__navbar-list mb-0">
                  <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/">
                        TRANG CHỦ
                      </Link>
                    </Tab>
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/service/">
                        SẢN PHẨM
                      </Link>
                    </Tab>
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/">
                        GIỚI THIỆU
                      </Link>
                    </Tab>
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/">
                        LIÊN HỆ
                      </Link>
                    </Tab>
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/">
                        KIỂM TRA ĐƠN HÀNG
                      </Link>
                    </Tab>
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/">
                        TIN TỨC GOLF
                      </Link>
                    </Tab>
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/">
                       TRUYỀN HÌNH GOLF
                      </Link>
                    </Tab>
                  </TabList>
                  </Tabs>
            </div>
          </div>
    </>
  );
}
export default Header;
