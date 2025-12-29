import React, { useState } from 'react';
import './CartTable.css';
import shoe from '../../Assets/shoe.png';

const CartTable = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'CGC NEW BLU', size: 39, price: 36500.00, quantity: 1, image: {shoe} },
    { id: 2, name: 'CGC NEW BLU', size: 39, price: 36500.00, quantity: 1, image: {shoe} },
    { id: 3, name: 'CGC NEW BLU', size: 39, price: 36500.00, quantity: 1, image: {shoe} },
    { id: 4, name: 'CGC NEW BLU', size: 39, price: 36500.00, quantity: 1, image: {shoe} },
    { id: 5, name: 'CGC NEW BLU', size: 39, price: 36500.00, quantity: 1, image: {shoe} }
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const formatPrice = (price) => {
    return `Rs.${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="cart-container">
      <div className="cart-table">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-row">
            <div className="cart-cell product-cell">
              <div className="product-label">Product</div>
              <div className="product-info">
                <img src={item.image} alt={item.name} className="product-image" />
                <div className="product-details">
                  <h3 className="product-name">{item.name}</h3>
                  <p className="product-size">{item.size}</p>
                  <p className="product-price">{formatPrice(item.price)}</p>
                </div>
              </div>
            </div>

            <div className="cart-cell quantity-cell">
              <div className="quantity-label">Quantity</div>
              <div className="quantity-controls">
                <button 
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, -1)}
                  disabled={item.quantity <= 1}
                >
                  −
                </button>
                <span className="quantity-value">{item.quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="cart-cell total-cell">
              <div className="total-label">Total</div>
              <div className="total-content">
                <span className="total-price">{formatPrice(item.price * item.quantity)}</span>
                <button 
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                  aria-label="Remove item"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartTable;