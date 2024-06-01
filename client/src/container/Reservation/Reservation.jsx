import React from 'react';

const Cart = () => {
  // Sample cart items
  const items = [
    { id: 1, name: 'Item 1', price: 29.99, quantity: 1 },
    { id: 2, name: 'Item 2', price: 49.99, quantity: 2 },
  ];

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>${item.price}</span>
            <span>Qty: {item.quantity}</span>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Summary</h2>
        <p>Total: ${items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;