import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };
  const increaseQuantity = (productId) => {
    let updatedQuantity;
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === productId) {
          updatedQuantity = item.quantity + 1;
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      })
    );
    return updatedQuantity;
  };

  const decreaseQuantity = (productId) => {
    let updatedQuantity;
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === productId && item.quantity > 1) {
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
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
