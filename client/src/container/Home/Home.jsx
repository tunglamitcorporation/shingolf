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
import { useCart } from "../../CartProvider";
  const data = [
    {
      id: 'golfsticknew',
      productName: 'Gậy Golf Mới',
      price: '10'
    },
     {
      id: 'golfstickold',
      productName: 'Gậy Golf Cũ',
      price: '20'
    },
    {
      id:'golfstickhangle',
      productName: 'Cán Gậy/ Grip',
      price: '30'
    },
    {
      id:'golfclothesmen',
      productName: 'Quần Áo Golf Nam',
      price: '40'
    },
    {
      id:'golfclotheswwomen',
      productName: 'Quần Áo Golf Nữ',
      price: '40'
    },
    {
      id:'golfacessory',
      productName: 'Phụ Kiện Golf',
      price: '50'
    },
    {
      id:'golfbag',
      productName: 'Túi Golf',
      price: '60'
    },
    {
      id:'golfshoes',
      productName: 'Giày Golf',
      price: '70'
    },
    {
      id:'golfpractice',
      productName: 'Phụ Kiện Tập Luyện',
      price: '80'
    }
  ];
  const productData = [
      {
        id: 'golfsticknew',
        productName: 'Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC',
        image :'https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg',
        price: 33500000,
        sale: 28475000,
        rate: 5,
        prodcttype:'New'
      },
      {
        id: 'golfsticknew',
        productName: 'Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC',
        image :'https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg',
        price: 33500000,
        sale: 28475000,
        rate: 5,
        prodcttype:'New'
      },
      {
        id: 'golfsticknew',
        productName: 'Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC',
        image :'https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg',
        price: 33500000,
        sale: 28475000,
        rate: 5,
        prodcttype:'New'
      },
      {
        id: 'golfsticknew',
        productName: 'Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC',
        image :'https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg',
        price: 33500000,
        sale: 28475000,
        rate: 5,
        prodcttype:'New'
      },
       {
         id:'golfclothesmen',
         productName: 'Áo Mens UA Matchplay Stripe Polo',
         image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-001_FC?rp=standard-0pad|pdpZoomDesktop&scl=0.72&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500',
        price: 3500000,
        sale: 2847500,
        rate: 4,
        prodcttype:'Like New'


       },
       {
        id:'golfclothesmen',
        productName: 'Áo Mens UA Matchplay Stripe Polo',
        image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-001_FC?rp=standard-0pad|pdpZoomDesktop&scl=0.72&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500',
       price: 3500000,
       sale: 2847500,
       rate: 4,
       prodcttype:'Like New'


      },
      {
        id:'golfclothesmen',
        productName: 'Áo Mens UA Matchplay Stripe Polo',
        image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-001_FC?rp=standard-0pad|pdpZoomDesktop&scl=0.72&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500',
       price: 3500000,
       sale: 2847500,
       rate: 4,
       prodcttype:'Like New'


      },
      {
        id:'golfclothesmen',
        productName: 'Áo Mens UA Matchplay Stripe Polo',
        image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-001_FC?rp=standard-0pad|pdpZoomDesktop&scl=0.72&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500',
       price: 3500000,
       sale: 2847500,
       rate: 4,
       prodcttype:'Like New'


      },
       {
         id:'golfbag',
         productName: 'Túi đựng gậy Puma Tour Stand Bag 24P.BLK',
         image: 'https://product.hstatic.net/1000007560/product/cobra_tour_stand_bag_2024_909700_2fe43b91c5614400aceaedf6aa07c1bf_large.jpg',
         price: 5000000,
        sale: 4750000,  
        rate: 3,
        prodcttype:'Outlet'


       },
       {
        id:'golfbag',
        productName: 'Túi đựng gậy Puma Tour Stand Bag 24P.BLK',
        image: 'https://product.hstatic.net/1000007560/product/cobra_tour_stand_bag_2024_909700_2fe43b91c5614400aceaedf6aa07c1bf_large.jpg',
        price: 5000000,
       sale: 4750000,  
       rate: 3,
       prodcttype:'Outlet'


      },
      {
        id:'golfbag',
        productName: 'Túi đựng gậy Puma Tour Stand Bag 24P.BLK',
        image: 'https://product.hstatic.net/1000007560/product/cobra_tour_stand_bag_2024_909700_2fe43b91c5614400aceaedf6aa07c1bf_large.jpg',
        price: 5000000,
       sale: 4750000,  
       rate: 3,
       prodcttype:'Outlet'


      },
      {
        id:'golfbag',
        productName: 'Túi đựng gậy Puma Tour Stand Bag 24P.BLK',
        image: 'https://product.hstatic.net/1000007560/product/cobra_tour_stand_bag_2024_909700_2fe43b91c5614400aceaedf6aa07c1bf_large.jpg',
        price: 5000000,
       sale: 4750000,  
       rate: 3,
       prodcttype:'Outlet'


      }

      ]
  export default function Home({news}) {
    const { t } = useTranslation();
    const caption = t("caption", {returnObjects: true})
    const navigate = useNavigate()
    const { addToCart } = useCart();

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
      data[0], 
      data[1], 
      data[7], 
      data[3], 
      data[4], 
      data[5], 
    ];
    const StarRating = ({ rate }) => {
      const renderStars = (rate) => {
        const stars = [];
        for (let i = 0; i < rate; i++) {
          stars.push(
            <i
              key={i}
              style={{ fontSize: '1.4rem', color: '#fec800', marginTop: 10 }}
              className="fa-solid fa-star"
            ></i>
          );
        }
        return stars;
      };
    
      return (
        <div>
          {renderStars(rate)}
        </div>
      );
    };
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
          <div className="col-md-12 d-flex align-items-center justify-content-center banner-width">
            <div className="banner-title">{product.productName}</div>
          </div>
          {/* <div className="col-md-8 p-0 m-0">
              <img
                className="content__branch-img"
                src="https://bizweb.dktcdn.net/100/226/755/files/equipment-new-irons.jpg?v=1548170880304"
                alt="hotel hanoi azumaya hotel"
              />
            </div> */}
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
      {productData
        .filter(product => product.id === 'golfsticknew')
        .map((product) => (
          <div key={product.id} className="col-6 col-md-3 p-3">
            <div style={{ textDecoration: 'none' }}>
              <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
                <div className="content__feature-container">
                  <div
                   onClick={() => handleProduct(product)}
                    className="content__feature-img"
                    style={{
                      backgroundImage:
                      `url(${product.image})`,
                      }}
                  >
                    <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', right:0, backgroundColor: '#fec800', color: '#ff3131', fontSize:'1.4rem', fontWeight:'bold'}}>
                    <div>Sale</div>
                    <div>{((product.price - product.sale) / product.price * 100).toFixed(0)}%</div>
                    </div>
                  </div>
                </div>
                <div style={{padding:'10px'}}>
                <div className="d-flex justify-content-between align-items-center">
               <StarRating rate={product.rate} />
               <div className="d-flex justify-content-center align-items-center" style={{width: 'fit-content', height: '30px',padding: '10px', border: '1px solid green', fontSize:'1.4rem', color:'green', marginTop: '10px', borderRadius: '10px'}}>{product.prodcttype}</div>
                </div>
                <div className="content__feature-name">
                  <div onClick={() => handleProduct(product)}>{product.productName}</div>
                </div>
                <div className="content__feature-text d-md-flex justify-content-between">
                  <div className="price">{Intl.NumberFormat('de-DE').format(product.sale)}đ</div>
                  <div className="price" style={{ color: '#000', textDecoration:'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
                </div>
                </div>
                <div className="btn-container">
                  <div className="row pb-0">
                    <div className="col-md-6 p-0">
                      <div  onClick={() => addToCart(product)}className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                        THÊM VÀO GIỎ
                      </div>
                    </div>
                    <div className="col-md-6 p-0">
                    <div onClick={() => {
                        addToCart(product)
                        navigate('/cart/')
                        }} className="buy-btn">
                        MUA NGAY
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      {productData
        .filter(product => product.id === 'golfclothesmen')
        .map((product) => (
          <div key={product.id} className="col-6 col-md-3 p-3" >
            <div style={{ textDecoration: 'none' }}>
              <div className="content__feature-item  product-container" style={{overflow: 'hidden'}}>
                <div className="content__feature-container">
                  <div
                   onClick={() => handleProduct(product)}
                    className="content__feature-img"
                    style={{
                      backgroundImage:
                      `url(${product.image})`,
                      }}
                  >
                    <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', right:0, backgroundColor: '#fec800', color: '#ff3131', fontSize:'1.4rem', fontWeight:'bold'}}>
                    <div>Sale</div>
                    <div>{((product.price - product.sale) / product.price * 100).toFixed(0)}%</div>
                    </div>
                  </div>
                </div>
                <div style={{padding:'10px'}}>
                <div className="d-flex justify-content-between align-items-center">
               <StarRating rate={product.rate} />
               <div className="d-flex justify-content-center align-items-center" style={{width: 'fit-content', height: '30px',padding: '10px', border: '1px solid green', fontSize:'1.4rem', color:'green', marginTop: '10px', borderRadius: '10px'}}>{product.prodcttype}</div>
                </div>
                <div className="content__feature-name">
                  <div onClick={() => handleProduct(product)}>{product.productName}</div>
                </div>
                <div className="content__feature-text d-md-flex justify-content-between">
                  <div className="price">{Intl.NumberFormat('de-DE').format(product.sale)}đ</div>
                  <div className="price" style={{ color: '#000', textDecoration:'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
                </div>
                </div>
                <div className="btn-container">
                  <div className="row pb-0">
                    <div className="col-md-6 p-0">
                      <div  onClick={() => addToCart(product)}className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                        THÊM VÀO GIỎ
                      </div>
                    </div>
                    <div className="col-md-6 p-0">
                    <div onClick={() => {
                        addToCart(product)
                        navigate('/cart/')
                        }} className="buy-btn">
                        MUA NGAY
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      {productData
        .filter(product => product.id === 'golfbag')
        .map((product) => (
          <div key={product.id} className="col-6 col-md-3 p-3">
          <div style={{ textDecoration: 'none' }}>
          <div className="content__feature-item  product-container" style={{overflow: 'hidden'}}>
              <div className="content__feature-container">
                <div
                 onClick={() => handleProduct(product)}
                  className="content__feature-img"
                  style={{
                    backgroundImage:
                    `url(${product.image})`,
                    }}
                >
                  <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', right:0, backgroundColor: '#fec800', color: '#ff3131', fontSize:'1.4rem', fontWeight:'bold'}}>
                  <div>Sale</div>
                  <div>{((product.price - product.sale) / product.price * 100).toFixed(0)}%</div>
                  </div>
                </div>
              </div>
              <div style={{padding:'10px'}}>
              <div className="d-flex justify-content-between align-items-center">
               <StarRating rate={product.rate} />
               <div className="d-flex justify-content-center align-items-center" style={{width: 'fit-content', height: '30px',padding: '10px', border: '1px solid green', fontSize:'1.4rem', color:'green', marginTop: '10px', borderRadius: '10px'}}>{product.prodcttype}</div>
                </div>
              <div className="content__feature-name">
                <div onClick={() => handleProduct(product)}>{product.productName}</div>
              </div>
              <div className="content__feature-text d-md-flex justify-content-between">
                <div className="price">{Intl.NumberFormat('de-DE').format(product.sale)}đ</div>
                <div className="price ml-md-5" style={{ color: '#000', textDecoration:'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
              </div>
              </div>
              <div className="btn-container">
                <div className="row pb-0">
                  <div className="col-md-6 p-0">
                    <div  onClick={() => addToCart(product)}className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                      THÊM VÀO GIỎ
                    </div>
                  </div>
                  <div className="col-md-6 p-0">
                  <div onClick={() => {
                      addToCart(product)
                      navigate('/cart/')
                      }} className="buy-btn">
                      MUA NGAY
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
