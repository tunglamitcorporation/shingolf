import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";
import Collapsible from 'react-collapsible'
import { makeListMenu } from "../../api/product";

export default function VietnamService({fetchData, listMenu}) {
  const navigate = useNavigate()
  const {t, i18n} = useTranslation()
  const { productName } = useParams();
  const location = useLocation();
  const { price, id, selectedCategories =[]} = location.state || {};
  const checkId = id || 'newgolfclub'
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProductType, setSelectedProductType] = useState('');
  const [visible, setVisible] = useState (true)

  const convertListMenu = []
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
  ? fetchData.filter(product =>
    selectedCategories.includes(product.productType) 
  )
  : fetchData.filter(product => product.productId === checkId)

  const handleCategoryClick = (product) => (event) => {
    event.preventDefault();
    setSelectedCategory(product);
    setVisible(false)
  };
  console.log(selectedCategory);
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
  const StarRating = ({ rate }) => {
    const fullStars = Math.floor(rate);
    const halfStar = rate % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
    return (
      <div>
        {[...Array(fullStars)].map((_, index) => (
          <i
            key={index}
            style={{ fontSize: '1.4rem', color: '#fec800', marginTop: 10 }}
            className="fa-solid fa-star"
          ></i>
        ))}
        {halfStar && (
          <i
            style={{ fontSize: '1.4rem', color: '#fec800', marginTop: 10 }}
            className="fa-solid fa-star-half-alt"
          ></i>
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <i
            key={fullStars + index + 1}
            style={{ fontSize: '1.4rem', color: '#dcdcdc', marginTop: 10 }}
            className="fa-solid fa-star"
          ></i>
        ))}
      </div>
    );
  };
  const renderProduct = (product) => (
    <div key={product.productId} className="col-6 col-md-3 p-3" >
      <div style={{ textDecoration: 'none' }}>
        <div className="content__feature-item product-container" style={{ overflow: 'hidden' }}>
          <div className="content__feature-container">
            <div
              onClick={() => handleProduct(product)}
              className="content__feature-img"
              style={{ backgroundImage: `url(${product.image})` }}
            >
              <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: '50px', height: '50px', position: 'absolute', right: 0, backgroundColor: '#fec800', color: '#ff3131', fontSize: '1.4rem', fontWeight: 'bold' }}>
                <div>Sale</div>
                <div>{((product.price - product.saleprice) / product.price * 100).toFixed(0)}%</div>
              </div>
            </div>
          </div>
          <div style={{ padding: '10px' }}>
            <div className="d-flex justify-content-between align-items-center">
              <StarRating rate={product.rate} />
              <div className="d-flex justify-content-center align-items-center" style={{ width: 'fit-content', height: '30px', padding: '10px', border: '1px solid green', fontSize: '1.4rem', color: 'green', marginTop: '10px', borderRadius: '10px' }}>{product.rank}</div>
            </div>
            <div className="content__feature-name">

              <div className="wrapper" onClick={() => handleProduct(product)}>{product.productName} </div>
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
                <div onClick={() => addToCart(product)} className="buy-btn" style={{ backgroundColor: '#ccc' }}>
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
  );
    // const [sortedProducts, setSortedProducts] = useState(selectedCategory);
    // const [sortOption, setSortOption] = useState('none'); 
  
    // const sortByPriceHigh = () => {
    //   const sorted = [...fetchData].sort((a, b) => b.saleprice - a.saleprice);
    //   setSortedProducts(sorted);
    //   setSortOption('priceHigh');
    //   setVisible(false)
    // };
  
    // const sortByPriceLow = () => {
    //   const sorted = [...fetchData].sort((a, b) => a.saleprice - b.saleprice);
    //   setSortedProducts(sorted);
    //   setSortOption('priceLow');
    //   setVisible(false)

    // };
  
    // const sortByRateHigh = () => {
    //   const sorted = [...fetchData].sort((a, b) => b.rate - a.rate);
    //   setSortedProducts(sorted);
    //   setSortOption('rateHigh');
    //   setVisible(false)

    // };
  
    // const sortByRateLow = () => {
    //   const sorted = [...fetchData].sort((a, b) => a.rate - b.rate);
    //   setSortedProducts(sorted);
    //   setSortOption('rateLow');
    //   setVisible(false)

    // };
    // const resetSorting = () => {
    //   setSortedProducts(fetchData);
    //   setSortOption('none');
    //   setVisible(false)

    // }
  return (
    <>
    <HelmetLayout />
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
            <div className="list-container" style={{backgroundColor: '#f6f6f6', width:'20%', marginLeft: '100px'}}>
              <div className="container">
                <div className="row">
              <div className="all-list"><i class="fa-solid fa-bars"></i> DANH MỤC</div>
              {convertListMenu.map(item => (
              <div className="row ml-5 p-0">
                <h3 className="bold mt-3" style={{display: item.title != '' ? 'block' : 'none'}}>{item.title}</h3>
                <div className="row justify-content-evenly">
                <Link className="list-item" to ="#" onClick={handleCategoryClick(item.item)}>{item.item}</Link>
                </div>
                </div>
              ))}
              </div>
              </div>
            </div>
            <div style={{width: '100%'}}>
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
      </div>
            <div className="container">
            <div className="row">
            {/* <div className="sort-list-container mb-5">
              Sắp xếp
                    <select
                        className="sort-list"
                        >
                        <option onClick={resetSorting}>Mới nhất</option>
                        <option onClick={sortByRateHigh}>Đánh giá</option>
                        <option onClick={sortByPriceLow}>Giá thấp đến cao</option>
                        <option onClick={sortByPriceHigh}>Giá cao đến thấp</option>
                     </select>
                    </div> */}
                    <div>
                    {/* <div style={{display: visible == true ? 'none' : 'block'}}>
                      <div className="row">
                      {sortedProducts.map(product => renderProduct(product))}
                      </div>
                    </div> */}
                    {/* <div style={{display: visible == true ? 'block' : 'none'}}> */}
                     
                        <div className="row">
                          {fetchData
                            .filter(product => product.productType === selectedCategory)
                            .map(product => renderProduct(product))}
                        </div>
                        <div className="row" style={{display: visible ? 'flex' : 'none'}}>
                          {filteredProducts.map(product => renderProduct(product))}
                        </div>
                      </div>
                    </div>
                    </div>
            </div>
          </div>
            </div>
        {/* </div> */}
         
    </>
  );
}
