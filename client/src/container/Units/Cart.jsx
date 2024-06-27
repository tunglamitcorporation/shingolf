import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import { useEffect,  useState} from 'react';
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useCart } from "../../CartProvider";
import axios from "axios";
export default function Cart() {
    const Cart = () => {
      const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
      const [totalPrice, setTotalPrice] = useState(0);
      const [exchangeRate, setExchangeRate] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      const handleIncreaseQuantity = (productId) => {
        increaseQuantity(productId);
        const updatedTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        setTotalPrice(updatedTotal);
      };
    
      const handleDecreaseQuantity = (productId) => {
        decreaseQuantity(productId);
        const updatedTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        setTotalPrice(updatedTotal);
      };
      
      useEffect(() => {
        const fetchExchangeRate = async () => {
          try {
            const response = await axios.get('https://portal.vietcombank.com.vn/Usercontrols/TVPortal.TyGia/pXML.aspx?b=8');
            const parser = new DOMParser();
            const xml = parser.parseFromString(response.data, 'application/xml');
            const rates = Array.from(xml.getElementsByTagName('Exrate'));
            const usdRate = rates.find(rate => rate.getAttribute('CurrencyCode') === 'JPY');
            setExchangeRate(usdRate.getAttribute('Sell'));
          } catch (error) {
            setError('Error fetching exchange rates');
          } finally {
            setLoading(false);
          }
        };
    
        fetchExchangeRate();
      }, []);
      const covertExchangeRate = parseFloat(exchangeRate) 
      useEffect(() => {
        const calculateTotalPrice = () => {
          const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity *1.08), 0);
          setTotalPrice(total);
        };
        calculateTotalPrice();
      }, [cartItems]);
      return (
        <div className="cart-container">
          {cartItems.length > 0 ? (
        <ul>
            <div className="align-items-center cart-header" style={{textAlign:'center'}}>
       <div className="col-md-2">
          <div style={{ textDecoration: 'none' }}>
            <div className="content__feature-item">
              <div className="content__feature-container" style={{height: '50px', marginTop:0}}>
                <div
                  className="content__feature-img"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row col-md-10">
              <div className="content__feature-name col-md-3">
                <div>Tên sản phẩm </div>
              </div>
              <div className="content__feature-name col-md-1">
                <div>Phân loại</div>
              </div>
              <div className="content__feature-text d-md-flex col-md-2" style={{fontSize: '1.4rem'}}>
                <div className="content__feature-name" style={{fontSize: '1.4rem'}} >
                    <div>Giá</div>
                    </div>
              </div>
              <div className="content__feature-name col-md-1"  style={{fontSize: '1.4rem'}}>
                <div>Số lượng</div>
            </div>
            <div className="content__feature-name col-md-1 ml-3" style={{fontSize: '1.4rem'}}>
            <div>Thành tiền</div>
            </div>
        </div>
            </div>
          {cartItems.map((item, index) => {
          return(
            <div className="cart-items d-flex">
            <button className="delete-button d-flex align-items-center" onClick={() => removeFromCart(item.productCode)}><i class="fa-solid fa-xmark"></i></button>
           <div className="col-md-2" key={index}>
          <div style={{ textDecoration: 'none' }}>
            <div className="content__feature-item">
              <div className="content__feature-container" style={{height: '100px', marginTop:0}}>
                <div
                  className="content__feature-img"
                  style={{
                    width:'100px',
                    height:'100px',
                    backgroundSize:'contain',
                    backgroundImage:
                    `url(https://shingolf.vn/image/product/image/${item.productCode}_image1.png)`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
                  <div className="row align-items-center col-md-10">      
              <div className="content__feature-name col-md-3">
                <div>{item.productName}</div>
              </div>
              <div className="content__feature-name col-md-1">
                <div>{item.productType}</div>
              </div>
              <div className="content__feature-text d-flex col-md-2" style={{fontSize: '1.2rem'}}>
                <div className="price">{Intl.NumberFormat('de-DE').format(item.price)}đ</div>
                <div className="price ml-3 mr-2" style={{ color: '#ccc', textDecoration: 'line-through', textDecorationColor:'#000' }}>{Intl.NumberFormat('de-DE').format(item.saleprice)}đ</div>
              </div>
              <div className="quantity-controls col-md-1 mr-2">
              {/* <button onClick={() => {
                  const newQuantity = decreaseQuantity(item.id);
                  if (newQuantity !== undefined ) {
                    setTotalPrice(prevTotalPrice => prevTotalPrice - item.price);
                  }
                }}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => {
                  const newQuantity = increaseQuantity(item.id);
                  setTotalPrice(prevTotalPrice => prevTotalPrice + item.price);
                }}>+</button> */}
                <button onClick={() => handleDecreaseQuantity(item.productCode)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.productCode)}>+</button>
            </div>
            <div className="content__feature-text d-flex col-md-1 total-product-price" style={{fontSize: '1.2rem'}}>
            <div className="price">{Intl.NumberFormat('de-DE').format((item.price * item.quantity).toFixed(2))}</div>
            </div>
            </div>
              </div>
            // </div>
          )
    })}
        </ul>
      ) : (
        <>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <i className="fa-solid fa-cart-shopping" style={{color: "#FF3131", fontSize: '10rem'}} />
          <p  style={{color: "#FF3131", fontSize: '3rem'}}>Giỏ hàng trống</p>
        </div>
        </>
      )}
          <div className="cart-summary">
            <p>Tổng: {Intl.NumberFormat('de-DE').format(totalPrice.toFixed(3))}đ <small style={{fontSize: '1.2rem'}}>(Đã bao gồm 8% VAT)</small></p>
            <div className="cart-buttons">
              <button className="contact-button">Liên hệ</button>
              {/* <button className="pay-button">Pay</button> */}
            </div>
          </div>
        </div>
      )
    }
  return (
    <div>
      <HelmetLayout />
      <div className="service__header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>GIỎ HÀNG</h1>
            </div>
          </div>
        </div>
      </div>
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
                  <Link className="breadcrumb__title" to="/feature/">
                    Giỏ Hàng
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="feature__characteristic">
        <div className="container">
          <div className="row">
            <Cart />
        </div>
      </div>
    </div>
    </div>
  );
}