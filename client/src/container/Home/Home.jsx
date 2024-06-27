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
  export default function Home({fetchData, listMenu}) {
    const { t } = useTranslation();
    const caption = t("caption", {returnObjects: true})
    const caption2 = t("caption2", {returnObjects: true})
    const navigate = useNavigate()
    const [copySuccess, setCopySuccess] = useState('');
     const textToCopy = "This text will be copied to clipboard";

     const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(textToCopy);
        setCopySuccess('Copied!');
        alert(copySuccess, textToCopy)
      } catch (err) {
        setCopySuccess('Failed to copy!');
      }
    };
  
    // const convertListMenu = []
    // for (const [title, items] of Object.entries(listMenu)) {
    //   items.forEach((item, index) => {
    //     if (index === 0) {
    //       convertListMenu.push({ title, item });
    //     } else {
    //       convertListMenu.push({ title: '', item });
    //     }
    //   });
    // }
    const groupedData = {};

for (const [title, items] of Object.entries(listMenu)) {
  if (!groupedData[title]) {
    groupedData[title] = [];
  }
  groupedData[title] = groupedData[title].concat(items);
}

const convertListMenu = Object.keys(groupedData).map(title => ({
  title,
  items: groupedData[title]
}));;
console.log(listMenu);
const { addToCart } = useCart();

const handleAddToCart = (product) => {
      addToCart(product)
      alert(`Đã thêm ${product.productName} vào giỏ hàng`)
    }
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
      const formattedProductId = formatProductName(product.title);
      navigate(`/product-list/${formattedProductId}`, { state: { price: product.price, id: product.title } });
    };
    const c = t("header.title")         
    // const selectedProducts = [
    //  convertListMenu[0], 
    //  convertListMenu[3], 
    //  convertListMenu[4], 
    //  convertListMenu[6], 
    //  convertListMenu[10], 
    //  convertListMenu[12], 
    // ];
    const selectedList = convertListMenu.slice(1,7)
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
          {selectedList.map(product => (
      <div className="col-4 col-md-6 mt-5">
      <div onClick={() => handleProductType(product)} style={{cursor:'pointer'}}>
        <div className="banner-container">
          <div className="col-md-12 d-flex align-items-center justify-content-center banner-width">
            <div className="banner-title">{product.title}</div>
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
                {/* <i onClick={{copyToClipboard}} class="fa-solid fa-copy" style={{fontSize: '2rem', color:'#ff3131'}}></i> */}
                </div>
                <div className="btn-container">
                  <div className="row pb-0">
                    <div className="col-md-6 p-0">
                      <div onClick={()=> handleAddToCart(product)} className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                        THÊM VÀO GIỎ
                      </div>
                    </div>
                   <div className="col-md-6 p-0">
                    <a 
                      target="_blank"
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
                    <div className="col-md-6 p-0">
                      <div  onClick={()=> handleAddToCart(product)}className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                        THÊM VÀO GIỎ
                      </div>
                    </div>
                    <div className="col-md-6 p-0">
                    <a 
                  // onClick={() => {
                  //     addToCart(product)
                  //     navigate('/cart/')
                  //     }} 
                  target="_blank"
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
                  <div className="col-md-6 p-0">
                    <div  onClick={()=> handleAddToCart(product)} className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                      THÊM VÀO GIỎ
                    </div>
                  </div>
                  <div className="col-md-6 p-0">
                  <a 
                  // onClick={() => {
                  //     addToCart(product)
                  //     navigate('/cart/')
                  //     }} 
                  target="_blank"
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
