import Image from "next/image";
import Sea from "@/public/Sea.jpg";
import Link from "next/link";
import Addressing from "./Addressing";
import Features from "./ui/Features";
import { Separator } from "@radix-ui/react-separator";

const LandingPage = () => {
  return (
    <div className=" w-full h-screen  text-white bg-transprant bg-blend-overlay flex flex-col items-center justify-center align-middle  ">
      <div className="flex flex-col justify-center align-middle items-center max-w-5xl">
        <button className="text-lg bg-gray-900 border border-gray-700 text-gray-200 w-fit px-3 rounded-full bg-opacity-75  text-center m-1  ">
          A Travel Documentary 🫧
        </button>
        <div className="text-5xl text-center max-md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-300 m-1">
          An example app built using Next.js 13 server components.
        </div>
        <div className="text-lg md:text-xl lg:text-2xl text-slate-700 text-center max-w-2xl m-1">
          I{"'"}m building a web app with Next.js 13 and open sourcing
          everything. Follow along as we figure this out together.
        </div>
        <div className="flex flex-row m-1 p-2 justify-center items-center align-middle ">
          <Link
            href={"/"}
            className="text-xl  px-4 py-2  rounded-full bg-opacity-40 m-4 bg-gray-900 border border-gray-700"
          >
            Get Started
          </Link>
        </div>
      </div>

      
    </div>
  );
};

export default LandingPage;
{
  /* <div className="text-xs md:text-sm lg:text-base xl:text-lg font-extrabold">Small Text</div>
<div className="text-base md:text-lg lg:text-xl xl:text-2xl font-extrabold">Normal Text</div>
<div className="text-xl md:text-xl lg:text-2xl xl:text-3xl font-extrabold">Medium Text</div>
<div className="text-3xl md:text-2xl lg:text-4xl xl:text-5xl font-extrabold">Large Text</div>
<div className="text-5xl md:text-4xl lg:text-6xl xl:text-9xl font-extrabold">Full Screen Text</div>
{/* <div> */
}

{/* <div className="bg-gray-950  flex-row flex  rounded-xl justify-evenly items-center align-middle border border-gray-800 flex-wrap">
        <div className=" flex flex-row m-2 justify-evenly  items-center align-middle ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-10 h-10 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>

          <div>
            <div className=" font-bold text-lg">Downloads</div>
            <div className=" lg:text-4xl max-sm:text-3xl text-lg font-extrabold font-sans">
              31K
            </div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>
        </div>

        <div className=" flex flex-row m-2 justify-evenly  items-center align-middle ">
          <div>
            <div className=" font-bold text-lg">New Users</div>
            <div className=" lg:text-4xl max-sm:text-3xl text-lg font-extrabold font-sans">
              4,200
            </div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-10 h-10 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            ></path>
          </svg>
        </div>

        <div className=" flex flex-row m-2 justify-evenly  items-center align-middle ">
          <div>
            <div className=" font-bold text-lg">New Registers</div>
            <div className=" lg:text-4xl max-sm:text-3xl text-lg font-extrabold font-sans">
              1,200
            </div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            ></path>
          </svg>
        </div>
      </div> */}
