import React, { useState, useEffect } from 'react';

export default function TextCarouselChange() {
    const [textIndex, setTextIndex] = useState(0);
    useEffect(() => {
      const intervalId = setInterval(() => {
        // Update the text index every 5 seconds
        setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
      }, 3000); // 5000 milliseconds = 5 seconds
  
      // Clean up the interval to avoid memory leaks
      return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs only once after the initial render
  
    return (
      <div className="carousel_name pre-line">
            <div>{texts[textIndex]}</div>
      </div>
    );
  }