import { useEffect, useRef } from 'react';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import ModelText from '../components/ModelText';

function ScrollHandler() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const sections = sectionRefs.current;
    let scrollEnabled = true;

    const handleScroll = (event) => {
      event.preventDefault();

      if (!scrollEnabled) return;

      const direction = event.deltaY > 0 ? 'down' : 'up';
      const currentSectionIndex = sections.findIndex(section =>
        section.getBoundingClientRect().top >= 0 &&
        section.getBoundingClientRect().top <= window.innerHeight / 2
      );

      let targetSectionIndex;
      if (direction === 'down' && currentSectionIndex < sections.length - 1) {
        targetSectionIndex = currentSectionIndex + 1;
      } else if (direction === 'up' && currentSectionIndex > 0) {
        targetSectionIndex = currentSectionIndex - 1;
      }

      if (targetSectionIndex !== undefined) {
        scrollEnabled = false;
        sections[targetSectionIndex].scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => scrollEnabled = true, 1000); // Delay between scrolls
      }
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3, // Trigger when 30% of the section is visible
    });

    sections.forEach(section => observer.observe(section));

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <div ref={(el) => sectionRefs.current[0] = el} className="section">
        <Home />
      </div>
      <div ref={(el) => sectionRefs.current[1] = el} className="section">
        <Projects />
      </div>
    </>
  );
}

export default ScrollHandler;
