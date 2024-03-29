import React, { useEffect } from 'react';

const DisableArrowScroll = ({children}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check if the pressed key is an arrow key
      if (['ArrowLeft', 'ArrowRight'].includes(e.key)) {
        // Prevent default scrolling behavior
        e.preventDefault();
      }
    };

    // Add event listener when the component mounts
    document.addEventListener('keydown', handleKeyDown);

    // Clean up event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  return <div>{children}</div>;
};

export default DisableArrowScroll;