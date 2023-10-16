import React from "react";
import Frontend from "./skills/Frontend";

function Skills() {
  const value1 = {
    name: "HTML / CSS",
    value: 80,
  };
  const value2 = {
    name: "JAVASCRIPT",
    value: 60,
  };
  const value3 = {
    name: "TAILWIND",
    value: 80,
  };
  const value4 = {
    name: "JAVA",
    value: 70,
  };
  const value5 = {
    name: "Node.js",
    value: 60,
  };
  const value6 = {
    name: "python",
    value: 50,
  };

  return (
    <div className="md:flex gap-7 pb-32 px-10">
      <div className="md:w-1/2 md:mb-0 mb-10">
        <h2 className="text-2xl mb-3 font-bold">Front-End</h2>
        <div className="border-2 border-pink-600 p-5 rounded-lg">
          <Frontend SkillSet={value1.name} SkillPrec={value1.value} />
          <Frontend SkillSet={value3.name} SkillPrec={value3.value} />
          <Frontend SkillSet={value2.name} SkillPrec={value2.value} />
        </div>
      </div>
      <div className="md:w-1/2">
        <h2 className="text-2xl mb-3 font-bold">Back-End</h2>
        <div className="border-2 border-pink-600 p-5 rounded-lg">
          <Frontend SkillSet={value4.name} SkillPrec={value4.value} />
          <Frontend SkillSet={value5.name} SkillPrec={value5.value} />
          <Frontend SkillSet={value6.name} SkillPrec={value6.value} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
