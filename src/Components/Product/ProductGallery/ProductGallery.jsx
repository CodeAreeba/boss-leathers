import React from "react";
import "./ProductGallery.css";
import shoe from '../../../Assets/shoe.png'

const ProductGallery = () => {
  return (
    <div className="product-gallery">
      {/* Thumbnails */}
      <div className="thumbnail-column">
        <div className="thumb"></div>
        <div className="thumb"></div>
        <div className="thumb"></div>
        <div className="thumb"></div>
      </div>

      {/* Main Image */}
      <div className="main-image">
        <img src={shoe} alt="" />
        {/* Image yahan add karna */}
      </div>
    </div>
  );
};

export default ProductGallery;
