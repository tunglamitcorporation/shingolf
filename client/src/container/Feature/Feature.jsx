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
    navigate(`/product/${formattedProductName}`, { state: { price: product.price, productId: product.productId, sale: product.saleprice, rate: product.rate, image: product.image, productType: product.productType }});
  };
  const [parsedSizes, setParsedSizes] = useState({});

  useEffect(() => {
    // Initialize the state with parsed values
    const initialParsedSizes = fetchData.reduce((acc, product) => {
      if (product.size) {
        acc[product.productName] = Object.keys(product.size).reduce((sizes, key) => {
          const [size, heightRange, weightRange] = product.size[key].split(' ');
          sizes[key] = { size, heightRange, weightRange };
          return sizes;
        }, {});
      }
      return acc;
    }, {});
    setParsedSizes(initialParsedSizes);
  }, [fetchData]);

  return(
    <div className="home-container">
      <HelmetLayout title={`Shin Golf  | ${productName.replace(/-/g, ' ')}`} />
      {show && (
        <AlertComponent message='Đã thêm sản phẩm vào giỏ hàng'/>
      )}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="re__breadcrumb">
              <ul className="breadcrumb__list">
                <li className="breadcrumb__item">
                  <a href="/">
                  <i className="fa-solid fa-house"></i>
                  </a>
                </li>
                <li className="breadcrumb__item">/</li>
                <li className="breadcrumb__item">
                  <a className="breadcrumb__title" href="/product-list/">
                    Sản phẩm
                  </a>
                </li>
                <li className="breadcrumb__item">/</li>
                <li className="breadcrumb__item">
                  <a className="breadcrumb__title" href={`/product/${productName}`}>
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
          {fetchData.map(product => {
            const { size1, size2, size3, size4, size5 } = product.size;
            const {loft1, loft2, loft3, loft4, loft5} = product.loft
            const {type1, type2, type3, type4, type5} = product.stickhardtype
            const {color1, color2, color3, color4, color5} = product.color
            const sizeString = [size1, size2, size3, size4, size5].filter(size => size).join(', ');
            const loftString = [loft1, loft2, loft3, loft4, loft5].filter(loft => loft).join(', ');
            const typeString = [type1, type2, type3, type4, type5].filter(stickhardtype => stickhardtype).join(', ');
            const colorString = [color1, color2, color3, color4, color5].filter(color => color).join(', ')
            return(
            <>
            {product.productName === productName.replace(/-/g, ' ') && product.productId === 'newgolfclub' && (
            <>
             <div className="row">
            <div className="col-md-6">
            <Carousel 
                showArrows
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                emulateTouch
                stopOnHover
                autoPlay
                infiniteLoop>
                  {product.images.map(item => (
                    <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/${item}`} />
                  ))}
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={product.rate} />
              <div className="product-title-client">{product.productName.replace(/-/g, ' ')}</div>
              {product.brand !='' ? 
              <div className="product-status">{product.brand}</div>
              :''}
              <div className="content__feature-text d-flex">
              {product.saleprice > 0 ? (
                <>
                 <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                 <div className="price ml-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                <div className="sale">{((product.price - product.saleprice) / product.price * 100).toFixed(0)}% OFF</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem', color:'#000'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              )}
                    </div>
                      <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 100,marginRight: 10}}>Loại hàng: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff',  width: 100 }}>{product.productType}</li>
                    </ul>
                    <ul className="d-flex pl-0 mt-3">
                      {product.loft.loft1 != '' ? (
                      <>
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 100,marginRight: 10}}>Độ Loft: </li>
                      <select 
                      style={{width: 'fit-content', height:30, fontSize: '1.4rem'}}
                      value={productSelect1 || setProductSelect1(product.loft.loft1)}
                      onChange={(e) => setProductSelect1(e.target.value)}>
                          <option value={product.loft.loft1}>{product.loft.loft1}°</option>
                          {product.loft.loft2 ? <option value={product.loft.loft2}>{product.loft.loft2}°</option> : '' }
                         {product.loft.loft3 ? <option value={product.loft.loft3}>{product.loft.loft3}°</option> : ''} 
                         {product.loft.loft4 ? <option value={product.loft.loft4}>{product.loft.loft4}°</option> : '' }
                         {product.loft.loft5? <option value={product.loft.loft5}>{product.loft.loft5}°</option> : ''} 
                         {product.loft.loft6? <option value={product.loft.loft6}>{product.loft.loft6}°</option> : ''} 
                         {product.loft.loft7? <option value={product.loft.loft7}>{product.loft.loft7}°</option> : ''} 
                         {product.loft.loft8? <option value={product.loft.loft8}>{product.loft.loft8}°</option> : ''} 
                         {product.loft.loft9? <option value={product.loft.loft9}>{product.loft.loft9}°</option> : ''} 
                         {product.loft.loft10? <option value={product.loft.loft10}>{product.loft.loft10}°</option> : ''} 
                         {product.loft.loft11? <option value={product.loft.loft11}>{product.loft.loft11}°</option> : ''} 
                         {product.loft.loft12? <option value={product.loft.loft12}>{product.loft.loft12}°</option> : ''} 
                      </select>
                      </>   
                      ) : ''}
                      {product.stickhardtype.type1 !='' ? (
                      <>
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 100, marginLeft: product.loft.loft1 != '' ? 20 : 0,marginRight: 10}}>Loại Cán: </li>
                      <select 
                      style={{width: 'fit-content', height:30, fontSize: '1.4rem'}}
                      value={productSelect2 || setProductSelect2(product.stickhardtype.type1)}
                      onChange={(e) => setProductSelect2(e.target.value)}>
                          <option value={product.stickhardtype.type1}>{product.stickhardtype.type1}</option>
                          {product.stickhardtype.type2  ? <option value={product.stickhardtype.type2}>{product.stickhardtype.type2}</option>:''} 
                          {product.stickhardtype.type3  ? <option value={product.stickhardtype.type3}>{product.stickhardtype.type3}</option> :''}
                          {product.stickhardtype.type4 ? <option value={product.stickhardtype.type4}>{product.stickhardtype.type4}</option> : ''}
                          {product.stickhardtype.type6 ? <option value={product.stickhardtype.type5}>{product.stickhardtype.type5}</option> : ''}
                          {product.stickhardtype.type7 ? <option value={product.stickhardtype.type6}>{product.stickhardtype.type6}</option> : ''}
                          {product.stickhardtype.type8 ? <option value={product.stickhardtype.type7}>{product.stickhardtype.type7}</option> : ''}
                          {product.stickhardtype.type9 ? <option value={product.stickhardtype.type8}>{product.stickhardtype.type8}</option> : ''}
                          {product.stickhardtype.type10 ? <option value={product.stickhardtype.typ9}>{product.stickhardtype.type9}</option> : ''}
                          {product.stickhardtype.type11 ? <option value={product.stickhardtype.type11}>{product.stickhardtype.type11}</option> : ''}
                          {product.stickhardtype.type12 ? <option value={product.stickhardtype.type12}>{product.stickhardtype.type12}</option> : ''}
                          
                      </select>
                      </>  
                      ) : ''}
                    </ul>
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
            <div className="col-md-10">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #8f8b8b'}}>
              <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Loại gậy</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.productType}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Độ loft</th>
                {loftString && (
                  <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{loftString}</td>
                )}
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Độ cứng</th>
                {typeString && (
                  <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{typeString}</td>
                )}
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Chiều dài</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.long}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Trọng lượng</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.weight}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Bọc đầu gậy</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.stickcover}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Phụ kiện</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.accessory}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Grip</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.grip}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Tay thuận</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.hand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Rank</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.rank}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Năm sản xuất</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.produceyear}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.managenumber}</td>
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
            <div className="col-md-2">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData
            .slice(1,5)
            .map((product => (
              <>
                {product.productType === productType && (
                      <div key={product.productId} className="col-md-12 p-3">
                      <div style={{ textDecoration: 'none' }}>
                        <div className="content__feature-item product-container" style={{overflow: 'hidden', height: '400px'}}>
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
                            <div className="price mr-3">{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                            <div className="price" style={{ color: '#000', textDecoration:'line-through' }}>{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                          </div>
                          ): (
                            <div className="content__feature-text d-flex">
                            <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                          </div>
                          )}
                          </div>
                                   <div className="btn-container mt-3" style={{position:'absolute', bottom:0, width: '100%'}}>
                                    <div onClick={() => handleAddToCart(product)} className="buy-btn">
                                      THÊM VÀO GIỎ
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
              {product.images.map(item => (
                    <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/${item}`} />
                  ))}
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={product.rate} />
              <div className="product-title-client">{product.productName.replace(/-/g, ' ')}</div>
              <div className="product-status">{product.brand}</div>
              <div className="content__feature-text d-flex">
              {product.saleprice > 0 ? (
                <>
                 <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                 <div className="price ml-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                <div className="sale">{((product.price - product.saleprice) / product.price * 100).toFixed(0)}% OFF</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem', color:'#000'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              )}
                    </div>
                      <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 100, marginRight: 10}}>Loại hàng: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff',  width: 100 }}>{product.productType}</li>
                    </ul>
                    <ul className="d-flex pl-0 mt-3">
                      {product.loft.loft1 != '' ? (
                        <>
                      <li 
                      style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 100,marginRight: 10}}>Độ Loft: </li>
                      <select style={{ width: 'fit-content', height:30, fontSize: '1.4rem'}} 
                       value={productSelect1}
                       onChange={(e) => setProductSelect1(e.target.value || setProductSelect1(product.loft.loft1))}>
                          <option value={product.loft.loft1}>{product.loft.loft1}°</option>
                          {product.loft.loft2 ? <option value={product.loft.loft2}>{product.loft.loft2}°</option> : '' }
                         {product.loft.loft3 ? <option value={product.loft.loft3}>{product.loft.loft3}°</option> : ''} 
                         {product.loft.loft4 ? <option value={product.loft.loft4}>{product.loft.loft4}°</option> : '' }
                         {product.loft.loft5? <option value={product.loft.loft5}>{product.loft.loft5}°</option> : ''} 
                         {product.loft.loft6? <option value={product.loft.loft6}>{product.loft.loft6}°</option> : ''} 
                         {product.loft.loft7? <option value={product.loft.loft7}>{product.loft.loft7}°</option> : ''} 
                         {product.loft.loft8? <option value={product.loft.loft8}>{product.loft.loft8}°</option> : ''} 
                         {product.loft.loft9? <option value={product.loft.loft9}>{product.loft.loft9}°</option> : ''} 
                         {product.loft.loft10? <option value={product.loft.loft10}>{product.loft.loft10}°</option> : ''} 
                         {product.loft.loft11? <option value={product.loft.loft11}>{product.loft.loft11}°</option> : ''} 
                         {product.loft.loft12? <option value={product.loft.loft12}>{product.loft.loft12}°</option> : ''} 
                      </select>
                        </>
                      ) : ''}
                      {product.stickhardtype.type1 != '' ? (
                        <>
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 100,  marginLeft: product.loft.loft1 != '' ? 20 : 0, marginRight: 10}}>Loại Cán: </li>
                      <select 
                      style={{ width: 'fit-content', height:30, fontSize: '1.4rem'}}
                      value={productSelect2}
                      onChange={(e) => setProductSelect2(e.target.value || setProductSelect2(product.stickhardtype.type1))}>
                          <option value={product.stickhardtype.type1}>{product.stickhardtype.type1}</option>
                          {product.stickhardtype.type2  ? <option value={product.stickhardtype.type2}>{product.stickhardtype.type2}</option>:''} 
                          {product.stickhardtype.type3  ? <option value={product.stickhardtype.type3}>{product.stickhardtype.type3}</option> :''}
                          {product.stickhardtype.type4 ? <option value={product.stickhardtype.type4}>{product.stickhardtype.type4}</option> : ''}
                          {product.stickhardtype.type6 ? <option value={product.stickhardtype.type5}>{product.stickhardtype.type5}</option> : ''}
                          {product.stickhardtype.type7 ? <option value={product.stickhardtype.type6}>{product.stickhardtype.type6}</option> : ''}
                          {product.stickhardtype.type8 ? <option value={product.stickhardtype.type7}>{product.stickhardtype.type7}</option> : ''}
                          {product.stickhardtype.type9 ? <option value={product.stickhardtype.type8}>{product.stickhardtype.type8}</option> : ''}
                          {product.stickhardtype.type10 ? <option value={product.stickhardtype.typ9}>{product.stickhardtype.type9}</option> : ''}
                          {product.stickhardtype.type11 ? <option value={product.stickhardtype.type11}>{product.stickhardtype.type11}</option> : ''}
                          {product.stickhardtype.type12 ? <option value={product.stickhardtype.type12}>{product.stickhardtype.type12}</option> : ''}
                      </select>
                        </>
                      ) : ''}
                    </ul>
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
            <div className="col-md-10">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #8f8b8b'}}>
              <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Loại gậy</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.productType}</td>
                </tr>
                 <tr>
                {loftString && (
                  <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{loftString}</td>
                )}
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Độ cứng</th>
                {typeString && (
                  <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{typeString}</td>
                )}
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Chiều dài</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.long}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Trọng lượng</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.weight}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Bọc đầu gậy</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.stickcover}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Phụ kiện</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.accessory}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Grip</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.grip}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Tay thuận</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.hand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Rank</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.rank}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Năm sản xuất</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.produceyear}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.managenumber}</td>
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
            <div className="col-md-2">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData
            .slice(1,5)
            .map((product => (
              <>
                {product.productType === productType && (
                      <div key={product.productId} className="col-md-12 p-3">
                      <div style={{ textDecoration: 'none' }}>
                        <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
                        {product.saleprice > 0 ? (
                              <div className="d-flex flex-column justify-content-center align-items-center sale-badge ml-5">
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
                            <div className="price mr-3">{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                            <div className="price" style={{ color: '#000', textDecoration:'line-through' }}>{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                          </div>
                          ): (
                            <div className="content__feature-text d-flex">
                            <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                          </div>
                          )}
                          </div>
                                   <div className="btn-container mt-3" style={{position:'absolute', bottom:0, width: '100%'}}>
                                    <div onClick={() => handleAddToCart(product)} className="buy-btn">
                                      THÊM VÀO GIỎ
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
             {product.productName === productName.replace(/-/g, ' ') && product.productId === 'golfset' && (
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
             {product.images.map(item => (
                    <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/${item}`} />
                  ))}
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={product.rate} />
              <div className="product-title-client">{product.productName.replace(/-/g, ' ')}</div>
              <div className="product-status">{product.brand}</div>
              <div className="content__feature-text d-flex">
              {product.saleprice > 0 ? (
                <>
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                <div className="price ml-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                <div className="sale ml-5">{((product.price - product.saleprice) / product.price * 100).toFixed(0)}% OFF</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem', color:'#000'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              )}
                    </div>
                      <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 100, marginRight: 10}}>Loại hàng: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff',  width: 100 }}>{product.productType}</li>
                    </ul>
                    <ul className="d-flex pl-0 mt-3">
                      {product.loft.loft1 != '' ? (
                        <>
                      <li 
                      style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 100,marginRight: 10}}>Độ Loft: </li>
                      <select style={{ width: 'fit-content', height:30, fontSize: '1.4rem'}}
                      value={productSelect1}
                      onChange={(e) => setProductSelect1(e.target.value || setProductSelect1(product.loft.loft1))}>
                          <option value={product.loft.loft1}>{product.loft.loft1}°</option>
                          {product.loft.loft2 ? <option value={product.loft.loft2}>{product.loft.loft2}°</option> : '' }
                         {product.loft.loft3 ? <option value={product.loft.loft3}>{product.loft.loft3}°</option> : ''} 
                         {product.loft.loft4 ? <option value={product.loft.loft4}>{product.loft.loft4}°</option> : '' }
                         {product.loft.loft5? <option value={product.loft.loft5}>{product.loft.loft5}°</option> : ''} 
                         {product.loft.loft6? <option value={product.loft.loft6}>{product.loft.loft6}°</option> : ''} 
                         {product.loft.loft7? <option value={product.loft.loft7}>{product.loft.loft7}°</option> : ''} 
                         {product.loft.loft8? <option value={product.loft.loft8}>{product.loft.loft8}°</option> : ''} 
                         {product.loft.loft9? <option value={product.loft.loft9}>{product.loft.loft9}°</option> : ''} 
                         {product.loft.loft10? <option value={product.loft.loft10}>{product.loft.loft10}°</option> : ''} 
                         {product.loft.loft11? <option value={product.loft.loft11}>{product.loft.loft11}°</option> : ''} 
                         {product.loft.loft12? <option value={product.loft.loft12}>{product.loft.loft12}°</option> : ''} 
                      </select>
                        </>
                      ) : ''}
                      {product.stickhardtype.type1 != '' ? (
                        <>
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 100, marginLeft: product.loft.loft1 != '' ? 20 : 0, marginRight: 10}}>Loại Cán: </li>
                      <select 
                      style={{ width: 'fit-content', height:30, fontSize: '1.4rem'}}
                      value={productSelect2}
                      onChange={(e) => setProductSelect2(e.target.value || setProductSelect2(product.stickhardtype.type1))}>
                          <option value={product.stickhardtype.type1}>{product.stickhardtype.type1}</option>
                          {product.stickhardtype.type2  ? <option value={product.stickhardtype.type2}>{product.stickhardtype.type2}</option>:''} 
                          {product.stickhardtype.type3  ? <option value={product.stickhardtype.type3}>{product.stickhardtype.type3}</option> :''}
                          {product.stickhardtype.type4 ? <option value={product.stickhardtype.type4}>{product.stickhardtype.type4}</option> : ''}
                          {product.stickhardtype.type6 ? <option value={product.stickhardtype.type5}>{product.stickhardtype.type5}</option> : ''}
                          {product.stickhardtype.type7 ? <option value={product.stickhardtype.type6}>{product.stickhardtype.type6}</option> : ''}
                          {product.stickhardtype.type8 ? <option value={product.stickhardtype.type7}>{product.stickhardtype.type7}</option> : ''}
                          {product.stickhardtype.type9 ? <option value={product.stickhardtype.type8}>{product.stickhardtype.type8}</option> : ''}
                          {product.stickhardtype.type10 ? <option value={product.stickhardtype.typ9}>{product.stickhardtype.type9}</option> : ''}
                          {product.stickhardtype.type11 ? <option value={product.stickhardtype.type11}>{product.stickhardtype.type11}</option> : ''}
                          {product.stickhardtype.type12 ? <option value={product.stickhardtype.type12}>{product.stickhardtype.type12}</option> : ''}
                      </select>
                        </>
                      ) : ''}
                    </ul>
                    <div className="hotline">
                      <a href="tel:0564545545">HotLine: 0564545545</a>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                      <div className="col-md-6 p-0">
                        <div onClick={()=> handleAddToCart(product,  productSelect1, productSelect2)} className="buy-btn" style={{backgroundColor:'#ccc', fontSize: '2.5rem', height: '40px', padding: '5px', cursor:'pointer'}}>THÊM VÀO GIỎ</div>
                        </div>
                        <div className="col-md-6 p-0">
                        <a href ="https://zalo.me/0564545545" target="_blank" className="buy-btn" style={{fontSize: '2.5rem', height: '40px', padding: '5px'}}>LIÊN HỆ</a>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #8f8b8b'}}>
              <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Loại gậy</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.productType}</td>
                </tr>
                 <tr>
                {loftString && (
                  <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{loftString}</td>
                )}
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Độ cứng</th>
                {typeString && (
                  <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{typeString}</td>
                )}
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Chiều dài</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.long}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Trọng lượng</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.weight}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Bọc đầu gậy</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.stickcover}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Phụ kiện</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.accessory}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Grip</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.grip}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Tay thuận</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.hand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Rank</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.rank}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Năm sản xuất</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.produceyear}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.managenumber}</td>
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
            <div className="col-md-2">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData
            .slice(1,5)
            .map((product => (
              <>
                {product.productType === productType && (
                      <div key={product.productId} className="col-md-12 p-3">
                      <div style={{ textDecoration: 'none' }}>
                        <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
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
                                   <div className="btn-container mt-3" style={{position:'absolute', bottom:0, width: '100%'}}>
                                    <div onClick={() => handleAddToCart(product)} className="buy-btn">
                                      THÊM VÀO GIỎ
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
              {product.images.map(item => (
                    <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/${item}`} />
                  ))}
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={product.rate} />
              <div className="product-title-client">{product.productName.replace(/-/g, ' ')}</div>
              <div className="product-status">{product.brand}</div>
              <div className="content__feature-text d-flex">
              {product.saleprice > 0 ? (
                <>
                  <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                  <div className="price ml-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                <div className="sale ml-5">{((product.price - product.saleprice) / product.price * 100).toFixed(0)}% OFF</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem', color:'#000'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              )}
                    </div>
                      <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 100,marginRight: 10}}>Loại hàng: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff',  width: 100 }}>{product.productType}</li>
                    </ul>
                    {product.stickhardtype.type1 != '' ? (
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 100, marginRight: 10}}>Loại Cán: </li>
                      <select 
                      style={{width: 'fit-content', height:30, fontSize: '1.4rem'}}
                      value={productSelect1 || setProductSelect1(product.stickhardtype.type1)}
                      onChange={(e) => setProductSelect1(e.target.value)}>
                          <option value={product.stickhardtype.type1}>{product.stickhardtype.type1}</option>
                          {product.stickhardtype.type2  ? <option value={product.stickhardtype.type2}>{product.stickhardtype.type2}</option>:''} 
                          {product.stickhardtype.type3  ? <option value={product.stickhardtype.type3}>{product.stickhardtype.type3}</option> :''}
                          {product.stickhardtype.type4 ? <option value={product.stickhardtype.type4}>{product.stickhardtype.type4}</option> : ''}
                          {product.stickhardtype.type6 ? <option value={product.stickhardtype.type5}>{product.stickhardtype.type5}</option> : ''}
                          {product.stickhardtype.type7 ? <option value={product.stickhardtype.type6}>{product.stickhardtype.type6}</option> : ''}
                          {product.stickhardtype.type8 ? <option value={product.stickhardtype.type7}>{product.stickhardtype.type7}</option> : ''}
                          {product.stickhardtype.type9 ? <option value={product.stickhardtype.type8}>{product.stickhardtype.type8}</option> : ''}
                          {product.stickhardtype.type10 ? <option value={product.stickhardtype.typ9}>{product.stickhardtype.type9}</option> : ''}
                          {product.stickhardtype.type11 ? <option value={product.stickhardtype.type11}>{product.stickhardtype.type11}</option> : ''}
                          {product.stickhardtype.type12 ? <option value={product.stickhardtype.type12}>{product.stickhardtype.type12}</option> : ''}
                      </select>
                    </ul>
                    ) : ''}
                    <div className="hotline">
                       <a href="tel:0564545545">HotLine: 0564545545</a>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                      <div className="col-md-6 p-0">
                        <div onClick={()=> handleAddToCart(product, productSelect1)} className="buy-btn" style={{backgroundColor:'#ccc', fontSize: '2.5rem', height: '40px', padding: '5px', cursor:'pointer'}}>THÊM VÀO GIỎ</div>
                        </div>
                        <div className="col-md-6 p-0">
                        <a href ="https://zalo.me/0564545545" target="_blank" className="buy-btn" style={{fontSize: '2.5rem', height: '40px', padding: '5px'}}>LIÊN HỆ</a>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #8f8b8b'}}>
              <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Loại cán</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.productType}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Độ cứng</th>
                {typeString && (
                  <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{typeString}</td>
                )}
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Chiều dài</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.long}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Trọng lượng</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.weight}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Hãng sản xuất:</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.brand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Nơi sản xuất:</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.producelocation}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Năm sản xuất</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.produceyear}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.managenumber}</td>
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
            <div className="col-md-2">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData
            .slice(1,5)
            .map((product => (
              <>
                {product.productType === productType && (
                      <div key={product.productId} className="col-md-12 p-3">
                      <div style={{ textDecoration: 'none' }}>
                        <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
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
                                   <div className="btn-container mt-3" style={{position:'absolute', bottom:0, width: '100%'}}>
                                    <div onClick={() => handleAddToCart(product)} className="buy-btn">
                                      THÊM VÀO GIỎ
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
            {product.images.map(item => (
                    <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/${item}`} />
                  ))}
        </Carousel>
            </div> 
            <div className="col-md-6">
             <StarRating rate={product.rate} />
              <div className="product-title-client">{product.productName.replace(/-/g, '')}</div>
              <div className="product-status">{product.brand}</div>
              <div className="content__feature-text d-flex">
              {product.saleprice > 0 ? (
                <>
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                <div className="price ml-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                <div className="sale ml-5">{((product.price - product.saleprice) / product.price * 100).toFixed(0)}% OFF</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem', color:'#000'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              )}
                    </div>
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 'fit-content',marginRight: 10}}>Loại hàng: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff',  width: 'fit-content' }}>{product.productType}</li>
                    </ul>
                    <ul className="d-flex pl-0 mt-3">
                      {product.size.size1 != '' ? (
                          <>
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 100,marginRight: 10}}>Kích thước: </li>
                      <select 
                      style={{width: 'fit-content', height:30, fontSize: '1.4rem'}}
                      value={productSelect1 || setProductSelect1(product.size.size1)}
                      onChange={(e) => setProductSelect1(e.target.value)}>
                          <option value={product.size.size1.split(' ')[0]}>{product.size.size1.split(' ')[0]}</option>
                          {product.size.size2 ? <option value={product.size.size2.split(' ')[0]}>{product.size.size2.split(' ')[0]}</option> : '' }
                          {product.size.size3 ? <option value={product.size.size3.split(' ')[0]}>{product.size.size3.split(' ')[0]}</option> : ''} 
                          {product.size.size4 ? <option value={product.size.size4.split(' ')[0]}>{product.size.size4.split(' ')[0]}</option> : ''}
                          {product.size.size5 ? <option value={product.size.size5.split(' ')[0]}>{product.size.size5.split(' ')[0]}</option> : ''}
                          {product.size.size6 ? <option value={product.size.size6.split(' ')[0]}>{product.size.size6.split(' ')[0]}</option> : ''}
                          {product.size.size7 ? <option value={product.size.size7.split(' ')[0]}>{product.size.size7.split(' ')[0]}</option> : ''}
                          {product.size.size8 ? <option value={product.size.size8.split(' ')[0]}>{product.size.size8.split(' ')[0]}</option> : ''}
                          {product.size.size9 ? <option value={product.size.size9.split(' ')[0]}>{product.size.size9.split(' ')[0]}</option> : ''}
                          {product.size.size10 ? <option value={product.size.size10.split(' ')[0]}>{product.size.size10.split(' ')[0]}</option> : ''}
                          {product.size.size11 ? <option value={product.size.size11.split(' ')[0]}>{product.size.size11.split(' ')[0]}</option> : ''}
                          {product.size.size12 ? <option value={product.size.size12.split(' ')[0]}>{product.size.size12.split(' ')[0]}</option> : ''}
                      </select>
                          </>
                      ) : ''}
                      {product.color.color1 != '' ? (
                        <>
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 100,  marginLeft:product.size.size1 != '' ? 20 : 0,marginRight: 10}}>Màu sắc: </li>
                      <select 
                      style={{width: 'fit-content', height:30, fontSize: '1.4rem'}}
                      value={productSelect2 || setProductSelect2(product.color.color1)}
                      onChange={(e) => setProductSelect2(e.target.value )}>
                          <option value={product.color.color1}>{product.color.color1}</option>
                          {product.color.color2 ? <option value={product.color.color2}>{product.color.color2}</option> : '' }
                          {product.color.color3 ? <option value={product.color.color3}>{product.color.color3}</option> : ''} 
                          {product.color.color4 ? <option value={product.color.color4}>{product.color.color4}</option> : ''}
                          {product.color.color5 ? <option value={product.color.color5}>{product.color.color5}</option> : ''}
                          {product.color.color6 ? <option value={product.color.color6}>{product.color.color6}</option> : ''}
                          {product.color.color7 ? <option value={product.color.color7}>{product.color.color7}</option> : ''}
                          {product.color.color8 ? <option value={product.color.color8}>{product.color.color8}</option> : ''}
                          {product.color.color9 ? <option value={product.color.color9}>{product.color.color9}</option> : ''}
                          {product.color.color10 ? <option value={product.color.color10}>{product.color.color10}</option> : ''}
                          {product.color.color11 ? <option value={product.color.color11}>{product.color.color11}</option> : ''}
                          {product.color.color12 ? <option value={product.color.color12}>{product.color.color12}</option> : ''}
                      </select>
                        </>
                      ):''}
                    </ul>
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 100,marginRight: 10}}>Giới tính: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff',  width: 100 }}>{product.sex}</li>
                    </ul>
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
            <div className="col-md-10">
                <div className="product-info">
                  <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
                  <table style={{border: '1px solid #8f8b8b'}}>
                    <tr>
                    <th style={{border: '1px solid #8f8b8b', width: 400   , fontSize: 15, padding: 5}}>Giới tính</th>
                    <td style={{border: '1px solid #8f8b8b', width: 400   , fontSize: 15, padding: 5}}>{product.sex}</td>
                    </tr>
                    <tr>
                    <th style={{border: '1px solid #8f8b8b', width: 400   , fontSize: 15, padding: 5}}>Chất liệu</th>
                    <td style={{border: '1px solid #8f8b8b', width: 400   , fontSize: 15, padding: 5}}>{product.material}</td>
                    </tr>
                    <tr>
                    <th style={{border: '1px solid #8f8b8b', width: 400   , fontSize: 15, padding: 5}}>Màu sắc:</th>
                    {colorString && (
                      <td style={{border: '1px solid #8f8b8b', width: 400   , fontSize: 15, padding: 5}}>{colorString}</td>
                    )}
                    </tr>
                    <tr>
                    <th style={{border: '1px solid #8f8b8b', width: 400   , fontSize: 15, padding: 5}}>Thương hiệu:</th>
                    <td style={{border: '1px solid #8f8b8b', width: 400   , fontSize: 15, padding: 5}}>{product.brand}</td>
                    </tr>
                    <tr>
                    <th style={{border: '1px solid #8f8b8b', width: 400   , fontSize: 15, padding: 5}}>Mã số quản lý</th>
                    <td style={{border: '1px solid #8f8b8b', width: 400   , fontSize: 15, padding: 5}}>{product.managenumber}</td>
                    </tr>
                  </table>
                </div>
                {parsedSizes[product.productName] && (
                <div className="product-info mt-4">
                  <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Bảng size chi tiết</div>
                  <table style={{border: '1px solid #8f8b8b'}}>
                  <tr>
                    <th style={{border: '1px solid #8f8b8b', width: 100, textAlign:'center', fontSize: 15, padding: 5}}>Kích thước</th>
                    {product.productName.includes("Quần" || "quần") && (
                      <>
                      <th style={{border: '1px solid #8f8b8b', width: 100, textAlign:'center', fontSize: 15, padding: 5}}>Vòng eo</th>
                      <th style={{border: '1px solid #8f8b8b', width: 100, textAlign:'center', fontSize: 15, padding: 5}}>Size VN</th>
                      </>
                  )}
                    {product.productName.includes("Áo" || "áo") && (
                      <>
                    <th style={{border: '1px solid #8f8b8b', width: 100, textAlign:'center', fontSize: 15, padding: 5}}>Chiều cao</th>
                    <th style={{border: '1px solid #8f8b8b', width: 100, textAlign:'center', fontSize: 15, padding: 5}}>Vòng ngực</th>
                      </>
                  )}
                 
                    </tr> 
                    {Object.keys(parsedSizes[product.productName]).map((key) => (
                     <tr>
                      {parsedSizes[product.productName][key].size != '' ? (
                      <>
                    <td style={{border: '1px solid #8f8b8b', width: 100, textAlign:'center', fontSize: 15, padding: 5}}>{parsedSizes[product.productName][key].size}</td>
                    <td style={{border: '1px solid #8f8b8b', width: 100, textAlign:'center', fontSize: 15, padding: 5}}> {parsedSizes[product.productName][key].heightRange !='' ? parsedSizes[product.productName][key].heightRange : '' }</td>
                    <td style={{border: '1px solid #8f8b8b', width: 100, textAlign:'center', fontSize: 15, padding: 5}}>{parsedSizes[product.productName][key].weightRange != '' ? parsedSizes[product.productName][key].weightRange : ''}</td>
                    </>) : ''}
                   </tr>
                ))}

                  </table>
                </div>
                )}
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
            <div className="col-md-2">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData
            .slice(1,5)
            .map((product => (
              <>
                {product.productType === productType && (
                      <div key={product.productId} className="col-md-12 p-3">
                      <div style={{ textDecoration: 'none' }}>
                        <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
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
                                   <div className="btn-container mt-3" style={{position:'absolute', bottom:0, width: '100%'}}>
                                    <div onClick={() => handleAddToCart(product)} className="buy-btn">
                                      THÊM VÀO GIỎ
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
           {product.images.map(item => (
                    <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/${item}`} />
                  ))}
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={product.rate} />
              <div className="product-title-client">{product.productName.replace(/-/g, ' ')}</div>
              <div className="product-status">{product.brand}</div>
              <div className="content__feature-text d-flex">
              {product.saleprice > 0 ? (
                <>
                 <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                 <div className="price ml-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                <div className="sale ml-5">{((product.price - product.saleprice) / product.price * 100).toFixed(0)}% OFF</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem', color:'#000'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              )}
                    </div>
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 'fit-content',marginRight: 10}}>Loại hàng: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff',  width: 'fit-content' }}>{product.productType}</li>
                    </ul>
                      <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 100,marginRight: 10}}>Kích thước: </li>
                      <select 
                      style={{width: 'fit-content', height:30, fontSize: '1.4rem'}}
                      value={productSelect1 || setProductSelect1(product.size.size1)}
                      onChange={(e) => setProductSelect1(e.target.value)}>
                          <option value={product.size.size1.split(' ')[0]}>{product.size.size1.split(' ')[0]}</option>
                          {product.size.size2 ? <option value={product.size.size2.split(' ')[0]}>{product.size.size2.split(' ')[0]}</option> : '' }
                          {product.size.size3 ? <option value={product.size.size3.split(' ')[0]}>{product.size.size3.split(' ')[0]}</option> : ''} 
                          {product.size.size4 ? <option value={product.size.size4.split(' ')[0]}>{product.size.size4.split(' ')[0]}</option> : ''}
                          {product.size.size5 ? <option value={product.size.size5.split(' ')[0]}>{product.size.size5.split(' ')[0]}</option> : ''}
                          {product.size.size6 ? <option value={product.size.size6.split(' ')[0]}>{product.size.size6.split(' ')[0]}</option> : ''}
                          {product.size.size7 ? <option value={product.size.size7.split(' ')[0]}>{product.size.size7.split(' ')[0]}</option> : ''}
                          {product.size.size8 ? <option value={product.size.size8.split(' ')[0]}>{product.size.size8.split(' ')[0]}</option> : ''}
                          {product.size.size9 ? <option value={product.size.size9.split(' ')[0]}>{product.size.size9.split(' ')[0]}</option> : ''}
                          {product.size.size10 ? <option value={product.size.size10.split(' ')[0]}>{product.size.size10.split(' ')[0]}</option> : ''}
                          {product.size.size11 ? <option value={product.size.size11.split(' ')[0]}>{product.size.size11.split(' ')[0]}</option> : ''}
                          {product.size.size12 ? <option value={product.size.size12.split(' ')[0]}>{product.size.size12.split(' ')[0]}</option> : ''}
                      </select>
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 100,  marginLeft: product.size.size1 != '' ? 20 : 0, marginRight: 10}}>Màu sắc: </li>
                      <select 
                      style={{ width: 'fit-content', height:30, fontSize: '1.4rem'}}
                      value={productSelect2 || setProductSelect2(product.color.color1)}
                      onChange={(e) => setProductSelect2(e.target.value) }>
                          <option value={product.color.color1}>{product.color.color1}</option>
                          {product.color.color2 ? <option value={product.color.color2}>{product.color.color2}</option> : '' }
                          {product.color.color3 ? <option value={product.color.color3}>{product.color.color3}</option> : ''} 
                          {product.color.color4 ? <option value={product.color.color4}>{product.color.color4}</option> : ''}
                          {product.color.color5 ? <option value={product.color.color5}>{product.color.color5}</option> : ''}
                          {product.color.color6 ? <option value={product.color.color6}>{product.color.color6}</option> : ''}
                          {product.color.color7 ? <option value={product.color.color7}>{product.color.color7}</option> : ''}
                          {product.color.color8 ? <option value={product.color.color8}>{product.color.color8}</option> : ''}
                          {product.color.color9 ? <option value={product.color.color9}>{product.color.color9}</option> : ''}
                          {product.color.color10 ? <option value={product.color.color10}>{product.color.color10}</option> : ''}
                          {product.color.color11 ? <option value={product.color.color11}>{product.color.color11}</option> : ''}
                          {product.color.color12 ? <option value={product.color.color12}>{product.color.color12}</option> : ''}
                      </select>
                    </ul>
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 100,marginRight: 10}}>Giới tính: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff',  width: 100 }}>{product.sex}</li>
                    </ul>
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
            <div className="col-md-10">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #8f8b8b'}}>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Giới tính</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.sex}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Chất liệu</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.material}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Màu sắc:</th>
                {colorString && (
                  <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{colorString}</td>
                )}
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Thương hiệu:</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.brand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.managenumber}</td>
                </tr>
              </table>
            </div>
            {parsedSizes[product.productName] && (
                <div className="product-info mt-4">
                  <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Bảng size chi tiết</div>
                  <table style={{border: '1px solid #8f8b8b'}}>
                  <tr>
                    <th style={{border: '1px solid #8f8b8b', width: 100, textAlign:'center', fontSize: 15, padding: 5}}>Kích thước</th>
                    <th style={{border: '1px solid #8f8b8b', width: 100, textAlign:'center', fontSize: 15, padding: 5}}>Chiều cao</th>
                    <th style={{border: '1px solid #8f8b8b', width: 100, textAlign:'center', fontSize: 15, padding: 5}}>Cân nặng</th>
                    </tr>
                    {Object.keys(parsedSizes[product.productName]).map((key) => (
                     <tr>
                      {parsedSizes[product.productName][key].size != '' ? (
                      <>
                    <td style={{border: '1px solid #8f8b8b', width: 100, textAlign:'center', fontSize: 15, padding: 5}}>{parsedSizes[product.productName][key].size}</td>
                    <td style={{border: '1px solid #8f8b8b', width: 100, textAlign:'center', fontSize: 15, padding: 5}}> {parsedSizes[product.productName][key].heightRange !='' ? parsedSizes[product.productName][key].heightRange : '' }</td>
                    <td style={{border: '1px solid #8f8b8b', width: 100, textAlign:'center', fontSize: 15, padding: 5}}>{parsedSizes[product.productName][key].weightRange != '' ? parsedSizes[product.productName][key].weightRange : ''}</td>
                    </>) : ''}
                   </tr>
                ))}

                  </table>
                </div>
                )}
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
            <div className="col-md-2">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData
            .slice(1,5)
            .map((product => (
              <>
                {product.productType === productType && (
                      <div key={product.productId} className="col-md-12 p-3">
                      <div style={{ textDecoration: 'none' }}>
                        <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
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
                                   <div className="btn-container mt-3" style={{position:'absolute', bottom:0, width: '100%'}}>
                                    <div onClick={() => handleAddToCart(product)} className="buy-btn">
                                      THÊM VÀO GIỎ
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
             {product.images.map(item => (
                    <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/${item}`} />
                  ))}
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={product.rate} />
              <div className="product-title-client">{product.productName.replace(/-/g, ' ')}</div>
              {product.brand !='' ? 
              <div className="product-status">{product.brand}</div>
              :''}
              <div className="content__feature-text d-flex">
              {product.saleprice > 0 ? (
                <>
                <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                <div className="price ml-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                <div className="sale ml-5">{((product.price - product.saleprice) / product.price * 100).toFixed(0)}% OFF</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem', color:'#000'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              )}
                    </div>
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 'fit-content',marginRight: 10}}>Loại hàng: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff',  width: 'fit-content' }}>{product.productType}</li>
                    </ul>
              {product.color.color1 && (
               <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 100, marginRight: 10}}>Màu sắc: </li>
                      <select 
                      style={{ width: 'fit-content', height:30, fontSize: '1.4rem'}}
                      value={productSelect1 || setProductSelect1(product.color.color1)}
                      onChange={(e) => setProductSelect1(e.target.value) }>
                          <option value={product.color.color1}>{product.color.color1}</option>
                          {product.color.color2 ? <option value={product.color.color2}>{product.color.color2}</option> : '' }
                          {product.color.color3 ? <option value={product.color.color3}>{product.color.color3}</option> : ''} 
                          {product.color.color4 ? <option value={product.color.color4}>{product.color.color4}</option> : ''}
                          {product.color.color5 ? <option value={product.color.color5}>{product.color.color5}</option> : ''}
                          {product.color.color6 ? <option value={product.color.color6}>{product.color.color6}</option> : ''}
                          {product.color.color7 ? <option value={product.color.color7}>{product.color.color7}</option> : ''}
                          {product.color.color8 ? <option value={product.color.color8}>{product.color.color8}</option> : ''}
                          {product.color.color9 ? <option value={product.color.color9}>{product.color.color9}</option> : ''}
                          {product.color.color10 ? <option value={product.color.color10}>{product.color.color10}</option> : ''}
                          {product.color.color11 ? <option value={product.color.color11}>{product.color.color11}</option> : ''}
                          {product.color.color12 ? <option value={product.color.color12}>{product.color.color12}</option> : ''}
                      </select>
                    </ul>
              )}
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
            <div className="col-md-10">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #8f8b8b'}}>
              <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Chất liệu</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.material}</td>
                </tr>
                {product.color.color1 && (
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Màu sắc:</th>
                {colorString && (
                  <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{colorString}</td>
                )}
                </tr>
                )}
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Thương hiệu:</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.brand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Nơi sản xuất:</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.producelocation}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.managenumber}</td>
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
            <div className="col-md-2">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData
            .slice(1,5)
            .map((product => (
              <>
                {product.productType === productType && (
                      <div key={product.productId} className="col-md-12 p-3">
                      <div style={{ textDecoration: 'none' }}>
                        <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
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
                                   <div className="btn-container mt-3" style={{position:'absolute', bottom:0, width: '100%'}}>
                                    <div onClick={() => handleAddToCart(product)} className="buy-btn">
                                      THÊM VÀO GIỎ
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
             {product.images.map(item => (
                    <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/${item}`} />
                  ))}
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={product.rate} />
              <div className="product-title-client">{product.productName.replace(/-/g, ' ')}</div>
              {product.brand !='' ? 
              <div className="product-status">{product.brand}</div>
              :''}
              <div className="content__feature-text d-flex">
              {product.saleprice > 0 ? (
                <>
                 <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                 <div className="price ml-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                <div className="sale ml-5">{((product.price - product.saleprice) / product.price * 100).toFixed(0)}% OFF</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem', color:'#000'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              )}
                    </div>
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 'fit-content',marginRight: 10}}>Loại hàng: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff',  width: 'fit-content' }}>{product.productType}</li>
                    </ul>
                    <ul className="d-flex pl-0 mt-3">
                      {product.color.color1 != '' ? (
                        <>
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 100,marginRight: 10}}>Màu sắc: </li>
                      <select 
                      style={{ width: 'fit-content', height:30, fontSize: '1.4rem'}}
                      value={productSelect1 || setProductSelect1(product.color.color1)}
                      onChange={(e) => setProductSelect1(e.target.value)}>
                          <option value={product.color.color1}>{product.color.color1}</option>
                          {product.color.color2 ? <option value={product.color.color2}>{product.color.color2}</option> : '' }
                          {product.color.color3 ? <option value={product.color.color3}>{product.color.color3}</option> : ''} 
                          {product.color.color4 ? <option value={product.color.color4}>{product.color.color4}</option> : ''}
                          {product.color.color5 ? <option value={product.color.color5}>{product.color.color5}</option> : ''}
                          {product.color.color6 ? <option value={product.color.color6}>{product.color.color6}</option> : ''}
                          {product.color.color7 ? <option value={product.color.color7}>{product.color.color7}</option> : ''}
                          {product.color.color8 ? <option value={product.color.color8}>{product.color.color8}</option> : ''}
                          {product.color.color9 ? <option value={product.color.color9}>{product.color.color9}</option> : ''}
                          {product.color.color10 ? <option value={product.color.color10}>{product.color.color10}</option> : ''}
                          {product.color.color11 ? <option value={product.color.color11}>{product.color.color11}</option> : ''}
                          {product.color.color12 ? <option value={product.color.color12}>{product.color.color12}</option> : ''}
                      </select>
                        </>
                      ):''}
                    </ul>
                    <div className="hotline">
                       <a href="tel:0564545545">HotLine: 0564545545</a>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                      <div className="col-md-6 p-0">
                        <div onClick={()=> handleAddToCart(product,  productSelect1)} className="buy-btn" style={{backgroundColor:'#ccc', fontSize: '2.5rem', height: '40px', padding: '5px', cursor:'pointer'}}>THÊM VÀO GIỎ</div>
                        </div>
                        <div className="col-md-6 p-0">
                        <a href ="https://zalo.me/0564545545" target="_blank" className="buy-btn" style={{fontSize: '2.5rem', height: '40px', padding: '5px'}}>LIÊN HỆ</a>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #8f8b8b'}}>
              <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Trọng lượng</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.weight}</td>
                </tr>
              <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Chất liệu</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.material}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Màu sắc:</th>
                {colorString && (
                  <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{colorString}</td>
                )}
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Thương hiệu:</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.brand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Nơi sản xuất:</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.producelocation}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.managenumber}</td>
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
            <div className="col-md-2">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData
            .slice(1,5)
            .map((product => (
              <>
                {product.productType === productType && (
                      <div key={product.productId} className="col-md-12 p-3">
                      <div style={{ textDecoration: 'none' }}>
                        <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
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
                                   <div className="btn-container mt-3" style={{position:'absolute', bottom:0, width: '100%'}}>
                                    <div onClick={() => handleAddToCart(product)} className="buy-btn">
                                      THÊM VÀO GIỎ
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
              {product.images.map(item => (
                    <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/${item}`} />
                  ))}
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={product.rate} />
              <div className="product-title-client">{product.productName.replace(/-/g, ' ')}</div>
              {product.brand !='' ? 
              <div className="product-status">{product.brand}</div>
              :''}
              <div className="content__feature-text d-flex">
              {product.saleprice > 0 ? (
                <>
                  <div className="price" style={{fontSize: '3rem'}}>{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                  <div className="price ml-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                <div className="sale ml-5">{((product.price - product.saleprice) / product.price * 100).toFixed(0)}% OFF</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem', color:'#000'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              )}
                    </div>
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 100,marginRight: 10}}>Loại hàng: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff',  width: 100 }}>{product.productType}</li>
                    </ul>
                    <ul className="d-flex pl-0 mt-3">
                      {product.size.size1 != '' ? (
                          <>
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 100,marginRight: 10}}>Kích thước: </li>
                      <select 
                      style={{ width: 'fit-content', height:30, fontSize: '1.4rem'}}
                      value={productSelect1 || setProductSelect1(product.size.size1)}
                      onChange={(e) => setProductSelect1(e.target.value)}>
                          <option value={product.size.size1}>{product.size.size1}</option>
                          {product.size.size2 ? <option value={product.size.size2}>{product.size.size2}</option> : '' }
                          {product.size.size3 ? <option value={product.size.size3}>{product.size.size3}</option> : ''} 
                          {product.size.size4 ? <option value={product.size.size4}>{product.size.size4}</option> : ''}
                          {product.size.size5 ? <option value={product.size.size5}>{product.size.size5}</option> : ''}
                          {product.size.size6 ? <option value={product.size.size6}>{product.size.size6}</option> : ''}
                          {product.size.size7 ? <option value={product.size.size7}>{product.size.size7}</option> : ''}
                          {product.size.size8 ? <option value={product.size.size8}>{product.size.size8}</option> : ''}
                          {product.size.size9 ? <option value={product.size.size9}>{product.size.size9}</option> : ''}
                          {product.size.size10 ? <option value={product.size.size10}>{product.size.size10}</option> : ''}
                          {product.size.size11 ? <option value={product.size.size11}>{product.size.size11}</option> : ''}
                          {product.size.size12 ? <option value={product.size.size12}>{product.size.size12}</option> : ''}
                       </select>
                          </>
                      ) : ''}
                      {product.color.color1 != '' ? (
                        <>
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 100, marginLeft: 20,marginRight: 10}}>Màu sắc: </li>
                      {/* <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff',  width: 100 }}>{product.size}</li> */}
                      <select 
                      style={{ width: 'fit-content', height:30, fontSize: '1.4rem'}}
                      value={productSelect2}
                      onChange={(e) => setProductSelect2(e.target.value || setProductSelect2(product.color.color1))}>
                          <option value={product.color.color1}>{product.color.color1}</option>
                          {product.color.color2 ? <option value={product.color.color2}>{product.color.color2}</option> : '' }
                          {product.color.color3 ? <option value={product.color.color3}>{product.color.color3}</option> : ''} 
                          {product.color.color4 ? <option value={product.color.color4}>{product.color.color4}</option> : ''}
                          {product.color.color5 ? <option value={product.color.color5}>{product.color.color5}</option> : ''}
                          {product.color.color6 ? <option value={product.color.color6}>{product.color.color6}</option> : ''}
                          {product.color.color7 ? <option value={product.color.color7}>{product.color.color7}</option> : ''}
                          {product.color.color8 ? <option value={product.color.color8}>{product.color.color8}</option> : ''}
                          {product.color.color9 ? <option value={product.color.color9}>{product.color.color9}</option> : ''}
                          {product.color.color10 ? <option value={product.color.color10}>{product.color.color10}</option> : ''}
                          {product.color.color11 ? <option value={product.color.color11}>{product.color.color11}</option> : ''}
                          {product.color.color12 ? <option value={product.color.color12}>{product.color.color12}</option> : ''}
                      </select>
                        </>
                      ):''}
                      {/* <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff',  width: 100 }}>{product.size}</li> */}
                    </ul>
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 100,marginRight: 10}}>Giới tính: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff',  width: 100 }}>{product.sex}</li>
                    </ul>
                    <div className="hotline">
                       <a href="tel:0564545545">HotLine: 0564545545</a>
                    </div>
                    <div className="btn-container">
                      <div className="row">
                      <div className="col-4 col-md-4 pr-0">
                        <div onClick={()=> handleAddToCart(product, productSelect1, productSelect2)} className="buy-btn" style={{backgroundColor:'#ccc', fontSize: '1.4rem', height: '40px', padding: '5px', cursor:'pointer'}}>THÊM VÀO GIỎ</div>
                        </div>
                        <div className="col-4 col-md-4 pl-0">
                        <a href ="https://zalo.me/0564545545" target="_blank" className="buy-btn" style={{fontSize: '1.4rem', height: '40px', padding: '5px'}}>LIÊN HỆ</a>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #8f8b8b'}}>
              {/* <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Kích cỡ:</th>
                {sizeString && (
                <td style={{ border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5 }}>
                  {sizeString}
                </td>
              )}
                </tr> */}
              <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Giới tính:</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.sex}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Loại giày:</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.productType}</td>
                </tr>
              <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Chất liệu</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.material}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Màu sắc:</th>
                {colorString && (
                  <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{colorString}</td>
                )}
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Thương hiệu:</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.brand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Nơi sản xuất:</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.producelocation}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.managenumber}</td>
                </tr>
              </table>
            </div>
            {parsedSizes[product.productName] && (
                <div className="product-info mt-4">
                  <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Bảng size chi tiết</div>
                  <table style={{border: '1px solid #8f8b8b'}}>
                  <tr>
                    <th style={{border: '1px solid #8f8b8b', width: 100, textAlign:'center', fontSize: 15, padding: 5}}>Kích thước</th>
                    <th style={{border: '1px solid #8f8b8b', width: 100, textAlign:'center', fontSize: 15, padding: 5}}>Size EU</th>
                    <th style={{border: '1px solid #8f8b8b', width: 100, textAlign:'center', fontSize: 15, padding: 5}}>Size VN</th>
                    </tr>
                    {Object.keys(parsedSizes[product.productName]).map((key) => (
                     <tr>
                    <td style={{border: '1px solid #8f8b8b', width: 100, textAlign:'center', fontSize: 15, padding: 5}}>{parsedSizes[product.productName][key].size}</td>
                    <td style={{border: '1px solid #8f8b8b', width: 100, textAlign:'center', fontSize: 15, padding: 5}}> {parsedSizes[product.productName][key].heightRange}</td>
                    <td style={{border: '1px solid #8f8b8b', width: 100, textAlign:'center', fontSize: 15, padding: 5}}>{parsedSizes[product.productName][key].weightRange}</td>
                   </tr>
                ))}

                  </table>
                </div>
                )}
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
            <div className="col-md-2">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData
            .slice(1,5)
            .map((product => (
              <>
                {product.productType === productType && (
                      <div key={product.productId} className="col-md-12 p-3">
                      <div style={{ textDecoration: 'none' }}>
                        <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
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
                                   <div className="btn-container mt-3" style={{position:'absolute', bottom:0, width: '100%'}}>
                                    <div onClick={() => handleAddToCart(product)} className="buy-btn">
                                      THÊM VÀO GIỎ
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
             {product.images.map(item => (
                    <img alt={product.productCode} className="image_content" src={`https://shingolf.vn/${item}`} />
                  ))}
        </Carousel>
            </div>
            <div className="col-md-6">
             <StarRating rate={product.rate} />
              <div className="product-title-client">{product.productName.replace(/-/g, ' ')}</div>
              {product.brand !='' ? 
              <div className="product-status">{product.brand}</div>
              :''}
              <div className="content__feature-text d-flex">
              {product.saleprice > 0 ? (
                <>
                <div className="price" style={{fontSize: '3rem', color:'#000'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
                <div className="price ml-5"style={{ fontSize: '3rem', color: "#000", textDecoration: 'line-through'}}>{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                <div className="sale ml-5">{((product.price - product.saleprice) / product.price * 100).toFixed(0)}% OFF</div>
                </>
              ) : (
                <div className="price" style={{fontSize: '3rem', color:'#000'}}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              )}
                    </div>
                    <ul className="d-flex pl-0 mt-3">
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold',  width: 'fit-content',marginRight: 10}}>Loại hàng: </li>
                      <li className="product-type" style={{ backgroundColor: '#ff3131' , cursor: 'pointer', color:  '#fff',  width: 'fit-content' }}>{product.productType}</li>
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
            <div className="col-md-10">
            <div className="product-info">
              <div style={{textAlign:'left', fontSize: '1.8rem', fontWeight:'bold', marginBottom: 10}}>Thông số kỹ thuật</div>
              <table style={{border: '1px solid #8f8b8b'}}>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Thương hiệu:</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.brand}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Nơi sản xuất:</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.producelocation}</td>
                </tr>
                <tr>
                <th style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>Mã số quản lý</th>
                <td style={{border: '1px solid #8f8b8b', width: 400, fontSize: 15, padding: 5}}>{product.managenumber}</td>
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
            <div className="col-md-2">
              <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">ShinGolf đề xuất</div>
          <div className="container">
            <div className="row">
            {fetchData
            .slice(1,5)
            .map((product => (
              <>
                {product.productType === productType && (
                      <div key={product.productId} className="col-md-12 p-3">
                      <div style={{ textDecoration: 'none' }}>
                        <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
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
                                   <div className="btn-container mt-3" style={{position:'absolute', bottom:0, width: '100%'}}>
                                    <div onClick={() => handleAddToCart(product)} className="buy-btn">
                                      THÊM VÀO GIỎ
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
          )})
          }
     
          <div className="row">
          <div className="content__feature">
          <div className="content__feature-title">SẢN PHẨM TƯƠNG TỰ</div>
          <div className="container">
            <div className="row">
              {fetchData
               .slice(1,5)
              .filter(product => product.productId === productId)
              .map(product => (
                <div key={product.productId} className="col-6 col-md-2 p-3">
                <div style={{ textDecoration: 'none' }}>
                  <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
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
                    <div className="btn-container mt-3" style={{position:'absolute', bottom:0, width: '100%'}}>
                                    <div onClick={() => handleAddToCart(product)} className="buy-btn">
                                      THÊM VÀO GIỎ
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
            {productHistory
             .slice(1,5)
            .map((product, index) => (
               <div key={product.productId} className="col-6 col-md-2 p-3">
               <div style={{ textDecoration: 'none' }}>
                 <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
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
          </div>
        </div>
      </div>
    </div>
  );
}

