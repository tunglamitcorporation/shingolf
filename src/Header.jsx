import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { scroller } from "react-scroll";
function Header() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const headerData = t("header", { returnObjects: true });
  const feature = t("feature.feature_item", { returnObjects: true });
  const handleClick = () => {
    document.getElementsByClassName(
      "header__mobile-navbar-list"
    ).style.display = "none";
  };
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
                className="header__navbar-link header-reserve"
                to="/Reservation"
                style={{ color: "#fff" }}
              >
                {t("header.reservation")}
              </Link>
            </li>
            <li className="header__navbar-item header-reserve">
              <Link
                className="header__navbar-link header-reserve"
                to="/BrandDetail"
                style={{ color: "#fff" }}
              >
                {t("header.cambodia")}
              </Link>
            </li>
            <li className="header__navbar-item header-reserve">
              <Link
                className="header__navbar-link header-reserve"
                style={{ color: "#fff" }}
              >
                Log In / Sign Up
              </Link>
            </li>
            {/* <li className="header__navbar-item header-reserve btn-lang">
              <button
                className="btn-en"
                onClick={() => changeLanguage("en")}
              ></button>
              <button
                className="btn-ja"
                onClick={() => changeLanguage("ja")}
              ></button>
            </li> */}
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
        <label htmlFor="header__mobile-input" className="header__mobile">
          <i className="fa-solid fa-bars"></i>
        </label>
        <input
          type="checkbox"
          name=""
          className="header__input"
          id="header__mobile-input"
        />
        <label
          htmlFor="header__mobile-input"
          className="header__mobile-overlay"
        ></label>
        <ul className="header__mobile-navbar-list">
          <label
            htmlFor="header__mobile-input"
            className="header__mobile-navbar-closed"
          >
            <i className="fa-solid fa-xmark"></i>
          </label>
          <li className="header__mobile-navbar-item">
            <Link
              htmlFor="header__mobile-input"
              onClick={handleClick}
              Link
              to="/"
              className="header__mobile-navbar-link"
            >
              {t("header.home")}
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to="/Policies"
              onClick={handleClick}
              className="header__mobile-navbar-link"
            >
              {t("header.policies")}
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to="/HN/HNBranch"
              onClick={handleClick}
              className="header__mobile-navbar-link"
            >
              {t("header.hn")}
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to="/HCM/HCMBranch"
              onClick={handleClick}
              className="header__mobile-navbar-link"
            >
              {t("header.hcm")}
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to="/DN/DNBranch"
              onClick={handleClick}
              className="header__mobile-navbar-link"
            >
              {t("header.dn")}
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to="/HP/HPBranch"
              onClick={handleClick}
              className="header__mobile-navbar-link"
            >
              {t("header.hp")}
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to="/Reservation"
              onClick={handleClick}
              className="header__mobile-navbar-link"
            >
              {t("header.reservation")}
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to="/Feature"
              onClick={handleClick}
              className="header__mobile-navbar-link"
            >
              {t("header.feature")}
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to="/Service"
              onClick={handleClick}
              className="header__mobile-navbar-link"
            >
              {t("header.service")}
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to="/Massage"
              onClick={handleClick}
              className="header__mobile-navbar-link"
            >
              {t("header.massage")}
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to="/Contract"
              onClick={handleClick}
              className="header__mobile-navbar-link"
            >
              {t("header.contract")}
            </Link>
          </li>
        </ul>
      </div>
      <div className="header ">
        <div className="header__PC">
                  <ul className="header__navbar-list mb-0">
                  <li className="header__navbar-item">
                    {/* <li className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/Test">
                        Test Page
                      </Link>
                    </li> */}
                      <Link className="header__navbar-link-2" to="/">
                        {t("header.home")}
                      </Link>
                    </li>
                    <li className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/Policies">
                        {t("header.policies")}
                      </Link>
                    </li>
                    <li className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/HCM/HCMBranch">
                        {t("header.hcm")}
                      </Link>
                    </li>
                    <li className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/HN/HNBranch">
                        {t("header.hn")}
                      </Link>
                    </li>
                    <li className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/DN/DNBranch">
                        {t("header.dn")}
                      </Link>
                    </li>
                    <li className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/HP/HPBranch">
                        {t("header.hp")}
                      </Link>
                    </li>

                    {/* <li className="header__navbar-item">
                            <Link  className = "header__navbar-link-2" to = '/Reservation'>{t('header.item3')}</Link></li> */}
                    <li className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/Feature">
                        {t("header.feature")}
                      </Link>
                      <ul className="header__navbar-item-list">
                        {feature.map((item)=>(
                          <li className = "header__navbar-sub-link"><Link 
                          to ={`/Feature#${item.id}`}
                          onClick={()=>scroller.scrollTo(`${item.id}`,
                          {duration:0,
                          delay:0,
                          smooth: true,
                          containerID:'containerID',
                          offset:-250})}> 
                          <span style={{backgroundColor:"#482979", padding:"5px", marginRight:"8px"}}>
                            {item.num}</span>{t(item.title)}
                            </Link>
                            </li>
                        ))}
                        </ul>
                    </li>
                    <li className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/Service">
                        {t("header.service")}
                      </Link>
                    </li>
                    {/* <li className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/Massage">
                        {t("header.massage")}
                      </Link>
                    </li> */}
                    <li className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/Contract">
                        {t("header.contract")}
                      </Link>
                    </li>
                    {/* <li className="header__navbar-item">
                            <Link  className = "header__navbar-link-branch .header__navbar-link--hover" to=''>{t('header.item12')}</Link>
                                <ul className="header__navbar-item-list">
                                    <li className = "header__navbar-sub-link"><Link to = '/BrandDetail'>{t('header.item7')}</Link></li>
                                    <li className = "header__navbar-sub-link"><Link to ="">{t('header.item8')}</Link></li>
                                    <li className = "header__navbar-sub-link"><Link to ="">{t('header.item9')}</Link></li>
                                    <li className = "header__navbar-sub-link"><Link to ="">{t('header.item10')}</Link></li>
                                    <li className = "header__navbar-sub-link"><Link to ="">{t('header.item11')}</Link></li>
                                </ul>
                        </li> */}
                  </ul>
              </div>
            </div>
    </>
  );
}
export default Header;
