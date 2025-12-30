import React, { useState } from "react";
import "./BossForm.css";
import imgShoe from '../../Assets/shoe.png'
import { RiDeleteBinLine } from "react-icons/ri";

const BossForm = () => {
  // Three separate products
  const [products, setProducts] = useState([
    { id: 1, name: "CGC NEW BLU", size: 39, price: 36500, quantity: 1 },
    { id: 2, name: "CGC RED RUN", size: 40, price: 42000, quantity: 1 },
    { id: 3, name: "CGC BLACK PRO", size: 41, price: 38000, quantity: 1 },
    { id: 4, name: "CGC BLACK PRO", size: 41, price: 38000, quantity: 1 },
    { id: 5, name: "CGC BLACK PRO", size: 41, price: 38000, quantity: 1 },
    { id: 6, name: "CGC BLACK PRO", size: 41, price: 38000, quantity: 1 }
  ]);

  const handleIncrease = (id) => {
    setProducts(products.map(p => p.id === id ? { ...p, quantity: p.quantity + 1 } : p));
  };

  const handleDecrease = (id) => {
    setProducts(products.map(p => p.id === id ? { ...p, quantity: p.quantity > 1 ? p.quantity - 1 : 1 } : p));
  };

  return (
    <div className="page">

      <div className="right">
        {products.map(product => (
          <div className="product-box" key={product.id}>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="product">
                    <img src={imgShoe} alt="product" />
                    <div>
                      <div className="name">{product.name}</div>
                      <div className="size">{product.size}</div>
                      <div className="price">Rs.{product.price.toLocaleString()}</div>
                    </div>
                  </td>

                  <td className="center">
                    <div className="qty">
                      <span onClick={() => handleDecrease(product.id)}>-</span>
                      <span>{product.quantity}</span>
                      <span onClick={() => handleIncrease(product.id)}>+</span>
                    </div>
                  </td>

                  <td className="center">Rs.{(product.price * product.quantity).toLocaleString()}</td>

                  <td className="centerIcon"> <RiDeleteBinLine /></td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BossForm;
