import React, { useEffect } from 'react';

const DisableTouchPadHorizontalScroll = ({children}) => {
  useEffect(() => {
    const handleScroll = () => {
      // Check if horizontal scrolling has occurred and reset the scroll position
      if (window.scrollX !== 0) {
        window.scrollTo(0, window.scrollY);
      }
    };

    // Add event listener for scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className="scroll-container">{children}</div>;
};
// useEffect(() => {
//     const handleTouchMove = (e) => {
//       // Calculate the difference in X direction
//       const xDiff = e.touches[0].clientX - startX;
      
//       // If the absolute difference in X direction is greater than the absolute difference in Y direction, prevent default behavior
//       if (Math.abs(xDiff) > Math.abs(yDiff)) {
//         e.preventDefault();
//       }
//     };

//     let startX, startY;
//     const handleTouchStart = (e) => {
//       // Store the starting coordinates of the touch
//       startX = e.touches[0].clientX;
//       startY = e.touches[0].clientY;
//     };

//     const handleTouchEnd = () => {
//       startX = null;
//       startY = null;
//     };

//     // Add event listeners for touch events
//     document.addEventListener('touchstart', handleTouchStart, { passive: false });
//     document.addEventListener('touchmove', handleTouchMove, { passive: false });
//     document.addEventListener('touchend', handleTouchEnd);

//     // Clean up event listeners when the component unmounts
//     return () => {
//       document.removeEventListener('touchstart', handleTouchStart);
//       document.removeEventListener('touchmove', handleTouchMove);
//       document.removeEventListener('touchend', handleTouchEnd);
//     };
//   }, []);

//   return <div className="scroll-container">{chil}</div>;
// };
export default DisableTouchPadHorizontalScroll;