import React from "react";
import "./PeopleAlsoBought.css";
import shoe from '../../../Assets/shoe.png';

const PeopleAlsoBought = () => {
  return (
    <section className="people-section">
      <h2 className="people-title">PEOPLE ALSO BOUGHT</h2>
      <p className="people-subtitle">
        Here’s some of our most similar products people are buying. Click to
        discover trending style.
      </p>

      <div className="product-grid">
        <div className="product-cards">
          <div className="product-images"><img src={shoe} alt="" /></div>
          <p className="product-name">Derby - 210 BRN</p>
          <p className="product-price">Rs.28,500.00</p>
        </div>

        <div className="product-cards">
          <div className="product-images"><img src={shoe} alt="" /></div>
          <p className="product-name">Derby - 536P BLU</p>
          <p className="product-price">Rs.28,500.00</p>
        </div>

        <div className="product-cards">
          <div className="product-images"><img src={shoe} alt="" /></div>
          <p className="product-name">Derby - 536 PT BLK</p>
          <p className="product-price">Rs.28,500.00</p>
        </div>

        <div className="product-cards">
          <div className="product-images"><img src={shoe} alt="" /></div>
          <p className="product-name">Derby - 210-SOOTI BRN</p>
          <p className="product-price">Rs.28,500.00</p>
        </div>
      </div>
    </section>
  );
};

export default PeopleAlsoBought;
