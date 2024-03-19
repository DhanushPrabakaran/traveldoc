import React from "react";
import Image from "next/image";
import Button from "./ui/Button";
import Sea from "@/public/Sea.jpg";
import bikingicon from "@/public/icon/bikingicon.svg";
const Addressing = () => {
  return (
    <div className="flex flex-col justify-center align-middle items-center text-center lg:w-1/2 p-1">
      <h1 className=" text-3xl lg:text-4xl max-md:text-4xl font-bold">
        Where are you now ?
      </h1>
      <div className=" bg-lime-500 bg-opacity-80 m-2 p-2 flex flex-wrap justify-center align-middle gap-1 rounded-xl border-2 border-green-950  max-w-md w-full ">
        <div className="w-fit text-center p-2">
          <Image
            src={bikingicon}
            alt={""}
            className="bg-white w-14 h-14 hover:bg-green-800 lg:h-16 lg:w-16  rounded-xl"
          />
          <h1 className=" text-xl lg:text-2xl max-md:text-xl text-center font-bold">
            Outing
          </h1>
        </div>

        <div className="w-fit text-center p-2">
          <Image
            src={bikingicon}
            alt={""}
            className="bg-white w-14 h-14 hover:bg-green-800 lg:h-16 lg:w-16  rounded-xl"
          />
          <h1 className=" text-xl lg:text-2xl max-md:text-xl text-center font-bold">
            Outing
          </h1>
        </div>
        <div className="w-fit text-center p-2">
          <Image
            src={bikingicon}
            alt={""}
            className="bg-white w-14 h-14 hover:bg-green-800 lg:h-16 lg:w-16  rounded-xl"
          />
          <h1 className=" text-xl lg:text-2xl max-md:text-xl text-center font-bold">
            Outing
          </h1>
        </div>
        <div className="w-fit text-center p-2">
          <Image
            src={bikingicon}
            alt={""}
            className="bg-white w-14 h-14 hover:bg-green-800 lg:h-16 lg:w-16  rounded-xl"
          />
          <h1 className=" text-xl lg:text-2xl max-md:text-xl text-center font-bold">
            Outing
          </h1>
        </div>
        
      </div>
    </div>
  );
};

export default Addressing;
