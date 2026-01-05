import React from "react";
import "./CategoryBanner.css";

const CategoryBanner = () => {
  const items = [1, 2, 3];

  return (
    <div className="category-banner">
      <div className="category-banner__container">
        {items.map((item, index) => (
          <div key={index} className="category-banner__item">
            <h2 className="category-banner__title">
              <span className="category-banner__title--dark">FORMAL MEN </span>
              <span className="category-banner__title--light">SHOES</span>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBanner;
