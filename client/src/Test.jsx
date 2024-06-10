import React from 'react';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    productName: 'test1',
    price: '10'
  },
  {
    productName: 'test2',
    price: '20'
  }
];

function Page1() {
  const navigate = useNavigate();

  const handleButtonClick = (product) => {
    navigate(`/test2/${product.productName}`, { state: { price: product.price } });
  };

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {data.map(product => (
          <li key={product.productName}>
            <button onClick={() => handleButtonClick(product)}>
              {product.productName}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page1;
