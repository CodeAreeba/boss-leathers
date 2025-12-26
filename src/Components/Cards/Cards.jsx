import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cards.css";

const Cards = ({ image, title, buttonText }) => {
  const navigate = useNavigate();

  const handleExplore = () => {
    
    const categorySlug = title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/categories/${categorySlug}`);
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>

      <div className="card-content">
        <h2>{title}</h2>
        <button onClick={handleExplore}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Cards;
