import { Link, useNavigate} from "react-router-dom";
import { useSSR, useTranslation } from "react-i18next";
import { useState, useEffect, useContext } from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import Cookies from "js-cookie";
import logo from '../../image/logo.jpg'
import axios from "axios";
import ProductHistoryContext from "../../ProductHistoryContext";
import { useCart } from "../../CartProvider";
import { makeListMenu } from "../../api/product";
import { takeAll } from "../../api/product";
function Header() {
  const { t, i18n } = useTranslation();
  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  //   Cookies.set('selectedLanguage', lng, {expires: 365})
    
  // };
  const { addProductToHistory } = useContext(ProductHistoryContext);
  const [isOpen, setIsOpen] = useState(false)
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState('')
  const { cartCount } = useCart();
  const { cartItems } = useCart();
  const navigate = useNavigate()
  // const { addProductToHistory } = useContext(ProductHistoryContext);
  const [fetchData, setFetchData] = useState([])
  useEffect(() => {
    const token = ''; 
    takeAll(token)
        .then(response => {
            setFetchData(response.data.data);
            console.log('Data received:', response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}, []);

  const toggleHeader = () => {
      setIsOpen(!isOpen)
  }
  useEffect(()=>{
    if(isOpen) {
      document.body.style.position= "fixed";
    }else{
      document.body.style.position = "";
    }
  })
 
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
    setSearchTerm('')
  }
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  // const filterProducts = (data, term) => {
  //   const lowercasedTerm = term.toLowerCase();
  //   return data.filter((product) =>
  //     product.productName.toLowerCase().includes(lowercasedTerm)
  //   );
  // };
  const filteredProducts = fetchData.filter(product =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const filteredProducts = filterProducts(fetchData, searchTerm);
  const HeaderMobile = () => {
    return(
    <ul className={`header__mobile-navbar-list ${isOpen ? 'open' :''}`}>
          <button
            onClick={()=> setIsOpen(false)}
            className="header__mobile-navbar-closed"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <li className="header__mobile-navbar-item">
            <Link
              onClick={()=> setIsOpen(false)}
              Link
              to="/"
              className="header__mobile-navbar-link"
            >
              TRANG CHỦ 
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              onClick={()=> setIsOpen(false)}
              Link
              to="/product-list/"
              className="header__mobile-navbar-link"
            >
             SẢN PHẨM
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to=""
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              GIỚI THIỆU 
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to=""
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              LIÊN HỆ
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to="/check-order/"
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              KIỂM TRA ĐƠN HÀNG
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to=""
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              TIN TỨC GOLF
            </Link>
          </li>
          <li className="header__mobile-navbar-item">
            <Link
              to=""
              onClick={()=> setIsOpen(false)}
              className="header__mobile-navbar-link"
            >
              TRUYỀN HÌNH GOLF
            </Link>
          </li>
        </ul>
    )
  }
    
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
  const [active, setActive] = useState(false)
  const handleActive = () => {
    setActive(!active)
  }
  return (
    <>
      <div className='top-header'>
                <div className='container-fluid'>
                    <div className='row align-items-center'>
                    <div className="col-md-6">
                        <div className="header-text">Liên hệ: 0564.545.545</div>
                        <div className="header-text">Tỉ giá hôm nay: {exchangeRate}</div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                      <div className="d-flex align-items-center">
                        <div className="search-bar d-flex align-items-center">
                              <input  
                              type="text"
                              placeholder="Tìm kiếm"
                              value={searchTerm}
                              onChange={handleChange}
                              className="input-style"
                            />
                             <div className="search-bar-icon d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            {searchTerm && (
                                <div className="results">
                                  {filteredProducts.length > 0 ? (
                                    filteredProducts.map((product) => (
                                      <div
                                        key={product.productId}
                                        className="productItem"
                                        onClick={() => handleProduct(product)}
                                      >
                                        <div className="d-flex">
                                        <img src={`https://shingolf.vn/image/product/image/${product.productCode}_image1.png`} style={{width: 50, height: 50}} />
                                        <div className="ml-3 search-productName">{product.productName}</div>
                                        </div>
                                        <div className="search-price">Giá: {product.price}¥</div>
                                      </div>
                                    ))
                                  ) : (
                                    <div className="noProducts">No products found</div>
                                  )}
                                </div>
                              )}
                    {/* <select
                        className="header-list"
                        onChange={(e) => {
                          setSelectedCategories(e.target.value)
                          const formattedProductId = formatProductName(e.target.value);
                          navigate(`/product-list/${formattedProductId}`, { state: { id: e.target.value } });
                        }}
                        > */}
                        {/* <option value=''>Tất cả</option>  */}
                        {/* <option value=''>Loại sản phẩm</option>
                        <option value='newgolfclub'>Gậy golf mới</option>
                        <option value='oldgolfclub'>Gây golf cũ</option>
                        <option value='grip'>Cán gậy/ Grip</option>
                        <option value='mengolfclothes'>Quần áo golf nam</option>
                        <option value='womengolfclothes'>Quần áo golf nữ</option>
                        <option value='accessories'>Phụ kiện golf</option>
                        <option value='golfbag'>Túi golf</option>
                        <option value='golfshoes'>Giày golf</option>
                        <option value='golftraining'>Dụng cụ luyện tập</option> */}
                     {/* </select> */}
                        </div>
                        <Link to = "/cart/"className="header-link"><i className="fa-solid fa-cart-shopping" style={{color: "#fff", fontSize: '2rem'}} /></Link>
                        {cartItems.length > 0 && <div className="cart-number">{cartItems.length}</div>}

                        </div>
                      </div>
                        </div>
                    </div>
                </div>
                <div className="header_container">
      <div className="header-2">
          <div className="d-flex align-items-center justify-content-between ml-3 mr-3">
            <div className="btn__header-mobile">
          <button
           onClick={toggleHeader}
           className="header__mobile">
            <i className="fa-solid fa-bars"></i>
          </button>
            </div>
              <div className="header__mobile-logo">
                <Link to="/">
                  <img
                    src={logo}
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="header-cart">
              <Link to = "/cart/"className="header-link"><i className="fa-solid fa-cart-shopping" style={{color: "#FF3131", fontSize: '2rem'}} /></Link>
              {cartItems.length > 0 && <div className="cart-number">{cartItems.length}</div>}

            </div>
        </div>
        <div className="d-flex mb-5 align-items-center">
          <div className="col-md-6 ml-3 p-0">
          <div className="search-bar d-flex align-items-center justify-content-between">
            <div className="d-flex">
                             <input  
                              type="text"
                              placeholder="Search products"
                              value={searchTerm}
                              onChange={handleChange}
                              className="input-style"
                            />
                            <div className="search-bar-icon d-flex justify-content-center align-items-center">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            {searchTerm && (
                                <div className="results">
                                  {filteredProducts.length > 0 ? (
                                    filteredProducts.map((product) => (
                                      <div
                                        key={product.productId}
                                        className="productItem"
                                        onClick={() => handleProduct(product)}
                                      >
                                        <div className="d-flex">
                                        <img src={`https://shingolf.vn/image/product/image/${product.productCode}_image1.png`} style={{width: 50, height: 50}} />
                                        <div className="ml-3 search-productName">{product.productName}</div>
                                        </div>
                                        <div className="search-price">Giá: {product.price}¥</div>
                                      </div>
                                    ))
                                  ) : (
                                    <div className="noProducts">No products found</div>
                                  )}
                                </div>
                              )}

            </div>
                            <div className="d-flex">
            <a href="tel:0564545545" className="text-decoration-none d-flex align-items-center phone-container">
              <i class="fa-solid fa-phone mr-3" style={{color:'#ff3131', fontSize: '2rem'}}></i>
              {/* <div>0123141235</div> */}
            </a>
            <a href="" className="text-decoration-none d-flex align-items-center phone-container">
            <i class="fa-solid fa-globe mr-3" style={{color:'#ff3131', fontSize: '2rem'}}></i>
              {/* <div>ShinGolf</div> */}
            </a>
            <a href="" className="text-decoration-none d-flex align-items-center phone-container">
            <i class="fa-brands fa-facebook mr-3" style={{color: '#0866FF', fontSize: '2rem'}}></i>
              {/* <div>ShinGolf</div> */}
            </a>
          </div>
                            </div>
                            <div className="mt-2" style={{fontSize: "1.4rem", fontWeight:'bold'}}>Tỉ giá hôm nay:  {exchangeRate}</div>
                          
          </div>
        </div>
        
      </div>
      </div>
        <HeaderMobile />
     <div className="container-fluid header-container-all">
      <div className="header">
        <Tabs
        className="header__PC">
             <TabList className="header__navbar-list mb-0 justify-content-start">
             <Tab className="header__navbar-item">
             <div className="header__logo">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <Link to="/">
                    <img
                      src={logo}
                      alt="logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
                </Tab>
               
              </TabList>      
                  <TabList className="header__navbar-list mb-0">
                  <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/">
                        TRANG CHỦ
                      </Link>
                    </Tab>
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/product-list/">
                        SẢN PHẨM
                      </Link>
                    </Tab>
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/">
                        GIỚI THIỆU
                      </Link>
                    </Tab>
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/">
                        LIÊN HỆ
                      </Link>
                    </Tab>
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/check-order/">
                        KIỂM TRA ĐƠN HÀNG
                      </Link>
                    </Tab>
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/">
                        TIN TỨC GOLF
                      </Link>
                    </Tab>
                    <Tab className="header__navbar-item">
                      <Link className="header__navbar-link-2" to="/">
                       TRUYỀN HÌNH GOLF
                      </Link>
                    </Tab>
                  </TabList>
                  </Tabs>
            </div>
          </div>
    </>
  );
}
export default Header;
