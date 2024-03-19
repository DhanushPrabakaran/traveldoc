import React from 'react'
import Image from "next/image";
import Button from "./ui/Button";
import Sea from "@/public/Sea.jpg";
import bikingicon from "@/public/icon/bikingicon.svg";
const Addressing = () => {
  return (
    <div className="flex flex-col justify-center align-middle items-center text-center lg:w-1/2">
        <h1 className=" text-2xl lg:text-4xl max-md:text-3xl font-bold">
          Where are you now ?
        </h1>
        <div className=" bg-white bg-opacity-20 m-1 p-2 flex flex-wrap justify-center align-middle gap-1 ">
          <Image
            src={bikingicon}
            alt={""}
            className="bg-white w-14 h-14 hover:bg-green-800 lg:h-16 lg:w-16  rounded-xl"
          />
          <Image
            src={bikingicon}
            alt={""}
            className="bg-white w-14 h-14 hover:bg-green-800 lg:h-16 lg:w-16  rounded-xl"
          />
          <Image
            src={bikingicon}
            alt={""}
            className="bg-white w-14 h-14 hover:bg-green-800 lg:h-16 lg:w-16  rounded-xl"
          />

          <Image
            src={bikingicon}
            alt={""}
            className="bg-white w-14 h-14 hover:bg-green-800 lg:h-16 lg:w-16  rounded-xl"
          />
        </div>
      </div>
  )
}

export default Addressing
