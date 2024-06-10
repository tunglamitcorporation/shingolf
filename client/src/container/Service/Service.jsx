import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import HelmetLayout from "../../components/HelmetLayout/HelmetLayout";
import Collapsible from 'react-collapsible'
import ProductHistoryContext from "../../ProductHistoryContext";

const productData = {
  "newGolfStick":[
    {
      id: 'golfsticknew',
      productName: 'Gậy Driver Honma BERES-08 Aizu 3* 10.5R - MIX DYNAMIC',
      price: '10'
    },

  ],
   "golfClothesMen":[
     {
       id:'golfclothesmen',
       productName: 'Áo Mens UA Matchplay Stripe Polo',
       price: '40'
     }

   ],
   "golfBag": [
     {
       id:'golfbag',
       productName: 'Túi đựng gậy Puma Tour Stand Bag 24P.BLK',
       price: '60'
     }

   ]
}
export default function VietnamService() {
  const navigate = useNavigate()
  const {t, i18n} = useTranslation()
  const { productName } = useParams();
  const location = useLocation();
  const { price, id } = location.state || {};
  const { addProductToHistory } = useContext(ProductHistoryContext);
  const formatProductName = (name) => {
    return name.replace(/\s/g, '-');
  };
  const handleProduct = (product) => {
    addProductToHistory(product);
    const formattedProductName = formatProductName(product.productName);
    navigate(`/feature/${formattedProductName}`, { state: { price: product.price, id: product.id } });
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
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-3 mt-5 list-container" style={{backgroundColor: '#f6f6f6'}}>
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
            <div className="col-md-9">
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
                    {productData.golfBag.map(product => {
                      {if (product.id == id) {
                        return (
                          <div className="col-6 col-md-3" onClick={()=> handleProduct(product)}>
                          <div className="content__feature-item">
                            <div className="content__feature-container">
                              <div
                                className="content__feature-img"
                                style={{ backgroundImage: "url(https://product.hstatic.net/200000836511/product/823066_90970001-6_17736afeb40749fe82cc135b7e3ea67e_1024x1024.jpg)"}}
                              >
                              </div>
                            </div>
                            <div className="content__feature-name">
                              {product.id}
                              <div>{product.productName}</div>
                            </div>
                            <div className="content__feature-text d-md-flex">
                            <div className="price">20.500.200đ {product.price}</div>
                            <div className="price ml-md-2 strikethrough"style={{color: "#ccc"}}>22.778.000đ</div>
                            </div>
                            <div className="btn-container">
                              <div className="row">
                                <div className="col-md-6 p-0">
                                <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                                </div>
                                <div className="col-md-6 p-0">
                                <Link to = ""className="buy-btn">MUA NGAY</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        )
                      }  else if (id == null) {
                        return (
                          <div className="col-6 col-md-3" onClick={()=> handleProduct(product)}>
                          <div className="content__feature-item">
                            <div className="content__feature-container">
                              <div
                                className="content__feature-img"
                                style={{ backgroundImage: "url(https://product.hstatic.net/200000836511/product/823066_90970001-6_17736afeb40749fe82cc135b7e3ea67e_1024x1024.jpg)"}}
                              >
                              </div>
                            </div>
                            <div className="content__feature-name">
                              {product.id}
                              <div href="">{product.productName}</div>
                            </div>
                            <div className="content__feature-text d-md-flex">
                            <div className="price">20.500.200đ {product.price}</div>
                            <div className="price ml-md-2 strikethrough"style={{color: "#ccc"}}>22.778.000đ</div>
                            </div>
                            <div className="btn-container">
                              <div className="row">
                                <div className="col-md-6 p-0">
                                <Link to = "" className="buy-btn" style={{backgroundColor:'#ccc'}}>THÊM VÀO GIỎ</Link>
                                </div>
                                <div className="col-md-6 p-0">
                                <Link to = ""className="buy-btn">MUA NGAY</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        )
                      }

}})}

            </div>
          </div>
            </div>
          </div>
        </div>
         
        </div>
    </>
  );
}
