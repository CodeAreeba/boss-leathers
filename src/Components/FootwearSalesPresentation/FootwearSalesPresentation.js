import React from 'react';
import './FootwearSalesPresentation.css';
import shoeImage from '../../Assets/Group-removebg-preview.png';
import { BsStars } from "react-icons/bs";

const FootwearSalesPresentation = () => {
  return (
    <div className="footwear-presentation-container">
      <div className="presentation-content">
        <div className="military-choice-pill">
          Military Choice
        </div>
        <div className="brand-name">
          Boss Leathers
        </div>
        <h1 className="main-title">
          Footwear Sales Presentation
        </h1>
      </div>

      <div className="presentation-visuals">
        <div className="background-shape-top"></div>
        <div className="background-shape-bottom"></div>
        <img src={shoeImage} alt="Military Combat Boots" className="shoe-image" />
        <BsStars className="star-icon" />
      </div>
    </div>
  );
};

export default FootwearSalesPresentation;
