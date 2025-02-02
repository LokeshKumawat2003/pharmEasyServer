import "../componetnsStyle/slider.css";
import React, { useState, useEffect } from "react";
const ImageSlider = () => {
  const images = [
    "https://cdn01.pharmeasy.in/dam/banner/banner/c7e8e13d5a0-Evion_a.jpg",
    "https://cdn01.pharmeasy.in/dam/banner/banner/37adda767ea-PROHANCE_A.jpg",
    "https://cdn01.pharmeasy.in/dam/banner/banner/d9a2b50e73a-3.jpg",
    "https://cdn01.pharmeasy.in/dam/banner/banner/0c2022bff6d-Hp-Banner-LS.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div>
      <div className="slider-box">
        <div className="slid">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
