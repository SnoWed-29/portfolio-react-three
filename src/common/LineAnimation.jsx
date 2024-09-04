import React from "react";
import { motion } from "framer-motion";

const LineAnimation = () => {
  return (
    <svg
      className="w-full"
      width="1781"
      height="16"
      viewBox="0 0 1781 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_40_2)">
        <rect width="1781" height="16" fill="url(#paint0_linear_40_2)" />
      </g>
      <defs>
        <filter
          id="filter0_i_40_2"
          x="0"
          y="0"
          width="1782"
          height="18"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.5625 0 0 0 0 0.5625 0 0 0 0 0.5625 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_40_2" />
        </filter>
        <motion.linearGradient
          id="paint0_linear_40_2"
          x1="0%"
          y1="8"
          x2="100%"
          y2="8"
          gradientUnits="userSpaceOnUse"
          initial={{ x: "0%" }}
          animate={{ x: ["0%", "100%"] }}
          transition={{
            duration: 6,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <stop offset="0.09" stopColor="#CAEFD7" />
          <stop offset="0.51" stopColor="#F5BFD7" stopOpacity="0.42" />
          <stop offset="0.91" stopColor="#ABC9E9" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

export default LineAnimation;
