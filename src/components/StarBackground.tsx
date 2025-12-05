import React, { useState, useEffect } from 'react';
import './StarBackground.css'; 
interface Star {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
}

const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 2 + 1, 
          delay: Math.random() * 5,
          duration: Math.random() * 3 + 2,
        });
      }
      setStars(newStars);
    };
    
    generateStars();
  }, []);

  return (
    <div className="star-bg-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            // O box-shadow extra ajuda no efeito de brilho
            boxShadow: `0 0 ${star.size * 2}px white`
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;