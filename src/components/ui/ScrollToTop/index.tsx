'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top when pathname changes (navigation between pages)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  // Handle page refresh and initial load
  useEffect(() => {
    // Scroll to top on component mount (handles page refresh)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    // Also handle browser back/forward buttons
    const handlePopState = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };

    // Add event listener for browser navigation
    window.addEventListener('popstate', handlePopState);

    // Cleanup
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
