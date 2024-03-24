import Image from "next/image";
import Button from "./ui/Button";
import Link from "next/link";
const Header = () => {
  return (
    <div
      className=" w-full  h-16 text-center flex flex-row justify-between text-gray-400 items-center border-b border-gray-400 bg-gray-950 ">
        <div className="text-lg md:text-lg lg:text-xl xl:text-2xl   font-extrabold ml-6">Wonder Wisper</div>
        <div
        className="flex flex-row ">
        <Link href={"/"} className="text-sm  font-bold px-2 py-1  rounded bg-gray-600 bg-opacity-40 mr-4">Login</Link>
        <Link href={"/"} className="text-sm  font-bold px-2 py-1  rounded bg-gray-600 bg-opacity-40 mr-4">signup</Link>
        </div>        
      </div>
  );
};

export default Header;
