import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">MENU</h3>

      <ul className="menu-list">
        <li>NEW ARRIVALS</li>

        <li className="has-plus">
          READY TO WEAR <span>+</span>
        </li>

        <li className="has-plus">
          MEN <span>+</span>
        </li>

        <li className="has-plus">
          WOMEN <span>+</span>
        </li>

        <li className="has-plus">
          CHILDREN <span>+</span>
        </li>

        <li>GOMILA X HARRIS TWEED</li>
        <li>GOODYEAR WELTED</li>
        <li>CUSTOM ART WORK</li>

        <li className="has-plus">
          ACCESSORIES <span>+</span>
        </li>

        <li>SHOE MAKING</li>
        <li>GALLERY</li>
      </ul>

      <div className="sidebar-search">
        🔍 <input type="text" placeholder="Search" />
      </div>

      <div className="sidebar-login">
        👤 Login / Register
      </div>

      <div className="sidebar-help">
        <p className="help-title">Need help?</p>
        <p>📞 +44 7957 276298</p>
        <p>✉ hello@gomilaintersoles.com</p>
      </div>
    </div>
  );
};

export default Sidebar;
