import React from "react";
import "./NavBar.css";
import phoneIcon from '../../Assets/phoneIcon.png';
import emailIcon from '../../Assets/emailIcon.png';
import bossLogo from '../../Assets/logo.png';
import cart from '../../Assets/Cart.png';
import menu from '../../Assets/menuIcon.png';
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <section className="navbar">
      <div className="navbar-top">
        <div className="navbar-container">
          <div className="navbar-top-left">
            <span><img className="phone-icon"src={phoneIcon} alt="" /> +92 300 123 4567</span>
            <span><img className="email-icon"src={emailIcon} alt="" /> info@bossleathers.com</span>
          </div>

          <div className="navbar-top-right">
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>

      <div className="navbar-main">
        <div className="navbar-container">
          <div className="navbar-menu"><img src={menu} alt="" onClick={toggleSidebar} 
        style={{ cursor: "pointer" }} /></div>
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

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