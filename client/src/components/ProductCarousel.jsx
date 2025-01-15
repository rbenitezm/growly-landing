import React, { useState, useEffect } from "react";
import "./ProductCarousel.css";

const ProductCarousel = () => {
  const images = [
    "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/productCarousel/Tiger%20900%20GT%20PRO.webp",
    "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/productCarousel/Tiger%20900%20Rally%20PRO.webp",
    "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/productCarousel/Tiger%201200%20GT%20PRO.webp",
    "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/productCarousel/Tiger%201200%20Rally%20PRO.webp",
    "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/productCarousel/Tiger%20Sport%20660.webp",
    "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/productCarousel/Tiger%20Sport%20850.webp",
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
