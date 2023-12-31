import React from "react";
import EducationData from "./Education/EducationData";

function Education() {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold pb-10 text-center md:mt-0 mt-24">
        Education
      </h1>
      <div className="md:flex justify-center items-center md:gap-10 px-3 md:px-40">
        <div>
          <h1 className="text-xl font-bold text-center pb-3">Education</h1>
          <div className=" border-l-2 border-pink-600">
            <EducationData />
            <EducationData />
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold text-center pb-3">Experience</h1>
          <div className=" border-l-2 border-pink-600">
            <EducationData />
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
