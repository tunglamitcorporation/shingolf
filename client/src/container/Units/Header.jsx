import { Link} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Cookies from "js-cookie";
import Avatar from 'react-avatar';
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

  const [backgroundColor, setBackgroundColor] = useState('transparent');

    useEffect(()=>{
      const savedLang = Cookies.get('selectedLanguage');
      if(savedLang && i18n.language !== savedLang){
        i18n.changeLanguage(savedLang)
      }
    })
    useEffect(() => {
      const handleScroll = () => {
        const position = window.scrollY;
        // You can define your conditions for changing the background color here
        if (position > 100) {
          setBackgroundColor('#482979'); // Change to whatever color you want
        } else {
          setBackgroundColor('transparent'); // Change to default color
        }
      };
  
      // Add scroll event listener when component mounts
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
     // Empty dependency array ensures the effect runs only once
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
              to="/news-list"
              className="header__mobile-navbar-link"
            >
              {t("header.home")}
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to="/q&a"
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              {t("header.policies")}
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to="/hotel-hn"
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              {t("header.hn")}
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to="/hotel-hcm"
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              {t("header.hcm")}
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to="/hotel-dn"
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              {t("header.dn")}
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to="/hotel-hp"
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              {t("header.hp")}
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to="/reservation"
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              {t("header.reservation")}
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to="/feature"
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              {t("header.feature")}
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to="/service"
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              {t("header.service")}
            </Link>
          </li>
          {/* <li className="header__mobile-navbar-item">
            <Link
              to="/Massage"
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              {t("header.massage")}
            </Link>
          </li> */}
          <li className="header__mobile-navbar-item">
            <Link
              to="/contract"
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              {t("header.contract")}
            </Link>
          </li>
        </ul>
    )
  }

  const [active, setActive] = useState(false)
  const handleActive = () => {
    setActive(!active)
  }
  return (
    <>
      <div className='top-header'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-11'>
                        <p style={{marginLeft:'110px'}}>{t('header.top-header')}</p>
                        </div>
                        <div className='btn-lang col-md-1'>
                        <button className ='btn-en' onClick={()=>changeLanguage('en')}></button>                
                        <button className ='btn-ja' onClick={()=>changeLanguage('ja')}></button>  
                        </div>
                    </div>
                </div>
            </div>
      <div className="header_container">
      <div className="header-2">
        <div className="header__PC-2">
          <div className="header__logo">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <Link to="/">
                    <img
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1700714360/AzumayaWeb/nyvyprbkrs1v54vdmwib.png"
                      alt="logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <ul className="header__navbar-list-2">
            <li className="header__navbar-item header-reserve"> 
              <Link
                className={`header__navbar-link header-reserve ${active? 'tab_active' : ''}`}
                onClick={handleActive}
                onBlur={(e)=>setActive(false)}
                to="reservation"
                style={{ color: "#fff" }}
              >
                {t("header.reservation")}
              </Link>
            </li>
            <li className="header__navbar-item header-reserve">
              <Link
                className="header__navbar-link header-reserve"
                to="/Cambodia/Cambodia"
                style={{ color: "#fff" }}
              >
                {t("header.cambodia")}
              </Link>
            </li>
            <li className="header__navbar-item header-reserve">
              <Link
                to = "/Login"
                target="_blank"
                className="header__navbar-link header-reserve"
                style={{ color: "#fff" }}
              >
                Sign In
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to = "/Login"
                target="_blank"
                style={{ color: "#fff" }}
              >
                <Avatar 
                src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-1/394314988_3576024049338244_1513351123669816224_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5740b7&_nc_ohc=HHV1lmBFfe0AX8CBVCX&_nc_ht=scontent.fhan18-1.fna&oh=00_AfA3H6HQhxq3XDbbqahRGqQvW2LJ0LiHbLXO2oD5d1rWBA&oe=65A6ACCA"
                facebookId="FouNdeRLH"
                size="40"
                round={true}
                 />
              </Link>
            </li>
          </ul>
        </div>
        <div className="header__mobile-logo">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1697875380/AzumayaWeb/oq0sv0woicgxankvnfin.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="btn__header-mobile">
          <button
           onClick={toggleHeader}
           className="header__mobile">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <HeaderMobile />
      </div>
      </div>
     <div className="is-sticky">
     <div className="container">
      <div className="header" style={{backgroundColor: backgroundColor}}>
        <Tabs
        // selectedTabClassName="service__active" 
        className="header__PC">
             <TabList className="header__navbar-list mb-0 justify-content-start">
             <Tab className="header__navbar-item">
             <div className="header__logo">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <Link to="/">
                    <img
                      src="https://res.cloudinary.com/dtdfsaaei/image/upload/v1700714360/AzumayaWeb/nyvyprbkrs1v54vdmwib.png"
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
                        {t("header.home")}
                      </Link>
                    </Tab>
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/news-list">
                        {t("header.news")}
                      </Link>
                    </Tab>
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/hotel-hcm">
                        {t("header.hcm")}
                      </Link>
                      <ul className="header__navbar-item-list" style={{width:200}}>
                        {hcm.map((item)=>(
                          <li className = "header__navbar-sub-link" >
                          <Link 
                          to ={item.link}>{item.name}
                          </Link>
                            </li>
                        ))}
                        </ul>
                    </Tab>
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/hotel-hn">
                        {t("header.hn")}
                      </Link>
                      <ul className="header__navbar-item-list" style={{width:200}}>
                        {hn.map((item)=>(
                          <li className = "header__navbar-sub-link" >
                          <Link 
                          to ={item.link}>{item.name}
                          </Link>
                            </li>
                        ))}
                        </ul>
                    </Tab>
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/hotel-dn">
                        {t("header.dn")}
                      </Link>
                      <ul className="header__navbar-item-list" style={{width:200}}>
                        {dn.map((item)=>(
                          <li className = "header__navbar-sub-link" >
                          <Link 
                          to ={item.link}>{item.name}
                          </Link>
                            </li>
                        ))}
                        </ul>
                    </Tab>
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/hotel-hp">
                        {t("header.hp")}
                      </Link>
                      <ul className="header__navbar-item-list" style={{width:200}}>
                        {hp.map((item)=>(
                          <li className = "header__navbar-sub-link" >
                          <Link 
                          to ={item.link}>{item.name}
                          </Link>
                            </li>
                        ))}
                        </ul>
                    </Tab>

                    {/* <Tab className="header__navbar-item">
                            <Link  className = "header__navbar-link-2" to = '/Reservation'>{t('header.item3')}</Link></Tab> */}
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/feature">
                        {t("header.feature")}
                      </Link>
                      <ul className="header__navbar-item-list">
                        {feature.map((item)=>(
                          <Tab className = "header__navbar-sub-link">
                          <Link 
                          to ={`/Feature/${item.id}`}> 
                          <span style={{backgroundColor:"#482979", padding:"5px", marginRight:"8px"}}>
                            {item.num}</span>{t(item.title)}
                            </Link>
                            </Tab>
                        ))}
                        </ul>
                    </Tab>
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/service">
                        {t("header.service")}
                      </Link>
                      <ul className="header__navbar-item-list" style={{width: 100}}>
                        {service.map((item)=>(
                          <li className = "header__navbar-sub-link" >
                          <Link 
                          to ={item.link}>{item.name}
                          </Link>
                            </li>
                        ))}
                        </ul>
                    </Tab>
                    {/* <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/Massage">
                        {t("header.massage")}
                      </Link>
                    </Tab> */}
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" style={{width:140}} to="/contract">
                        {t("header.contract")}
                      </Link>
                    </Tab>
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/reservation">
                        {t("header.reservation")}
                      </Link>
                    </Tab>
                    {/* <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/Login">
                        Sign In
                      </Link>
                    </Tab> */}
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/q&a">
                        {t("header.policies")}
                      </Link>
                    </Tab>
                  </TabList>
                  </Tabs>
            </div>
            </div>
     </div>
    </>
  );
}
export default Header;
