import React, { useState, useEffect } from "react";
import "./Categories.css";
import image1 from "../../Assets/Image1.png"
import image2 from "../../Assets/Image2.png"

const categories = [
  {
    id: 1,
    title: "BROGUES",
    image: image1,
  },
  {
    id: 2,
    title: "WHOLECUT",
    image: image2,
  },
  {
    id: 3,
    title: "BROGUES",
    image: image1,
  },
  {
    id: 4,
    title: "OXFORDS",
    image: image2,
  },
  {
    id: 5,
    title: "LOAFERS",
    image: image2,
  },
  {
    id: 6,
    title: "LOAFERS",
    image: image1,
  },
  {
    id: 7,
    title: "LOAFERS",
    image: image2,
  },
  {
    id: 8,
    title: "LOAFERS",
    image: image1,
  },
  {
    id: 9,
    title: "LOAFERS",
    image: image2,
  },
  {
    id: 10,
    title: "LOAFERS",
    image: image1,
  }
];

const Categories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Duplicate categories for infinite loop
  const extendedCategories = [...categories, ...categories, ...categories];

  useEffect(() => {
    // Start from middle set
    setCurrentIndex(categories.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    // Reset to middle when reaching end
    if (currentIndex >= categories.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(categories.length);
      }, 600);
    }
    // Reset to middle when reaching start
    else if (currentIndex <= 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(categories.length);
      }, 600);
    }
  }, [currentIndex]);

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(categories.length + index);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const getTranslateValue = () => {
    // Each card width + gap
    const cardWidth = 453.33; // (1400 / 3)
    const gap = 20;
    const moveAmount = currentIndex * (cardWidth + gap);
    return `translateX(-${moveAmount}px)`;
  };

  return (
    <div 
      className="categories-section"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="categories-wrapper">
        <div 
          className="categories-container"
          style={{
            transform: getTranslateValue(),
            transition: isTransitioning ? 'transform 0.6s ease-in-out' : 'none',
          }}
        >
          {extendedCategories.map((category, index) => (
            <div key={`${category.id}-${index}`} className="category-card">
              <div className="category-image">
                <img src={category.image} alt={category.title} />
              </div>
              <h3 className="category-title">{category.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="categories-dots">
        {categories.map((_, index) => (
          <span
            key={index}
            className={`dot ${
              (currentIndex % categories.length) === index ? "active" : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Categories;