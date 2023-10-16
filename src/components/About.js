import React from "react";

function About() {
  return (
    <div>
      <h1 className="text-4xl md:text-6xl font-bold pb-3">
        About <span className="text-pink-600">Me!</span>
      </h1>
      <h2 className="text-3xl font-bold pb-3">Full Stack Developer</h2>
      <p className="font-semibold">
        I have skills in designing and developing Website. Text in a pre element
        is displayed in a fixed-width font,I have skills in designing and
        developing Website. Text in a pre element is displayed in a fixed-width
        font,
      </p>
      <div>
        <button className="bg-black text-white px-4 py-3 mt-5 rounded hover:bg-pink-600 font-bold">
          Let's Talk
        </button>
      </div>
    </div>
  );
}

export default About;
