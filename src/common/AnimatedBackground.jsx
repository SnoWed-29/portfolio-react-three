
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const rotate = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const StyledAnimatedBackground = styled(motion.div)`
  width: 100%;
  padding-top: 50px;
  z-index: -1;
  background: linear-gradient(to right, hsla(141, 54%, 86%, 0.8) 9%, hsla(333, 73%, 95%, 0.5) 50%, hsla(211, 58%, 79%, 0.7) 89%);
  background-size: 200% 200%;
  animation: ${rotate} 8s linear infinite;
`;

const AnimatedBackground = ({ children }) => {
  return (
    <StyledAnimatedBackground
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {children}
    </StyledAnimatedBackground>
  );
};

export default AnimatedBackground;
