 import About from "./components/About";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
function App() {
  return (
    <div className=" z-50 relative overflow-hidden">
      // <video
      //   className="h-full  -z-50 md:scale-125 scale-[4] fixed  md:w-full opacity-25"
      //   controls
      //   autoPlay
      //   loop
      //   muted
      //   playsInline
      //   src="bg_video.mp4"
      //   type="video/mp4"
      // ></video>
      <div>
        <Nav />
      </div>
      <div className="md:flex justify-center items-center  md:mb-0 pt-5 mb-20 h-screen">
        <div className="md:w-1/2 pl-3 pr-3  md:pl-20 ">
          <Home />
        </div>
        <div className="md:w-1/2 h-full overflow-hidden mb-36 md:pt-10">
          <img className="drop-shadow-sm " src="/Aravind.png" alt=""></img>
        </div>
      </div>
      <div className=" flex justify-center items-center h-[400px] md:h-[620px] gap-5 px-3 md:px-20">
        <div className="hidden md:w-1/2 h-full overflow-hidden  md:flex justify-center items-center">
          <img
            className="object-contain h-[450px] "
            src="Aravind1.jpg"
            alt=""
          ></img>
        </div>
        <div className="md:w-1/2 mt-14">
          <About />
        </div>
      </div>
      <div className="h-screen md:px-40">
        <h1 className="text-4xl md:text-6xl text-center font-bold mb-10">
          My <span className="text-pink-600">Skills</span>
        </h1>
        <div>
          <Skills />
        </div>
      </div>
      <div>
        <Education />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
