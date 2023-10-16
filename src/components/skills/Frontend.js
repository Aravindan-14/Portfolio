import React from "react";

function Frontend(props) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span>{props.SkillSet}</span>
        <span>{props.SkillPrec}%</span>
      </div>
      <div className="w-full border-pink-600 border p-2 rounded-lg  ">
        <div
          className=" bg-pink-600 h-1"
          style={{ width: `${props.SkillPrec}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Frontend;
