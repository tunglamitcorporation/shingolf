import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useContext } from "react"
import ProductHistoryContext from "../../ProductHistoryContext";
import { useNavigate } from 'react-router-dom';

const RankTable = ({fetchData}) => {
  // Sort products by rate in descending order
  const navigate = useNavigate()
  const sortedData = [...fetchData].sort((a, b) => b.rate - a.rate);

  const { addProductToHistory } = useContext(ProductHistoryContext);

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
  return (
    <div className="container" style={{width: "80%"}}>
      <div className="service__header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>XẾP HẠNG</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {sortedData.map((product, index) => (
          <div className="col-md-4 mb-4" key={product.productCode} onClick={() => handleProduct(product)}>
            <div className="card position-relative">
            <img src={`https://shingolf.vn/image/product/image/${product.productCode}_image1.png`} className="card-img-top" alt={product.productName} />
              <span className="badge badge-primary position-absolute d-flex align-items-center justify-content-center" style={{width:'40px', height: '40px', fontSize: '1.6rem', backgroundColor: '#ff3131'}}>{index + 1}</span>
              <div className="card-body">
                <div className="content__feature-name"><div>{product.productName}</div></div>
                <p className="">Price: {product.price}đ</p>
                <p className="">Rating: {product.rate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RankTable;
