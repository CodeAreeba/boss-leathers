import React, { useState } from 'react';
import './CheckoutForm.css';
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    emailOffers: false,
    country: 'Pakistan',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    postalCode: '',
    phone: ''
  });
const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="checkout-container">
      <form className="checkout-form" onSubmit={handleSubmit}>
        {/* Contact Section */}
        <div className="form-section">
          <div className="section-header">
            <h2 className="section-title">Contact</h2>
            <a href="#" className="sign-in-link">Sign in</a>
          </div>
          
          <div className="form-group">
            <input
              type="text"
              name="email"
              placeholder="Email or mobile phone number"
              className="form-input"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="emailOffers"
                checked={formData.emailOffers}
                onChange={handleInputChange}
                className="checkbox-input"
              />
              <span className="checkbox-text">Email me with news and offers</span>
            </label>
          </div>
        </div>

        {/* Payment Section */}
        <div className="form-section">
          <h2 className="section-title">Payment</h2>
          <p className="section-subtitle">All transactions are secure and encrypted.</p>
          
          <div className="payment-method">
            <div className="payment-option">
              Cash on Delivery (COD)
            </div>
          </div>
        </div>

        {/* Billing Address Section */}
        <div className="form-section">
          <h2 className="section-title">Billing address</h2>
          
          <div className="form-group">
            <select
              name="country"
              className="form-select"
              value={formData.country}
              onChange={handleInputChange}
            >
              <option value="Pakistan">Pakistan</option>
              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
            </select>
            <label className="floating-label">Country/Region</label>
          </div>

          <div className="form-row">
            <div className="form-group form-group-half">
              <input
                type="text"
                name="firstName"
                placeholder="First name (optional)"
                className="form-input"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group form-group-half">
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="form-input"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="form-input"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="apartment"
              placeholder="Apartment, suite, etc. (optional)"
              className="form-input"
              value={formData.apartment}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group form-group-half">
              <input
                type="text"
                name="city"
                placeholder="City"
                className="form-input"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group form-group-half">
              <input
                type="text"
                name="postalCode"
                placeholder="Postal code (optional)"
                className="form-input"
                value={formData.postalCode}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="form-input"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <span className="input-icon">ⓘ</span>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Complete order
        </button>

        {/* Footer Links */}
        <div className="footer-links">
          <a href="#" className="footer-link" onClick={() => navigate("/refund-policy")}>Refund policy</a>
          <a href="#" className="footer-link" onClick={() => navigate("/shipping-policy")}>Shipping</a>
          <a href="#" className="footer-link">Terms of service</a>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;