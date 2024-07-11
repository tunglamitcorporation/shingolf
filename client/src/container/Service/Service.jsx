import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";
import ProductHistoryContext from "../../ProductHistoryContext";
import { useCart } from "../../CartProvider";
import AlertComponent from "../../Alert";

export default function VietnamService({ fetchData, listMenu }) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { productName } = useParams();
  const location = useLocation();
  const { price, id, selectedCategories = [] } = location.state || {};
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProductId, setSelectedProductId] = useState('')
  console.log("🚀 ~ VietnamService ~ selectedProductId:", selectedProductId)
  console.log("🚀 ~ VietnamService ~ selectedCategory:", selectedCategory)
  const [visible, setVisible] = useState(true);
  const { addProductToHistory } = useContext(ProductHistoryContext);
  const { addToCart } = useCart();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [show]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShow(true);
  };

  const convertListMenu = [];
  for (const [title, items] of Object.entries(listMenu)) {
    items.forEach((item, index) => {
      if (index === 0) {
        convertListMenu.push({ title, item });
      } else {
        convertListMenu.push({ title: '', item });
      }
    });
  }

  const filteredProducts = selectedCategories.length > 0
    ? fetchData.filter(product => selectedCategories.includes(product.productType))
    : fetchData.filter(product => product.category === "Gậy golf mới");

    const handleCategoryClick = (item) => {
      const selectedProduct = item.item;
      const selectedProductTitle = item.title
      setSelectedCategory(''); 
      setVisible(false); 
      setTimeout(() => {
        setSelectedCategory(selectedProduct);
        setSelectedProductId(selectedProductTitle)
      }, 0);
    };

  const formatProductName = (name) => {
    return name.replace(/\s/g, '-');
  };

  const handleProduct = (product) => {
    addProductToHistory(product);
    const formattedProductName = formatProductName(product.productName);
    navigate(`/product/${formattedProductName}`, {
      state: {
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
      }
    });
  };

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

  const renderProduct = (product) => (
    <div key={product.productId} className="col-6 col-md-2 p-3">
      <div style={{ textDecoration: 'none' }}>
        <div className="content__feature-item product-container" style={{ overflow: 'hidden' }}>
          {product.saleprice > 0 && (
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: '50px', height: '50px', position: 'absolute', backgroundColor: '#ff3131', color: '#fff', fontSize: '1.4rem', fontWeight: 'bold', zIndex: 999 }}>
              <div>Sale</div>
              <div>{((product.price - product.saleprice) / product.price * 100).toFixed(0)}%</div>
            </div>
          )}
          <div className="content__feature-container">
            <div
              onClick={() => handleProduct(product)}
              className="content__feature-img"
              style={{
                backgroundImage: `url(https://shingolf.vn/image/product/image/${product.productCode}_image1.png)`,
              }}
              title={product.productCode}
            />
          </div>
          <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
            <div className="d-flex justify-content-between align-items-center">
              <StarRating rate={product.rate} />
            </div>
            <div className="content__feature-name mt-2">
              <div onClick={() => handleProduct(product)}>{product.productName}</div>
            </div>
            {product.saleprice > 0 ? (
              <div className="content__feature-text d-flex">
                <div className="price mr-3">{Intl.NumberFormat('de-DE').format(product.saleprice)}¥</div>
                <div className="price" style={{ color: '#000', textDecoration: 'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              </div>
            ) : (
              <div className="content__feature-text d-flex">
                <div className="price" style={{ color: '#000' }}>{Intl.NumberFormat('de-DE').format(product.price)}¥</div>
              </div>
            )}
            <div className="d-flex justify-content-center align-items-center" style={{ width: 'fit-content', height: '20px', padding: '5px', border: '1px solid green', fontSize: '1rem', color: 'green', marginTop: '5px', borderRadius: '5px', textTransform: 'capitalize' }}>{product.brand}</div>
          </div>
          <div className="btn-container">
            <div className="row pb-0">
              <div className="col-md-12 p-0">
                <div onClick={() => handleAddToCart(product)} className="buy-btn" style={{ backgroundColor: '#ccc' }}>
                  THÊM VÀO GIỎ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <HelmetLayout />
      {show && (
        <AlertComponent message='Đã thêm sản phẩm vào giỏ hàng' />
      )}
      <div className="service__header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>SẢN PHẨM</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="content__feature">
        <div className="d-flex justify-content-between">
          <div className="list-container" style={{ backgroundColor: '#f6f6f6', width: '20%', marginLeft: '100px' }}>
            <div className="container">
              <div className="row">
                <div className="all-list"><i className="fa-solid fa-bars"></i> DANH MỤC</div>
                {convertListMenu.map(item => (
                  <div className="row ml-5 p-0" key={item.item}>
                    <h3 className="bold mt-3" style={{ display: item.title !== '' ? 'block' : 'none' }}>{item.title}</h3>
                    <div className="row justify-content-evenly">
                      <Link className="list-item" to="#" onClick={() => handleCategoryClick(item)}>{item.item}</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="re__breadcrumb">
                    <ul className="breadcrumb__list">
                      <li className="breadcrumb__item">
                        <Link to="/">
                          <i className="fa-solid fa-house" />
                        </Link>
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
              <div className="row">
                <select className="col-md-2 col-4 ml-3 form__content select-category" onChange={handleCategoryClick}>
                  <option value="">Danh mục</option>
                  {Object.keys(listMenu).map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="row">
                <div>
                  <div className="row">
                    {fetchData
                      .filter(product => 
                        product.productType === selectedCategory &&
                        product.category === selectedProductId)
                      .map(product => renderProduct(product))}
                  </div>
                  <div className="row" style={{ display: visible ? 'flex' : 'none' }}>
                    {filteredProducts.map(product => renderProduct(product))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
