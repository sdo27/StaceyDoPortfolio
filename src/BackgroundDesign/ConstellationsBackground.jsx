// ConstellationsBackground.jsx

import React from 'react';
import './constellations.css';

const ConstellationsBackground = () => {
  const starCount = 50; // Adjust the number of stars as needed

  const createStars = () => {
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      const sizeClass = `star-${Math.floor(Math.random() * 3) + 1}`;
      const starStyle = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      };
      stars.push(<div key={i} className={`constellation-star ${sizeClass}`} style={starStyle}></div>);
    }
    return stars;
  };

  return (
    
    <div className="constellations-container">
      {createStars()}
    </div>
  );
};

export default ConstellationsBackground;
