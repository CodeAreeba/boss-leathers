import React from 'react';
import './Gallery.css';
import grey from '../../assets/grey.png';
import darkBrown from '../../assets/darkBrown.png';
import skin from '../../assets/skin.png';
import black from '../../assets/black.png';
import boots from '../../assets/boots.png';
import orange from '../../assets/orange.png';
import grey2 from '../../assets/grey2.png';
import blue from '../../assets/blue.png';
import chocolate from '../../assets/chocolate.png';
import darkBoots from '../../assets/darkBoots.png';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1 className="gallery-title">GALLERY</h1>
        <p className="gallery-subtitle">
          Here's some of our most similar products trends are buying! Click to discover trending style.
        </p>
      </div>

      <div className="gallery-grid">
        {/* Row 1 - 3 equal items */}
        <div className="gallery-row">
          <div className="gallery-item item-1">
            <img src={grey} alt="Shoe Product 1" />
          </div>
          <div className="gallery-item item-2">
            <img src={darkBrown} alt="Shoe Product 2" />
          </div>
          <div className="gallery-item item-3">
            <img src={skin} alt="Shoe Product 3" />
          </div>
        </div>

        {/* Row 2 - 3 equal items */}
        <div className="gallery-row">
          <div className="gallery-item item-4">
            <img src={black} alt="Shoe Product 4" />
          </div>
          <div className="gallery-item item-5">
            <img src={boots} alt="Shoe Product 5" />
          </div>
          <div className="gallery-item item-6">
            <img src={orange} alt="Shoe Product 6" />
          </div>
        </div>

        {/* Row 3 - 1 small + 1 large */}
        <div className="gallery-row">
          <div className="gallery-item item-7">
            <img src={grey2} alt="Shoe Product 7" />
          </div>
          <div className="gallery-item item-8">
            <img src={blue} alt="Shoe Product 8" />
          </div>
        </div>

        {/* Row 4 - 1 large + 1 small */}
        <div className="gallery-row">
          <div className="gallery-item item-9">
            <img src={chocolate} alt="Shoe Product 9" />
          </div>
          <div className="gallery-item item-10">
            <img src={darkBoots} alt="Shoe Product 10" />
          </div>
        </div>

        {/* Row 5 - 1 large item (takes 2/3 width) */}
        <div className="gallery-row">
          <div className="gallery-item item-11">
            <img src="image11.png" alt="Shoe Product 11" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;