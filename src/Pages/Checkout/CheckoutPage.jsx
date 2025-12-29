import React from 'react';
import './CheckoutPage.css';
import CheckoutForm from '../../Components/CheckoutForm/CheckoutForm';
import CartTable from '../../Components/CheckoutForm/CartTable';

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <div className="checkout-wrapper">
        <div className="checkout-left">
          <CheckoutForm />
        </div>
        
        <div className="checkout-right">
          {/* <CartTable /> */}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;