"use client";
import { useState } from "react";
import Link from "next/link";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-gray-950 h-16 flex flex-row justify-between w-full">
      <div className="flex items-center justify-between w-full">
        <div>
          <Link href="/">
            <div className="text-white text-xl font-bold cursor-pointer ml-2">
              Wonder Wisper
            </div>
          </Link>
        </div>
        <nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden focus:outline-none mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="white"
              viewBox="0 0 24 24"
              stroke="white"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:block  md:bg-opacity-0 text-center flex  justify-center align-middle items-center  w-full md:w-auto md:shadow-none absolute md:relative bg-gray-950 bg-opacity-90 text-white  rounded-md left-0 top-16 md:top-0 z-50 transition  ease-in-out duration-1000`}
          >
            <div className="flex justify-center flex-col p-4 md:p-0  md:space-y-0 space-y-2 md:flex-row md:items-center md:justify-between ">
              <Link
                href="/"
                className="text-base text-center font-bold px-2 py-1  rounded  bg-opacity-40 mr-4 bg-gray-950 w-full"
              >
                Home
              </Link>
              <Link
                href="/"
                className="text-base text-center font-bold px-2 py-1  rounded  bg-opacity-40 mr-4 bg-gray-950 w-full"
              >
                Login
              </Link>
              <Link
                href="/"
                className="text-base text-center font-bold px-2 py-1  rounded  bg-opacity-40 mr-4 bg-gray-950 w-full"
              >
                Signup
              </Link>
              <Link
                href="/"
                className="text-base text-center font-bold px-2 py-1  rounded  bg-opacity-40 mr-4 bg-gray-950 w-full"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
