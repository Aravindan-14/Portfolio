import React from "react";

function Home() {
  return (
    <div id="home">
      <h1 className="text-3xl md:text-7xl font-bold pb-3 drop-shadow-md">
        Hi, I'm <span className="text-pink-600">Aravindan</span>
      </h1>
      <h2 className="text-xl md:text-3xl font-bold pb-3">
        Full Stack Developer
      </h2>
      <p className="font-semibold ">
        I have skills in designing and developing Website. Text in a pre element
        is displayed in a fixed-width font,I have skills in designing and
        developing Website. Text in a pre element is displayed in a fixed-width
        font,
      </p>
      <div>
        <button className="bg-black text-white px-4 py-3 mt-5 rounded  hover:bg-pink-600 font-bold">
          Download CV
        </button>
      </div>
    </div>
  );
}

export default Home;
