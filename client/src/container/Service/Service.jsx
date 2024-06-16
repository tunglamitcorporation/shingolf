import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";
import Collapsible from 'react-collapsible'
import ProductHistoryContext from "../../ProductHistoryContext";
const productData = [
  {
    id: 'newgolfclub',
    productName: 'Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC',
    image :['https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg','https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg'],
    price: 33500000,
    sale: 28475000,
    rate: 5,
    productType:'New',
    labels: ['Tất cả các loại gậy']
  },
  {
    id: 'newgolfclub',
    productName: 'Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC',
    image :'https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg',
    price: 33500000,
    sale: 28475000,
    rate: 5,
    productType:'New'
  },
  {
    id: 'newgolfclub',
    productName: 'Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC',
    image :'https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg',
    price: 33500000,
    sale: 28475000,
    rate: 5,
    productType:'New'
  },
  {
    id: 'newgolfclub',
    productName: 'Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC',
    image :'https://product.hstatic.net/200000836511/product/3c4ea287-73e9-4ef0-aeda-3c316aba9819_0376999ca01745a79b5756a1ce9b4d53_dd8c83f4aaa14a3284f7a47eba8aad2b_1024x1024.jpg',
    price: 33500000,
    sale: 28475000,
    rate: 5,
    productType:'New'
  },
   {
     id:'mengolfclothes',
     productName: 'Áo Mens UA Matchplay Stripe Polo',
     image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1377376-001_FC?rp=standard-0pad|pdpZoomDesktop&scl=0.72&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500',
    price: 3500000,
    sale: 2847500,
    rate: 4,
    productType:'Like New',
    labels: ['Tất cả quần áo golf nam']



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
export default function VietnamService() {
  const navigate = useNavigate()
  const {t, i18n} = useTranslation()
  const { productName } = useParams();
  const location = useLocation();
  const { price, id, selectedCategories =[], selectedLabels = {}} = location.state || {};
  // const selectedCategories = ["golfsticknew"];
  // const selectedLabels = {
  //   "golfsticknew": [
  //     "Tất cả các loại gậy"
  //   ]
  // };
  console.log(selectedCategories, selectedLabels);
  const { addProductToHistory } = useContext(ProductHistoryContext);
  const [selectedProductId, setSelectedProductId] = useState('newgolfclub')
  ;
  // const filteredProducts = productData.filter(product => {
  //   if (!selectedCategories.includes(product.id)) {
  //     return false; // Skip products not in selectedCategories
  //   }
  
  //   if (!product.labels || !Array.isArray(product.labels)) {
  //     return false; // Skip products without labels or if labels is not an array
  //   }
  
  //   if (!selectedLabels[product.id]) {
  //     return true; // No specific labels selected for this product, include it
  //   }
  
  //   // Check if any label of the product matches the selected labels
  //   return product.labels.some(label => selectedLabels[product.id].includes(label));
  // });
  
  // const selectedProduct = productData.filter(product => product.id === selectedProductId);

  const filteredProducts = selectedCategories.length > 0
  ? productData.filter(product =>
    selectedCategories.includes(product.id) &&
    product.labels && product.labels.some(label => selectedLabels[product.id]?.includes(label))
  )
  : productData.filter(product => product.id === selectedProductId);

  const handleProductClick = (id) => {
    setSelectedProductId(id);
  };
  const formatProductName = (name) => {
    return name.replace(/\s/g, '-');
  };
  const handleProduct = (product) => {
    addProductToHistory(product);
    const formattedProductName = formatProductName(product.productName);
    navigate(`/feature/${formattedProductName}`, { state: { price: product.price, productId: product.productId, sale: product.sale, rate: product.rate, image: product.image, productType: product.productType }});
  };
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
              <div className="row ml-5">
              <Link to ="" className="Collapsible list-item">Gậy Golf Mới</Link>
                <Link className="list-item" to = "/feature/">Tất cả các loại gậy</Link>
                <Link className="list-item" to = "/feature/">Gậy driver</Link>
                <Link className="list-item" to = "/feature/">Gậy gỗ</Link>
                <Link className="list-item" to = "/feature/">Gậy rescue/ hybrid</Link>
                <Link className="list-item" to = "/feature/">Gậy sắt lẻ</Link>
                <Link className="list-item" to = "/feature/">Set gậy sắt</Link>
                <Link className="list-item" to = "/feature/">Gậy kỹ thuật / wedgey</Link>
                <Link className="list-item" to = "/feature/">Gậy gạt/ Putter</Link>
                <Link className="list-item" to = "/feature/">Bộ gậy giá rẻ</Link>
                </div>
                <div className="row ml-5">
              <Link to ="" className="Collapsible list-item">Gậy Golf Cũ</Link>
                <Link className="list-item" to = "/feature/">Tất cả các loại gậy</Link>
                <Link className="list-item" to = "/feature/">Gậy driver</Link>
                <Link className="list-item" to = "/feature/">Gậy gỗ</Link>
                <Link className="list-item" to = "/feature/">Gậy rescue/ hybrid</Link>
                <Link className="list-item" to = "/feature/">Gậy sắt lẻ</Link>
                <Link className="list-item" to = "/feature/">Set gậy sắt</Link>
                <Link className="list-item" to = "/feature/">Gậy kỹ thuật / wedgey</Link>
                <Link className="list-item" to = "/feature/">Gậy gạt/ Putter</Link>
                <Link className="list-item" to = "/feature/">Bộ gậy giá rẻ</Link>
                </div>
                <div className="row ml-5">
              <Link to ="" className="Collapsible list-item">Gậy Golf Mới</Link>
                <Link className="list-item" to = "/feature/">Tất cả các loại gậy</Link>
                <Link className="list-item" to = "/feature/">Gậy driver</Link>
                <Link className="list-item" to = "/feature/">Gậy gỗ</Link>
                <Link className="list-item" to = "/feature/">Gậy rescue/ hybrid</Link>
                <Link className="list-item" to = "/feature/">Gậy sắt lẻ</Link>
                <Link className="list-item" to = "/feature/">Set gậy sắt</Link>
                <Link className="list-item" to = "/feature/">Gậy kỹ thuật / wedgey</Link>
                <Link className="list-item" to = "/feature/">Gậy gạt/ Putter</Link>
                <Link className="list-item" to = "/feature/">Bộ gậy giá rẻ</Link>
                </div>
                <div className="row ml-5">
              <Link to ="" className="Collapsible list-item">Gậy Golf Mới</Link>
                <Link className="list-item" to = "/feature/">Tất cả các loại gậy</Link>
                <Link className="list-item" to = "/feature/">Gậy driver</Link>
                <Link className="list-item" to = "/feature/">Gậy gỗ</Link>
                <Link className="list-item" to = "/feature/">Gậy rescue/ hybrid</Link>
                <Link className="list-item" to = "/feature/">Gậy sắt lẻ</Link>
                <Link className="list-item" to = "/feature/">Set gậy sắt</Link>
                <Link className="list-item" to = "/feature/">Gậy kỹ thuật / wedgey</Link>
                <Link className="list-item" to = "/feature/">Gậy gạt/ Putter</Link>
                <Link className="list-item" to = "/feature/">Bộ gậy giá rẻ</Link>
                </div>
                <div className="row ml-5">
              <Link to ="" className="Collapsible list-item">Gậy Golf Mới</Link>
                <Link className="list-item" to = "/feature/">Tất cả các loại gậy</Link>
                <Link className="list-item" to = "/feature/">Gậy driver</Link>
                <Link className="list-item" to = "/feature/">Gậy gỗ</Link>
                <Link className="list-item" to = "/feature/">Gậy rescue/ hybrid</Link>
                <Link className="list-item" to = "/feature/">Gậy sắt lẻ</Link>
                <Link className="list-item" to = "/feature/">Set gậy sắt</Link>
                <Link className="list-item" to = "/feature/">Gậy kỹ thuật / wedgey</Link>
                <Link className="list-item" to = "/feature/">Gậy gạt/ Putter</Link>
                <Link className="list-item" to = "/feature/">Bộ gậy giá rẻ</Link>
                </div>
                <div className="row ml-5">
              <Link to ="" className="Collapsible list-item">Gậy Golf Mới</Link>
                <Link className="list-item" to = "/feature/">Tất cả các loại gậy</Link>
                <Link className="list-item" to = "/feature/">Gậy driver</Link>
                <Link className="list-item" to = "/feature/">Gậy gỗ</Link>
                <Link className="list-item" to = "/feature/">Gậy rescue/ hybrid</Link>
                <Link className="list-item" to = "/feature/">Gậy sắt lẻ</Link>
                <Link className="list-item" to = "/feature/">Set gậy sắt</Link>
                <Link className="list-item" to = "/feature/">Gậy kỹ thuật / wedgey</Link>
                <Link className="list-item" to = "/feature/">Gậy gạt/ Putter</Link>
                <Link className="list-item" to = "/feature/">Bộ gậy giá rẻ</Link>
                </div>
                <div className="row ml-5">
              <Link to ="" className="Collapsible list-item">Gậy Golf Mới</Link>
                <Link className="list-item" to = "/feature/">Tất cả các loại gậy</Link>
                <Link className="list-item" to = "/feature/">Gậy driver</Link>
                <Link className="list-item" to = "/feature/">Gậy gỗ</Link>
                <Link className="list-item" to = "/feature/">Gậy rescue/ hybrid</Link>
                <Link className="list-item" to = "/feature/">Gậy sắt lẻ</Link>
                <Link className="list-item" to = "/feature/">Set gậy sắt</Link>
                <Link className="list-item" to = "/feature/">Gậy kỹ thuật / wedgey</Link>
                <Link className="list-item" to = "/feature/">Gậy gạt/ Putter</Link>
                <Link className="list-item" to = "/feature/">Bộ gậy giá rẻ</Link>
                </div>
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
                  <Link className="breadcrumb__title" to="/service/">
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
            <div className="sort-list-container">
              Sắp xếp
                    <select
                        className="sort-list"
                        >
                        <option>Mới nhất</option>
                        <option>Đánh giá</option>
                        <option>Giá thấp đến cao</option>
                        <option>Giá cao đến thấp</option>
                     </select>
                    </div>
                        {filteredProducts.map(product => (
                          <div key={product.id} className="col-6 col-md-3 p-3">
                          <div style={{ textDecoration: 'none' }}>
                            <div className="content__feature-item product-container" style={{overflow: 'hidden'}}>
                              <div className="content__feature-container">
                                <div
                                 onClick={() => handleProduct(product)}
                                  className="content__feature-img"
                                  style={{
                                    backgroundImage:
                                    `url(${product.image[0]})`,
                                    }}
                                >
                                  <div className="d-flex flex-column justify-content-center align-items-center" style={{width: '50px', height: '50px', position: 'absolute', right:0, backgroundColor: '#fec800', color: '#ff3131', fontSize:'1.4rem', fontWeight:'bold'}}>
                                  <div>Sale</div>
                                  <div>{((product.price - product.sale) / product.price * 100).toFixed(0)}%</div>
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
                                <div className="price">{Intl.NumberFormat('de-DE').format(product.sale)}đ</div>
                                <div className="price" style={{ color: '#000', textDecoration:'line-through' }}>{Intl.NumberFormat('de-DE').format(product.price)}đ</div>
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
                                  <div onClick={() => {
                                      addToCart(product)
                                      navigate('/cart/')
                                      }} className="buy-btn">
                                      MUA NGAY
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
         
    </>
  );
}
