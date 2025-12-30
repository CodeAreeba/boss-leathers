import React, { useState } from "react";
import "./NavBar.css";
import phoneIcon from '../../Assets/phoneIcon.png';
import emailIcon from '../../Assets/emailIcon.png';
import cart from '../../Assets/Cart.png';
import menu from '../../Assets/menuIcon.png';
import { FiSearch } from "react-icons/fi";
import SearchOverlay from '../SearchOverlay/SearchOverlay';
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const NavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <section className="navbar">
        <div className="navbar-top">
          <div className="navbar-container">
            <div className="navbar-top-left">
              <span><img src={phoneIcon} alt="" /> +92 300 123 4567</span>
              <span><img src={emailIcon} alt="" /> info@bossleathers.com</span>
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
                alt="Menu" 
                onClick={toggleSidebar} 
              />
            </div>

            <span className="navbar-logo">
              <img src='./logo2.svg' alt="Boss Leathers" />
            </span>

            <div className="navbar-cart" onClick={() => navigate('/empty-cart')}>
              <img src={cart} alt="Cart"  />
              <span className="cart-count">0</span>
            </div>
          </div>
        </div>
      </section>

      {isSearchOpen && <SearchOverlay onClose={() => setIsSearchOpen(false)} />}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default NavBar;