import { useState, useEffect } from "react";
import {Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import Header from "./container/Units/Header.jsx";
import Footer from "./container/Units/Footer.jsx";
import Login from "./container/Login/Login.jsx";
import SignUp from "./container/Login/SignUp.jsx";
import Cambodia from "./Cambodia/Cambodia";
import Header_PP from "./Cambodia/Header";
import Footer_PP from "./Cambodia/Footer";
import Feature_PP from "./Cambodia/Feature";
import Policies_PP from "./Cambodia/Policies";
import PhnomPenhRoomDetail from "./Cambodia/PhnomPenh";
import NewRouter from "./NewRouter.jsx";
import ScrollToTop from "./units/ScrollToTop.js";
import './index.css'
import './base.css'
function App() {
  const location = useLocation() 
  const navigate = useNavigate()
  const display = !['/Login','/SignUp','/Cambodia/Cambodia','/Cambodia/PhnomPenh','/Cambodia/Policies','/Cambodia/Feature'].some(substring =>location.pathname.includes(substring))
  const [showTop, setShowTop] = useState(false)
  const {t} = useTranslation()
  
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
        {!display &&(
          <div>
            
                <div className ="top">
              {showTop && (<button className="btn__top" onClick={scrollToTop}>
                      <i className="fa-solid fa-angle-up"></i></button>)}
          </div>
          <ScrollToTop />
          <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          </Routes>
          </div>
        )}
        {!display &&(
          <div>
        <Header_PP />
        <div className ="top">
            {showTop && (<button className="btn__top" onClick={scrollToTop}>
                    <i className="fa-solid fa-angle-up"></i></button>)}
        </div>
        <ScrollToTop />
        <Routes>
          <Route path="/Cambodia/Cambodia" element={<Cambodia/>} />
          <Route path="/Cambodia/Feature" element={<Feature_PP />} />
          <Route path="/Cambodia/Policies" element={<Policies_PP />} />
          <Route path="/Cambodia/PhnomPenh" element={<PhnomPenhRoomDetail />} />
        </Routes>
        <Footer_PP />
        </div>
            )}
          </div>
        )
}

export default App


