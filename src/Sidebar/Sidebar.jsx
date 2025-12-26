import "./Sidebar.css";
import emailIcon from "../Assets/emailIcon.png";
import phoneIcon from "../Assets/phoneIcon.png";
import { FiSearch } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const menuItems = [
  { title: "NEW ARRIVALS", expandable: false },
  { title: "READY TO WEAR", expandable: true },
  { title: "MEN", expandable: true },
  { title: "WOMEN", expandable: true },
  { title: "CHILDREN", expandable: true },
  { title: "GOMILA X HARRIS TWEED", expandable: false },
  { title: "GOODYEAR WELTED", expandable: false },
  { title: "CUSTOM ART WORK", expandable: false },
  { title: "ACCESSORIES", expandable: true },
  { title: "SHOE MAKING", expandable: false },
  { title: "GALLERY", expandable: false },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">MENU</h3>

      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <span className="menu-text">{item.title}</span>

            {item.expandable && (
              <span className="menu-plus">
                <span className="divider"></span>
                +
              </span>
            )}
          </li>
        ))}
      </ul>

      <div className="sidebar-search">
        <span className="search-icon"><FiSearch /></span>
        <input type="text" placeholder="Search" />
      </div>

      <div className="sidebar-login">
        <FiUser /> Login / Register
      </div>

      <div className="sidebar-help">
        <p className="help-title">Need help?</p>
        <p>
          <img src={phoneIcon} alt="phone" />
          +44 7957 276298
        </p>
        <p>
          <img src={emailIcon} alt="email" />
          hello@gomilaintersoles.com
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
