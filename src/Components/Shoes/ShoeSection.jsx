import React, { useState } from "react";
import "./ShoeSection.css";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { BsGridFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import FilterSidebar from "../FilterSidebar/FilterSidebar";

import {
  FiFilter,
  FiList,
  FiChevronDown,
} from "react-icons/fi";
import shoe from '../../Assets/shoe.png'

const shoesData = Array.from({ length: 35 }, (_, i) => ({
  id: i + 1,
  name: `Formal Shoe ${i + 1}`,
  price: "Rs. 18,500",
  image: shoe,
}));

const ShoesSection = () => {
  const [layout, setLayout] = useState("grid-4");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    gender: [],
    discount: [],
    type: [],
    size: [],
    price: [0, 12950],
    color: [],
  });
  const navigate = useNavigate();

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);

    console.log("Filters updated:", newFilters);
  };

  const handleFilterClose = () => {
    setIsFilterOpen(false);
  };


  return (
    <section className="shoes-section">
      <div className="shoes-section__container">

        {/* ===== MERGED TOOLBAR + SIDEBAR ===== */}
        <div className="toolbar">

          {/* LEFT */}
          <div className="toolbar__left">
            <button className="filter-btn" onClick={() => setIsFilterOpen(true)}>
              <FiFilter /> FILTER
            </button>
            <span className="result-count">
              There are {shoesData.length} results in total
            </span>
          </div>

          {/* RIGHT */}
          <div className="toolbar__center">

            {/* Layout Icons */}
            <div className="layout-switch">
             <button
                className={layout === "grid-2" ? "active" : ""}
                onClick={() => setLayout("grid-2")}
              >
                <BsGridFill />
              </button>
              <button
                className={layout === "grid-3" ? "active" : ""}
                onClick={() => setLayout("grid-3")}
              >
                <BsGrid3X3GapFill />
              </button>

              <button
                className={layout === "grid-4" ? "active" : ""}
                onClick={() => setLayout("grid-4")}
              >
                <TfiLayoutGrid4Alt />
              </button>


              <button
                className={layout === "list" ? "active" : ""}
                onClick={() => setLayout("list")}
              >
                <FiList />
              </button>
            </div>
            </div>

            {/* Sort */}
            <div className="sort-box">
              <span>SORT BY:</span>
              <div className="sort-select">
                <select>
                  <option>Best Selling</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <FiChevronDown />
              </div>
            </div>

         
        </div>

        {/* ===== PRODUCTS ===== */}
        <div className={`products ${layout}`}>
          {shoesData.map((shoe) => (
            <div className="product-card" key={shoe.id}>
              <div className="product-images">
                <img src={shoe.image} alt="" onClick={() => navigate("/productDetails")}/>
              </div>
              <h4 onClick={() => navigate("/productDetails")}>{shoe.name}</h4>
              <p onClick={() => navigate("/productDetails")}>{shoe.price}</p>
            </div>
          ))}
        </div>

      </div>

      {/* ===== FILTER SIDEBAR ===== */}
      {isFilterOpen && (
        <>
          <div className="filter-overlay" onClick={handleFilterClose}></div>
          <div className="filter-sidebar-wrapper">
            <FilterSidebar 
              onFilterChange={handleFilterChange}
              onClose={handleFilterClose}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default ShoesSection;
