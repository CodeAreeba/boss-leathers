import React from "react";
import "./SearchOverlay.css";
import { FiSearch } from "react-icons/fi";
import shoe from '../../Assets/shoe.png';
import close from '../../Assets/close.png';
import ShoeCard from "../Common/ShoeCard/ShoeCard";

const searchData = [
  {
    id: 1,
    image: shoe,
    name: "Derby - 536P BRN",
    price: "Rs.28,500.00",
  },
  {
    id: 2,
    image: shoe,
    name: "Oxford - 534 BLK",
    price: "Rs.28,500.00",
  },
  {
    id: 3,
    image: shoe,
    name: "Moccasins - 0128 BLK",
    price: "Rs.28,500.00",
  },
  {
    id: 4,
    image: shoe,
    name: "Oxford - 534 BRN",
    price: "Rs.28,500.00",
  },
  {
    id: 5,
    image: shoe,
    name: "Oxford - N69 TOTON",
    price: "Rs.28,500.00",
  },
];

const SearchOverlay = ({ onClose }) => {
  return (
    <section className="search-overlay">
      <div className="search-container">

        {/* Close Button */}
        <button className="search-close" onClick={onClose}>
            <img src={close} alt="" />
        </button>

        {/* Heading */}
        <h2 className="search-title">SEARCH OUR SITE</h2>

        {/* Search Input */}
        <div className="search-box">
          <input type="text" placeholder="I'm looking for..." />
          <span className="search-icon"><FiSearch /></span>
        </div>

        {/* Quick Search */}
        <p className="quick-search">
          Quick Search:
          <span> Formal</span>,
          <span> Semi Formal</span>,
          <span> Casual</span>,
          <span> Peshawari</span>
        </p>

        {/* Popular Products */}
        <h3 className="popular-title">POPULAR PRODUCTS</h3>

        <div className="products-grid">
          {searchData.map((item) => (
            <ShoeCard 
              key={item.id} 
              shoe={item} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SearchOverlay;
