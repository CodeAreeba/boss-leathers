import React from "react";
import "./PeopleAlsoBought.css";
import shoe from "../../../Assets/shoe.png";
import ShoeCard from "../../Common/ShoeCard/ShoeCard";

const pabProducts = [
  { id: 1, name: "Derby - 210 BRN", price: "Rs.28,500.00", image: shoe },
  { id: 2, name: "Derby - 536P BLU", price: "Rs.28,500.00", image: shoe },
  { id: 3, name: "Derby - 536 PT BLK", price: "Rs.28,500.00", image: shoe },
  { id: 4, name: "Derby - 210-SOOTI BRN", price: "Rs.28,500.00", image: shoe },
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
          <ShoeCard 
            key={item.id} 
            shoe={item} 
          />
        ))}
      </div>
    </section>
  );
};

export default PeopleAlsoBought;
