import Image from "next/image";

import Link from "next/link";

const LandingPage = () => {
  return (
    
    <div className="w-full  h-screen text-white bg-gray-950 " >
     
      <div
      className=" w-full  h-16 text-center flex flex-row justify-between  items-center border-b border-gray-400 ">
        <div className="text-base md:text-lg lg:text-xl xl:text-2xl font-extrabold ml-6">Wonder Wisper</div>

        {/* <div
        className="lg:flex flex-row hidden">
        <Link  className="text-sm md:text-base lg:text-lg xl:text-xl font-bold px-2 py-1  m-1 rounded bg-gray-600 bg-opacity-40  " href={""}>login</Link>
        
        </div> */}
        <div
        className="flex flex-row ">
        <Link href={"/"} className="text-sm  font-bold px-2 py-1  rounded bg-gray-600 bg-opacity-40 mr-4">Login</Link>
        <Link href={"/"} className="text-sm  font-bold px-2 py-1  rounded bg-gray-600 bg-opacity-40 mr-4">signup</Link>
        </div>
        
        
      </div>
      <div className="text-5xl md:text-4xl lg:text-6xl xl:text-9xl font-extrabold">Full Screen Text</div>
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
