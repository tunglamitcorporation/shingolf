import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import { useEffect,  useState, useContext} from 'react';
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useLocation } from "react-router-dom";
import ProductHistoryContext from "../../ProductHistoryContext";
import { useCart } from "../../CartProvider";
import AlertComponent from "../../Alert";

export default function Feature({fetchData}) {
  const { t } = useTranslation();
  const { productName } = useParams();
  const navigate = useNavigate()
  const location = useLocation();
  const { addToCart } = useCart();
  const [show, setShow] = useState(false);
 
    useEffect(() => {
      const timer = setTimeout(() => {
        setShow(false);
      }, 1000);  
  
      return () => clearTimeout(timer);
    }, [show]);
  
  const {
    productId,
    productType,
    loft,
    stickHardType,
    size,
    color
    } = location.state || {};
    
      const [productSelect1, setProductSelect1] = useState()
      const [productSelect2, setProductSelect2] = useState()
    console.log(productSelect1, productSelect2);
    const StarRating = ({ rate }) => {
      const renderStars = (rate) => {
        const stars = [];
        for (let i = 0; i < rate; i++) {
          stars.push(
            <i
              key={i}
              style={{ fontSize: '1 rem', color: '#fec800', marginTop: 10 }}
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
  const { productHistory } = useContext(ProductHistoryContext);
  const { addProductToHistory } = useContext(ProductHistoryContext);
  const handleAddToCart = (product, productSelect1, productSelect2) => {
    addToCart(product, productSelect1, productSelect2)
    setShow(true)
  }
  const formatProductName = (name) => {
    return name.replace(/\s/g, '-');
  };
  const handleProduct = (product) => {
    addProductToHistory(product);
    const formattedProductName = formatProductName(product.productName);
    navigate(`/product/${formattedProductName}`, { state: { price: product.price, productId: product.productId, sale: product.salepriceprice, rate: product.rate, image: product.image, productType: product.productType }});
  };
  return (
    <div>
      <HelmetLayout />
      {show && (
        <AlertComponent message='Đã thêm sản phẩm vào giỏ hàng'/>
      )}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="re__breadcrumb">
              <ul className="breadcrumb__list">
                <li className="breadcrumb__item">
                  <i className="fa-solid fa-house"></i>
                  <a to="/"></a>
                </li>
                <li className="breadcrumb__item">/</li>
                <li className="breadcrumb__item">
                  <a className="breadcrumb__title" to="/product/">
                    Sản phẩm
                  </a>
                </li>
                <li className="breadcrumb__item">/</li>
                <li className="breadcrumb__item">
                  <a className="breadcrumb__title" to="/product/">
                    {productName.replace(/-/g, ' ')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="feature__characteristic">
        <div className="container">
          {fetchData.map(product => (
            <>
            {product.productName === productName.replace(/-/g, ' ') && product.productId === 'newgolfclub' && (
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
              <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image1.png`} />
              <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image2.png`} />
              <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image3.png`} />
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={product.rate} />
              <div className="product-title-client">{product.productName.replace(/-/g, ' ')}</div>
              <div className="product-status">{product.rank}</div>
              <div className="content__feature-text d-flex">
              {product.saleprice != '' ? (
                <>
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                <div className="price ml-md-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              )}
                    </div>
                      <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 80}}>Loại hàng: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{product.productType}</li>
                    </ul>
                    <ul className="d-flex pl-0 mt-3">
                      {product.loft.loft1 != '' ? (
                      <>
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 80}}>Độ Loft: </li>
                      <select 
                      style={{width: 100, height:30, fontSize: '1.4rem'}}
                      value={productSelect1 || setProductSelect1(product.loft.loft1)}
                      onChange={(e) => setProductSelect1(e.target.value)}>
                          <option value={product.loft.loft1}>{product.loft.loft1}°</option>
                          <option value={product.loft.loft2}>{product.loft.loft2}°</option>
                          <option value={product.loft.loft3}>{product.loft.loft3}°</option>
                      </select>
                      </>   
                      ) : ''}
                      {product.stickhardtype.type1 !='' ? (
                      <>
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width:80, marginLeft:20}}>Loại Cán: </li>
                      {/* <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff' }}>{product.stickhardtype}</li> */}
                      <select 
                      style={{width: 100, height:30, fontSize: '1.4rem'}}
                      value={productSelect2 || setProductSelect2(product.stickhardtype.type1)}
                      onChange={(e) => setProductSelect2(e.target.value)}>
                          <option value={product.stickhardtype.type1}>{product.stickhardtype.type1}</option>
                          <option value={product.stickhardtype.type2}>{product.stickhardtype.type2}</option>
                          <option value={product.stickhardtype.type3}>{product.stickhardtype.type3}</option>
                          {product.stickhardtype.type4 ? (<option value={product.stickhardtype.type4}>{product.stickhardtype.type4}</option>) : ''}
                          {product.stickhardtype.type5 ? (<option value={product.stickhardtype.type5}>{product.stickhardtype.type5}</option>) : ''}
                          
                      </select>
                      </>  
                      ) : ''}
                      {/* <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff' }}>{product.loft}</li> */}
                    </ul>
                    {/* <ul className="d-flex pl-0 mt-3">
                    </ul> */}
                    <div className="hotline">
                      <a href="tel:0564545545">HotLine: 0564545545</a>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                        <div className="col-md-6 p-0">
                        <div onClick={()=> handleAddToCart(product, productSelect1, productSelect2)} className="buy-btn" style={{backgroundColor:'#ccc', fontSize: '2.5rem', height: '40px', padding: '5px', cursor:'pointer'}}>THÊM VÀO GIỎ</div>
                        </div>
                        <div className="col-md-6 p-0">
                        <a href ="https://zalo.me/0564545545" target="_blank" className="buy-btn" style={{fontSize: '2.5rem', height: '40px', padding: '5px'}}>LIÊN HỆ</a>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #8f8b8b'}}>
              <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Loại gậy</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.productType}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Chiều dài</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.long}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Trọng lượng</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.weight}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Bọc đầu gậy</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.stickcover}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Phụ kiện</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.accessory}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Grip</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.grip}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Tay thuận</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.hand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Rank</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.rank}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Năm sản xuất</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.produceyear}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.managenumber}</td>
                </tr>
              </table>
            </div>
            <div className="description">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginTop: 20, marginBottom: 10}}>Thông tin sản phẩm</div>
              <p>
             {product.content.content1}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image1.png`}/>
             </div>
             {product.content.content2}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image2.png`}/>
             </div>
             {product.content.content3}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image3.png`}/>
             </div>
             {product.content.content4}
              </p>
            </div>
            </div>
            <div className="col-md-3">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData.map((product => (
              <>
                {product.productType === productType && (
                     <div key={product.productCode} className="col-6 col-md-12">
                     <div style={{ textDecoration: 'none' }}>
                       <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
                         <div className="content__feature-container">
                           <div
                            onClick={() => handleProduct(product)}
                             className="content__feature-img"
                             style={{
                               backgroundImage:
                                `url(https://shingolf.vn/image/product/image/${product.productCode}_image1.png`,
                               }}
                               title={product.productCode}
                           >
                             <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', right:0, backgroundColor: '#fec800', color: '#ff3131', fontSize:'1.4rem', fontWeight:'bold'}}>
                             <div>Sale</div>
                             <div>{((product.price - product.salepriceprice) / product.price * 100).toFixed(0)}%</div>
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
                         {product.salepriceprice != '' ? (
                   <>
                   <div className="price">{Intl.NumberFormat('de-DE').format(product.salepriceprice)}¥</div>
                   <div className="price" style={{ color: '#000', textDecoration: 'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                   </>
                 ) : (
                   <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                 )}
                         </div>
                         </div>
                         <div className="btn-container">
                           <div className="row pb-0">
                             <div className="col-md-6 p-0">
                               <div onClick={() => handleAddToCart(product)} className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                                 THÊM VÀO GIỎ
                               </div>
                             </div>
                             <div className="col-md-6 p-0">
                             <a 
                             // onClick={() => {
                             //     handleAddToCart(product)//     navigate('/cart/')
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
                )}
              </>  
)))}
            </div>
          </div>
        </div>
          </div>
            </div>
          </div>
            </>  
            )}
             {product.productName === productName.replace(/-/g, ' ') && product.productId === 'oldgolfclub' && (
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
              <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image1.png`} />
              <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image2.png`} />
              <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image3.png`} />
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={product.rate} />
              <div className="product-title-client">{product.productName.replace(/-/g, ' ')}</div>
              <div className="product-status">{product.rank}</div>
              <div className="content__feature-text d-flex">
              {product.saleprice != '' ? (
                <>
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                <div className="price ml-md-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              )}
                    </div>
                      <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 80}}>Loại hàng: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{product.productType}</li>
                    </ul>
                    <ul className="d-flex pl-0 mt-3">
                      {product.loft.loft1 != '' ? (
                        <>
                      <li 
                      style={{fontSize: '1.4rem', fontWeight: 'bold', width: 80,  marginLeft:20}}
                      value={productSelect1}
                      onChange={(e) => setProductSelect1(e.target.value || setProductSelect1(product.loft.loft1))}>Độ Loft: </li>
                      <select style={{width: 100, height:30, fontSize: '1.4rem'}}>
                          <option value={product.loft.loft1}>{product.loft.loft1}°</option>
                          <option value={product.loft.loft2}>{product.loft.loft2}°</option>
                          <option value={product.loft.loft3}>{product.loft.loft3}°</option>
                      </select>
                        </>
                      ) : ''}
                      {product.stickhardtype.type1 != '' ? (
                        <>
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 80}}>Loại Cán: </li>
                      <select 
                      style={{width: 100, height:30, fontSize: '1.4rem'}}
                      value={productSelect2}
                      onChange={(e) => setProductSelect2(e.target.value || setProductSelect2(product.stickhardtype.type1))}>
                          <option value={product.stickhardtype.type1}>{product.stickhardtype.type1}</option>
                          <option value={product.stickhardtype.type2}>{product.stickhardtype.type2}</option>
                          <option value={product.stickhardtype.type3}>{product.stickhardtype.type3}</option>
                          {product.stickhardtype.type4 ? (<option value={product.stickhardtype.type4}>{product.stickhardtype.type4}</option>) : ''}
                          {product.stickhardtype.type5 ? (<option value={product.stickhardtype.type5}>{product.stickhardtype.type5}</option>) : ''}
                      </select>
                        </>
                      ) : ''}
                      {/* <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff' }}>{product.loft}</li> */}
                    </ul>
                    {/* <ul className="d-flex pl-0 mt-3">
                     
                    </ul> */}
                    <div className="hotline">
                      <a href="tel:0564545545">HotLine: 0564545545</a>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                      <div className="col-md-6 p-0">
                        <div onClick={()=> handleAddToCart(product)} className="buy-btn" style={{backgroundColor:'#ccc', fontSize: '2.5rem', height: '40px', padding: '5px', cursor:'pointer'}}>THÊM VÀO GIỎ</div>
                        </div>
                        <div className="col-md-6 p-0">
                        <a href ="https://zalo.me/0564545545" target="_blank" className="buy-btn" style={{fontSize: '2.5rem', height: '40px', padding: '5px'}}>LIÊN HỆ</a>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #8f8b8b'}}>
              <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Loại gậy</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.productType}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Chiều dài</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.long}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Trọng lượng</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.weight}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Bọc đầu gậy</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.stickcover}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Phụ kiện</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.accessory}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Grip</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.grip}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Tay thuận</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.hand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Rank</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.rank}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Năm sản xuất</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.produceyear}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.managenumber}</td>
                </tr>
              </table>
            </div>
            <div className="description">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginTop: 20, marginBottom: 10}}>Thông tin sản phẩm</div>
              <p>
             {product.content.content1}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image1.png`}/>
             </div>
             {product.content.content2}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image2.png`}/>
             </div>
             {product.content.content3}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image3.png`}/>
             </div>
             {product.content.content4}
              </p>
            </div>
            </div>
            <div className="col-md-3">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData.map((product => (
              <>
                {product.productType === productType && (
                     <div key={product.productCode} className="col-6 col-md-12">
                     <div style={{ textDecoration: 'none' }}>
                       <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
                         <div className="content__feature-container">
                           <div
                            onClick={() => handleProduct(product)}
                             className="content__feature-img"
                             style={{
                               backgroundImage:
                                `url(https://shingolf.vn/image/product/image/${product.productCode}_image1.png`,
                               }}
                               title={product.productCode}
                           >
                             <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', right:0, backgroundColor: '#fec800', color: '#ff3131', fontSize:'1.4rem', fontWeight:'bold'}}>
                             <div>Sale</div>
                             <div>{((product.price - product.salepriceprice) / product.price * 100).toFixed(0)}%</div>
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
                         {product.salepriceprice != '' ? (
                   <>
                   <div className="price">{Intl.NumberFormat('de-DE').format(product.salepriceprice)}¥</div>
                   <div className="price" style={{ color: '#000', textDecoration: 'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                   </>
                 ) : (
                   <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                 )}
                         </div>
                         </div>
                         <div className="btn-container">
                           <div className="row pb-0">
                             <div className="col-md-6 p-0">
                               <div  onClick={() => handleAddToCart(product)} className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                                 THÊM VÀO GIỎ
                               </div>
                             </div>
                             <div className="col-md-6 p-0">
                             <a 
                             // onClick={() => {
                             //     handleAddToCart(product) // navigate('/cart/')
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
                )}
              </>
          
)))}
            </div>
          </div>
        </div>
          </div>
            </div>
          </div>
            </>  
            )}
             {product.productName === productName.replace(/-/g, ' ') && product.productId === 'grip' && (
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
              <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image1.png`} />
              <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image2.png`} />
              <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image3.png`} />
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={product.rate} />
              <div className="product-title-client">{product.productName.replace(/-/g, ' ')}</div>
              <div className="product-status">{product.rank}</div>
              <div className="content__feature-text d-flex">
              {product.saleprice != '' ? (
                <>
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                <div className="price ml-md-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              )}
                    </div>
                      <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 80}}>Loại hàng: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{product.productType}</li>
                    </ul>
                    {product.stickhardtype.type1 != '' ? (
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 80}}>Loại Cán: </li>
                      <select 
                      style={{width: 100, height:30, fontSize: '1.4rem'}}
                      value={productSelect1 || setProductSelect1(product.stickhardtype.type1)}
                      onChange={(e) => setProductSelect1(e.target.value)}>
                          <option value={product.stickhardtype.type1}>{product.stickhardtype.type1}</option>
                          <option value={product.stickhardtype.type2}>{product.stickhardtype.type2}</option>
                          <option value={product.stickhardtype.type3}>{product.stickhardtype.type3}</option>
                          {product.stickhardtype.type4 ? (<option value={product.stickhardtype.type4}>{product.stickhardtype.type4}</option>) : ''}
                          {product.stickhardtype.type5 ? (<option value={product.stickhardtype.type5}>{product.stickhardtype.type5}</option>) : ''}
                          
                      </select>
                      {/* <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff' }}>{product.loft}</li> */}
                    </ul>
                    ) : ''}
                    <div className="hotline">
                       <a href="tel:0564545545">HotLine: 0564545545</a>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                      <div className="col-md-6 p-0">
                        <div onClick={()=> handleAddToCart(product)} className="buy-btn" style={{backgroundColor:'#ccc', fontSize: '2.5rem', height: '40px', padding: '5px', cursor:'pointer'}}>THÊM VÀO GIỎ</div>
                        </div>
                        <div className="col-md-6 p-0">
                        <a href ="https://zalo.me/0564545545" target="_blank" className="buy-btn" style={{fontSize: '2.5rem', height: '40px', padding: '5px'}}>LIÊN HỆ</a>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #8f8b8b'}}>
              <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Loại cán</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.productType}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Chiều dài</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.long}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Trọng lượng</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.weight}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Hãng sản xuất:</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.brand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Nơi sản xuất:</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.producelocation}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Năm sản xuất</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.produceyear}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.managenumber}</td>
                </tr>
              </table>
            </div>
            <div className="description">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginTop: 20, marginBottom: 10}}>Thông tin sản phẩm</div>
              <p>
             {product.content.content1}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={product.images.image1}/>
             </div>
             {product.content.content2}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={product.images.image2}/>
             </div>
             {product.content.content3}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={product.images.image3}/>
             </div>
             {product.content.content4}
              </p>
            </div>
            </div>
            <div className="col-md-3">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData.map((product => (
              <>
                {product.productType === productType && (
                     <div key={product.productCode} className="col-6 col-md-12">
                     <div style={{ textDecoration: 'none' }}>
                       <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
                         <div className="content__feature-container">
                           <div
                            onClick={() => handleProduct(product)}
                             className="content__feature-img"
                             style={{
                               backgroundImage:
                                `url(https://shingolf.vn/image/product/image/${product.productCode}_image1.png`,
                               }}
                               title={product.productCode}
                           >
                             <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', right:0, backgroundColor: '#fec800', color: '#ff3131', fontSize:'1.4rem', fontWeight:'bold'}}>
                             <div>Sale</div>
                             <div>{((product.price - product.salepriceprice) / product.price * 100).toFixed(0)}%</div>
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
                         {product.salepriceprice != '' ? (
                   <>
                   <div className="price">{Intl.NumberFormat('de-DE').format(product.salepriceprice)}¥</div>
                   <div className="price" style={{ color: '#000', textDecoration: 'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                   </>
                 ) : (
                   <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                 )}
                         </div>
                         </div>
                         <div className="btn-container">
                           <div className="row pb-0">
                             <div className="col-md-6 p-0">
                               <div  onClick={() => handleAddToCart(product)} className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                                 THÊM VÀO GIỎ
                               </div>
                             </div>
                             <div className="col-md-6 p-0">
                             <a 
                             // onClick={() => {
                             //     handleAddToCart(product)                             //     navigate('/cart/')
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
                )}
              </>
             
               
)))}
            </div>
          </div>
        </div>
          </div>
            </div>
          </div>
            </>  
            )}
            {product.productName === productName.replace(/-/g, ' ') && product.productId === 'mengolfclothes' && (
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
            <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image1.png`} />
              <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image2.png`} />
              <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image3.png`} />
        </Carousel>
            </div> 
            <div className="col-md-6">
             <StarRating rate={product.rate} />
              <div className="product-title-client">{product.productName.replace(/-/g, '')}</div>
              <div className="product-status">{product.rank}</div>
              <div className="content__feature-text d-flex">
              {product.saleprice != '' ? (
                <>
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                <div className="price ml-md-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              )}
                    </div>
                    <ul className="d-flex pl-0 mt-3">
                      {product.size.size1 != '' ? (
                          <>
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 80}}>Kích thước: </li>
                      <select 
                      style={{width: 100, height:30, fontSize: '1.4rem'}}
                      value={productSelect1 || setProductSelect1(product.size.size1)}
                      onChange={(e) => setProductSelect1(e.target.value)}>
                          <option value={product.size.size1}>{product.size.size1}</option>
                          <option value={product.size.size2}>{product.size.size2}</option>
                          <option value={product.size.size3}>{product.size.size3}</option>
                          {product.size.size4 ? (<option value={product.size.size4}>{product.size.size4}</option>) : ''}
                          {product.size.size5 ? (<option value={product.size.size5}>{product.size.size5}</option>) : ''}
                      </select>
                          </>
                      ) : ''}
                      {product.color.color1 != '' ? (
                        <>
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 80, marginLeft: 20}}>Màu sắc: </li>
                      {/* <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{product.size}</li> */}
                      <select 
                      style={{width: 100, height:30, fontSize: '1.4rem'}}
                      value={productSelect2 || setProductSelect2(product.color.color1)}
                      onChange={(e) => setProductSelect2(e.target.value )}>
                          <option value={product.color.color1}>{product.color.color1}</option>
                          <option value={product.color.color2}>{product.color.color2}</option>
                          <option value={product.color.color3}>{product.color.color3}</option>
                          {product.color.color4 ? (<option value={product.color.color4}>{product.color.color4}</option>) : ''}
                          {product.color.color5 ? (<option value={product.color.color5}>{product.color.color5}</option>) : ''}
                      </select>
                        </>
                      ):''}
                      {/* <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{product.size}</li> */}
                    </ul>
                    {/* <ul className="d-flex pl-0 mt-3">
                      
                    </ul> */}
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 80}}>Giới tính: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{product.sex}</li>
                    </ul>
                    <div className="hotline">
                       <a href="tel:0564545545">HotLine: 0564545545</a>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                      <div className="col-md-6 p-0">
                        <div onClick={()=> handleAddToCart(product)} className="buy-btn" style={{backgroundColor:'#ccc', fontSize: '2.5rem', height: '40px', padding: '5px', cursor:'pointer'}}>THÊM VÀO GIỎ</div>
                        </div>
                        <div className="col-md-6 p-0">
                        <a href ="https://zalo.me/0564545545" target="_blank" className="buy-btn" style={{fontSize: '2.5rem', height: '40px', padding: '5px'}}>LIÊN HỆ</a>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #8f8b8b'}}>
              <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Kích thước</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.size.size1}, {product.size.size2}, {product.size.size3}, {product.size.size4}, {product.size.size5}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Giới tính</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.sex}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Chất liệu</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.material}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Màu sắc:</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.color.color1}, {product.color.color2}, {product.color.color3}, {product.color.color4}, {product.color.color5}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Thương hiệu:</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.brand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.managenumber}</td>
                </tr>
              </table>
            </div>
            <div className="description">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginTop: 20, marginBottom: 10}}>Thông tin sản phẩm</div>
              <p>
            {product.content.content1}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image1.png`}/>
             </div>
            {product.content.content2}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image2.png`}/>
             </div>
            {product.content.content3}
             <div className="d-flex justify-content-center" style={{marginTop: 10,height:500}}>
             <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image3.png`}/>
             </div>
            {product.content.content4}
              </p>
            </div>
            </div>
            <div className="col-md-3">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData.map((product => (
              <>
                {product.productType === productType && (
                     <div key={product.productCode} className="col-6 col-md-12">
                     <div style={{ textDecoration: 'none' }}>
                       <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
                         <div className="content__feature-container">
                           <div
                            onClick={() => handleProduct(product)}
                             className="content__feature-img"
                             style={{
                               backgroundImage:
                                `url(https://shingolf.vn/image/product/image/${product.productCode}_image1.png`,
                               }}
                               title={product.productCode}
                           >
                             <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', right:0, backgroundColor: '#fec800', color: '#ff3131', fontSize:'1.4rem', fontWeight:'bold'}}>
                             <div>Sale</div>
                             <div>{((product.price - product.salepriceprice) / product.price * 100).toFixed(0)}%</div>
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
                         {product.salepriceprice != '' ? (
                   <>
                   <div className="price">{Intl.NumberFormat('de-DE').format(product.salepriceprice)}¥</div>
                   <div className="price" style={{ color: '#000', textDecoration: 'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                   </>
                 ) : (
                   <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                 )}
                         </div>
                         </div>
                         <div className="btn-container">
                           <div className="row pb-0">
                             <div className="col-md-6 p-0">
                               <div  onClick={() => handleAddToCart(product)} className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                                 THÊM VÀO GIỎ
                               </div>
                             </div>
                             <div className="col-md-6 p-0">
                             <a 
                             // onClick={() => {
                             //     handleAddToCart(product) //     navigate('/cart/')
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
                )}
              </>
             
               
)))}
            </div>
          </div>
        </div>
          </div>
            </div>
          </div>
            </>  
            )}
             {product.productName === productName.replace(/-/g, ' ') && product.productId === 'womengolfclothes' && (
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
            <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image1.png`} />
              <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image2.png`} />
              <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image3.png`} />
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={product.rate} />
              <div className="product-title-client">{product.productName.replace(/-/g, ' ')}</div>
              <div className="product-status">{product.rank}</div>
              <div className="content__feature-text d-flex">
             {product.saleprice != '' ? (
                <>
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                <div className="price ml-md-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              )}
                    </div>
                      <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 80}}>Kích thước: </li>
                      <select 
                      style={{width: 100, height:30, fontSize: '1.4rem'}}
                      value={productSelect1 || setProductSelect1(product.size.size1)}
                      onChange={(e) => setProductSelect1(e.target.value)}>
                          <option value={product.size.size1}>{product.size.size1}</option>
                          <option value={product.size.size2}>{product.size.size2}</option>
                          <option value={product.size.size3}>{product.size.size3}</option>
                          {product.size.size4 ? (<option value={product.size.size4}>{product.size.size4}</option>) : ''}
                          {product.size.size5 ? (<option value={product.size.size5}>{product.size.size5}</option>) : ''}
                      </select>
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 80, marginLeft: 20}}>Màu sắc: </li>
                      {/* <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{product.size}</li> */}
                      <select 
                      style={{width: 100, height:30, fontSize: '1.4rem'}}
                      value={productSelect2 || setProductSelect2(product.color.color1)}
                      onChange={(e) => setProductSelect2(e.target.value) }>
                          <option value={product.color.color1}>{product.color.color1}</option>
                          <option value={product.color.color2}>{product.color.color2}</option>
                          <option value={product.color.color3}>{product.color.color3}</option>
                          {product.color.color4 ? (<option value={product.color.color4}>{product.color.color4}</option>) : ''}
                          {product.color.color5 ? (<option value={product.color.color5}>{product.color.color5}</option>) : ''}
                      </select>
                      {/* <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{product.size}</li> */}
                    </ul>
                    {/* <ul className="d-flex pl-0 mt-3">
                      
                    </ul> */}
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 80}}>Giới tính: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{product.sex}</li>
                    </ul>
                    <div className="hotline">
                       <a href="tel:0564545545">HotLine: 0564545545</a>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                      <div className="col-md-6 p-0">
                        <div onClick={()=> handleAddToCart(product)} className="buy-btn" style={{backgroundColor:'#ccc', fontSize: '2.5rem', height: '40px', padding: '5px', cursor:'pointer'}}>THÊM VÀO GIỎ</div>
                        </div>
                        <div className="col-md-6 p-0">
                        <a href ="https://zalo.me/0564545545" target="_blank" className="buy-btn" style={{fontSize: '2.5rem', height: '40px', padding: '5px'}}>LIÊN HỆ</a>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #8f8b8b'}}>
              <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Kích thước</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.size.size1}, {product.size.size2}, {product.size.size3}, {product.size.size4}, {product.size.size5}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Giới tính</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.sex}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Chất liệu</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.material}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Màu sắc:</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.color.color1}, {product.color.color2}, {product.color.color3}, {product.color.color4}, {product.color.color5}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Thương hiệu:</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.brand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.managenumber}</td>
                </tr>
              </table>
            </div>
            <div className="description">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginTop: 20, marginBottom: 10}}>Thông tin sản phẩm</div>
              <p>
            {product.content.content1}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image1.png`}/>
             </div>
            {product.content.content2}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image2.png`}/>
             </div>
            {product.content.content3}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image3.png`}/>
             </div>
            {product.content.content4}
              </p>
            </div>
            </div>
            <div className="col-md-3">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData.map((product => (
              <>
                {product.productType === productType && (
                     <div key={product.productCode} className="col-6 col-md-12">
                     <div style={{ textDecoration: 'none' }}>
                       <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
                         <div className="content__feature-container">
                           <div
                            onClick={() => handleProduct(product)}
                             className="content__feature-img"
                             style={{
                               backgroundImage:
                                `url(https://shingolf.vn/image/product/image/${product.productCode}_image1.png`,
                               }}
                               title={product.productCode}
                           >
                             <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', right:0, backgroundColor: '#fec800', color: '#ff3131', fontSize:'1.4rem', fontWeight:'bold'}}>
                             <div>Sale</div>
                             <div>{((product.price - product.salepriceprice) / product.price * 100).toFixed(0)}%</div>
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
                         {product.salepriceprice != '' ? (
                   <>
                   <div className="price">{Intl.NumberFormat('de-DE').format(product.salepriceprice)}¥</div>
                   <div className="price" style={{ color: '#000', textDecoration: 'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                   </>
                 ) : (
                   <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                 )}
                         </div>
                         </div>
                         <div className="btn-container">
                           <div className="row pb-0">
                             <div className="col-md-6 p-0">
                               <div  onClick={() => handleAddToCart(product)} className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                                 THÊM VÀO GIỎ
                               </div>
                             </div>
                             <div className="col-md-6 p-0">
                             <a 
                             // onClick={() => {
                             //     handleAddToCart(product)                             //     navigate('/cart/')
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
                )}
              </>
             
               
)))}
            </div>
          </div>
        </div>
          </div>
            </div>
          </div>
            </>  
            )}
             {product.productName === productName.replace(/-/g, ' ') && product.productId === 'accessories' && (
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
               <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image1.png`} />
              <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image2.png`} />
              <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image3.png`} />
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={product.rate} />
              <div className="product-title-client">{product.productName.replace(/-/g, ' ')}</div>
              <div className="product-status">{product.rank}</div>
              <div className="content__feature-text d-flex">
             {product.saleprice != '' ? (
                <>
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                <div className="price ml-md-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              )}
                    </div>
                    <ul className="d-flex pl-0 mt-3">
                      {product.size.size1 != '' ? (
                          <>
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 80}}>Kích thước: </li>
                      <select 
                      style={{width: 100, height:30, fontSize: '1.4rem'}}
                      value={productSelect1  || setProductSelect1(product.size.size1)}
                      onChange={(e) => setProductSelect1(e.target.value)}>
                          <option value={product.size.size1}>{product.size.size1}</option>
                          <option value={product.size.size2}>{product.size.size2}</option>
                          <option value={product.size.size3}>{product.size.size3}</option>
                          {product.size.size4 ? (<option value={product.size.size4}>{product.size.size4}</option>) : ''}
                          {product.size.size5 ? (<option value={product.size.size5}>{product.size.size5}</option>) : ''}
                      </select>
                          </>
                      ) : ''}
                      {product.color.color1 != '' ? (
                        <>
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 80, marginLeft: 20}}>Màu sắc: </li>
                      {/* <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{product.size}</li> */}
                      <select 
                      style={{width: 100, height:30, fontSize: '1.4rem'}}
                      value={productSelect2  || setProductSelect2(product.color.color1)}
                      onChange={(e) => setProductSelect2(e.target.value)}>
                          <option value={product.color.color1}>{product.color.color1}</option>
                          <option value={product.color.color2}>{product.color.color2}</option>
                          <option value={product.color.color3}>{product.color.color3}</option>
                          {product.color.color4 ? (<option value={product.color.color4}>{product.color.color4}</option>) : ''}
                          {product.color.color5 ? (<option value={product.color.color5}>{product.color.color5}</option>) : ''}
                      </select>
                        </>
                      ):''}
                      {/* <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{product.size}</li> */}
                    </ul>
                    <div className="hotline">
                       <a href="tel:0564545545">HotLine: 0564545545</a>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                      <div className="col-md-6 p-0">
                        <div onClick={()=> handleAddToCart(product)} className="buy-btn" style={{backgroundColor:'#ccc', fontSize: '2.5rem', height: '40px', padding: '5px', cursor:'pointer'}}>THÊM VÀO GIỎ</div>
                        </div>
                        <div className="col-md-6 p-0">
                        <a href ="https://zalo.me/0564545545" target="_blank" className="buy-btn" style={{fontSize: '2.5rem', height: '40px', padding: '5px'}}>LIÊN HỆ</a>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #8f8b8b'}}>
              <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Chất liệu</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.material}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Màu sắc:</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.color.color1}, {product.color.color2}, {product.color.color3}, {product.color.color4}, {product.color.color5}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Thương hiệu:</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.brand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Nơi sản xuất:</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.producelocation}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.managenumber}</td>
                </tr>
              </table>
            </div>
            <div className="description">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginTop: 20, marginBottom: 10}}>Thông tin sản phẩm</div>
              <p>
            {product.content.content1}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image1.png`}/>
             </div>
            {product.content.content2}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image2.png`}/>
             </div>
            {product.content.content3}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image3.png`}/>
             </div>
            {product.content.content4}
              </p>
            </div>
            </div>
            <div className="col-md-3">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData.map((product => (
              <>
                {product.productType === productType && (
                     <div key={product.productCode} className="col-6 col-md-12">
                     <div style={{ textDecoration: 'none' }}>
                       <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
                         <div className="content__feature-container">
                           <div
                            onClick={() => handleProduct(product)}
                             className="content__feature-img"
                             style={{
                               backgroundImage:
                                `url(https://shingolf.vn/image/product/image/${product.productCode}_image1.png`,
                               }}
                               title={product.productCode}
                           >
                             <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', right:0, backgroundColor: '#fec800', color: '#ff3131', fontSize:'1.4rem', fontWeight:'bold'}}>
                             <div>Sale</div>
                             <div>{((product.price - product.salepriceprice) / product.price * 100).toFixed(0)}%</div>
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
                         {product.salepriceprice != '' ? (
                   <>
                   <div className="price">{Intl.NumberFormat('de-DE').format(product.salepriceprice)}¥</div>
                   <div className="price" style={{ color: '#000', textDecoration: 'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                   </>
                 ) : (
                   <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                 )}
                         </div>
                         </div>
                         <div className="btn-container">
                           <div className="row pb-0">
                             <div className="col-md-6 p-0">
                               <div  onClick={() => handleAddToCart(product)} className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                                 THÊM VÀO GIỎ
                               </div>
                             </div>
                             <div className="col-md-6 p-0">
                             <a 
                             // onClick={() => {
                             //     handleAddToCart(product)                             //     navigate('/cart/')
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
                )}
              </>             
)))}
            </div>
          </div>
        </div>
          </div>
            </div>
          </div>
            </>  
            )}
             {product.productName === productName.replace(/-/g, ' ') && product.productId === 'golfbag' && (
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
               <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image1.png`} />
              <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image2.png`} />
              <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image3.png`} />
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={product.rate} />
              <div className="product-title-client">{product.productName.replace(/-/g, ' ')}</div>
              <div className="product-status">{product.rank}</div>
              <div className="content__feature-text d-flex">
             {product.saleprice != '' ? (
                <>
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                <div className="price ml-md-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              )}
                    </div>
                    <ul className="d-flex pl-0 mt-3">
                      {product.size.size1 != '' ? (
                          <>
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 80}}>Kích thước: </li>
                      <select 
                      style={{width: 100, height:30, fontSize: '1.4rem'}}
                      value={productSelect1 || setProductSelect1(product.size.size1)}
                      onChange={(e) => setProductSelect1(e.target.value)}>
                          <option value={product.size.size1}>{product.size.size1}</option>
                          <option value={product.size.size2}>{product.size.size2}</option>
                          <option value={product.size.size3}>{product.size.size3}</option>
                          {product.size.size4 ? (<option value={product.size.size4}>{product.size.size4}</option>) : ''}
                          {product.size.size5 ? (<option value={product.size.size5}>{product.size.size5}</option>) : ''}
                      </select>
                          </>
                      ) : ''}
                      {product.color.color1 != '' ? (
                        <>
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 80, marginLeft: 20}}>Màu sắc: </li>
                      {/* <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{product.size}</li> */}
                      <select 
                      style={{width: 100, height:30, fontSize: '1.4rem'}}
                      value={productSelect2 || setProductSelect2(product.color.color1)}
                      onChange={(e) => setProductSelect2(e.target.value)}>
                          <option value={product.color.color1}>{product.color.color1}</option>
                          <option value={product.color.color2}>{product.color.color2}</option>
                          <option value={product.color.color3}>{product.color.color3}</option>
                          {product.color.color4 ? (<option value={product.color.color4}>{product.color.color4}</option>) : ''}
                          {product.color.color5 ? (<option value={product.color.color5}>{product.color.color5}</option>) : ''}
                      </select>
                        </>
                      ):''}
                      {/* <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{product.size}</li> */}
                    </ul>
                    <div className="hotline">
                       <a href="tel:0564545545">HotLine: 0564545545</a>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                      <div className="col-md-6 p-0">
                        <div onClick={()=> handleAddToCart(product)} className="buy-btn" style={{backgroundColor:'#ccc', fontSize: '2.5rem', height: '40px', padding: '5px', cursor:'pointer'}}>THÊM VÀO GIỎ</div>
                        </div>
                        <div className="col-md-6 p-0">
                        <a href ="https://zalo.me/0564545545" target="_blank" className="buy-btn" style={{fontSize: '2.5rem', height: '40px', padding: '5px'}}>LIÊN HỆ</a>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #8f8b8b'}}>
              <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Trọng lượng</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.weight}</td>
                </tr>
              <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Chất liệu</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.material}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Màu sắc:</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.color.color1}, {product.color.color2}, {product.color.color3}, {product.color.color4}, {product.color.color5}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Thương hiệu:</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.brand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Nơi sản xuất:</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.producelocation}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.managenumber}</td>
                </tr>
              </table>
            </div>
            <div className="description">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginTop: 20, marginBottom: 10}}>Thông tin sản phẩm</div>
              <p>
            {product.content.content1}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image1.png`}/>
             </div>
            {product.content.content2}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image2.png`}/>
             </div>
            {product.content.content3}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image3.png`}/>
             </div>
            {product.content.content4}
              </p>
            </div>
            </div>
            <div className="col-md-3">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData.map((product => (
              <>
                {product.productType === productType && (
                     <div key={product.productCode} className="col-6 col-md-12">
                     <div style={{ textDecoration: 'none' }}>
                       <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
                         <div className="content__feature-container">
                           <div
                            onClick={() => handleProduct(product)}
                             className="content__feature-img"
                             style={{
                               backgroundImage:
                                `url(https://shingolf.vn/image/product/image/${product.productCode}_image1.png`,
                               }}
                               title={product.productCode}
                           >
                             <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', right:0, backgroundColor: '#fec800', color: '#ff3131', fontSize:'1.4rem', fontWeight:'bold'}}>
                             <div>Sale</div>
                             <div>{((product.price - product.salepriceprice) / product.price * 100).toFixed(0)}%</div>
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
                         {product.salepriceprice != '' ? (
                   <>
                   <div className="price">{Intl.NumberFormat('de-DE').format(product.salepriceprice)}¥</div>
                   <div className="price" style={{ color: '#000', textDecoration: 'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                   </>
                 ) : (
                   <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                 )}
                         </div>
                         </div>
                         <div className="btn-container">
                           <div className="row pb-0">
                             <div className="col-md-6 p-0">
                               <div  onClick={() => handleAddToCart(product)} className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                                 THÊM VÀO GIỎ
                               </div>
                             </div>
                             <div className="col-md-6 p-0">
                             <a 
                             // onClick={() => {
                             //     handleAddToCart(product) //     navigate('/cart/')
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
                )}
              </>
             
               
)))}
            </div>
          </div>
        </div>
          </div>
            </div>
          </div>
            </>  
            )}
            {product.productName === productName.replace(/-/g, ' ') && product.productId === 'golfshoes' && (
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
              <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image1.png`} />
              <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image2.png`} />
              <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image3.png`} />
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={product.rate} />
              <div className="product-title-client">{product.productName.replace(/-/g, ' ')}</div>
              <div className="product-status">{product.rank}</div>
              <div className="content__feature-text d-flex">
             {product.saleprice != '' ? (
                <>
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                <div className="price ml-md-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              )}
                    </div>
                    <ul className="d-flex pl-0 mt-3">
                      {product.size.size1 != '' ? (
                          <>
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 80}}>Kích thước: </li>
                      <select 
                      style={{width: 100, height:30, fontSize: '1.4rem'}}
                      value={productSelect1 || setProductSelect1(product.size.size1)}
                      onChange={(e) => setProductSelect1(e.target.value)}>
                          <option value={product.size.size1}>{product.size.size1}</option>
                          <option value={product.size.size2}>{product.size.size2}</option>
                          <option value={product.size.size3}>{product.size.size3}</option>
                          {product.size.size4 ? (<option value={product.size.size4}>{product.size.size4}</option>) : ''}
                          {product.size.size5 ? (<option value={product.size.size5}>{product.size.size5}</option>) : ''}
                      </select>
                          </>
                      ) : ''}
                      {product.color.color1 != '' ? (
                        <>
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 80, marginLeft: 20}}>Màu sắc: </li>
                      {/* <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{product.size}</li> */}
                      <select 
                      style={{width: 100, height:30, fontSize: '1.4rem'}}
                      value={productSelect2}
                      onChange={(e) => setProductSelect2(e.target.value || setProductSelect2(product.color.color2))}>
                          <option value={product.color.color1}>{product.color.color1}</option>
                          <option value={product.color.color2}>{product.color.color2}</option>
                          <option value={product.color.color3}>{product.color.color3}</option>
                          {product.color.color4 ? (<option value={product.color.color4}>{product.color.color4}</option>) : ''}
                          {product.color.color5 ? (<option value={product.color.color5}>{product.color.color5}</option>) : ''}
                      </select>
                        </>
                      ):''}
                      {/* <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{product.size}</li> */}
                    </ul>
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 80}}>Giới tính: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff', width:100 }}>{product.sex}</li>
                    </ul>
                    <div className="hotline">
                       <a href="tel:0564545545">HotLine: 0564545545</a>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                      <div className="col-md-6 p-0">
                        <div onClick={()=> handleAddToCart(product)} className="buy-btn" style={{backgroundColor:'#ccc', fontSize: '2.5rem', height: '40px', padding: '5px', cursor:'pointer'}}>THÊM VÀO GIỎ</div>
                        </div>
                        <div className="col-md-6 p-0">
                        <a href ="https://zalo.me/0564545545" target="_blank" className="buy-btn" style={{fontSize: '2.5rem', height: '40px', padding: '5px'}}>LIÊN HỆ</a>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #8f8b8b'}}>
              <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Kích cỡ:</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.size.size1}, {product.size.size2}, {product.size.size3}, {product.size.size4}, {product.size.size5}</td>
                </tr>
              <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Giới tính:</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.sex}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Loại giày:</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.productType}</td>
                </tr>
              <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Chất liệu</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.material}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Màu sắc:</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.color.color1}, {product.color.color2}, {product.color.color3}, {product.color.color4}, {product.color.color5}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Thương hiệu:</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.brand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Nơi sản xuất:</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.producelocation}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.managenumber}</td>
                </tr>
              </table>
            </div>
            <div className="description">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginTop: 20, marginBottom: 10}}>Thông tin sản phẩm</div>
              <p>
            {product.content.content1}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image1.png`}/>
             </div>
            {product.content.content2}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image2.png`}/>
             </div>
            {product.content.content3}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image3.png`}/>
             </div>
            {product.content.content4}
              </p>
            </div>
            </div>
            <div className="col-md-3">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData.map((product => (
              <>
                {product.productType === productType && (
                     <div key={product.productCode} className="col-6 col-md-12">
                     <div style={{ textDecoration: 'none' }}>
                       <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
                         <div className="content__feature-container">
                           <div
                            onClick={() => handleProduct(product)}
                             className="content__feature-img"
                             style={{
                               backgroundImage:
                                `url(https://shingolf.vn/image/product/image/${product.productCode}_image1.png`,
                               }}
                               title={product.productCode}
                           >
                             <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', right:0, backgroundColor: '#fec800', color: '#ff3131', fontSize:'1.4rem', fontWeight:'bold'}}>
                             <div>Sale</div>
                             <div>{((product.price - product.salepriceprice) / product.price * 100).toFixed(0)}%</div>
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
                         {product.salepriceprice != '' ? (
                   <>
                   <div className="price">{Intl.NumberFormat('de-DE').format(product.salepriceprice)}¥</div>
                   <div className="price" style={{ color: '#000', textDecoration: 'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                   </>
                 ) : (
                   <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                 )}
                         </div>
                         </div>
                         <div className="btn-container">
                           <div className="row pb-0">
                             <div className="col-md-6 p-0">
                               <div  onClick={() => handleAddToCart(product)} className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                                 THÊM VÀO GIỎ
                               </div>
                             </div>
                             <div className="col-md-6 p-0">
                             <a 
                             // onClick={() => {
                             //     handleAddToCart(product)                             //     navigate('/cart/')
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
                )}
              </>
             
               
)))}
            </div>
          </div>
        </div>
          </div>
            </div>
          </div>
            </>  
            )}
              {product.productName === productName.replace(/-/g, ' ') && product.productId === 'golftraining' && (
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
              <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image1.png`} />
              <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image2.png`} />
              <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image3.png`} />
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={product.rate} />
              <div className="product-title-client">{product.productName.replace(/-/g, ' ')}</div>
              <div className="product-status">{product.rank}</div>
              <div className="content__feature-text d-flex">
             {product.saleprice != '' ? (
                <>
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                <div className="price ml-md-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              )}
                    </div>
                    <div className="hotline">
                       <a href="tel:0564545545">HotLine: 0564545545</a>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                      <div className="col-md-6 p-0">
                        <div onClick={()=> handleAddToCart(product)} className="buy-btn" style={{backgroundColor:'#ccc', fontSize: '2.5rem', height: '40px', padding: '5px', cursor:'pointer'}}>THÊM VÀO GIỎ</div>
                        </div>
                        <div className="col-md-6 p-0">
                        <a href ="https://zalo.me/0564545545" target="_blank" className="buy-btn" style={{fontSize: '2.5rem', height: '40px', padding: '5px'}}>LIÊN HỆ</a>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #8f8b8b'}}>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Thương hiệu:</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.brand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Nơi sản xuất:</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.producelocation}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #8f8b8b', width: 500, fontSize: 15, padding: 5}}>{product.managenumber}</td>
                </tr>
              </table>
            </div>
            <div className="description">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginTop: 20, marginBottom: 10}}>Thông tin sản phẩm</div>
              <p>
            {product.content.content1}
             <div className="d-flex justify-content-center" style={{marginTop: 10, height:200}}>
             <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image1.png`}/>
             </div>
            {product.content.content2}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image2.png`}/>
             </div>
            {product.content.content3}
            <div className="d-flex justify-content-center" style={{marginTop: 10, height:500}}>
             <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/image/product/image/${product.productCode}_image3.png`}/>
             </div>
            {product.content.content4}
              </p>
            </div>
            </div>
            <div className="col-md-3">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData.map((product => (
              <>
                {product.productType === productType && (
                     <div key={product.productCode} className="col-6 col-md-12">
                     <div style={{ textDecoration: 'none' }}>
                       <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
                         <div className="content__feature-container">
                           <div
                            onClick={() => handleProduct(product)}
                             className="content__feature-img"
                             style={{
                               backgroundImage:
                                `url(https://shingolf.vn/image/product/image/${product.productCode}_image1.png`,
                               }}
                               title={product.productCode}
                           >
                             <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', right:0, backgroundColor: '#fec800', color: '#ff3131', fontSize:'1.4rem', fontWeight:'bold'}}>
                             <div>Sale</div>
                             <div>{((product.price - product.salepriceprice) / product.price * 100).toFixed(0)}%</div>
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
                         {product.salepriceprice != '' ? (
                   <>
                   <div className="price">{Intl.NumberFormat('de-DE').format(product.salepriceprice)}¥</div>
                   <div className="price" style={{ color: '#000', textDecoration: 'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                   </>
                 ) : (
                   <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                 )}
                         </div>
                         </div>
                         <div className="btn-container">
                           <div className="row pb-0">
                             <div className="col-md-6 p-0">
                               <div  onClick={() => handleAddToCart(product)} className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                                 THÊM VÀO GIỎ
                               </div>
                             </div>
                             <div className="col-md-6 p-0">
                             <a 
                             // onClick={() => {
                             //     handleAddToCart(product)                             //     navigate('/cart/')
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
                )}
              </>             
)))}
            </div>
          </div>
        </div>
          </div>
            </div>
          </div>
            </>  
            )}
         </>
          ))
          }
     
          <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">SẢN PHẨM TƯƠNG TỰ</div>
          <div className="container">
            <div className="row">
              {fetchData
              .filter(product => product.productId === productId)
              .map(product => (
                <div key={product.productCode} className="col-6 col-md-3 p-3">
                <div style={{ textDecoration: 'none' }}>
                  <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
                    <div className="content__feature-container">
                      <div
                       onClick={() => handleProduct(product)}
                        className="content__feature-img"
                        style={{
                          backgroundImage:
                           `url(https://shingolf.vn/image/product/image/${product.productCode}_image1.png`,
                          }}
                      >
                        <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', right:0, backgroundColor: '#fec800', color: '#ff3131', fontSize:'1.4rem', fontWeight:'bold'}}>
                        <div>Sale</div>
                        <div>{((product.price - product.salepriceprice) / product.price * 100).toFixed(0)}%</div>
                        </div>
                      </div>
                    </div>
                    <div style={{padding:'10px'}}>
                    <div className="d-flex justify-content-between align-items-center">
                   <StarRating rate={product.rate} />
                   <div className="d-flex justify-content-center align-items-center" style={{padding: 5, border: '1px solid green', fontSize:'1rem', color:'green', marginTop: '10px', borderRadius: '10px'}}>{product.productType}</div>
                    </div>
                    <div className="content__feature-name">
                      <div className="wrapper" onClick={() => handleProduct(product)}>{product.productName}</div>
                    </div>
                    <div className="content__feature-text d-md-flex justify-content-between">
                    {product.salepriceprice != '' ? (
                <>
                <div className="price">{Intl.NumberFormat('de-DE').format(product.salepriceprice)}¥</div>
                <div className="price" style={{ color: '#000', textDecoration: 'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                </>
              ) : (
                <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              )}
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
              ))
              }
            </div>
          </div>
          <div className="content__feature-title">SẢN PHẨM ĐÃ XEM</div>
          <div className="container">
            <div className="row">
            {productHistory.map((product, index) => (
                <div key={product.productCode} className="col-6 col-md-3 p-3">
                <div style={{ textDecoration: 'none'}}>
                  <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
                    <div className="content__feature-container">
                      <div
                       onClick={() => handleProduct(product)}
                        className="content__feature-img"
                        style={{
                          backgroundImage:
                          `url(https://shingolf.vn/image/product/image/${product.productCode}_image1.png`,
                          }}
                      >
                        <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', right:0, backgroundColor: '#fec800', color: '#ff3131', fontSize:'1.4rem', fontWeight:'bold'}}>
                        <div>Sale</div>
                        <div>{((product.price - product.salepriceprice) / product.price * 100).toFixed(0)}%</div>
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
                    {product.salepriceprice != '' ? (
                <>
                <div className="price">{Intl.NumberFormat('de-DE').format(product.salepriceprice)}¥</div>
                <div className="price" style={{ color: '#000', textDecoration: 'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                </>
              ) : (
                <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              )}
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
          </div>
        </div>
      </div>
    </div>
  );
}

