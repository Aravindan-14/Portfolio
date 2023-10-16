import React from "react";

function Footer() {
  return (
    <div className=" md:mt-5 bg-black text-white text-center mt-10 flex justify-center items-center flex-col p-10">
      <div className="flex justify-center items-center gap-5">
        <div className="bg-pink-600 w-12     rounded-full">
          <i class=" fa-brands text-xl py-2 fa-instagram"></i>
        </div>
        <div className="bg-pink-600 w-12     rounded-full">
          <i class=" fa-brands text-xl py-2 fa-youtube"></i>
        </div>
        <div className="bg-pink-600 w-12     rounded-full">
          <i class=" fa-brands text-xl py-2 fa-facebook-f"></i>
        </div>
      </div>
      <h1 className="py-5">aravindan2518@gmail.com</h1>
      <p></p>
    </div>
  );
}

export default Footer;
