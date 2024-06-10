import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function Page2() {
  const { productName } = useParams();
  const location = useLocation();
  const { price } = location.state || {};

  if (!price) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product Name: {productName}</p>
      <p>Price: {price}</p>
    </div>
  );
}

export default Page2;
