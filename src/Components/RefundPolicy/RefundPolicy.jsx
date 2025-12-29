import React from "react";
import "./RefundPolicy.css";

const RefundPolicy = () => {
  return (
    <div className="refund-policy">
      <h1 className="refund-title">REFUND POLICY</h1>

      <div className="policy-section">
        <h3>Exchange policy:</h3>
        <p>
          Contact our customer service team within 24 hours of receiving your
          order
        </p>
      </div>

      <div className="policy-section">
        <h3>Return policy:</h3>
        <p>Please notify us within 24 hours of receiving your order</p>
        <p>We will give you an exchange within 5 business days</p>
      </div>

      <div className="policy-section">
        <h3>Conditions:</h3>
        <p>
          Exchange must be initiated within 24 hours of receiving your order
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
