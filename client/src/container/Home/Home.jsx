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
  import AlertComponent from "../../Alert";
  import newGolf from "../../image/new.jpg";
  import oldGolf from "../../image/old.jpg";
  import setGolf from "../../image/set.jpeg";
  import pkGolf from "../../image/pk1.jpg";
  import manGolf from "../../image/man.jpeg";
  import womanGof from "../../image/woman.jpeg";

  export default function Home({fetchData, listMenu}) {
    const { t } = useTranslation();
    const caption = t("caption", {returnObjects: true})
    const caption2 = t("caption2", {returnObjects: true})
    const navigate = useNavigate()
    const [copySuccess, setCopySuccess] = useState('');
     const textToCopy = "This text will be copied to clipboard";
    const [show, setShow] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => {
        setShow(false);
      }, 1000);  
  
      return () => clearTimeout(timer);
    }, [show]);
  
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
}));
console.log("🚀 ~ convertListMenu ~ convertListMenu:", convertListMenu)

const { addToCart } = useCart();

const handleAddToCart = (product) => {
      addToCart(product)
      setShow(true)
      // alert(`Đã thêm ${product.productName} vào giỏ hàng`)
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
      const formattedProductId = formatProductName(product.id);
      navigate(`/product-list/${formattedProductId}`, { state: { price: product.price, id: product.id } });
    };
    const handleProductCategory = (product) => {
      const formattedProductId = formatProductName(product.title);
      navigate(`/product-list/${formattedProductId}`, { state: { productType: product.items, id: product.title } });
    };
    const c = t("header.title")         
    const selectedList = 
      [
        {
          id:"newgolfclub",  
          "title": "Gậy\n Golf\n Mới",
            "image": newGolf
            
        },
        {
          id:"oldgolfclub",  
          "title": "Gậy\n golf\n cũ",
           "image": oldGolf
        },
        {
          id:"golfset",  
          "title": "Bộ\n gậy\n giá\n rẻ",
            "image":setGolf
        },
        {
          id:"accessories",  
          "title": "Phụ\n kiện\n golf",
            "image": pkGolf
        },
        {
          id:"mengolfclothes",  
          "title": "Quần\n áo\n golf\n nam",
            "image":manGolf
        },
        {
          id:"womengolfclothes",  
          "title": "Quần\n áo\n golf\n nữ",
           "image":womanGof
        }
    ]
    const StarRating = ({ rate }) => {
      const fullStars = Math.floor(rate);
      const halfStar = rate % 1 >= 0.5;
      const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
      return (
        <div>
          {[...Array(fullStars)].map((_, index) => (
            <i
              key={index}
              style={{ fontSize: '1rem', color: '#fec800', marginTop: 10 }}
              className="fa-solid fa-star"
            ></i>
          ))}
          {halfStar && (
            <i
              style={{ fontSize: '1rem', color: '#fec800', marginTop: 10 }}
              className="fa-solid fa-star-half-alt"
            ></i>
          )}
          {[...Array(emptyStars)].map((_, index) => (
            <i
              key={fullStars + index + 1}
              style={{ fontSize: '1rem', color: '#dcdcdc', marginTop: 10 }}
              className="fa-solid fa-star"
            ></i>
          ))}
        </div>
      );
    };

  const AutoPlaySlider = withAutoplay(AwesomeSlider)
    return (
      <div className="home-container">
      <HelmetLayout title = {"Shin Golf | Trang chủ"} />
      {show && (
        <AlertComponent message='Đã thêm sản phẩm vào giỏ hàng'/>
      )}
        <div className="container">
        <div className="row">
            <div className="col-md-8">
        <div className="content">
        <AutoPlaySlider
        animation = "scaleOutAnimation"
        mobileTouch
        bullets = {false}
        infinite
        play
        interval = {5000}>
              {caption.map((item) => (
                <div data-src={item.image} title={item.image}> </div>
                            ))}
          </AutoPlaySlider>
        </div>
        </div>
        <div className="col-md-4 d-flex flex-column">
        {selectedList
        .slice(0,3)
        .map(product => (
          <div className="hot-product-container" onClick={() => handleProductType(product)} style={{cursor:'pointer'}}>
          <div className="hot-item" style={{ backgroundImage: `url(${product.image})` }}>
          <p>{product.title}</p>
          </div>
          </div>
         ))}  
        </div>
        </div>
      <div className="row">
        <div className="col-md-4">
        {selectedList
        .slice(3,6)
        .map(product => (
          <div className="hot-product-container" onClick={() => handleProductType(product)} style={{cursor:'pointer'}}>
          <div className="hot-item" style={{ backgroundImage: `url(${product.image})` }}>
          <p>{product.title}</p>
          </div>
          </div>
        ))}
        </div>
        <div className="col-md-8 mt-3 mt-md-0">
        <div className="content">
        <AutoPlaySlider
        animation = "scaleOutAnimation"
        mobileTouch
        bullets = {false}
        infinite
        play
        interval = {5000}>
              {caption2.map((item) => (
                <div data-src={item.image} title={item.image}></div>
                            ))}
          </AutoPlaySlider>
        </div>
        </div>
                </div>
                <div className="product-id-mobile">
                  <div className="container p-0">
                    <div className="row">
                    {selectedList
                    .map(product => (
                      <div className="col-4 mb-2 mt-4">
                      <div className="" onClick={() => handleProductType(product)} style={{cursor:'pointer'}}>
                      <div className="hot-item" style={{ backgroundImage: `url(${product.image})` }}>
                      <p>{product.title}</p>
                      </div>
                      </div>
                    </div>
                    ))}  
                    </div>
                  </div>

                </div>

        <AnimatedOnScroll>
          <div className="content__feature mt-5">
            <div className="content__feature-title">GIÀY GOLF</div>
            <div className="container">
            <div className="row">
      {fetchData
        .filter(product => product.productId === 'golfshoes')
        .slice(0, 8)  
        .map((product) => (
          <div key={product.productId} className="col-6 col-md-2 p-3">
          <div style={{ textDecoration: 'none' }}>
            <div className="content__feature-item product-container" style={{overflow: 'hidden', height:'400px'}}>
            {product.saleprice > 0 ? (
                  <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', backgroundColor: '#ff3131', color: '#fff', fontSize:'1.4rem', fontWeight:'bold',zIndex:999}}>
                  <div>Sale</div>
                  <div>{((product.price - product.saleprice) / product.price * 100).toFixed(0)}%</div>
                  </div>
                  ) : ''} 
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
                </div>
              </div>
              <div style={{paddingLeft:'10px', paddingRight:'10px'}}>
              <div className="d-flex justify-content-between align-items-center">
             <StarRating rate={product.rate} />
              </div>
              <div className="content__feature-name mt-2">
                <div onClick={() => handleProduct(product)}>{product.productName}</div>
              </div>
              {product.saleprice > 0 ? (
              <div className="content__feature-text d-flex">
                <div className="price mr-3">{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                <div className="price" style={{ color: '#000', textDecoration:'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              </div>
              ): (
                <div className="content__feature-text d-flex">
                <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              </div>
              )}
              {product.brand !='' ? 
              <div className="product-status">{product.brand}</div>
              :''}
              </div>
          <div className="btn-container mt-3" style={{position:'absolute', bottom:0, width: '100%'}}>
                                    <div onClick={() => handleAddToCart(product)} className="buy-btn">
                                      THÊM VÀO GIỎ
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
        .slice(0, 8)
        .map((product) => (
          <div key={product.productId} className="col-6 col-md-2 p-3">
          <div style={{ textDecoration: 'none' }}>
            <div className="content__feature-item product-container" style={{overflow: 'hidden', height:'400px'}}>
            {product.saleprice > 0 ? (
                  <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', backgroundColor: '#ff3131', color: '#fff', fontSize:'1.4rem', fontWeight:'bold',zIndex:999}}>
                  <div>Sale</div>
                  <div>{((product.price - product.saleprice) / product.price * 100).toFixed(0)}%</div>
                  </div>
                  ) : ''} 
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
                </div>
              </div>
              <div style={{paddingLeft:'10px', paddingRight:'10px'}}>
              <div className="d-flex justify-content-between align-items-center">
             <StarRating rate={product.rate} />
              </div>
              <div className="content__feature-name mt-2">
                <div onClick={() => handleProduct(product)}>{product.productName}</div>
              </div>
              {product.saleprice > 0 ? (
              <div className="content__feature-text d-flex">
                <div className="price mr-3">{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                <div className="price" style={{ color: '#000', textDecoration:'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              </div>
              ): (
                <div className="content__feature-text d-flex">
                <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              </div>
              )}
              {product.brand !='' ? 
              <div className="product-status">{product.brand}</div>
              :''}
              </div>
          <div className="btn-container mt-3" style={{position:'absolute', bottom:0, width: '100%'}}>
                                    <div onClick={() => handleAddToCart(product)} className="buy-btn">
                                      THÊM VÀO GIỎ
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
            <div className="content__feature-title">GẬY GOLF MỚI</div>
            <div className="container">
            <div className="row">
      {fetchData
        .filter(product => product.productId === 'newgolfclub')
        .slice(0, 8)  
        .map((product) => (
          <div key={product.productId} className="col-6 col-md-2 p-3">
          <div style={{ textDecoration: 'none' }}>
            <div className="content__feature-item product-container" style={{overflow: 'hidden', height:'400px'}}>
            {product.saleprice > 0 ? (
                  <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', backgroundColor: '#ff3131', color: '#fff', fontSize:'1.4rem', fontWeight:'bold',zIndex:999}}>
                  <div>Sale</div>
                  <div>{((product.price - product.saleprice) / product.price * 100).toFixed(0)}%</div>
                  </div>
                  ) : ''} 
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
                </div>
              </div>
              <div style={{paddingLeft:'10px', paddingRight:'10px'}}>
              <div className="d-flex justify-content-between align-items-center">
             <StarRating rate={product.rate} />
              </div>
              <div className="content__feature-name mt-2">
                <div onClick={() => handleProduct(product)}>{product.productName}</div>
              </div>
              {product.saleprice > 0 ? (
              <div className="content__feature-text d-flex">
                <div className="price mr-3">{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                <div className="price" style={{ color: '#000', textDecoration:'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              </div>
              ): (
                <div className="content__feature-text d-flex">
                <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              </div>
              )}
              {product.brand !='' ? 
              <div className="product-status">{product.brand}</div>
              :''}
              </div>
          <div className="btn-container mt-3" style={{position:'absolute', bottom:0, width: '100%'}}>
                                    <div onClick={() => handleAddToCart(product)} className="buy-btn">
                                      THÊM VÀO GIỎ
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
            <div className="content__feature-title">GẬY GOLF CŨ</div>
            <div className="container">
            <div className="row">
      {fetchData
        .filter(product => product.productId === 'oldgolfclub')
        .slice(0, 8)  
        .map((product) => (
          <div key={product.productId} className="col-6 col-md-2 p-3">
          <div style={{ textDecoration: 'none' }}>
            <div className="content__feature-item product-container" style={{overflow: 'hidden', height:'400px'}}>
            {product.saleprice > 0 ? (
                  <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', backgroundColor: '#ff3131', color: '#fff', fontSize:'1.4rem', fontWeight:'bold',zIndex:999}}>
                  <div>Sale</div>
                  <div>{((product.price - product.saleprice) / product.price * 100).toFixed(0)}%</div>
                  </div>
                  ) : ''} 
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
                </div>
              </div>
              <div style={{paddingLeft:'10px', paddingRight:'10px'}}>
              <div className="d-flex justify-content-between align-items-center">
             <StarRating rate={product.rate} />
              </div>
              <div className="content__feature-name mt-2">
                <div onClick={() => handleProduct(product)}>{product.productName}</div>
              </div>
              {product.saleprice > 0 ? (
              <div className="content__feature-text d-flex">
                <div className="price mr-3">{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                <div className="price" style={{ color: '#000', textDecoration:'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              </div>
              ): (
                <div className="content__feature-text d-flex">
                <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              </div>
              )}
              {product.brand !='' ? 
              <div className="product-status">{product.brand}</div>
              :''}
              </div>
          <div className="btn-container mt-3" style={{position:'absolute', bottom:0, width: '100%'}}>
                                    <div onClick={() => handleAddToCart(product)} className="buy-btn">
                                      THÊM VÀO GIỎ
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
            <div className="content__feature-title">BỘ GẬY</div>
            <div className="container">
            <div className="row">
      {fetchData
        .filter(product => product.productId === 'golfset')
        .slice(0, 8)  
        .map((product) => (
          <div key={product.productId} className="col-6 col-md-2 p-3">
            <div style={{ textDecoration: 'none' }}>
              <div className="content__feature-item product-container" style={{overflow: 'hidden', height:'400px'}}>
              {product.saleprice > 0 ? (
                    <div className="d-flex flex-column justify-content-center align-items-center sale-badge">
                    <div>Sale</div>
                    <div>{((product.price - product.saleprice) / product.price * 100).toFixed(0)}%</div>
                    </div>
                    ) : ''} 
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
                  </div>
                </div>
                <div style={{paddingLeft:'10px', paddingRight:'10px'}}>
                <div className="d-flex justify-content-between align-items-center">
               <StarRating rate={product.rate} />
               {product.brand !='' ? 
              <div className="product-status">{product.brand}</div>
              :''}
                </div>
                <div className="content__feature-name mt-2">
                  <div onClick={() => handleProduct(product)}>{product.productName}</div>
                </div>
                {product.saleprice > 0 ? (
                <div className="content__feature-text d-flex">
                  <div className="price mr-3">{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                  <div className="price" style={{ color: '#000', textDecoration:'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                </div>
                ): (
                  <div className="content__feature-text d-flex">
                  <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                </div>
                )}
                </div>
                <div className="btn-container">
                  <div className="row pb-0">
                    <div className="col-md-12 p-0">
                      <div onClick={()=> handleAddToCart(product)} className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                        THÊM VÀO GIỎ
                      </div>
                    </div>
                   {/* <div className="col-md-6 p-0">
                    <a 
                      target="_blank"
                      href="https://zalo.me/0564545545"
                      className="buy-btn">
                      LIÊN HỆ
                    </a>
                    </div> */}
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
            <div className="content__feature-title">PHỤ KIỆN</div>
            <div className="container">
            <div className="row">
      {fetchData
        .filter(product => product.productId === 'accessories')
        .slice(0,8)
        .map((product) => (
          <div key={product.productId} className="col-6 col-md-2 p-3">
          <div style={{ textDecoration: 'none' }}>
            <div className="content__feature-item product-container" style={{overflow: 'hidden', height:'400px'}}>
            {product.saleprice > 0 ? (
                  <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', backgroundColor: '#ff3131', color: '#fff', fontSize:'1.4rem', fontWeight:'bold',zIndex:999}}>
                  <div>Sale</div>
                  <div>{((product.price - product.saleprice) / product.price * 100).toFixed(0)}%</div>
                  </div>
                  ) : ''} 
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
                </div>
              </div>
              <div style={{paddingLeft:'10px', paddingRight:'10px'}}>
              <div className="d-flex justify-content-between align-items-center">
             <StarRating rate={product.rate} />
              </div>
              <div className="content__feature-name mt-2">
                <div onClick={() => handleProduct(product)}>{product.productName}</div>
              </div>
              {product.saleprice > 0 ? (
              <div className="content__feature-text d-flex">
                <div className="price mr-3">{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                <div className="price" style={{ color: '#000', textDecoration:'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              </div>
              ): (
                <div className="content__feature-text d-flex">
                <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              </div>
              )}
              {product.brand !='' ? 
              <div className="product-status">{product.brand}</div>
              :''}
              </div>
          <div className="btn-container mt-3" style={{position:'absolute', bottom:0, width: '100%'}}>
                                    <div onClick={() => handleAddToCart(product)} className="buy-btn">
                                      THÊM VÀO GIỎ
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
            <div className="content__feature-title">QUẦN ÁO NAM</div>
            <div className="container">
            <div className="row">
      {fetchData
        .filter(product => product.productId === 'mengolfclothes')
        .slice(0,8)
        .map((product) => (
          <div key={product.productId} className="col-6 col-md-2 p-3">
          <div style={{ textDecoration: 'none' }}>
            <div className="content__feature-item product-container" style={{overflow: 'hidden', height:'400px'}}>
            {product.saleprice > 0 ? (
                  <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', backgroundColor: '#ff3131', color: '#fff', fontSize:'1.4rem', fontWeight:'bold',zIndex:999}}>
                  <div>Sale</div>
                  <div>{((product.price - product.saleprice) / product.price * 100).toFixed(0)}%</div>
                  </div>
                  ) : ''} 
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
                </div>
              </div>
              <div style={{paddingLeft:'10px', paddingRight:'10px'}}>
              <div className="d-flex justify-content-between align-items-center">
             <StarRating rate={product.rate} />
              </div>
              <div className="content__feature-name mt-2">
                <div onClick={() => handleProduct(product)}>{product.productName}</div>
              </div>
              {product.saleprice > 0 ? (
              <div className="content__feature-text d-flex">
                <div className="price mr-3">{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                <div className="price" style={{ color: '#000', textDecoration:'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              </div>
              ): (
                <div className="content__feature-text d-flex">
                <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              </div>
              )}
              {product.brand !='' ? 
              <div className="product-status">{product.brand}</div>
              :''}
              </div>
          <div className="btn-container mt-3" style={{position:'absolute', bottom:0, width: '100%'}}>
                                    <div onClick={() => handleAddToCart(product)} className="buy-btn">
                                      THÊM VÀO GIỎ
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
            <div className="content__feature-title">QUẦN ÁO NỮ</div>
            <div className="container">
            <div className="row">
      {fetchData
        .filter(product => product.productId === 'womengolfclothes')
        .slice(0,8)
        .map((product) => (
          <div key={product.productId} className="col-6 col-md-2 p-3">
            <div style={{ textDecoration: 'none' }}>
              <div className="content__feature-item product-container" style={{overflow: 'hidden', height:'400px'}}>
              {product.saleprice > 0 ? (
                    <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', backgroundColor: '#ff3131', color: '#fff', fontSize:'1.4rem', fontWeight:'bold',zIndex:999}}>
                    <div>Sale</div>
                    <div>{((product.price - product.saleprice) / product.price * 100).toFixed(0)}%</div>
                    </div>
                    ) : ''} 
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
                  </div>
                </div>
                <div style={{paddingLeft:'10px', paddingRight:'10px'}}>
                <div className="d-flex justify-content-between align-items-center">
               <StarRating rate={product.rate} />
                </div>
                <div className="content__feature-name mt-2">
                  <div onClick={() => handleProduct(product)}>{product.productName}</div>
                </div>
                {product.saleprice > 0 ? (
                <div className="content__feature-text d-flex">
                  <div className="price mr-3">{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                  <div className="price" style={{ color: '#000', textDecoration:'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                </div>
                ): (
                  <div className="content__feature-text d-flex">
                  <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                </div>
                )}
                {product.brand !='' ? 
              <div className="product-status">{product.brand}</div>
              :''}
                </div>
                <div className="btn-container">
                  <div className="row pb-0">
                    <div className="col-md-12 p-0">
                      <div onClick={()=> handleAddToCart(product)} className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                        THÊM VÀO GIỎ
                      </div>
                    </div>
                   {/* <div className="col-md-6 p-0">
                    <a 
                      target="_blank"
                      href="https://zalo.me/0564545545"
                      className="buy-btn">
                      LIÊN HỆ
                    </a>
                    </div> */}
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
        <div className="row">
          {convertListMenu.map(product => (
      <div className="col-4 col-md-2 mt-3">
      <div onClick={() => handleProductCategory(product)} style={{cursor:'pointer'}}>
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
      </div>
    );
  }
