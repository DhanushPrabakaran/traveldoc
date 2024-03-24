import React from "react";
import Image from "next/image";
import Button from "./ui/Button";

import bikingicon from "@/public/icon/bikingicon.svg";
import Features from "./ui/Features";
const Addressing = () => {
  return (
    <div className="w-full h-ful p-8">
      <div className="flex flex-col bg-gray-950 bg-opacity-100   border border-gray-900 rounded-xl shadow-md w-full ">
        <div className="text-5xl text-center max-md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-400 my-3">
          Features
        </div>
        <div className="flex flex-row flex-wrap justify-center align-middle text-gray-300">
          <Features />
          <Features />
          <Features />
          <Features />
        </div>
      </div>
    </div>
  );
};

export default Addressing;
