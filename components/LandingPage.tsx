import Image from "next/image";
import Sea from '@/public/Sea.jpg'
import Link from "next/link";
import Addressing from "./Addressing";

const LandingPage = () => {
  return (
    <div className="w-full  h-screen text-white bg-gray-950 bg-opaciy-40 bg-blend-overlay flex flex-col items-center justify-center align-middle bg-fixed " style={ {backgroundImage:`url(${Sea.src})`,backgroundPosition:"center",objectPosition:"center",backgroundOrigin:"center"}}>
      <div className="flex flex-col justify-center align-middle items-center max-w-5xl">
        <button className="text-lg bg-gray-900 border border-gray-700 text-gray-200 w-fit px-3 rounded-full bg-opacity-75  text-center m-1  ">
          A Travel Documentary 🫧
        </button>
        <div className="text-5xl text-center max-md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-300 m-1">
          An example app built using Next.js 13 server components.
        </div>
        <div
        className="text-lg md:text-xl lg:text-2xl text-slate-700 text-center max-w-2xl m-1">
        I{"'"}m building a web app with Next.js 13 and open sourcing everything. Follow along as we figure this out together.
        </div>
        <div
        className="flex flex-row m-1 p-2 justify-center items-center align-middle ">
        <Link href={"/"} className="text-xl  px-4 py-2  rounded-full bg-opacity-40 m-4 bg-gray-900 border border-gray-700">Get Started</Link>
        {/* <Link href={"/"} className="text-xl px-2 py-1  rounded bg-gray-400 bg-opacity-40 m-4">signup</Link> */}
        </div> 
      </div>
      <Addressing/>
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
