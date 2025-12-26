import React from "react";
 
import "./CardsSection.css";
import Cards from "../Cards/Cards";
import home from '../../Assets/homeCard.jpg'

// Dummy data (baad me API se aa sakta hai)
const cardsData = [
  {
    id: 1,
    image: home,
    title: "NEW ARRIVALS",
    buttonText: "Explore More",
  },
  {
    id: 2,
    image: home,
    title: "BEST SELLERS",
    buttonText: "Shop Now",
  },
  {
    id: 3,
    image: home,
    title: "MEN COLLECTION",
    buttonText: "View Collection",
  },
  {
    id: 4,
    image: home,
    title: "WOMEN COLLECTION",
    buttonText: "Discover Now",
  },
  {
    id: 5,
    image: home,
    title: "LEATHER BAGS",
    buttonText: "Explore Bags",
  },
  {
    id: 6,
    image: home,
    title: "LEATHER SHOES",
    buttonText: "Shop Shoes",
  },
  {
    id: 7,
    image: home,
    title: "TRAVEL ACCESSORIES",
    buttonText: "Shop Travel",
  },
  {
    id: 8,
    image: home,
    title: "NEW SEASON",
    buttonText: "Shop Collection",
  },
  {
    id: 9,
    image: home,
    title: "LIMITED EDITION",
    buttonText: "Buy Now",
  },
  {
    id: 10,
    image: home,
    title: "EXCLUSIVE DEALS",
    buttonText: "Grab Offers",
  },
];

const CardsSection = () => {
  return (
    <section className="cards-section">
      <div className="cards-container">
        {cardsData.map((card) => (
          <Cards
            key={card.id}
            image={card.image}
            title={card.title}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
