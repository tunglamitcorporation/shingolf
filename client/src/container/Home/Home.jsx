// import "flatpickr/dist/themes/airbnb.css";
import { useTranslation } from "react-i18next";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import {Form, Link} from "react-router-dom"
import {format, parse} from "date-fns"
import { useState, useEffect } from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";

export default function Home({news}) {
  const { t } = useTranslation();
  const featureItem = t("feature.feature_item", { returnObjects: true });
  const homeNews = news.slice(0,4)
  const caption = t("caption", {returnObjects: true})
  const [isOpen, setIsOpen] = useState(false)
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const c = t("header.title")
useEffect(()=>{
  if(isOpen) {
    document.body.style.position= "fixed";
  }else{
    document.body.style.position = "";
  }
})
const AutoPlaySlider =  withAutoplay(AwesomeSlider)
  return (
    <>
    <HelmetLayout title = {c} />
    <div className="homepage">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
      <div className="content">
      {/* <div className="overlay"></div> */}
      <AutoPlaySlider
      animation = "scaleOutAnimation"
      mobileTouch
      bullets = {false}
      infinite
      play
      interval = {5000}>
            {caption.map((item) => (
               <div data-src={item.image}>
                                 {/* <Link to = {item.link}>
                                  <p className="carousel_name">{item.name}<br />{item.caption}</p>
                                  </Link> */}
                                  </div>
                          ))}
        </AutoPlaySlider>
      </div>
          </div>
        </div>
      </div>
      <div className="container pl-5">
  <div className="row">
    <div className="col-6 col-md-6 mt-5">
      <div className="row p-0">
        <div className="col-md-4 p-0 m-0 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#fec800', height: '300px' }}>
          <div className="banner-title">Gậy Golf</div>
        </div>
        <div className="col-md-8 p-0 m-0">
          <Link className='link-route' to='/hotel-hn'>
            <img
              className="content__branch-img"
              src="https://bizweb.dktcdn.net/100/226/755/files/equipment-new-irons.jpg?v=1548170880304"
              alt="hotel hanoi azumaya hotel"
            />
          </Link>
        </div>
      </div>
    </div>
    <div className="col-6 col-md-6 mt-5">
      <div className="row p-0">
        <div className="col-md-4 p-0 m-0 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#fec800', height: '300px' }}>
          <div className="banner-title">Gậy Golf</div>
        </div>
        <div className="col-md-8 p-0 m-0">
          <Link className='link-route' to='/hotel-hn'>
            <img
              className="content__branch-img"
              src="https://bizweb.dktcdn.net/100/226/755/files/equipment-new-irons.jpg?v=1548170880304"
              alt="hotel hanoi azumaya hotel"
            />
          </Link>
        </div>
      </div>
    </div>

              <div className="col-6 col-md-6 mt-5">
                  <div className="row p-0">
                    <div className="col-md-4 p-0 m-0 d-flex align-items-center justify-content-center" style={{backgroundColor: '#fec800', height: '300px'}}>
                     <div className="banner-title">Gậy Golf</div>
                    </div>
                    <div className="col-md-8 p-0 m-0">
                  <Link className='link-route' to = '/hotel-hn' >
                  <img
                    className="content__branch-img"
                    src="https://bizweb.dktcdn.net/100/226/755/files/equipment-new-irons.jpg?v=1548170880304"
                    alt="hotel hanoi azumaya hotel"
                  />
                  </Link>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 mt-5">
                  <div className="row p-0">
                    <div className="col-md-4 p-0 m-0 d-flex align-items-center justify-content-center" style={{backgroundColor: '#fec800', height: '300px'}}>
                     <div className="banner-title">Gậy Golf</div>
                    </div>
                    <div className="col-md-8 p-0 m-0">
                  <Link className='link-route' to = '/hotel-hn' >
                  <img
                    className="content__branch-img"
                    src="https://bizweb.dktcdn.net/100/226/755/files/equipment-new-irons.jpg?v=1548170880304"
                    alt="hotel hanoi azumaya hotel"
                  />
                  </Link>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 mt-5">
                  <div className="row p-0">
                    <div className="col-md-4 p-0 m-0 d-flex align-items-center justify-content-center" style={{backgroundColor: '#fec800', height: '300px'}}>
                     <div className="banner-title">Gậy Golf</div>
                    </div>
                    <div className="col-md-8 p-0 m-0">
                  <Link className='link-route' to = '/hotel-hn' >
                  <img
                    className="content__branch-img"
                    src="https://bizweb.dktcdn.net/100/226/755/files/equipment-new-irons.jpg?v=1548170880304"
                    alt="hotel hanoi azumaya hotel"
                  />
                  </Link>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 mt-5">
                  <div className="row p-0">
                    <div className="col-md-4 p-0 m-0 d-flex align-items-center justify-content-center" style={{backgroundColor: '#fec800', height: '300px'}}>
                     <div className="banner-title">Gậy Golf</div>
                    </div>
                    <div className="col-md-8 p-0 m-0">
                  <Link className='link-route' to = '/hotel-hn' >
                  <img
                    className="content__branch-img"
                    src="https://bizweb.dktcdn.net/100/226/755/files/equipment-new-irons.jpg?v=1548170880304"
                    alt="hotel hanoi azumaya hotel"
                  />
                  </Link>
                  </div>
                </div>
              </div>
              </div>
          </div>
      <AnimatedOnScroll>
        <div className="content__feature mt-5">
          <div className="content__feature-title">GẬY GOLF MỚI</div>
          <div className="container">
            <div className="row">
                <div className="col-md-3">
                <Link to = '/feature/' style={{textDecoration: "none"}}>
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = "/feature/"
                      ></Link>
                      </div>
                    </div>
                    
                    <div className="content__feature-name">
                      <a href="">Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC</a>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">28.475.000 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>33.500.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="col-md-3">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <a href="">Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC</a>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">28.475.000 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>33.500.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <a href="">Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC</a>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">28.475.000 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>1.000.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <a href="">Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC</a>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">28.475.000 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>1.000.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <a href="">Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC</a>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">28.475.000 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>1.000.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <a href="">Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC</a>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">28.475.000 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>1.000.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <a href="">Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC</a>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">28.475.000 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>1.000.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <a href="">Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC</a>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">28.475.000 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>33.500.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>
      </AnimatedOnScroll>
      <AnimatedOnScroll>
        <div className="content__feature">
          <div className="content__feature-title">TRANG PHỤC</div>
          <div className="container">
            <div className="row">
                <div className="col-md-3">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-002_FC?rp=standard-0pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=512,640)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <a href="">Áo Men's UA Matchplay Stripe Polo</a>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">1.349.000 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>33.500.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-002_FC?rp=standard-0pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=512,640)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <a href="">Áo Men's UA Matchplay Stripe Polo</a>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">1.349.000 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>33.500.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-002_FC?rp=standard-0pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=512,640)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <a href="">Áo Men's UA Matchplay Stripe Polo</a>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">1.349.000 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>33.500.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-002_FC?rp=standard-0pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=512,640)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <a href="">Áo Men's UA Matchplay Stripe Polo</a>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">1.349.000 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>33.500.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-002_FC?rp=standard-0pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=512,640)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <a href="">Áo Men's UA Matchplay Stripe Polo</a>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">1.349.000 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>33.500.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-002_FC?rp=standard-0pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=512,640)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <a href="">Áo Men's UA Matchplay Stripe Polo</a>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">1.349.000 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>33.500.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-002_FC?rp=standard-0pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=512,640)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <a href="">Áo Men's UA Matchplay Stripe Polo</a>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">1.349.000 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>33.500.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-002_FC?rp=standard-0pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=512,640)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <a href="">Áo Men's UA Matchplay Stripe Polo</a>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">1.349.000 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>33.500.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>
      </AnimatedOnScroll>
      <AnimatedOnScroll>
        <div className="content__feature">
          <div className="content__feature-title">TÚI GOLF</div>
          <div className="container">
            <div className="row">
                <div className="col-md-3">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://product.hstatic.net/200000836511/product/823066_90970001-6_17736afeb40749fe82cc135b7e3ea67e_1024x1024.jpg)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <a href="">Túi đựng gậy Puma Tour Stand Bag 24'' P.BLK</a>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">20.500.200 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>22.778.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://product.hstatic.net/200000836511/product/823066_90970001-6_17736afeb40749fe82cc135b7e3ea67e_1024x1024.jpg)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <a href="">Túi đựng gậy Puma Tour Stand Bag 24'' P.BLK</a>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">20.500.200 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>22.778.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://product.hstatic.net/200000836511/product/823066_90970001-6_17736afeb40749fe82cc135b7e3ea67e_1024x1024.jpg)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <a href="">Túi đựng gậy Puma Tour Stand Bag 24'' P.BLK</a>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">20.500.200 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>22.778.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://product.hstatic.net/200000836511/product/823066_90970001-6_17736afeb40749fe82cc135b7e3ea67e_1024x1024.jpg)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <a href="">Túi đựng gậy Puma Tour Stand Bag 24'' P.BLK</a>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">20.500.200 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>22.778.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://product.hstatic.net/200000836511/product/823066_90970001-6_17736afeb40749fe82cc135b7e3ea67e_1024x1024.jpg)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <a href="">Túi đựng gậy Puma Tour Stand Bag 24'' P.BLK</a>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">20.500.200 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>22.778.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://product.hstatic.net/200000836511/product/823066_90970001-6_17736afeb40749fe82cc135b7e3ea67e_1024x1024.jpg)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <a href="">Túi đựng gậy Puma Tour Stand Bag 24'' P.BLK</a>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">20.500.200 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>22.778.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://product.hstatic.net/200000836511/product/823066_90970001-6_17736afeb40749fe82cc135b7e3ea67e_1024x1024.jpg)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <a href="">Túi đựng gậy Puma Tour Stand Bag 24'' P.BLK</a>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">20.500.200 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>22.778.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="content__feature-item">
                    <div className="content__feature-container">
                      <div
                        className="content__feature-img"
                        style={{ backgroundImage: "url(https://product.hstatic.net/200000836511/product/823066_90970001-6_17736afeb40749fe82cc135b7e3ea67e_1024x1024.jpg)"}}
                      >
                          <Link 
                          className="d-block"
                          style={{height: '100%'}}
                      to = ""
                      ></Link>
                      </div>
                    </div>
                    <div className="content__feature-name">
                      <a href="">Túi đựng gậy Puma Tour Stand Bag 24'' P.BLK</a>
                    </div>
                    <div className="content__feature-text d-flex">
                     <div className="price">20.500.200 VNĐ</div>
                     <div className="price ml-5 strikethrough"style={{color: "#ccc"}}>22.778.000 VNĐ</div>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                        </div>
                        <div className="col-md-6 p-0">
                        <Link to = ""className="buy-btn">MUA NGAY</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>
      </AnimatedOnScroll>
    </div>
    </>
  );
}
