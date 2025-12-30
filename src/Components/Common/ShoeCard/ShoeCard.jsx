import React from "react";
import "./ShoeCard.css";

const ShoeCard = ({ shoe, onCardClick }) => {
  return (
    <div className="shoe-card" onClick={onCardClick}>
      <div className="shoe-card__image">
        <img src={shoe.image} alt={shoe.name} />
      </div>
      <h4 className="shoe-card__name">{shoe.name}</h4>
      <p className="shoe-card__price">{shoe.price}</p>
    </div>
  );
};

export default ShoeCard;
