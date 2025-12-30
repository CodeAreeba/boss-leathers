import React from "react";
import "./PeopleAlsoBought.css";
import shoe from "../../../Assets/shoe.png";

const pabProducts = [
  { id: 1, name: "Derby - 210 BRN", price: "Rs.28,500.00" },
  { id: 2, name: "Derby - 536P BLU", price: "Rs.28,500.00" },
  { id: 3, name: "Derby - 536 PT BLK", price: "Rs.28,500.00" },
  { id: 4, name: "Derby - 210-SOOTI BRN", price: "Rs.28,500.00" },
];

const PeopleAlsoBought = () => {
  return (
    <section className="pab-section">
      <h2 className="pab-title">PEOPLE ALSO BOUGHT</h2>

      <p className="pab-subtitle">
        Here’s some of our most similar products people are buying. Click to
        discover trending style.
      </p>

      <div className="pab-grid">
        {pabProducts.map((item) => (
          <div className="pab-card" key={item.id}>
            <div className="pab-image">
              <img src={shoe} alt={item.name} />
            </div>

            <p className="pab-name">{item.name}</p>
            <p className="pab-price">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PeopleAlsoBought;
