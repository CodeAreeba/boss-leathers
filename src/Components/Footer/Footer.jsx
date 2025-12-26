import React from "react";
import "./Footer.css";

import instagram from "../../Assets/instagram.png";
import facebook from "../../Assets/facebook.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-col">
          <p className="footer-text">
            S52 - Dolmen Mall, DHA Phase 6, Lahore - Punjab, Pakistan
          </p>
          <p className="footer-text">(+92) 301 2345678</p>
          <p className="footer-text">sales@bossleathers.com</p>

          <div className="social-icons">
            <img src={instagram} alt="Instagram" />
            <img src={facebook} alt="Facebook" />
          </div>
        </div>

        <div className="footer-col">
          <h4>COLLECTION</h4>
          <ul>
            <li>Formal</li>
            <li>Semi Formal</li>
            <li>Casual</li>
            <li>Peshawari</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>SITE MAP</h4>
          <ul>
            <li>All Products</li>
            <li>Store Locator</li>
            <li>About Cobblers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>POLICIES</h4>
          <ul>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Terms Of Service</li>
          </ul>
        </div>

        <div className="footer-col newsletter">
          <h4>SIGN UP TO NEWSLETTER</h4>
          <p>Enter your email address to get exclusive discounts</p>

          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Cobblers Store. All Rights Reserved.</p>
        <p>Developed By Agency 17D</p>
      </div>
    </footer>
  );
};

export default Footer;
