// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (
      pathname === '/accessories' ||
      pathname === '/women' ||
      pathname === '/men' ||
      pathname === '/homeAppliances' ||
      pathname === '/decoration'
    ) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
