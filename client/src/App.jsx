import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next'
import Header from "./container/Units/Header.jsx";
import Footer from "./container/Units/Footer.jsx";
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
  const {t} = useTranslation()
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };
  
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
            const newsData = t('news.source', {returnObjects:true})
            setNews(newsData)
          },[])
  return (
    <div>

      {display &&(
        <div>
        <Header />
    <div className ="top">
            {showTop && (<button className="btn__top" onClick={scrollToTop}>
                    <i className="fa-solid fa-angle-up"></i></button>)}
    </div>
      <ScrollToTop />
      <NewRouter news={news}/>
      <Footer />
      </div>
        )}
          </div>
        )
}

export default App


