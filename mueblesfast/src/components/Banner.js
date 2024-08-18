import React, { useState } from 'react';
import './Banner.css';

const images = [
  '/images/mueble1.jpg',
  '/images/mueble2.jpg',
  '/images/mueble3.jpg'
];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="banner">
      <img src={images[currentImage]} alt="Banner" />
      <div className="controls">
        <button onClick={prevImage}>◀</button>
        <button onClick={nextImage}>▶</button>
      </div>
    </div>
  );
}

export default Banner;