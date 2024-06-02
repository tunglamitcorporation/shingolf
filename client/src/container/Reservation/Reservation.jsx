import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import { useEffect,  useState} from 'react';
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
      const items = [
        { id: 1, name: 'Item 1', price: 29.99, quantity: 1 },
        { id: 2, name: 'Item 2', price: 49.99, quantity: 2 },
      ];
    
      return (
        <div className="cart-container">
          <h1>Shopping Cart</h1>
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <span>{item.name}</span>
                <span>${item.price}</span>
                <span>Qty: {item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Summary</h2>
            <p>Total: ${items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
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
