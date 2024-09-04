import './App.css';
import AnimatedBackground from './common/AnimatedBackground';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ScrollHandler from './common/ScrollHandler'; // Import the ScrollHandler component

function App() {
  return (
    <>
      <AnimatedBackground>
        {/* <Navbar /> */}
        <Home />
        <Projects />
        <ScrollHandler /> {/* Add ScrollHandler here */}
      </AnimatedBackground>
    </>
  );
}

export default App;
