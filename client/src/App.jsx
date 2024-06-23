import { useState, useEffect, useMemo } from "react";
import { useTranslation } from 'react-i18next'
import Header from "./container/Units/Header.jsx";
import Footer from "./container/Units/Footer.jsx";
import Cookies from "js-cookie";
// import Login from "./container/Login/Login.jsx";
// import SignUp from "./container/Login/SignUp.jsx";
import NewRouter from "./NewRouter.jsx";
import ScrollToTop from "./units/ScrollToTop.js";
import './index.css'
import './base.css'
import './App.css';
import { Routes, Route } from "react-router-dom";
import BottomBar from "./container/Units/BottomBar.jsx";
import SearchPage from "./container/Units/SearchPage.jsx";
import RankTable from "./container/Units/RatePage.jsx";
function App() {

  //,'/admin'
  const display = !['/Login','/SignUp'].some(substring =>location.pathname.includes(substring));
  const isAdmin = !['/admin'].some(substring =>location.pathname.includes(substring));
  const [showTop, setShowTop] = useState(false)
  const { t, i18n } = useTranslation();
  const newsData = useMemo(() => t('news.source', {returnObjects:true}), [t]);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    Cookies.set('selectedLanguage', lng, {expires: 365})
  };
  useEffect(()=>{
    const savedLang = Cookies.get('selectedLanguage');
    if(savedLang && i18n.language !== savedLang){
      i18n.changeLanguage(savedLang)
    }
  })
  const [news, setNews] = useState([])
  const [language, setLanguage] = useState('');

  useEffect(() => {
    // Get the browser's language
    const browserLanguage = navigator.language || navigator.userLanguage;
    setLanguage(browserLanguage);
  }, []);

    
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
          useEffect(() => {
            setNews(newsData)
          },[newsData])
  return (
    <div>
{display &&(
        <div>
        {isAdmin && <Header /> }
         <div className ="top">
            {showTop && (
             <>
            <button className="btn__top" onClick={scrollToTop}>
            <i className="fa-solid fa-angle-up"></i>
            </button>
            <a className="btn-en btn_en-fixed" href="tel:0564545545"></a>              
            <a className ='btn-ja btn_ja-fixed' href=""></a>  
            <a className ='btn-vie btn_vie-fixed' href="https://zalo.me/0564545545"></a>
            </>        
                    )}
    </div>
      <ScrollToTop x={0} y={0} />
      <NewRouter news={news}/>
      <BottomBar />
      {isAdmin && <Footer /> }
      </div>
        )}
          </div>
        )
}

export default App


