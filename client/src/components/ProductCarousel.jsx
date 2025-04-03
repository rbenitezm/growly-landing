import React, { useState, useEffect } from "react";
import "./ProductCarousel.css";

const ProductCarousel = () => {
  const images = [
    "https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/growly-improvisacion.png",
    "https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/frustacion-constante.png",
    "https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/cansancio-emocional.png",
    "https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/desesperacion.png",
    "https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/culpa.png",
    "https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/tristeza.png",
    "https://raw.githubusercontent.com/rbenitezm/growly-landing/growly-landing/client/src/assets/images/productCarousel/incertidumbre.png"
      
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
