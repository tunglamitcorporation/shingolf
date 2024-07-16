import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import { useEffect, useState} from 'react';
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useCart } from "../../CartProvider";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { makeOrder } from "../../api/product";
export default function Cart() {
    const Cart = () => {
      const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, getItemQuantity } = useCart();
      const [totalPrice, setTotalPrice] = useState(0);
      const [exchangeRate, setExchangeRate] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      const [modalShow, setModalShow] = useState(false);
      const [quantity, setQuantity] = useState(1)
      
function MassageThaiVanLung1Modal(props) {
  const {t} = useTranslation()
  const navigate = useNavigate()
  const [guestName, setGuestName] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState('')
  const [address, setAddress] = useState('');
  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validate = () => {
    let errors = {}
    let isVaLid = true
  
    if (!guestName) {
      errors.guestName = 'required';
      isVaLid = false
    }  
    if (!address) {
      errors.address = 'required';
      isVaLid = false
    }  
    if (!email) {
      errors.email = 'required';
      isVaLid = false
  
    } 
    else if (!validateEmail(email)) {
      errors.email = 'Invalid email format';
      isVaLid = false
  
    }
    if (!phone) {
      errors.phone = 'required';
      isVaLid = false
  
    } 
    setErrors(errors);
    return isVaLid
  }
  const cartSelected = cartItems.map(item => [
     {
      productName: item.productName,
      productSelect1: item.productSelect1,
      productSelect2: item.productSelect2,
      productLink: `https://shingolf.vn/product/${(item.productName).replace(/ /g, '-')}`,
      price: item.price,
      quantity : getItemQuantity(item.productCode)
    }
  ])
  const handleSubmit = async(e) => {
    const dataObject = {
      guestName,
      address,
      phone,
      email,
      cartSelected,
      totalPrice,
      exchangeRate,
      specialRequest
    }
    e.preventDefault()
    if(validate()){
      console.log(dataObject);
      const token = ""
      const source = await makeOrder(dataObject, token)
      navigate ('/thank-you/')
    }else{
      alert(`Please ensure that all required fields are completed`)
    }
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Đặt hàng
        </Modal.Title>
        <Button variant="light" onClick={props.onHide}>
          <i class="fa-solid fa-xmark purple"></i>
        </Button>
      </Modal.Header>
      <div className="row p-5">
        <div className="col-md-6 massage_reservation">
          <Modal.Body>
          <form onSubmit={handleSubmit}>
            <h2>Thông tin khách hàng</h2>
            <div className="row pl-3 pr-3">
            <input
                placeholder="Họ và tên"
                type="text"
                className={errors.guestName ? 'col-md-12 form__content mb-0 validate_failed' : 'col-md-12 form__content mb-0'}
                value={guestName}
                onChange={(e) => {
                  setGuestName(e.target.value);
                  setErrors((prevErrors) => ({ ...prevErrors, guestName: '' }));
                }}
              />
            </div>
            <div className="row pl-3 pr-3">
            <input
                placeholder="Địa chỉ"
                type="text"
                className={errors.address ? 'col-md-12 form__content mb-0 validate_failed' : 'col-md-12 form__content mb-0'}
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  setErrors((prevErrors) => ({ ...prevErrors, address: '' }));
                }}
              />
            </div>
            <div className="row pl-3 pr-3">
              <input
                type="text"
                maxLength={10}
                className={errors.phone ? 'booker-phone form__content col-md-12 validate_failed' : 'booker-phone form__content col-md-12'}
                id=""
                value={phone}
                placeholder="Số điện thoại"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => {
                  setPhone(e.target.value)
                  setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
                }
                }
              />
                <input
                type="text"
                className={errors.email ? 'col-md-12 form__content validate_failed' : 'col-md-12 form__content'}
                id=""
                value={email}
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value)
                  setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
                }}
              />
              <textarea
                  className="text-note"
                  cols="40"
                  rows="6"
                  placeholder="Ghi chú"
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                ></textarea>
              <div className="row justify-content-center">
                <button
                  id="send"
                  class="button-57 send-btn col-3 col-md-6"
                  type="submit"
                >
                  <span class="text" style={{ color: "#fff" }}>
                  {t('reservation.send')}
                  </span>
                  <span className="d-flex align-item-center">
                    <i
                      class="fa-sharp fa-regular fa-paper-plane green"
                      style={{ fontSize: "1.8rem", lineHeight: "2.8rem" }}
                    ></i>
                  </span>
                </button>
              </div>
            </div>
            </form>
          </Modal.Body>
        </div>
        <div className="col-md-6">
          <div className="space-line">
            <div className="row justify-content-center">
              <div className="col-6 col-md-6">
                <img src="https://azumayavietnam.com/image/logo/style-line.png" />
              </div>
            </div>
          </div>
          <Modal.Body>
            <h2>Liên hệ Hotline</h2>
            <div className="btn_container mt-4">
              <button className="button-57 call-btn p-0">
                <a className="d-block" href="tel:0868623499">
                  <i
                    class="fa-solid fa-phone red"
                    style={{ lineHeight: "3.8rem" }}
                  ></i>
                </a>
                <span className="w-100">
                  <a className="d-block call-after" href="tel:0868623499">
                  0868.623.499
                  </a>
                </span>
              </button>
            </div>
            <div className="room__container mt-5">
              <div className="gg-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.3118580146515!2d105.71949861158183!3d21.06020308661545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455cd304436e3%3A0x4640c03e9367d2b3!2zNDEgTmfDtSA2OSBW4bqhbiBYdcOibiwgS2ltIENodW5nLCBIb8OgaSDEkOG7qWMsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1719730779361!5m2!1svi!2s"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>
          </Modal.Body>
        </div>
      </div>
      <Modal.Footer>
        <button
          class="button-57 close-btn"
          role="button"
          onClick={props.onHide}
        >
          <span class="text" style={{ color: "#fff" }}>
            {t('service_massage.close')}
          </span>
          <span>
            <i
              class="fa-solid fa-xmark red"
              style={{ fontSize: "1.8rem", lineHeight: "2.8rem" }}
            ></i>
          </span>
        </button>
      </Modal.Footer>
    </Modal>
  );
}   
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
        <div>
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
            </div>
          {cartItems.map((item, index) => {
          return(
            <div className="cart-items d-flex">
              <HelmetLayout title={"Shin Golf  | Giỏ Hàng"} />
           <div className="col-md-2" key={index}>
          <div style={{ textDecoration: 'none' }}>
            <div className="content__feature-item">
              <div className="content__feature-container" style={{height: '200px', marginTop:0}}>
                <div
                  className="content__feature-img"
                  style={{
                    width:'100px',
                    height:'200px',
                    backgroundSize:'contain',
                    backgroundImage:
                    `url(https://shingolf.vn/image/product/image/${item.productCode}_image1.png)`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
             <div className="col-md-9">      
              <div className="content__feature-name">
                <div className="d-flex"><div style={{fontSize:'1.2rem', fontWeight:100, color:'#000', width: 100}}>Tên sản phẩm: </div> {item.productName}</div>
              </div>
              <div className="content__feature-name">
                <div className="d-flex"><div style={{fontSize:'1.2rem', fontWeight:100, color:'#000', width: 100}}>Lựa chọn 1: </div> {item.productSelect1}</div>
              </div>
              <div className="content__feature-name">
                <div className="d-flex"><div style={{fontSize:'1.2rem', fontWeight:100, color:'#000', width: 100}}>Lựa chọn 2: </div> {item.productSelect2}</div>
              </div>
              {/* <div className="content__feature-name col-md-1">
                          <>
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 80}}>Kích thước: </li>
                      <select 
                      style={{width: 100, height:30, fontSize: '1.4rem'}}
                      value={productSelect1}
                      onChange={(e) => setProductSelect1(e.target.value)}>
                          <option value={item.size.size1}>{item.size.size1}</option>
                          <option value={item.size.size2}>{item.size.size2}</option>
                          <option value={item.size.size3}>{item.size.size3}</option>
                          {item.size.size4 ? (<option value={item.size.size4}>{item.size.size4}</option>) : ''}
                          {item.size.size5 ? (<option value={item.size.size5}>{item.size.size5}</option>) : ''}
                      </select>
                          </>
                      </div>
                      <div className="content__feature-name col-md-1 center">
                        <>
                      <li style={{fontSize: '1.4rem', fontWeight: 'bold', width: 80}}>Màu sắc: </li>
                      <select 
                      style={{width: 100, height:30, fontSize: '1.4rem'}}
                      value={productSelect2}
                      onChange={(e) => setProductSelect2(e.target.value)}>
                          <option value={item.color.color1}>{item.color.color1}</option>
                          <option value={item.color.color2}>{item.color.color2}</option>
                          <option value={item.color.color3}>{item.color.color3}</option>
                          {item.color.color4 ? (<option value={item.color.color4}>{item.color.color4}</option>) : ''}
                          {item.color.color5 ? (<option value={item.color.color5}>{item.color.color5}</option>) : ''}
                      </select>
                        </>
                    </div> */}
              <div className="content__feature-text d-flex" style={{fontSize: '1.2rem'}}>
                <div className="price d-flex"><div style={{fontSize:'1.2rem', fontWeight:100, color:'#000', width:100}}>Giá gốc: </div>{Intl.NumberFormat('de-DE').format(item.price)}¥</div>
                <div className="price ml-3 mr-2" style={{ color: '#ccc', textDecoration: 'line-through', textDecorationColor:'#000' }}>{Intl.NumberFormat('de-DE').format(item.saleprice)}¥</div>
              </div>
              <div className="quantity-controls d-flex">
              <div style={{fontSize:'1.2rem', fontWeight:100, color:'#000', width: 100}}>Số lượng: </div>
                <button onClick={() => {
                handleDecreaseQuantity(item.productCode)
                }}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => {
                  handleIncreaseQuantity(item.productCode)
                  }}>+</button>
            </div>
            <div className="content__feature-text d-flex total-product-price" style={{fontSize: '1.2rem'}}>
            <div className="price d-flex"><div style={{fontSize:'1.2rem', fontWeight:100, color:'#000', width: 100}}>Tổng: </div> {Intl.NumberFormat('de-DE').format((item.price * item.quantity).toFixed(2))}¥</div>
            </div>
            </div>
            <button className="delete-button d-flex" onClick={() => removeFromCart(item.productCode)}><i class="fa-solid fa-xmark"></i></button>
              </div>
            // </div>
          )
    })}
        </div>
      ) : (
        <>
        <div className="d-flex justify-content-center flex-column">
          <i className="fa-solid fa-cart-shopping" style={{color: "#FF3131", fontSize: '10rem'}} />
          <p  style={{color: "#FF3131", fontSize: '3rem'}}>Giỏ hàng trống</p>
        </div>
        </>
      )}
          <div className="cart-summary">
            <p>Tổng: {Intl.NumberFormat('de-DE').format(totalPrice.toFixed(3))}¥<small style={{fontSize: '1.2rem'}}> (Đã bao gồm 8% VAT)</small></p>
            <div className="cart-buttons">
              <button onClick={() => setModalShow(true)} className="contact-button">Đặt hàng</button>
              <MassageThaiVanLung1Modal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
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
                  <Link className="breadcrumb__title" to="/cart/">
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