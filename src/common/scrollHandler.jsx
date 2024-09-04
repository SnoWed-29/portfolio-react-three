import React, { useEffect } from 'react';

function ScrollHandler() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentSection = entry.target;
          const nextSection = currentSection.nextElementSibling;
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    // Cleanup on component unmount
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return null;
}

export default ScrollHandler;
