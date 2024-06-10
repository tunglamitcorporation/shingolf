  // import "flatpickr/dist/themes/airbnb.css";
  import { useTranslation } from "react-i18next";
  import { AnimatedOnScroll } from "react-animated-css-onscroll";
  import {Form, Link, useNavigate} from "react-router-dom"
  import {format, parse} from "date-fns"
  import { useState, useEffect, useContext } from "react";
  import AwesomeSlider from 'react-awesome-slider';
  import withAutoplay from 'react-awesome-slider/dist/autoplay';
  import 'react-awesome-slider/dist/styles.css';
  import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";
  import ProductHistoryContext from "../../ProductHistoryContext";

  const data = [
    {
      id: 'golfsticknew',
      productName: 'Golf Clubs New',
      price: '10'
    },
     {
      id: 'golfstickold',
      productName: 'Golf Clubs Old',
      price: '20'
    },
    {
      id:'golfstickhangle',
      productName: 'Stick Handle',
      price: '30'
    },
    {
      id:'golfclothesmen',
      productName: 'Golf Clothes for Men',
      price: '40'
    },
    {
      id:'golfclotheswwomen',
      productName: 'Golf Clothes for Women',
      price: '40'
    },
    {
      id:'golfacessory',
      productName: 'Golf Accessory',
      price: '50'
    },
    {
      id:'golfbag',
      productName: 'Golf Bag',
      price: '60'
    },
    {
      id:'golfshoes',
      productName: 'Golf Shoes',
      price: '70'
    },
    {
      id:'golfpractice',
      productName: 'Golf Practice',
      price: '80'
    }
  ];
  const productData = {
    "newGolfStick":[
      {
        id: 'golfsticknew',
        productName: 'Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC',
        price: '10'
      },

    ],
     "golfClothesMen":[
       {
         id:'golfclothesmen',
         productName: 'Áo Mens UA Matchplay Stripe Polo',
         price: '40'
       }

     ],
     "golfBag": [
       {
         id:'golfbag',
         productName: 'Túi đựng gậy Puma Tour Stand Bag 24P.BLK',
         price: '60'
       }

     ]
  }
  export default function Home({news}) {
    const { t } = useTranslation();
    const caption = t("caption", {returnObjects: true})
    const navigate = useNavigate()
    const { addProductToHistory } = useContext(ProductHistoryContext);
    const formatProductName = (name) => {
      return name.replace(/\s/g, '-');
    };
    const handleProduct = (product) => {
      addProductToHistory(product);
      const formattedProductName = formatProductName(product.productName);
      navigate(`/feature/${formattedProductName}`, { state: { price: product.price, id: product.id } });
    };
    const handleProductType = (product) => {
      const formattedProductId = formatProductName(product.id);
      navigate(`/service/${formattedProductId}`, { state: { price: product.price, id: product.id } });
    };
    const c = t("header.title")         
    const sliceData = data.slice(0, 6)
    const selectedProducts = [
      data[0], // Golf Clubs New
      data[3], // Stick Handle
      data[5], // Golf Clothes for Women
      data[6], // Golf Bag
      data[7], // Golf Practice
      data[1], // Golf Clubs Old
    ];
  
  const AutoPlaySlider =  withAutoplay(AwesomeSlider)
    return (
      <>
      <HelmetLayout title = {c} />
      <div className="homepage">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-0">
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
        <div className="row">
          {selectedProducts.map(product => (
      <div className="col-4 col-md-6 mt-5">
      <div onClick={() => handleProductType(product)} style={{cursor:'pointer'}}>
        <div className="banner-container">
          <div className="col-md-4 d-md-flex align-items-center justify-content-center banner-width">
            <div className="banner-title">{product.productName}</div>
          </div>
          <div className="col-md-8 p-0 m-0">
              <img
                className="content__branch-img"
                src="https://bizweb.dktcdn.net/100/226/755/files/equipment-new-irons.jpg?v=1548170880304"
                alt="hotel hanoi azumaya hotel"
              />
            </div>
          </div>
        </div>
      </div>

          ))}
                </div>
        </div>
        <AnimatedOnScroll>
          <div className="content__feature mt-5">
            <div className="content__feature-title">GẬY GOLF MỚI</div>
            <div className="container">
              <div className="row">
                      {productData.newGolfStick.map(product => (
                  <div className="col-6 col-md-3">
                        {product.id == 'golfsticknew' && (
                          <div onClick={() => handleProduct(product)} style={{textDecoration: "none"}}>
                            <div className="content__feature-item">
                              <div className="content__feature-container">
                                <div
                                  className="content__feature-img"
                                  style={{ backgroundImage: "url(https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg)"}}
                                >
                                </div>
                              </div>
                              <div className="content__feature-name">
                                <div onClick={() => handleProduct(product)}>{product.productName}</div>
                              </div>
                              <div className="content__feature-text d-md-flex">
                              <div className="price">28.475.000đ {product.price}</div>
                              <div className="price ml-md-5 strikethrough"style={{color: "#ccc"}}>33.500.000đ</div>
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
)}
</div>

        ))}
                 

              </div>
            </div>
          </div>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <div className="content__feature mt-5">
            <div className="content__feature-title">TRANG PHỤC</div>
            <div className="container">
              <div className="row">
                      {productData.golfClothesMen.map(product => (
                  <div className="col-6 col-md-3">
                        {product.id == 'golfclothesmen' && (
                          <div onClick={() => handleProduct(product)} style={{textDecoration: "none"}}>
                            <div className="content__feature-item">
                              <div className="content__feature-container">
                                <div
                                  className="content__feature-img"
                                  style={{ backgroundImage: "url(https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-002_FC?rp=standard-0pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=512,640)"}}

                                >
                                </div>
                              </div>
                              <div className="content__feature-name">
                                <div onClick={() => handleProduct(product)}>{product.productName}</div>
                              </div>
                              <div className="content__feature-text d-md-flex">
                              <div className="price">28.475.000đ {product.price}</div>
                              <div className="price ml-md-5 strikethrough"style={{color: "#ccc"}}>33.500.000đ</div>
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
)}
</div>

        ))}
                 

              </div>
            </div>
          </div>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <div className="content__feature mt-5">
            <div className="content__feature-title">TÚI GOLF</div>
            <div className="container">
              <div className="row">
                  {productData.golfBag.map(product => (
                  <div className="col-6 col-md-3">
                        {product.id == 'golfbag' && (
                          <div onClick={() => handleProduct(product)} style={{textDecoration: "none"}}>
                            <div className="content__feature-item">
                              <div className="content__feature-container">
                                <div
                                  className="content__feature-img"
                                  style={{ backgroundImage: "url(https://product.hstatic.net/200000836511/product/823066_90970001-6_17736afeb40749fe82cc135b7e3ea67e_1024x1024.jpg)"}}

                                >
                                </div>
                              </div>
                              <div className="content__feature-name">
                                <div onClick={() => handleProduct(product)}>{product.productName}</div>
                              </div>
                              <div className="content__feature-text d-md-flex">
                              <div className="price">28.475.000đ {product.price}</div>
                              <div className="price ml-md-5 strikethrough"style={{color: "#ccc"}}>33.500.000đ</div>
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
)}
</div>

        ))}

              </div>
            </div>
          </div>
        </AnimatedOnScroll>
      </div>
      </>
    );
  }
