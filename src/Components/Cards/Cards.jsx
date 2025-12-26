import React from "react";
import "./Cards.css";

const Cards = ({ image, title, buttonText }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>

      <div className="card-content">
        <h2>{title}</h2>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default Cards;
