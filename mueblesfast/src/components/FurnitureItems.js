import React, { useState } from 'react';
import './FurnitureItems.css';

const furnitureData = [
  { title: 'Mueble 1', description: 'Hecho en madera', image1: '/images/mueble1.jpg', image2: '/images/mueble4.jpg' },
  { title: 'Mueble 2', description: 'Hecho en madera', image1: '/images/mueble2.jpg', image2: '/images/mueble5.jpg' },
  { title: 'Mueble 3', description: 'Hecho en madera', image1: '/images/mueble3.jpg', image2: '/images/mueble6.jpg' },
];

const FurnitureItems = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="furniture-items">
      {furnitureData.map((item, index) => (
        <div key={index} className="furniture-item">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <img
            src={hoverIndex === index ? item.image2 : item.image1}
            alt={item.title}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          />
        </div>
      ))}
    </section>
  );
}

export default FurnitureItems;