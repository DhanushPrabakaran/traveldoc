import React from "react";
import Image from "next/image";
import Sea from "@/public/Sea.jpg";
const LandingPage = () => {
  return (
    <div className=" bg-lime-200 w-full h-screen flex flex-col lg:flex-row  rounded-xl max-md:mt-[75px]">
      <div className="bg-black lg:w-1/2 max-md:rounded-xl max-md:mx-2 lg:rounded-r-3xl relative flex flex-col justify-center align-middle items-center">
        <Image
          src={Sea}
          alt={""}
          className="  rounded-xl w-full h-full object-center object-cover lg:rounded-r-3xl  hover:object-top opacity-40 "
        />
        <div className="absolute ">
          <h1 className="text-4xl text-lime-100 font-extrabold mb-2">
            Hey, <br />
            Where you off to Next ?
          </h1>
          <button className="bg-white  mx-1 p-3 px-6 rounded-3xl text-nowrap text-emerald-600 font-extrabold uppercase hover:bg-lime-200">
            Get Started
          </button>
        </div>
      </div>
      <div className=" flex flex-col justify-center align-middle items-center">
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        <h2>What are you looking for ?</h2>
        <button className="bg-white  mx-1 p-3 px-6 rounded-3xl text-nowrap text-emerald-600 font-extrabold uppercase hover:bg-lime-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
