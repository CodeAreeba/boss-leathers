import React, { useState } from "react";
import { FaHeart, FaRulerHorizontal, FaTruck } from "react-icons/fa";
import "./ProductInfo.css";
import { IoBoatOutline } from "react-icons/io5";
import { GoSquareFill } from "react-icons/go";

const sizesData = [39, 40, 41, 42, 43, 44, 45, 46];

const ProductInfo = () => {
  const [selectedSize, setSelectedSize] = useState(39);
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <div className="product-info">

      <h1 className="product-title">DERBY – 536P BRN</h1>

      {/* COLORS */}
      <div className="color-row">
        <span>Choose Color:</span>
        <div className="colors">
          <span className="color brown"></span>
          <span className="color tan"></span>
          <span className="color black"></span>
          <span className="color dark"></span>
        </div>
      </div>

      {/* PRICE */}
      <p className="price">Rs.28,500.00</p>

      {/* SIZE */}
      <div className="size-header">
        <span>Size: <strong>{selectedSize}</strong></span>
      </div>

      <div className="sizes">
        {sizesData.map((size) => (
          <button
            key={size}
            className={selectedSize === size ? "active" : ""}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>

      <div className="size-guide">
        <FaRulerHorizontal />
        <span>Size Guide</span>
      </div>

    <div className="hr-lines"> 
      <div></div>
      <div></div>
      </div>

      {/* SKU */}
      <div className="meta">
        <p><span>Sku:</span> 536P-{selectedSize}-BRN</p>
        <p><span>Available:</span> Instock</p>
      </div>

      {/* QUANTITY + CART */}
      <div className="cart-row">
        <div className="quantity-box">
          <button onClick={decreaseQty}>−</button>
          <span>{quantity}</span>
          <button onClick={increaseQty}>+</button>
        </div>

        <button className="add-cart">ADD TO CART</button>

        <button className="wishlist">
          <FaHeart />
        </button>
      </div>

      <button className="buy-now">BUY IT NOW</button>

      {/* DELIVERY */}
      <div className="delivery">
        <div>
            <IoBoatOutline />
        </div>
        <div> 
        <p><GoSquareFill />Estimate delivery times: <strong>7–8 days</strong> (Nationwide)</p>
        <p><GoSquareFill /> Estimate delivery times: <strong>15–21 days</strong> (International)</p>
        </div>
      </div>

    </div>
  );
};

export default ProductInfo;
