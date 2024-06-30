import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, productSelect1, productSelect2) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.productCode === product.productCode &&
      item.productSelect1 === productSelect1 &&
      item.productSelect2 === productSelect2);
      if (existingProduct) {
        return prevItems.map((item) =>
          item.productCode === product.productCode &&
        item.productSelect1 === productSelect1 &&
        item.productSelect2 === productSelect2
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, productSelect1, productSelect2, quantity: 1 }];
      }
    });
  };
  const increaseQuantity = (productCode) => {
    let updatedQuantity;
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.productCode === productCode) {
          updatedQuantity = item.quantity + 1;
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      })
    );
    return updatedQuantity;
  };

  const decreaseQuantity = (productCode) => {
    let updatedQuantity;
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.productCode === productCode && item.quantity > 1) {
          updatedQuantity = item.quantity - 1;
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      })
    );
    return updatedQuantity;
  }
  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (productCode) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.productCode !== productCode)
    );
    localStorage.removeItem('cartItems')
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
