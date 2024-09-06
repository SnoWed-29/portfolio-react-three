import ProjectCards from "../components/ProjectCards";
import ScrappLineSVG from "../common/ScrappLineSVG";
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

function Projects() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-screen flex flex-col justify-around items-center sectionProject relative overflow-hidden"
    >
      {/* Background SVG */}
      <div className="absolute inset-0 z-0">
        <ScrappLineSVG />
      </div>

      {/* Title and New SVG */}
      <div className="relative z-10">
        <h1 className="text-[#102240] font-semibold text-3xl">Projects</h1>
        <svg
          width="354"
          height="139"
          viewBox="0 0 354 139"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[-60px] right-[-80px] w-[300px] z-[-1]"
        >
          <g id="ScrappMiniLine">
            <motion.path
              id="Spink"
              d="M22.5157 20C22.5157 25.4177 17.3294 58.5996 21.85 59.3265C26.9997 60.1546 38.6324 41.8517 41.6553 38.5847C46.6591 33.1769 51.8285 27.2729 57.4663 22.489C60.9739 19.5127 59.7755 31.5058 59.6299 36.0957C59.545 38.7722 55.7852 71.145 61.9599 69.2826C64.5868 68.4903 78.1864 57.6557 78.6031 57.3353C87.8517 50.2251 90.526 47.9606 99.9063 41.4056C103.543 38.8644 121.096 22.9347 118.713 35.7638C114.75 57.0994 108.337 78.0718 102.902 99.0679C100.909 106.769 104.787 99.9485 107.645 97.1596C124.403 80.8073 140.924 65.2391 162.318 55.0122C163.601 54.3989 174.397 48.0827 176.132 51.1957C178.308 55.1005 173.295 64.0247 171.971 67.2914C168.089 76.8726 163.613 86.2506 160.155 95.9981C159.964 96.5349 154.707 110.292 159.572 105.788C177.013 89.6415 191.838 71.5796 211.499 57.8331C211.887 57.5615 226.278 46.9806 226.644 50.449C227.843 61.8103 219.14 77.3167 216.242 88.1992C214.003 96.6066 205.308 115.794 220.07 105.207C241.297 89.9847 259.806 71.6757 281.483 56.8375C283.935 55.1592 284.963 54.0641 283.98 57.8331C281.731 66.4449 278.215 74.6994 275.658 83.2211C272.469 93.8496 269.669 104.848 268.501 115.91C267.674 123.749 275.158 114.417 276.989 112.592C293.868 95.7635 310.464 78.3019 328.999 63.226C337.101 56.6366 333.033 88.7615 332.578 94.6706"
              stroke="url(#paint0_linear_65_84)"
              strokeWidth="40"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeInOut" ,delay: 0.5 }}
            />
          </g>
          <defs>
            <linearGradient id="paint0_linear_65_84" x1="20" y1="69.5" x2="334" y2="69.5" gradientUnits="userSpaceOnUse">
              <stop offset="0.09" stopColor="#9EEBDC"/>
              <stop offset="0.5" stopColor="#E0E0E0"/>
              <stop offset="0.89" stopColor="#A5C2C0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Project Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={cardVariants} className="w-[85vw] mx-auto p-4 grid grid-cols-3 gap-6 mt-4 z-10">
          <ProjectCards
            title="Lorem ipsum dolor sit amet totam tempora,"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum totam tempora, molestiae consequuntur ea accusantium quasi enim! Repellat tempore odio doloribus magnam et aspernatur explicabo earum, sapiente fugit, modi totam?"
            techs={['HTML', 'CSS', 'Javascript', 'PHP', 'Laravel']}
          />
          <ProjectCards
            title="Lorem ipsum dolor sit amet totam tempora,"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum totam tempora, molestiae consequuntur ea accusantium quasi enim! Repellat tempore odio doloribus magnam et aspernatur explicabo earum, sapiente fugit, modi totam?"
            techs={['HTML', 'CSS', 'Javascript', 'PHP', 'Laravel']}
          />
          <ProjectCards
            title="Lorem ipsum dolor sit amet totam tempora,"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum totam tempora, molestiae consequuntur ea accusantium quasi enim! Repellat tempore odio doloribus magnam et aspernatur explicabo earum, sapiente fugit, modi totam?"
            techs={['HTML', 'CSS', 'Javascript', 'PHP', 'Laravel']}
          />
          <ProjectCards
            title="Lorem ipsum dolor sit amet totam tempora,"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum totam tempora, molestiae consequuntur ea accusantium quasi enim! Repellat tempore odio doloribus magnam et aspernatur explicabo earum, sapiente fugit, modi totam?"
            techs={['HTML', 'CSS', 'Javascript', 'PHP', 'Laravel']}
          />
          <ProjectCards
            title="Lorem ipsum dolor sit amet totam tempora,"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum totam tempora, molestiae consequuntur ea accusantium quasi enim! Repellat tempore odio doloribus magnam et aspernatur explicabo earum, sapiente fugit, modi totam?"
            techs={['HTML', 'CSS', 'Javascript', 'PHP', 'Laravel']}
          />
          <ProjectCards
            title="Lorem ipsum dolor sit amet totam tempora,"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum totam tempora, molestiae consequuntur ea accusantium quasi enim! Repellat tempore odio doloribus magnam et aspernatur explicabo earum, sapiente fugit, modi totam?"
            techs={['HTML', 'CSS', 'Javascript', 'PHP', 'Laravel']}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Projects;
