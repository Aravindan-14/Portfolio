import React from "react";

function Nav() {
  return (
    <div>
      <section className="bg-black shadow-neutral-900 p-5 text-white">
        <div class="container mx-auto">
          <div class="flex justify-between">
            <span class="text-2xl font-bold pr-5 mr-5 border-r-2 border-gray-500 uppercase">
              portfolio
            </span>
            <div class="my-auto lg:ml-24">
              <ul class="md:flex hidden">
                <li class="pr-10 font-bold">Home</li>
                <li class="pr-10 font-bold">About Me</li>
                <li class="pr-10 font-bold">Skills</li>
                <li class="pr-10 font-bold">Education</li>
                <li class="pr-10 font-bold">Contact Me</li>
              </ul>
            </div>
            <span class="md:hidden text-2xl my-auto ml-auto">
              <i class="fa-solid fa-bars"></i>
            </span>
          </div>
          <div>
            <ul class="md:hidden py-5">
              <li class="text-center py-1">
                <span class="py-2 font-semibold border-b-0 border-blue-300 hover:border-b-2">
                  Home
                </span>
              </li>
              <li class="text-center py-1">
                <span class="py-2 font-semibold border-b-0 border-blue-300 hover:border-b-2">
                  Service
                </span>
              </li>
              <li class="text-center py-1">
                <span class="py-2 font-semibold border-b-0 border-blue-300 hover:border-b-2">
                  Our Team
                </span>
              </li>
              <li class="text-center py-1">
                <span class="py-2 font-semibold border-b-0 border-blue-300 hover:border-b-2">
                  About
                </span>
              </li>
              <li class="text-center py-1">
                <span class="py-2 font-semibold border-b-0 border-blue-300 hover:border-b-2">
                  Contact
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nav;
