import React, { useEffect, useRef }  from 'react';
import './UnderlinedText.css'; 
import { gsap } from 'gsap';

const UnderlineTxt = ({ text }) => {
    const svgRef = useRef(null);

    useEffect(() => {
        const svgPath = svgRef.current.querySelector('path');

        gsap.fromTo(
        svgPath,
        { strokeDasharray: svgPath.getTotalLength(), strokeDashoffset: svgPath.getTotalLength() },
        { strokeDashoffset: 0, duration: 1, delay: 1.5, ease: 'power2.inOut' }
        );
    }, []);
  return (
    <span className="underlined-text">
    {text}
    <svg 
        ref={svgRef}
            width="307"
            height="96" 
            viewBox="0 0 307 96" 
            fill="none" 
            className="underline-svg" 
            xmlns="http://www.w3.org/2000/svg">
        <path d="M5.78955 30.69C7.65231 22.618 15.2536 15.219 20.4464 9.14449C21.1572 8.313 23.3606 4.31847 23.964 7.38567C26.1429 18.4617 27.4577 29.3848 30.7061 40.2902C30.8407 40.7421 33.2881 51.9384 35.7627 51.3561C43.8469 49.4539 52.3883 35.2713 57.9678 29.8106C62.3806 25.4916 64.3159 22.8956 65.7359 29.3709C68.0682 40.0063 71.6823 51 79.5866 58.9043C92.0848 71.4026 119.387 58.5329 132.571 53.8477C140.604 50.993 148.479 47.9724 155.729 43.4414C158.945 41.4309 160.563 39.2481 162.031 43.4414C168.88 63.0087 189.162 73.0975 207.907 78.4712C237.736 87.0221 270.453 87.8488 301.271 90.0501" stroke="#ABC9E9" stroke-width="11" stroke-linecap="round"/>
        </svg>
  </span>
  
       

  );
};

export default UnderlineTxt;