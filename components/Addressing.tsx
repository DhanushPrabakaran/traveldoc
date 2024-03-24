import React from "react";
import Image from "next/image";
import Button from "./ui/Button";

import bikingicon from "@/public/icon/bikingicon.svg";
import Features from "./ui/Features";
const Addressing = () => {
  return (
    <div className="flex flex-col bg-gray-800 bg-opacity-30   border border-gray-900 rounded-xl shadow-md w-full ">
      <div className="text-5xl text-center max-md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-400 m-1">
        Features
      </div>
      <div className=" flex flex-row flex-wrap justify-center align-middle text-gray-300">
        <Features/>
        <Features/>
        <Features/>
        <Features/>
      </div>
    </div>
  );
};

export default Addressing;
