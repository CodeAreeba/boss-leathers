import React from "react";
import "./ProductDetails.css";


const ProductDetails = () => {
  return (
    <div className="product-details">
      <div className="tabs">
        <button className="active">Description</button>
        <button>Shipping & Returns</button>
      </div>

      <div className="description-content">
        <h3>Product Description</h3>
        <p>
          Introducing our Brown Derby shoes, a statement to exquisite
          craftsmanship and timeless style.
        </p>
        <p>
          <i><b> 
          Handmade with precision from premium sheep leather, these shoes
          exude sophistication and durability.
          </b>
          </i>
        </p>
        <p>
          Designed for long-lasting comfort and a confident stride.
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
