import React from "react";
import "./EmptyCart.css";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <h1 className="cart-title">Your Cart Is Empty</h1>

      <p className="breadcrumb">Home/Your Shopping Cart</p>

      <button className="continue-btn">CONTINUE SHOPPING</button>

      <h2 className="account-title">HAVE AN ACCOUNT?</h2>

      <p className="account-text">Log in to check out faster.</p>
    </div>
  );
};

export default EmptyCart;
