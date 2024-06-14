import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import { useEffect,  useState} from 'react';
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useCart } from "../../CartProvider";
export default function Feature() {
  const { t } = useTranslation();
  const dn = t("dn", { returnObjects: true });
  const [activeDiv, setActiveDiv] = useState(1);

  const handleClickDiv1 = () => {
    setActiveDiv(1);
  };

  const handleClickDiv2 = () => {
    setActiveDiv(2);
  };
    const {featureID} = useParams()
    useEffect(() => {
      if (featureID !== undefined) {
        const elementToScroll = document.getElementById(`${featureID}`);
        if (elementToScroll) {
          elementToScroll.scrollIntoView({ behavior: 'smooth', block:'center', inline:'nearest' });
        }
        
      }
    }, [featureID]);
    const Cart = () => {
      // Sample cart items
      const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
      const [totalPrice, setTotalPrice] = useState(0);

      useEffect(() => {
        const calculateTotalPrice = () => {
          const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
          setTotalPrice(total);
        };
        calculateTotalPrice();
      }, [cartItems]);
    
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
    
      return (
        <div className="cart-container">
          {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => {
          return(
            <div className="cart-items">
            <div className="d-flex align-items-center justify-content-between">
       <div key={index}>
          <div style={{ textDecoration: 'none' }}>
            <div className="content__feature-item" style={{margin: '10px 10px'}}>
              <div className="content__feature-container" style={{height: '100px', display:'block', marginTop:0}}>
                <div
                  className="content__feature-img"
                  style={{
                    width:'100px',
                    height:'100px',
                    backgroundSize:'contain',
                    backgroundImage:
                    `url(${item.image})`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
              <div className="content__feature-name" style={{width:'unset'}}>
                <div>{item.productName}</div>
              </div>
              <div className="content__feature-text d-md-flex" style={{fontSize: '1.4rem', width: 'unset'}}>
                <div className="price">28.475.000đ {item.price}</div>
                <div className="price ml-md-5" style={{ color: '#ccc', textDecoration: 'line-through', textDecorationColor:'#000' }}>
                  33.500.000đ
                </div>
              </div>
              <div className="quantity-controls">
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
                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
            </div>
            <div className="content__feature-text d-md-flex" style={{fontSize: '1.4rem', width: 'unset'}}>
            <div className="price">28.475.000đ {item.price * item.quantity}</div>
            </div>
            <button className="delete-button" onClick={() => removeFromCart(item.id)}>Xóa</button>
            </div>
          </div>
          )
    })}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
          <div className="cart-summary">
            <p>Total:{totalPrice}</p>
            <div className="cart-buttons">
              <button className="contact-button">Contact</button>
              <button className="pay-button">Pay</button>
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
