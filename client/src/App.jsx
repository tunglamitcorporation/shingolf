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

function App() {

  const display = !['/Login','/SignUp'].some(substring =>location.pathname.includes(substring))
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
        <Header />
    <div className ="top">
            {showTop && (
             <>
            <button className="btn__top" onClick={scrollToTop}>
            <i className="fa-solid fa-angle-up"></i>
            </button>
            {/* <button className ='btn-en btn_en-fixed ' onClick={()=>changeLanguage('en')}></button>                
            <button className ='btn-ja btn_ja-fixed' onClick={()=>changeLanguage('ja')}></button>  
            <button className ='btn-vie btn_vie-fixed' onClick={()=>changeLanguage('vie')}></button>   */}
            {/* <button className ='btn-kor btn_kor-fixed' onClick={()=>changeLanguage('kor')}></button>   */}
            </>        
                    )}
    </div>
      <ScrollToTop x={0} y={0} />
      <NewRouter news={news}/>
      <Footer />
      </div>
        )}
          </div>
        )
}

export default App


