import React, { useState } from "react";
import "./NavBar.css";
import phoneIcon from '../../Assets/phoneIcon.png';
import emailIcon from '../../Assets/emailIcon.png';
import bossLogo from '../../Assets/logo.png';
import cart from '../../Assets/Cart.png';
import menu from '../../Assets/menuIcon.png';
import { FiSearch } from "react-icons/fi";
import Sidebar from "../Sidebar/Sidebar";
import SearchOverlay from '../SearchOverlay/SearchOverlay';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <section className="navbar">
        <div className="navbar-top">
          <div className="navbar-container">
            <div className="navbar-top-left">
              <span><img className="phone-icon" src={phoneIcon} alt="" /> +92 300 123 4567</span>
              <span><img className="email-icon" src={emailIcon} alt="" /> info@bossleathers.com</span>
            </div>

            <div className="navbar-top-right">
              <button onClick={() => setIsSearchOpen(true)}>
                <span className="search-icon"><FiSearch /></span>
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="navbar-main">
          <div className="navbar-container">
            <div className="navbar-menu">
              <img 
                src={menu} 
                alt="" 
                onClick={toggleSidebar} 
                style={{ cursor: "pointer" }} 
              />
            </div>

            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

            <span className="navbar-logo">
              <img src={bossLogo} alt="Boss Leathers" />
            </span>

            <div className="navbar-cart">
              <img src={cart} alt="" onClick={() => navigate("/empty-cart")}/>
              <span className="cart-count">0</span>
            </div>
          </div>
        </div>
      </section>

      {isSearchOpen && <SearchOverlay onClose={() => setIsSearchOpen(false)} />}
    </>
  );
};

export default NavBar;
