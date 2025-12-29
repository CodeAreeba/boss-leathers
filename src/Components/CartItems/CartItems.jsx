import React from "react";
import "./CartItems.css";

const Cart = () => {
  return (
    <section className="cart-section">
      <h1 className="cart-title">Your Cart</h1>

      <div className="cart-layout">
        <div className="cart-table">
          <div className="cart-header">
            <span>Product</span>
            <span>Quantity</span>
            <span>Total</span>
            <span></span>
          </div>

          <div className="cart-row">
            <div className="product-info">
              <div className="product-image"></div>
              <div>
                <p className="product-name">CGC NEW BLU</p>
                <p className="product-size">39</p>
                <p className="product-price">Rs.36,500.00</p>
              </div>
            </div>

            <div className="quantity-box">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>

            <div className="row-total">Rs.36,500.00</div>

            <div className="delete-icon">🗑</div>
          </div>
        </div>

        <div className="cart-summary">
          <div className="summary-row">
            <span>Subtotal</span>
            <span className="summary-price">Rs.36,500.00</span>
          </div>

          <p className="summary-note">
            Taxes and shipping calculated at checkout
          </p>

          <button className="checkout-btn">CHECK OUT</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
