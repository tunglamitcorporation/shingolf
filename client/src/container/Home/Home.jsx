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
      productId: 'newgolfclub',
      productName: 'Gậy Golf Mới',
    },
     {
      productId: 'oldgolfclub',
      productName: 'Gậy Golf Cũ',
    },
    {
      productId:'grip',
      productName: 'Cán Gậy/ Grip',
    },
    {
      productId:'mengolfclothes',
      productName: 'Quần Áo Golf Nam',
    },
    {
      productId:'womengolfclothes',
      productName: 'Quần Áo Golf Nữ',
    },
    {
      productId:'accessories',
      productName: 'Phụ Kiện Golf',
    },
    {
      productId:'golfbag',
      productName: 'Túi Golf',
    },
    {
      productId:'golfshoes',
      productName: 'Giày Golf',
    },
    {
      productId:'golftraining',
      productName: 'Phụ Kiện Tập Luyện',
    }
  ];
  const productData = [
      {
        productId: 'newgolfclub',
        productName: 'Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC',
        image :['https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg','https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg'],
        price: 33500000,
        saleprice: 28475000,
        rate: 5,
        productType:'New'
      },
      {
        productId: 'newgolfclub',
        productName: 'Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC',
        image :['https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg','https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg'],
        price: 33500000,
        saleprice: 28475000,
        rate: 5,
        productType:'New'
      },
      {
        productId: 'newgolfclub',
        productName: 'Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC',
        image :['https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg','https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg'],
        price: 33500000,
        saleprice: 28475000,
        rate: 5,
        productType:'New'
      },
      {
        productId: 'newgolfclub',
        productName: 'Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC',
        image :['https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg','https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg'],
        price: 33500000,
        saleprice: 28475000,
        rate: 5,
        productType:'New'
      },
       {
         productId:'golfclothesmen',
         productName: 'Áo Mens UA Matchplay Stripe Polo',
         image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-001_FC?rp=standard-0pad|pdpZoomDesktop&scl=0.72&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500',
        price: 3500000,
        saleprice: 2847500,
        rate: 4,
        productType:'Like New'


       },
       {
        productId:'golfclothesmen',
        productName: 'Áo Mens UA Matchplay Stripe Polo',
        image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-001_FC?rp=standard-0pad|pdpZoomDesktop&scl=0.72&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500',
       price: 3500000,
       saleprice: 2847500,
       rate: 4,
       productType:'Like New'


      },
      {
        productId:'golfclothesmen',
        productName: 'Áo Mens UA Matchplay Stripe Polo',
        image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-001_FC?rp=standard-0pad|pdpZoomDesktop&scl=0.72&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500',
       price: 3500000,
       saleprice: 2847500,
       rate: 4,
       productType:'Like New'


      },
      {
        productId:'golfclothesmen',
        productName: 'Áo Mens UA Matchplay Stripe Polo',
        image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-001_FC?rp=standard-0pad|pdpZoomDesktop&scl=0.72&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500',
       price: 3500000,
       saleprice: 2847500,
       rate: 4,
       productType:'Like New'


      },
       {
         productId:'golfbag',
         productName: 'Túi đựng gậy Puma Tour Stand Bag 24P.BLK',
         image: 'https://product.hstatic.net/1000007560/product/cobra_tour_stand_bag_2024_909700_2fe43b91c5614400aceaedf6aa07c1bf_large.jpg',
         price: 5000000,
        saleprice: 4750000,  
        rate: 3,
        productType:'Outlet'


       },
       {
        productId:'golfbag',
        productName: 'Túi đựng gậy Puma Tour Stand Bag 24P.BLK',
        image: 'https://product.hstatic.net/1000007560/product/cobra_tour_stand_bag_2024_909700_2fe43b91c5614400aceaedf6aa07c1bf_large.jpg',
        price: 5000000,
       saleprice: 4750000,  
       rate: 3,
       productType:'Outlet'


      },
      {
        productId:'golfbag',
        productName: 'Túi đựng gậy Puma Tour Stand Bag 24P.BLK',
        image: 'https://product.hstatic.net/1000007560/product/cobra_tour_stand_bag_2024_909700_2fe43b91c5614400aceaedf6aa07c1bf_large.jpg',
        price: 5000000,
       saleprice: 4750000,  
       rate: 3,
       productType:'Outlet'


      },
      {
        productId:'golfbag',
        productName: 'Túi đựng gậy Puma Tour Stand Bag 24P.BLK',
        image: 'https://product.hstatic.net/1000007560/product/cobra_tour_stand_bag_2024_909700_2fe43b91c5614400aceaedf6aa07c1bf_large.jpg',
        price: 5000000,
       saleprice: 4750000,  
       rate: 3,
       productType:'Outlet'


      }

      ]
  export default function Home({fetchData}) {
    const { t } = useTranslation();
    const caption = t("caption", {returnObjects: true})
    const caption2 = t("caption2", {returnObjects: true})
    const navigate = useNavigate()
    const { addToCart } = useCart();
    
    const { addProductToHistory } = useContext(ProductHistoryContext);
    const formatProductName = (name) => {
      return name.replace(/\s/g, '-');
    };
    const handleProduct = (product) => {
      addProductToHistory(product); 
      const formattedProductName = formatProductName(product.productName);
      navigate(`/product/${formattedProductName}`, { state: { 
        price: product.price, 
        productId: product.productId, 
        sale: product.saleprice, 
        rate: product.rate, 
        productType: product.productType,
        status: product.status,
        amount: product.amount,
        loft: product.loft,
        stickType: product.sticktype,
        stickHardType: product.stickhardtype,
        feature: product.feature,
        long: product.long,
        weight: product.weight,
        stickCover: product.stickcover,
        accessory: product.accessory,
        grip: product.grip,
        hand: product.hand,
        rank: product.rank,
        produceYear: product.produceyear,
        manageNumber: product.managenumber,
        size: product.size,
        shoesType: product.shoestype,
        sex: product.sex,
        brand: product.brand,
        produceLocation: product.producelocation,
        guarantee: product.guarantee,
        color: product.color,
        material: product.material,
        content: product.content,
        images: product.images,
        productCode: product.productCode,
        
      }});
    };
    const handleProductType = (product) => {
      const formattedProductId = formatProductName(product.productId);
      navigate(`/product-list/${formattedProductId}`, { state: { price: product.price, id: product.productId } });
    };
    const c = t("header.title")         
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
    // const code = 'A0001'
    // console.log(`https://shingolf.vn/image/product/image/${code}_image1.png`);
  const AutoPlaySlider = withAutoplay(AwesomeSlider)
    return (
      <>
      <HelmetLayout title = {c} />
      <div className="homepage">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-0">
        <div className="content">
        <AutoPlaySlider
        animation = "scaleOutAnimation"
        mobileTouch
        bullets = {false}
        infinite
        play
        interval = {5000}>
              {caption.map((item) => (
                <div data-src={item.image} title={item.image}>
                                  {/* <Link to = {item.link}>
                                    <p className="carousel_name">{item.name}<br />{item.caption}</p>
                                    </Link> */}
                                    </div>
                            ))}
          </AutoPlaySlider>
        </div>
        <div className="content">
        <AutoPlaySlider
        animation = "scaleOutAnimation"
        mobileTouch
        bullets = {false}
        infinite
        play
        interval = {5000}>
              {caption2.map((item) => (
                <div data-src={item.image} title={item.image}>
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
      {fetchData
        .filter(product => product.productId === 'newgolfclub')
        .map((product) => (
          <div key={product.productId} className="col-6 col-md-3 p-3">
            <div style={{ textDecoration: 'none' }}>
              <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
                <div className="content__feature-container">
                  <div
                   onClick={() => handleProduct(product)}
                    className="content__feature-img"
                    style={{
                      backgroundImage:
                      `url(https://shingolf.vn/image/product/image/${product.productCode}_image1.png)`,
                      }}
                      title={product.productCode}
                  >
                    <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', right:0, backgroundColor: '#fec800', color: '#ff3131', fontSize:'1.4rem', fontWeight:'bold'}}>
                    <div>Sale</div>
                    <div>{((product.price - product.saleprice) / product.price * 100).toFixed(0)}%</div>
                    </div>
                  </div>
                </div>
                <div style={{padding:'10px'}}>
                <div className="d-flex justify-content-between align-items-center">
               <StarRating rate={product.rate} />
               <div className="d-flex justify-content-center align-items-center" style={{width: 'fit-content', height: '30px',padding: '10px', border: '1px solid green', fontSize:'1.4rem', color:'green', marginTop: '10px', borderRadius: '10px', textTransform:'capitalize'}}>{product.rank}</div>
                </div>
                <div className="content__feature-name">
                  <div className="wrapper" onClick={() => handleProduct(product)}>{product.productName}</div>
                </div>
                <div className="content__feature-text d-md-flex justify-content-between">
                  <div className="price">{Intl.NumberFormat('de-DE').format(product.saleprice)}đ</div>
                  <div className="price" style={{ color: '#000', textDecoration:'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
                </div>
                </div>
                <div className="btn-container">
                  <div className="row pb-0">
                    {/* <div className="col-md-6 p-0">
                      <div  onClick={() => addToCart(product)}className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                        THÊM VÀO GIỎ
                      </div>
                    </div> */}
                   <div className="col-md-12 p-0">
                    <a 
                  // onClick={() => {
                  //     addToCart(product)
                  //     navigate('/cart/')
                  //     }} 
                      href="https://zalo.me/0564545545"
                      className="buy-btn">
                      LIÊN HỆ
                    </a>
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
      {fetchData
        .filter(product => product.productId === 'mengolfclothes')
        .map((product) => (
          <div key={product.productId} className="col-6 col-md-3 p-3" >
            <div style={{ textDecoration: 'none' }}>
              <div className="content__feature-item  product-container" style={{overflow: 'hidden'}}>
                <div className="content__feature-container">
                  <div
                   onClick={() => handleProduct(product)}
                    className="content__feature-img"
                    style={{
                      backgroundImage:
                      `url(https://shingolf.vn/image/product/image/${product.productCode}_image1.png)`,
                      }}
                      title={product.productCode}
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
               <div className="d-flex justify-content-center align-items-center" style={{width: 'fit-content', height: '30px',padding: '10px', border: '1px solid green', fontSize:'1.4rem', color:'green', marginTop: '10px', borderRadius: '10px', textTransform: 'capitalize'}}>{product.rank}</div>
                </div>
                <div className="content__feature-name">
                  <div className="wrapper" onClick={() => handleProduct(product)}>{product.productName}</div>
                </div>
                <div className="content__feature-text d-md-flex justify-content-between">
                  <div className="price">{Intl.NumberFormat('de-DE').format(product.sale)}đ</div>
                  <div className="price" style={{ color: '#000', textDecoration:'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
                </div>
                </div>
                <div className="btn-container">
                  <div className="row pb-0">
                    {/* <div className="col-md-6 p-0">
                      <div  onClick={() => addToCart(product)}className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                        THÊM VÀO GIỎ
                      </div>
                    </div> */}
                    <div className="col-md-12 p-0">
                    <a 
                  // onClick={() => {
                  //     addToCart(product)
                  //     navigate('/cart/')
                  //     }} 
                   href="https://zalo.me/0564545545"
                      className="buy-btn">
                      LIÊN HỆ
                    </a>
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
      {fetchData
        .filter(product => product.productId === 'golfbag')
        .map((product) => (
          <div key={product.productId} className="col-6 col-md-3 p-3">
          <div style={{ textDecoration: 'none' }}>
          <div className="content__feature-item  product-container" style={{overflow: 'hidden'}}>
              <div className="content__feature-container">
                <div
                 onClick={() => handleProduct(product)}
                  className="content__feature-img"
                  style={{
                    backgroundImage:
                    `url(https://shingolf.vn/image/product/image/${product.productCode}_image1.png)`,
                    }}
                    title={product.productCode}
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
               <div className="d-flex justify-content-center align-items-center" style={{width: 'fit-content', height: '30px',padding: '10px', border: '1px solid green', fontSize:'1.4rem', color:'green', marginTop: '10px', borderRadius: '10px', textTransform:'capitalize'}}>{product.rank}</div>
                </div>
              <div className="content__feature-name">
                <div  className="wrapper" onClick={() => handleProduct(product)}>{product.productName}</div>
              </div>
              <div className="content__feature-text d-md-flex justify-content-between">
                <div className="price">{Intl.NumberFormat('de-DE').format(product.sale)}đ</div>
                <div className="price ml-md-5" style={{ color: '#000', textDecoration:'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
              </div>
              </div>
              <div className="btn-container">
                <div className="row pb-0">
                  {/* <div className="col-md-6 p-0">
                    <div  onClick={() => addToCart(product)}className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                      THÊM VÀO GIỎ
                    </div>
                  </div> */}
                  <div className="col-md-12 p-0">
                  <a 
                  // onClick={() => {
                  //     addToCart(product)
                  //     navigate('/cart/')
                  //     }} 
                   href="https://zalo.me/0564545545"
                      className="buy-btn">
                      LIÊN HỆ
                    </a>
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
