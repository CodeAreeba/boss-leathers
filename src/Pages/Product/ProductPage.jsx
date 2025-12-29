import React from "react";
import "./ProductPage.css";
import ProductGallery from "../../Components/Product/ProductGallery/ProductGallery";
import ProductInfo from "../../Components/Product/ProductInfo/ProductInfo";
import ProductDetails from "../../Components/Product/ProductDetails/ProductDetails";
import PeopleAlsoBought from "../../Components/Product/PeopleAlsoBought/PeopleAlsoBought";

const ProductPage = () => {
  return (
    <>
      {/* TOP SECTION */}
      <section className="product-section">
        <div className="container">
          <div className="product-layout">
           <ProductGallery />
           <ProductInfo />
          </div>
        </div>
      </section>

      {/* BOTTOM SECTION */}
      <section className="product-bottom-section">
        <div className="container">
           <ProductDetails />
        </div>
      </section>

      <section>
        <div>
            <PeopleAlsoBought />
        </div>
      </section>
    </>
  );
};

export default ProductPage;
