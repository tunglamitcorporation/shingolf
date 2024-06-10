import React, { createContext, useState } from 'react';

const ProductHistoryContext = createContext();

export const ProductHistoryProvider = ({ children }) => {
  const [productHistory, setProductHistory] = useState([]);

  const addProductToHistory = (product) => {
    // Check if the product already exists in the history
    const exists = productHistory.some(item => item.productName === product.productName);
    if (!exists) {
      setProductHistory((prevHistory) => [...prevHistory, product]);
    }
  };
  return (
    <ProductHistoryContext.Provider value={{ productHistory, addProductToHistory }}>
      {children}
    </ProductHistoryContext.Provider>
  );
};

export default ProductHistoryContext;
