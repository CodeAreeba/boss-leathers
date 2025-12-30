import React from 'react';
import './CheckoutPage.css';
import CheckoutForm from '../../Components/CheckoutForm/CheckoutForm';
import BossForm from '../../Components/BossForm/BossForm';

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <div className="checkout-wrapper">
        <div className="checkout-left">
          <CheckoutForm />
        </div>
        
        <div className="checkout-right">
          <BossForm />
      </div>
    </div>
    </div>
  );
};

export default CheckoutPage;