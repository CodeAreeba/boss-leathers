import React, { useState } from "react";
import "./ProductGallery.css";
import shoe from '../../../Assets/shoe.png';
import { FiX, FiZoomIn, FiZoomOut } from "react-icons/fi";

const ProductGallery = () => {
  // Sample images array (using same image for demo, you can replace with different images)
  const images = [shoe, shoe, shoe, shoe];
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
 
  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };
 
  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 1));
  };

  const handleImageClick = () => {
    setShowModal(true);
    setZoomLevel(1);
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setZoomLevel(1);
  };

  return (
    <>
      <div className="product-gallery">
        {/* Thumbnails */}
        <div className="thumbnail-column">
          {images.map((img, index) => (
            <div
              key={index}
              className={`thumb ${selectedImage === index ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img src={img} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Main Image */}
        <div 
          className="main-image"
          onClick={handleImageClick}
        >
          <img src={images[selectedImage]} alt="Product" />
          <div className="zoom-hint">Click to zoom</div>
        </div>
      </div>

      {/* Zoom Modal */}
      {showModal && (
        <div className="zoom-modal" onClick={handleCloseModal}>
          <div className="zoom-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseModal}>
              <FiX />
            </button>
            
            <div className="zoom-controls">
              <button onClick={handleZoomOut} disabled={zoomLevel <= 1}>
                <FiZoomOut />
              </button>
              <span>{Math.round(zoomLevel * 100)}%</span>
              <button onClick={handleZoomIn} disabled={zoomLevel >= 3}>
                <FiZoomIn />
              </button>
            </div>

            <div className="modal-image-container">
              <img 
                src={images[selectedImage]} 
                alt="Zoomed Product"
                style={{ transform: `scale(${zoomLevel})` }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductGallery;
