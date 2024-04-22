import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({x, y}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(x, y);
  }, [pathname]);

  return null;
};

export default ScrollToTop;