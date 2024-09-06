import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

function Symbole({ className, myRef, pathSvg }) {
  const svgRef = useRef(null);

  useEffect(() => {
    const svgElement = svgRef.current;
    const scrollPath = svgElement.querySelector('#Vector3'); 
    const pathLength = scrollPath.getTotalLength();

    gsap.fromTo(
      scrollPath,
      {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      },
      {
        strokeDashoffset: 0,
        duration: 1,
        delay: 2.5, // Adjust delay as needed
        ease: "power2.inOut",
      }
    );
  }, []);

  return (
    <div className={`svg-container  ${className}`}>
      <svg ref={svgRef} width="1499" className={myRef} height="800" viewBox="0 0 229 688" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector3" className={pathSvg} d="M58.5825 10.6186C59.2232 4.2111 68.8817 3.1613 73.5937 2.70057C98.3908 0.275968 122.948 6.05738 140.402 24.6401C156.579 41.863 168.821 66.4343 169.27 90.2938C169.715 113.981 162.301 136.847 155.083 159.082C140.705 203.376 125.562 253.661 150.465 297.152C161.542 316.499 201.191 358.923 224.201 330.474C227.968 325.817 228.88 321.826 221.727 321.236C206.384 319.971 192.056 326.751 181.807 338.062C158.55 363.729 153.342 401.679 152.444 434.893C151.411 473.135 158.615 510.307 165.476 547.725C171.058 578.165 178.449 610.567 176.033 641.752C174.238 664.928 160.917 678.041 138.588 683.321C108 690.555 75.4694 684.223 45.8806 675.733C30.8722 671.427 15.6166 667.248 2.1665 659.402" stroke="#C1D3F1" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

export default Symbole;
