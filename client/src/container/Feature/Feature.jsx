import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import { useEffect,  useState, useContext} from 'react';
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useLocation } from "react-router-dom";
import ProductHistoryContext from "../../ProductHistoryContext";
const productData = [
  {
    id: 'golfsticknew',
    productName: 'Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC',
    image :'https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg',
    price: 33500000,
    sale: 28475000,
    rate: 5,
    productType:'New'
  },
  {
    id: 'golfsticknew',
    productName: 'Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC',
    image :'https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg',
    price: 33500000,
    sale: 28475000,
    rate: 5,
    productType:'New'
  },
  {
    id: 'golfsticknew',
    productName: 'Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC',
    image :'https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg',
    price: 33500000,
    sale: 28475000,
    rate: 5,
    productType:'New'
  },
  {
    id: 'golfsticknew',
    productName: 'Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC',
    image :'https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg',
    price: 33500000,
    sale: 28475000,
    rate: 5,
    productType:'New'
  },
   {
     id:'golfclothesmen',
     productName: 'Áo Mens UA Matchplay Stripe Polo',
     image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-001_FC?rp=standard-0pad|pdpZoomDesktop&scl=0.72&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500',
    price: 3500000,
    sale: 2847500,
    rate: 4,
    productType:'Like New'


   },
   {
    id:'golfclothesmen',
    productName: 'Áo Mens UA Matchplay Stripe Polo',
    image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-001_FC?rp=standard-0pad|pdpZoomDesktop&scl=0.72&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500',
   price: 3500000,
   sale: 2847500,
   rate: 4,
   productType:'Like New'


  },
  {
    id:'golfclothesmen',
    productName: 'Áo Mens UA Matchplay Stripe Polo',
    image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-001_FC?rp=standard-0pad|pdpZoomDesktop&scl=0.72&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500',
   price: 3500000,
   sale: 2847500,
   rate: 4,
   productType:'Like New'


  },
  {
    id:'golfclothesmen',
    productName: 'Áo Mens UA Matchplay Stripe Polo',
    image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-001_FC?rp=standard-0pad|pdpZoomDesktop&scl=0.72&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500',
   price: 3500000,
   sale: 2847500,
   rate: 4,
   productType:'Like New'


  },
   {
     id:'golfbag',
     productName: 'Túi đựng gậy Puma Tour Stand Bag 24P.BLK',
     image: 'https://product.hstatic.net/1000007560/product/cobra_tour_stand_bag_2024_909700_2fe43b91c5614400aceaedf6aa07c1bf_large.jpg',
     price: 5000000,
    sale: 4750000,  
    rate: 3,
    productType:'Outlet'


   },
   {
    id:'golfbag',
    productName: 'Túi đựng gậy Puma Tour Stand Bag 24P.BLK',
    image: 'https://product.hstatic.net/1000007560/product/cobra_tour_stand_bag_2024_909700_2fe43b91c5614400aceaedf6aa07c1bf_large.jpg',
    price: 5000000,
   sale: 4750000,  
   rate: 3,
   productType:'Outlet'


  },
  {
    id:'golfbag',
    productName: 'Túi đựng gậy Puma Tour Stand Bag 24P.BLK',
    image: 'https://product.hstatic.net/1000007560/product/cobra_tour_stand_bag_2024_909700_2fe43b91c5614400aceaedf6aa07c1bf_large.jpg',
    price: 5000000,
   sale: 4750000,  
   rate: 3,
   productType:'Outlet'


  },
  {
    id:'golfbag',
    productName: 'Túi đựng gậy Puma Tour Stand Bag 24P.BLK',
    image: 'https://product.hstatic.net/1000007560/product/cobra_tour_stand_bag_2024_909700_2fe43b91c5614400aceaedf6aa07c1bf_large.jpg',
    price: 5000000,
   sale: 4750000,  
   rate: 3,
   productType:'Outlet'


  }

  ]
export default function Feature({fetchData}) {
  const { t } = useTranslation();
  const { productName } = useParams();
  const location = useLocation();
  
  const { price,
    productId,
    sale,
    rate,
    productType,
    status,
    amount,
    loft,
    stickType,
    stickHardType,
    feature,
    long,
    weight,
    stickCover,
    accessory,
    grip,
    hand,
    rank,
    produceYear,
    manageNumber,
    size,
    shoesType,
    sex,
    brand,
    produceLocation,
    guarantee,
    color,
    material,
    content,
    images,
    productCode} = location.state || {};
  const { productHistory } = useContext(ProductHistoryContext);
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
  const formatProductName = (name) => {
    return name.replace(/\s/g, '-');
  };
  const handleProduct = (product) => {
    addProductToHistory(product);
    const formattedProductName = formatProductName(product.productName);
    navigate(`/product/${formattedProductName}`, { state: { price: product.price, productId: product.productId, sale: product.saleprice, rate: product.rate, image: product.image, productType: product.productType }});
  };
  return (
    <div>
      <HelmetLayout />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="re__breadcrumb">
              <ul className="breadcrumb__list">
                <li className="breadcrumb__item">
                  <i className="fa-solid fa-house"></i>
                  <Link to="/"></Link>
                </li>
                <li className="breadcrumb__item">/</li>
                <li className="breadcrumb__item">
                  <Link className="breadcrumb__title" to="/product/">
                    Sản phẩm
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="feature__characteristic">
        <div className="container">
          {productId == 'newgolfclub' && (
            <>
             <div className="row">
            <div className="col-md-6">
            <Carousel 
                showArrows
                showThumbs={true}
                showStatus={false}
                showIndicators={false}
                emulateTouch
                stopOnHover
                autoPlay
                infiniteLoop>
              <img src={images.image1} />
              <img src={images.image2} />
              <img src={images.image3} />
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={rate} />
              <div className="product-title-client">{productName.replace(/-/g, ' ')}</div>
              <div className="product-status">{status}</div>
              <div className="content__feature-text d-flex">
              {sale != '' ? (
                <>
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(price)}đ</div>
                <div className="price ml-md-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(sale)}đ</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(price)}đ</div>
              )}
                    </div>
                      <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 100}}>Loại hàng: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{productType}</li>
                    </ul>
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 100}}>Độ Loft:  </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff' }}>{loft}</li>
                    </ul>
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 100}}>Loại Cán: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff' }}>{stickHardType}</li>
                    </ul>
                    <div className="hotline">
                      <a href="tel:012931231124">HotLine: 1094581205812</a>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        {/* <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc', fontSize: '2.5rem', height: '40px', padding: '5px'}}>THÊM VÀO GIỎ</Link>
                        </div> */}
                        <div className="col-md-12 p-0">
                        <Link to = ""className="buy-btn" style={{fontSize: '2.5rem', height: '40px', padding: '5px'}}>LIÊN HỆ</Link>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #000'}}>
              <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Loại gậy</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{productType}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Chiều dài</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{long}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Trọng lượng</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{weight}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Bọc đầu gậy</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{stickCover}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Phụ kiện</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{accessory}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Grip</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{grip}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Tay thuận</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{hand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Rank</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{rank}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Năm sản xuất</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{produceYear}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{manageNumber}</td>
                </tr>
              </table>
            </div>
            <div className="description">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginTop: 20, marginBottom: 10}}>Thông tin sản phẩm</div>
              <p>
             {content.content1}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image1}/>
             </div>
             {content.content2}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image2}/>
             </div>
             {content.content3}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image3}/>
             </div>
             {content.content4}
              </p>
            </div>
            </div>
            <div className="col-md-3">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData.map((product => {
                {product.productType == productType && (
                  <div key={product.id} className="col-6 col-md-12">
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
                          <div>{((product.price - product.saleprice) / product.price * 100).toFixed(0)}%</div>
                          </div>
                        </div>
                      </div>
                      <div style={{padding:'10px'}}>
                      <div className="d-flex justify-content-between align-items-center">
                     <StarRating rate={product.rate} />
                     <div className="d-flex justify-content-center align-items-center" style={{width: 'fit-content', height: '30px',padding: '10px', border: '1px solid green', fontSize:'1.4rem', color:'green', marginTop: '10px', borderRadius: '10px'}}>{product.rank}</div>
                      </div>
                      <div className="content__feature-name">
                        <div className="wrapper" onClick={() => handleProduct(product)}>{product.productName}</div>
                      </div>
                      <div className="content__feature-text d-md-flex justify-content-between">
                      {product.saleprice != '' ? (
                <>
                <div className="price">{Intl.NumberFormat('de-DE').format(product.saleprice)}đ</div>
                <div className="price" style={{ color: '#000', textDecoration: 'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
                </>
              ) : (
                <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
              )}
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
                          <div 
                          // onClick={() => {
                          //     addToCart(product)
                          //     navigate('/cart/')
                          //     }}
                               className="buy-btn">
                              LIÊN HỆ
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )}
}))}
            </div>
          </div>
        </div>
          </div>
            </div>
          </div>
         </>
            )}
            {productId == 'oldgolfclub' && (
            <>
             <div className="row">
            <div className="col-md-6">
            <Carousel 
                showArrows
                showThumbs={true}
                showStatus={false}
                showIndicators={false}
                emulateTouch
                stopOnHover
                autoPlay
                infiniteLoop>
               <img src={images.image1} />
              <img src={images.image2} />
              <img src={images.image3} />
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={rate} />
              <div className="product-title-client">{productName.replace(/-/g, ' ')}</div>
              <div className="product-status">{status}</div>
              <div className="content__feature-text d-flex">
              {sale != '' ? (
                <>
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(price)}đ</div>
                <div className="price ml-md-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(sale)}đ</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(price)}đ</div>
              )}
                    </div>
                      <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 100}}>Loại hàng: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{productType}</li>
                    </ul>
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 100}}>Độ Loft:  </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff' }}>{loft}</li>
                    </ul>
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 100}}>Loại Cán: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff' }}>{stickHardType}</li>
                    </ul>
                    <div className="hotline">
                      <a href="tel:012931231124">HotLine: 1094581205812</a>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        {/* <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc', fontSize: '2.5rem', height: '40px', padding: '5px'}}>THÊM VÀO GIỎ</Link>
                        </div> */}
                        <div className="col-md-12 p-0">
                        <Link to = ""className="buy-btn" style={{fontSize: '2.5rem', height: '40px', padding: '5px'}}>LIÊN HỆ</Link>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #000'}}>
              <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Loại gậy</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{productType}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Chiều dài</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{long}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Trọng lượng</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{weight}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Bọc đầu gậy</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{stickCover}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Phụ kiện</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{accessory}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Grip</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{grip}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Tay thuận</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{hand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Rank</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{rank}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Năm sản xuất</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{produceYear}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{manageNumber}</td>
                </tr>
              </table>
            </div>
            <div className="description">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginTop: 20, marginBottom: 10}}>Thông tin sản phẩm</div>
              <p>
             {content.content1}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image1}/>
             </div>
             {content.content2}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image2}/>
             </div>
             {content.content3}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image3}/>
             </div>
             {content.content4}
              </p>
            </div>
            </div>
            <div className="col-md-3">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData.map((product => {
                {product.productType == productType && (
                  <div key={product.id} className="col-6 col-md-12">
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
                          <div>{((product.price - product.saleprice) / product.price * 100).toFixed(0)}%</div>
                          </div>
                        </div>
                      </div>
                      <div style={{padding:'10px'}}>
                      <div className="d-flex justify-content-between align-items-center">
                     <StarRating rate={product.rate} />
                     <div className="d-flex justify-content-center align-items-center" style={{width: 'fit-content', height: '30px',padding: '10px', border: '1px solid green', fontSize:'1.4rem', color:'green', marginTop: '10px', borderRadius: '10px'}}>{product.productType}</div>
                      </div>
                      <div className="content__feature-name">
                        <div className="wrapper" onClick={() => handleProduct(product)}>{product.productName}</div>
                      </div>
                      <div className="content__feature-text d-md-flex justify-content-between">
                      {product.saleprice != '' ? (
                <>
                <div className="price">{Intl.NumberFormat('de-DE').format(product.saleprice)}đ</div>
                <div className="price" style={{ color: '#000', textDecoration: 'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
                </>
              ) : (
                <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
              )}
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
                          <div 
                          // onClick={() => {
                          //     addToCart(product)
                          //     navigate('/cart/')
                          //     }}
                               className="buy-btn">
                              LIÊN HỆ
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )}
}))}
            </div>
          </div>
        </div>
          </div>
            </div>
          </div>
         </>
            )}
             {productId == 'grip' && (
            <>
             <div className="row">
            <div className="col-md-6">
            <Carousel 
                showArrows
                showThumbs={true}
                showStatus={false}
                showIndicators={false}
                emulateTouch
                stopOnHover
                autoPlay
                infiniteLoop>
               <img src={images.image1} />
              <img src={images.image2} />
              <img src={images.image3} />
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={rate} />
              <div className="product-title-client">{productName.replace(/-/g, ' ')}</div>
              <div className="product-status">{status}</div>
              <div className="content__feature-text d-flex">
              {sale != '' ? (
                <>
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(price)}đ</div>
                <div className="price ml-md-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(sale)}đ</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(price)}đ</div>
              )}
                    </div>
                      <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 100}}>Loại hàng: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{productType}</li>
                    </ul>
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 100}}>Loại Cán: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff' }}>X</li>
                    </ul>
                    <div className="hotline">
                      <a href="tel:012931231124">HotLine: 1094581205812</a>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        {/* <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc', fontSize: '2.5rem', height: '40px', padding: '5px'}}>THÊM VÀO GIỎ</Link>
                        </div> */}
                        <div className="col-md-12 p-0">
                        <Link to = ""className="buy-btn" style={{fontSize: '2.5rem', height: '40px', padding: '5px'}}>LIÊN HỆ</Link>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #000'}}>
              <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Loại cán</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{productType}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Chiều dài</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{long}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Trọng lượng</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{weight}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Hãng sản xuất:</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{brand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Nơi sản xuất:</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{produceLocation}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Năm sản xuất</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{produceYear}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{manageNumber}</td>
                </tr>
              </table>
            </div>
            <div className="description">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginTop: 20, marginBottom: 10}}>Thông tin sản phẩm</div>
              <p>
             {content.content1}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image1}/>
             </div>
             {content.content2}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image2}/>
             </div>
             {content.content3}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image3}/>
             </div>
             {content.content4}
              </p>
            </div>
            </div>
            <div className="col-md-3">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData.map((product => {
                {product.productType == productType && (
                  <div key={product.id} className="col-6 col-md-12">
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
                          <div>{((product.price - product.saleprice) / product.price * 100).toFixed(0)}%</div>
                          </div>
                        </div>
                      </div>
                      <div style={{padding:'10px'}}>
                      <div className="d-flex justify-content-between align-items-center">
                     <StarRating rate={product.rate} />
                     <div className="d-flex justify-content-center align-items-center" style={{width: 'fit-content', height: '30px',padding: '10px', border: '1px solid green', fontSize:'1.4rem', color:'green', marginTop: '10px', borderRadius: '10px'}}>{product.productType}</div>
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
                            </div> */}
                          {/* </div> */}
                          <div className="col-md-12 p-0">
                          <div 
                          // onClick={() => {
                          //     addToCart(product)
                          //     navigate('/cart/')
                          //     }} 
                              className="buy-btn">
                              LIÊN HỆ
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )}
}))}
            </div>
          </div>
        </div>
          </div>
            </div>
          </div>
         </>
            )}
             {productId == 'mengolfclothes' && (
            <>
             <div className="row">
            <div className="col-md-6">
            <Carousel 
                showArrows
                showThumbs={true}
                showStatus={false}
                showIndicators={false}
                emulateTouch
                stopOnHover
                autoPlay
                infiniteLoop>
           <img src={images.image1} />
              <img src={images.image2} />
              <img src={images.image3} />
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={rate} />
              <div className="product-title-client">{productName.replace(/-/g, ' ')}</div>
              <div className="product-status">{status}</div>
              <div className="content__feature-text d-flex">
              {sale != '' ? (
                <>
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(price)}đ</div>
                <div className="price ml-md-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(sale)}đ</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(price)}đ</div>
              )}
                    </div>
                      <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 100}}>Kích thước: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{size}</li>
                    </ul>
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 100}}>Giới tính: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{sex}</li>
                    </ul>
                    <div className="hotline">
                      <a href="tel:012931231124">HotLine: 1094581205812</a>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        {/* <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc', fontSize: '2.5rem', height: '40px', padding: '5px'}}>THÊM VÀO GIỎ</Link>
                        </div> */}
                        <div className="col-md-12 p-0">
                        <Link to = ""className="buy-btn" style={{fontSize: '2.5rem', height: '40px', padding: '5px'}}>LIÊN HỆ</Link>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #000'}}>
              <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Kích thước</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{size}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Giới tính</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{sex}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Chất liệu</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{material}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Màu sắc:</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{color}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Thương hiệu:</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{brand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{manageNumber}</td>
                </tr>
              </table>
            </div>
            <div className="description">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginTop: 20, marginBottom: 10}}>Thông tin sản phẩm</div>
              <p>
             {content.content1}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image1}/>
             </div>
             {content.content2}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image2}/>
             </div>
             {content.content3}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image3}/>
             </div>
             {content.content4}
              </p>
            </div>
            </div>
            <div className="col-md-3">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData.map((product => {
                {product.productType == productType && (
                  <div key={product.id} className="col-6 col-md-12">
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
                          <div>{((product.price - product.saleprice) / product.price * 100).toFixed(0)}%</div>
                          </div>
                        </div>
                      </div>
                      <div style={{padding:'10px'}}>
                      <div className="d-flex justify-content-between align-items-center">
                     <StarRating rate={product.rate} />
                     <div className="d-flex justify-content-center align-items-center" style={{width: 'fit-content', height: '30px',padding: '10px', border: '1px solid green', fontSize:'1.4rem', color:'green', marginTop: '10px', borderRadius: '10px'}}>{product.productType}</div>
                      </div>
                      <div className="content__feature-name">
                        <div className="wrapper" onClick={() => handleProduct(product)}>{product.productName}</div>
                      </div>
                      <div className="content__feature-text d-md-flex justify-content-between">
                      {product.saleprice != '' ? (
                <>
                <div className="price">{Intl.NumberFormat('de-DE').format(product.saleprice)}đ</div>
                <div className="price" style={{ color: '#000', textDecoration: 'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
                </>
              ) : (
                <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
              )}
                      </div>
                      </div>
                      <div className="btn-container">
                        <div className="row pb-0">
                          {/* <div className="col-md-6 p-0">
                            <div  onClick={() => addToCart(product)}className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                              THÊM VÀO GIỎ
                            </div>
                          </div> */}
                          <div className="col-md-6 p-0">
                          <div
                          //  onClick={() => {
                          //     addToCart(product)
                          //     navigate('/cart/')
                          //     }} 
                              className="buy-btn">
                              LIÊN HỆ
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )}
}))}
            </div>
          </div>
        </div>
          </div>
            </div>
          </div>
         </>
            )}
             {productId == 'womengolfclothes' && (
            <>
             <div className="row">
            <div className="col-md-6">
            <Carousel 
                showArrows
                showThumbs={true}
                showStatus={false}
                showIndicators={false}
                emulateTouch
                stopOnHover
                autoPlay
                infiniteLoop>
             <img src={images.image1} />
              <img src={images.image2} />
              <img src={images.image3} />
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={rate} />
              <div className="product-title-client">{productName.replace(/-/g, ' ')}</div>
              <div className="product-status">{status}</div>
              <div className="content__feature-text d-flex">
              {sale != '' ? (
                <>
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(price)}đ</div>
                <div className="price ml-md-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(sale)}đ</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(price)}đ</div>
              )}
                    </div>
                      <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 100}}>Kích thước: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{size}</li>
                    </ul>
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 100}}>Giới tính: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{sex}</li>
                    </ul>
                    <div className="hotline">
                      <a href="tel:012931231124">HotLine: 1094581205812</a>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        {/* <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc', fontSize: '2.5rem', height: '40px', padding: '5px'}}>THÊM VÀO GIỎ</Link>
                        </div> */}
                        <div className="col-md-12 p-0">
                        <Link to = ""className="buy-btn" style={{fontSize: '2.5rem', height: '40px', padding: '5px'}}>LIÊN HỆ</Link>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #000'}}>
              <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Kích thước</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{size}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Giới tính</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{sex}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Chất liệu</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{material}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Màu sắc:</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{color}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Thương hiệu:</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{brand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{manageNumber}</td>
                </tr>
              </table>
            </div>
            <div className="description">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginTop: 20, marginBottom: 10}}>Thông tin sản phẩm</div>
              <p>
             {content.content1}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image1}/>
             </div>
             {content.content2}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image2}/>
             </div>
             {content.content3}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image3}/>
             </div>
             {content.content4}
              </p>
            </div>
            </div>
            <div className="col-md-3">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData.map((product => {
                {product.productType == productType && (
                  <div key={product.id} className="col-6 col-md-12">
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
                          <div>{((product.price - product.saleprice) / product.price * 100).toFixed(0)}%</div>
                          </div>
                        </div>
                      </div>
                      <div style={{padding:'10px'}}>
                      <div className="d-flex justify-content-between align-items-center">
                     <StarRating rate={product.rate} />
                     <div className="d-flex justify-content-center align-items-center" style={{width: 'fit-content', height: '30px',padding: '10px', border: '1px solid green', fontSize:'1.4rem', color:'green', marginTop: '10px', borderRadius: '10px'}}>{product.productType}</div>
                      </div>
                      <div className="content__feature-name">
                        <div className="wrapper" onClick={() => handleProduct(product)}>{product.productName}</div>
                      </div>
                      <div className="content__feature-text d-md-flex justify-content-between">
                      {product.saleprice != '' ? (
                <>
                <div className="price">{Intl.NumberFormat('de-DE').format(product.saleprice)}đ</div>
                <div className="price" style={{ color: '#000', textDecoration: 'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
                </>
              ) : (
                <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
              )}
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
                          <div 
                          // onClick={() => {
                          //     addToCart(product)
                          //     navigate('/cart/')
                          //     }}
                               className="buy-btn">
                              LIÊN HỆ
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )}
}))}
            </div>
          </div>
        </div>
          </div>
            </div>
          </div>
         </>
            )}
             {productId == 'accessories' && (
            <>
             <div className="row">
            <div className="col-md-6">
            <Carousel 
                showArrows
                showThumbs={true}
                showStatus={false}
                showIndicators={false}
                emulateTouch
                stopOnHover
                autoPlay
                infiniteLoop>
              <img src={images.image1} />
              <img src={images.image2} />
              <img src={images.image3} />
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={rate} />
              <div className="product-title-client">{productName.replace(/-/g, ' ')}</div>
              <div className="product-status">{status}</div>
              <div className="content__feature-text d-flex">
              {sale != '' ? (
                <>
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(price)}đ</div>
                <div className="price ml-md-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(sale)}đ</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(price)}đ</div>
              )}
                    </div>
                    <div className="hotline">
                      <a href="tel:012931231124">HotLine: 1094581205812</a>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        {/* <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc', fontSize: '2.5rem', height: '40px', padding: '5px'}}>THÊM VÀO GIỎ</Link>
                        </div> */}
                        <div className="col-md-12 p-0">
                        <Link to = ""className="buy-btn" style={{fontSize: '2.5rem', height: '40px', padding: '5px'}}>LIÊN HỆ</Link>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #000'}}>
              <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Chất liệu</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{material}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Màu sắc:</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{color}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Thương hiệu:</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{brand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Nơi sản xuất:</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{produceLocation}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{manageNumber}</td>
                </tr>
              </table>
            </div>
            <div className="description">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginTop: 20, marginBottom: 10}}>Thông tin sản phẩm</div>
              <p>
             {content.content1}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image1}/>
             </div>
             {content.content2}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image2}/>
             </div>
             {content.content3}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image3}/>
             </div>
             {content.content4}
              </p>
            </div>
            </div>
            <div className="col-md-3">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData.map((product => {
                {product.productType == productType && (
                  <div key={product.id} className="col-6 col-md-12">
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
                          <div>{((product.price - product.saleprice) / product.price * 100).toFixed(0)}%</div>
                          </div>
                        </div>
                      </div>
                      <div style={{padding:'10px'}}>
                      <div className="d-flex justify-content-between align-items-center">
                     <StarRating rate={product.rate} />
                     <div className="d-flex justify-content-center align-items-center" style={{width: 'fit-content', height: '30px',padding: '10px', border: '1px solid green', fontSize:'1.4rem', color:'green', marginTop: '10px', borderRadius: '10px'}}>{product.productType}</div>
                      </div>
                      <div className="content__feature-name">
                        <div className="wrapper" onClick={() => handleProduct(product)}>{product.productName}</div>
                      </div>
                      <div className="content__feature-text d-md-flex justify-content-between">
                      {product.saleprice != '' ? (
                <>
                <div className="price">{Intl.NumberFormat('de-DE').format(product.saleprice)}đ</div>
                <div className="price" style={{ color: '#000', textDecoration: 'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
                </>
              ) : (
                <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
              )}
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
                          <div
                          // onClick={() => {
                          //     addToCart(product)
                          //     navigate('/cart/')
                          //     }}
                               className="buy-btn">
                              LIÊN HỆ
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )}
}))}
            </div>
          </div>
        </div>
          </div>
            </div>
          </div>
         </>
            )}
              {productId == 'golfbag' && (
            <>
             <div className="row">
            <div className="col-md-6">
            <Carousel 
                showArrows
                showThumbs={true}
                showStatus={false}
                showIndicators={false}
                emulateTouch
                stopOnHover
                autoPlay
                infiniteLoop>
              <img src={images.image1} />
              <img src={images.image2} />
              <img src={images.image3} />
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={rate} />
              <div className="product-title-client">{productName.replace(/-/g, ' ')}</div>
              <div className="product-status">{status}</div>
              <div className="content__feature-text d-flex">
              {sale != '' ? (
                <>
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(price)}đ</div>
                <div className="price ml-md-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(sale)}đ</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(price)}đ</div>
              )}
                    </div>
                    <div className="hotline">
                      <a href="tel:012931231124">HotLine: 1094581205812</a>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        {/* <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc', fontSize: '2.5rem', height: '40px', padding: '5px'}}>THÊM VÀO GIỎ</Link>
                        </div> */}
                        <div className="col-md-12 p-0">
                        <Link to = ""className="buy-btn" style={{fontSize: '2.5rem', height: '40px', padding: '5px'}}>LIÊN HỆ</Link>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #000'}}>
              <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Trọng lượng</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{weight}</td>
                </tr>
              <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Chất liệu</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{material}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Màu sắc:</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{color}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Thương hiệu:</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{brand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Nơi sản xuất:</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{produceLocation}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{manageNumber}</td>
                </tr>
              </table>
            </div>
            <div className="description">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginTop: 20, marginBottom: 10}}>Thông tin sản phẩm</div>
              <p>
             {content.content1}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image1}/>
             </div>
             {content.content2}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image}/>
             </div>
             {content.content3}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image}/>
             </div>
             {content.content4}
              </p>
            </div>
            </div>
            <div className="col-md-3">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData.map((product => {
                {product.productType == productType && (
                  <div key={product.id} className="col-6 col-md-12">
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
                          <div>{((product.price - product.saleprice) / product.price * 100).toFixed(0)}%</div>
                          </div>
                        </div>
                      </div>
                      <div style={{padding:'10px'}}>
                      <div className="d-flex justify-content-between align-items-center">
                     <StarRating rate={product.rate} />
                     <div className="d-flex justify-content-center align-items-center" style={{width: 'fit-content', height: '30px',padding: '10px', border: '1px solid green', fontSize:'1.4rem', color:'green', marginTop: '10px', borderRadius: '10px'}}>{product.productType}</div>
                      </div>
                      <div className="content__feature-name">
                        <div className="wrapper" onClick={() => handleProduct(product)}>{product.productName}</div>
                      </div>
                      <div className="content__feature-text d-md-flex justify-content-between">
                      {product.saleprice != '' ? (
                <>
                <div className="price">{Intl.NumberFormat('de-DE').format(product.saleprice)}đ</div>
                <div className="price" style={{ color: '#000', textDecoration: 'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
                </>
              ) : (
                <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
              )}
                      </div>
                      </div>
                      <div className="btn-container">
                        <div className="row pb-0">
                          {/* <div className="col-md-6 p-0">
                            <div  onClick={() => addToCart(product)}className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                              THÊM VÀO GIỎ
                            </div>
                          </div> */}
                          <div className="col-md-6 p-0">
                          <div 
                          // onClick={() => {
                          //     addToCart(product)
                          //     navigate('/cart/')
                          //     }} 
                              className="buy-btn">
                              LIÊN HỆ
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )}
}))}
            </div>
          </div>
        </div>
          </div>
            </div>
          </div>
         </>
            )}
               {productId == 'golfshoes' && (
            <>
             <div className="row">
            <div className="col-md-6">
            <Carousel 
                showArrows
                showThumbs={true}
                showStatus={false}
                showIndicators={false}
                emulateTouch
                stopOnHover
                autoPlay
                infiniteLoop>
              <img src={images} />
              <img src={images} />
              <img src={images} />
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={rate} />
              <div className="product-title-client">{productName.replace(/-/g, ' ')}</div>
              <div className="product-status">{status}</div>
              <div className="content__feature-text d-flex">
              {sale != '' ? (
                <>
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(price)}đ</div>
                <div className="price ml-md-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(sale)}đ</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(price)}đ</div>
              )}
                    </div>
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 100}}>Kích cỡ: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{size}</li>
                    </ul>
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 100}}>Giới tính: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{sex}</li>
                    </ul>
                    <div className="hotline">
                      <a href="tel:012931231124">HotLine: 1094581205812</a>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        {/* <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc', fontSize: '2.5rem', height: '40px', padding: '5px'}}>THÊM VÀO GIỎ</Link>
                        </div> */}
                        <div className="col-md-12 p-0">
                        <Link to = ""className="buy-btn" style={{fontSize: '2.5rem', height: '40px', padding: '5px'}}>LIÊN HỆ</Link>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #000'}}>
              <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Kích cỡ:</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{size}</td>
                </tr>
              <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Giới tính:</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{sex}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Loại giày:</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{productType}</td>
                </tr>
              <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Chất liệu</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{material}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Màu sắc:</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{color}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Thương hiệu:</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{brand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Nơi sản xuất:</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{produceLocation}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{manageNumber}</td>
                </tr>
              </table>
            </div>
            <div className="description">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginTop: 20, marginBottom: 10}}>Thông tin sản phẩm</div>
              <p>
             {content.content1}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image1}/>
             </div>
             {content.content2}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image2}/>
             </div>
             {content.content3}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image3}/>
             </div>
             {content.content4}
              </p>
            </div>
            </div>
            <div className="col-md-3">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
              {fetchData.map((product => {
                {product.productType == productType && (
                  <div key={product.id} className="col-6 col-md-12">
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
                          <div>{((product.price - product.saleprice) / product.price * 100).toFixed(0)}%</div>
                          </div>
                        </div>
                      </div>
                      <div style={{padding:'10px'}}>
                      <div className="d-flex justify-content-between align-items-center">
                     <StarRating rate={product.rate} />
                     <div className="d-flex justify-content-center align-items-center" style={{width: 'fit-content', height: '30px',padding: '10px', border: '1px solid green', fontSize:'1.4rem', color:'green', marginTop: '10px', borderRadius: '10px'}}>{product.productType}</div>
                      </div>
                      <div className="content__feature-name">
                        <div className="wrapper" onClick={() => handleProduct(product)}>{product.productName}</div>
                      </div>
                      <div className="content__feature-text d-md-flex justify-content-between">
                      {product.saleprice != '' ? (
                <>
                <div className="price">{Intl.NumberFormat('de-DE').format(product.saleprice)}đ</div>
                <div className="price" style={{ color: '#000', textDecoration: 'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
                </>
              ) : (
                <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
              )}
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
                          <div 
                          // onClick={() => {
                          //     addToCart(product)
                          //     navigate('/cart/')
                          //     }} 
                              className="buy-btn">
                              LIÊN HỆ
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )}
}))}
            </div>
          </div>
        </div>
          </div>
            </div>
          </div>
         </>
            )}
             {productId == 'golftraining' && (
            <>
             <div className="row">
            <div className="col-md-6">
            <Carousel 
                showArrows
                showThumbs={true}
                showStatus={false}
                showIndicators={false}
                emulateTouch
                stopOnHover
                autoPlay
                infiniteLoop>
              <img src={images.image1} />
              <img src={images.image2} />
              <img src={images.image3} />
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={rate} />
              <div className="product-title-client">{productName.replace(/-/g, ' ')}</div>
              <div className="product-status">{status}</div>
              <div className="content__feature-text d-flex">
              {sale != '' ? (
                <>
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(price)}đ</div>
                <div className="price ml-md-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(sale)}đ</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(price)}đ</div>
              )}
                    </div>
                    <div className="hotline">
                      <a href="tel:012931231124">HotLine: 1094581205812</a>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        {/* <div className="col-md-6 p-0">
                        <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc', fontSize: '2.5rem', height: '40px', padding: '5px'}}>THÊM VÀO GIỎ</Link>
                        </div> */}
                        <div className="col-md-12 p-0">
                        <Link to = ""className="buy-btn" style={{fontSize: '2.5rem', height: '40px', padding: '5px'}}>LIÊN HỆ</Link>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #000'}}>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Thương hiệu:</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{brand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Nơi sản xuất:</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{produceLocation}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #000', width: 500, fontSize: 15, padding: 5}}>{manageNumber}</td>
                </tr>
              </table>
            </div>
            <div className="description">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginTop: 20, marginBottom: 10}}>Thông tin sản phẩm</div>
              <p>
             {content.content1}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image}/>
             </div>
             {content.content2}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image}/>
             </div>
             {content.content3}
             <div className="d-flex justify-content-center" style={{marginTop: 10}}>
             <img src={images.image}/>
             </div>
             {content.content4}
              </p>
            </div>
            </div>
            <div className="col-md-3">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
              {fetchData.map((product => {
                {product.productType == productType && (
                  <div key={product.id} className="col-6 col-md-12">
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
                          <div>{((product.price - product.saleprice) / product.price * 100).toFixed(0)}%</div>
                          </div>
                        </div>
                      </div>
                      <div style={{padding:'10px'}}>
                      <div className="d-flex justify-content-between align-items-center">
                     <StarRating rate={product.rate} />
                     <div className="d-flex justify-content-center align-items-center" style={{width: 'fit-content', height: '30px',padding: '10px', border: '1px solid green', fontSize:'1.4rem', color:'green', marginTop: '10px', borderRadius: '10px'}}>{product.productType}</div>
                      </div>
                      <div className="content__feature-name">
                        <div className="wrapper" onClick={() => handleProduct(product)}>{product.productName}</div>
                      </div>
                      <div className="content__feature-text d-md-flex justify-content-between">
                      {product.saleprice != '' ? (
                <>
                <div className="price">{Intl.NumberFormat('de-DE').format(product.saleprice)}đ</div>
                <div className="price" style={{ color: '#000', textDecoration: 'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
                </>
              ) : (
                <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
              )}
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
                    <div 
                  // onClick={() => {
                  //     addToCart(product)
                  //     navigate('/cart/')
                  //     }} 
                      className="buy-btn">
                      LIÊN HỆ
                    </div>
                    </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )}
}))}
            </div>
          </div>
        </div>
          </div>
            </div>
          </div>
         </>
            )}
          <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">SẢN PHẨM TƯƠNG TỰ</div>
          <div className="container">
            <div className="row">
              {fetchData
              .filter(product => product.productId == productId)
              .map(product => (
                <div key={product.productId} className="col-6 col-md-3 p-3">
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
                        <div>{((product.price - product.saleprice) / product.price * 100).toFixed(0)}%</div>
                        </div>
                      </div>
                    </div>
                    <div style={{padding:'10px'}}>
                    <div className="d-flex justify-content-between align-items-center">
                   <StarRating rate={product.rate} />
                   <div className="d-flex justify-content-center align-items-center" style={{width: 'fit-content', height: '30px',padding: '10px', border: '1px solid green', fontSize:'1.4rem', color:'green', marginTop: '10px', borderRadius: '10px'}}>{product.productType}</div>
                    </div>
                    <div className="content__feature-name">
                      <div onClick={() => handleProduct(product)}>{product.productname}</div>
                    </div>
                    <div className="content__feature-text d-md-flex justify-content-between">
                    {product.saleprice != '' ? (
                <>
                <div className="price">{Intl.NumberFormat('de-DE').format(product.saleprice)}đ</div>
                <div className="price" style={{ color: '#000', textDecoration: 'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
                </>
              ) : (
                <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
              )}
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
                    <div 
                  // onClick={() => {
                  //     addToCart(product)
                  //     navigate('/cart/')
                  //     }} 
                      className="buy-btn">
                      LIÊN HỆ
                    </div>
                    </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ))
              }
            </div>
          </div>
          <div className="content__feature-title">SẢN PHẨM ĐÃ XEM</div>
          <div className="container">
            <div className="row">
            {productHistory.map((product, index) => (
                <div key={product.id} className="col-6 col-md-3 p-3">
                <div style={{ textDecoration: 'none'}}>
                  <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
                    <div className="content__feature-container">
                      <div
                       onClick={() => handleProduct(product)}
                        className="content__feature-img"
                        style={{
                          backgroundImage:
                          `url(${product.images})`,
                          }}
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
                   <div className="d-flex justify-content-center align-items-center" style={{width: 'fit-content', height: '30px',padding: '10px', border: '1px solid green', fontSize:'1.4rem', color:'green', marginTop: '10px', borderRadius: '10px'}}>{product.productType}</div>
                    </div>
                    <div className="content__feature-name">
                      <div className="wrapper" onClick={() => handleProduct(product)}>{product.productName}</div>
                    </div>
                    <div className="content__feature-text d-md-flex justify-content-between">
                    {product.saleprice != '' ? (
                <>
                <div className="price">{Intl.NumberFormat('de-DE').format(product.saleprice)}đ</div>
                <div className="price" style={{ color: '#000', textDecoration: 'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
                </>
              ) : (
                <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
              )}
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
                    <div 
                  // onClick={() => {
                  //     addToCart(product)
                  //     navigate('/cart/')
                  //     }} 
                      className="buy-btn">
                      LIÊN HỆ
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
          </div>
        </div>
      </div>
    </div>
  );
}