

import ArrowAnimation from "../common/ArrowAnimation";
import LineAnimation from "../common/LineAnimation";
import RollingGlobe from "../common/RollingGlobe";

import UnderlineTxt from "../components/UnderlineTxt";

function Home() {
  return (
    <>
      <div className="w-[90vw] section h-screen p-4 flex flex-col items-center justify-center mx-auto">
        <div className="grid grid-cols-3 h-[60vh] ">
          <div className="col-span-1  p-5">
            <div className="flex  h-[80%] ">
            <RollingGlobe />
            </div>
            <div className="flex flex-col p-4 space-y-2">
              <h1 className="text-lg font-bold">Haitham Dihaji</h1>
              <h2 className="text-base text-[#ABC9E9]">Full Stack Developer</h2>
              <div className="flex justify-between w-2/4 text-sm">
                <a href="#">Twitter</a>
                <span className="text-[#F5BFD7]">/</span>
                <a href="#">Github</a>
                <span className="text-[#F5BFD7]">/</span>
                <a href="#">Linkedin</a>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col justify-around p-5">
          <p className="text-xl leading-10 font-regular mb-6">
                Hi I’m&nbsp;
            <UnderlineTxt text="Haitham" />
            , based in Casablanca, Morocco. I am a dedicated web developer with expertise in Laravel/PHP and React.js. I have experience working on various management projects and am skilled in handling systems such as Linux and performing deployments. I am eager to pursue a full-stack web developer role, where I can apply my skills and contribute to innovative web solutions.
          </p> 
            <div className=" flex w-full justify-end  px-4">
              <p className="text-3xl font-light" style={{ fontFamily: '"Playwrite CU", cursive' }}>
                <span className="text-6xl font-serif ">&apos;&apos;</span>Make
                it work, make it right, make it fast.
                <span className="text-6xl font-serif ">&apos;&apos;</span>
              </p>
              <span className=" my-14 text-3xl font-medium text-[#ABC9E9]">
                —Kent Beck
              </span>
            </div>
            <div className="w-full">
              <LineAnimation />
            </div>
          </div>
        </div>
        <ArrowAnimation />
      </div>
    </>
  );
}

export default Home;
