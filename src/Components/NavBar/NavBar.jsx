import React from "react";
import "./NavBar.css";
import phoneIcon from '../../Assets/phoneIcon.png';
import emailIcon from '../../Assets/emailIcon.png';
import bossLogo from '../../Assets/logo.png';
import cart from '../../Assets/Cart.png';
import menu from '../../Assets/menuIcon.png';

const NavBar = () => {
  return (
    <section className="navbar">
      {/* ===== TOP BAR ===== */}
      <div className="navbar-top">
        <div className="navbar-container">
          <div className="navbar-top-left">
            <span><img src={phoneIcon} alt="" /> +92 300 123 4567</span>
            <span><img src={emailIcon} alt="" /> info@bossleathers.com</span>
          </div>

          <div className="navbar-top-right">
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>

      {/* ===== MAIN BAR ===== */}
      <div className="navbar-main">
        <div className="navbar-container">
          <div className="navbar-menu"><img src={menu} alt="" /></div>

          <span className="navbar-logo">
            <img src={bossLogo} alt="Boss Leathers" />
          </span>

          <div className="navbar-cart">
            <img src={cart} alt="" />
            <span className="cart-count">0</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
