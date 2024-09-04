import ProjectCards from "../components/ProjectCards";
import Symbole from '../common/Symbole';

function Projects() {
  return (
    <div className="h-screen section flex flex-col justify-around items-center sectionProject relative overflow-hidden">
      {/* Title and SVG */}
      <div className="relative">
        <h1 className="text-white text-3xl">Projects</h1>
        <svg
          width="232"
          height="106"
          viewBox="0 0 232 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[-20px] right-[-40px]"
        >
          <path
            d="M135.618 11.619C131.703 8.35653 119.874 9.54755 115.764 9.62255C90.4339 10.0848 66.7831 17.7804 44.889 30.4007C27.7034 40.307 5.17925 55.8898 1.77987 77.281C0.21493 87.1287 5.60248 98.2811 15.9031 101.387C22.5173 103.381 29.5905 103.894 36.4964 103.716C65.2052 102.974 97.1379 95.6561 124.268 88.4835C153.336 80.7983 182.195 72.2215 208.711 57.7229C217.959 52.6664 232.347 43.0977 230.118 29.8831C227.565 14.7499 204.617 8.40927 192.702 5.85142C167.014 0.336729 139.662 1.83437 113.878 5.92537C101.921 7.82267 89.4924 10.2766 79.7165 17.6085"
            stroke="#7BEDE9"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Project Cards */}
      <div className="w-[85vw] mx-auto p-4 grid grid-cols-3 gap-6 mt-4">
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
        {/* Add other ProjectCards here */}
      </div>

      {/* Symbole on the left */}
      <Symbole myRef="rotate-[182deg]" className="absolute left-[-31%] top-[40%]  transform -translate-y-1/2" />

      {/* Symbole on the right */}
      <Symbole className="absolute right-[-31%] top-[40%] transform -translate-y-1/2" />
    </div>
  );
}

export default Projects;
