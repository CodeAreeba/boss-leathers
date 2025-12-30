import React, { useState } from "react";
import { FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./FilterSidebar.css";

const FilterSidebar = ({ onFilterChange = () => {}, onClose = () => {} }) => {
  const [open, setOpen] = useState({
    gender: false,
    discount: false,
    type: false,
    price: false,
    size: false,
    color: false,
  });

  const [filters, setFilters] = useState({
    gender: [],
    discount: [],
    type: [],
    size: [],
    price: [0, 12950],
    color: [],
  });

  const toggle = (key) =>
    setOpen({ ...open, [key]: !open[key] });

  const handleCheck = (category, value) => {
    setFilters((prev) => {
      const updated = prev[category].includes(value)
        ? prev[category].filter((v) => v !== value)
        : [...prev[category], value];

      const newFilters = { ...prev, [category]: updated };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handlePrice = (index, value) => {
    const numValue = Number(value);
    const updated = [...filters.price];
    
    // Prevent min from exceeding max and max from going below min
    if (index === 0) {
      updated[0] = Math.min(numValue, filters.price[1]);
    } else {
      updated[1] = Math.max(numValue, filters.price[0]);
    }
    
    const newFilters = { ...filters, price: updated };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <aside className="filter">
      <div className="filter__header">
        <h2>FILTER</h2>
        <FiX onClick={onClose} />
      </div>

      {/* GENDER */}
      <section>
        <div className="filter__title" onClick={() => toggle("gender")}>
          GENDER {open.gender ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {open.gender && (
          <div className="filter__content">
            {["Men", "Women"].map((g) => (
              <label key={g}>
                <input
                  type="checkbox"
                  onChange={() => handleCheck("gender", g)}
                />
                {g}
              </label>
            ))}
          </div>
        )}
      </section>

      {/* DISCOUNT */}
      <section>
        <div className="filter__title" onClick={() => toggle("discount")}>
          DISCOUNT {open.discount ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {open.discount && (
          <div className="filter__content">
            {["10%", "20%", "30%"].map((d) => (
              <label key={d}>
                <input
                  type="checkbox"
                  onChange={() => handleCheck("discount", d)}
                />
                {d} OFF
              </label>
            ))}
          </div>
        )}
      </section>

      {/* PRODUCT TYPE */}
      <section>
        <div className="filter__title" onClick={() => toggle("type")}>
          PRODUCT TYPE {open.type ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {open.type && (
          <div className="filter__content">
            {["Shoes", "Bags", "Belts"].map((t) => (
              <label key={t}>
                <input
                  type="checkbox"
                  onChange={() => handleCheck("type", t)}
                />
                {t}
              </label>
            ))}
          </div>
        )}
      </section>

      {/* PRICE */}
      <section>
        <div className="filter__title" onClick={() => toggle("price")}>
          PRICE {open.price ? <FiChevronUp /> : <FiChevronDown />}
        </div>

        {open.price && (
          <div className="filter__price">
            <div className="filter__price-values">
              <span>Rs.{filters.price[0].toLocaleString('en-PK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              <span>Rs.{filters.price[1].toLocaleString('en-PK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>

            <div className="filter__price-slider">
              <input
                type="range"
                min="0"
                max="12950"
                value={filters.price[0]}
                onChange={(e) => handlePrice(0, e.target.value)}
                className="range-min"
              />
              <input
                type="range"
                min="0"
                max="12950"
                value={filters.price[1]}
                onChange={(e) => handlePrice(1, e.target.value)}
                className="range-max"
              />
            </div>
          </div>
        )}
      </section>

      {/* SIZE */}
      <section>
        <div className="filter__title" onClick={() => toggle("size")}>
          SIZE {open.size ? <FiChevronUp /> : <FiChevronDown />}
        </div>

        {open.size && (
          <div className="filter__content">
            {[
              "SMALL (14)",
              "MEDIUM (14)",
              "LARGE (14)",
              "X-LARGE (14)",
              "XX-LARGE (14)",
              "30 (4)",
              "32 (4)",
              "34 (4)",
              "36 (4)",
            ].map((s) => (
              <label key={s}>
                <input
                  type="checkbox"
                  onChange={() => handleCheck("size", s)}
                />
                {s}
              </label>
            ))}
          </div>
        )}
      </section>

      {/* COLOR */}
      <section>
        <div className="filter__title" onClick={() => toggle("color")}>
          COLOR {open.color ? <FiChevronUp /> : <FiChevronDown />}
        </div>

        {open.color && (
          <div className="filter__content">
            {["Black", "Brown", "Tan", "White", "Red"].map((c) => (
              <label key={c}>
                <input
                  type="checkbox"
                  onChange={() => handleCheck("color", c)}
                />
                {c}
              </label>
            ))}
          </div>
        )}
      </section>
    </aside>
  );
};

export default FilterSidebar;
