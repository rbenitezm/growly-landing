import React, { useState, useEffect } from "react";
import "./ProductCarousel.css";

const ProductCarousel = () => {
  const images = [
    "./src/assets/images/productCarousel/Tiger 900 GT PRO.webp",
    "./src/assets/images/productCarousel/Tiger 900 Rally PRO.webp",
    "./src/assets/images/productCarousel/Tiger 1200 GT PRO.webp",
    "./src/assets/images/productCarousel/Tiger 1200 Rally PRO.webp",
    "./src/assets/images/productCarousel/Tiger Sport 660.webp",
    "./src/assets/images/productCarousel/Tiger Sport 850.webp",
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setMainImage(images[index]);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setMainImage(images[nextIndex]);
      setCurrentIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex, images]);

  return (
    <div className="carousel-container">
      {/* Main Image */}
      <div className="main-image">
        <img src={mainImage} alt="Main" className="fade" />
      </div>

      {/* Thumbnails */}
      <div className="thumbnails">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail-wrapper ${
              currentIndex === index ? "active" : ""
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
