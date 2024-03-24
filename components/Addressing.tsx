import React from "react";
import Image from "next/image";
import Button from "./ui/Button";

import bikingicon from "@/public/icon/bikingicon.svg";
const Addressing = () => {
  return (
    <div className="flex flex-col bg-gray-800 bg-opacity-75  m-3">
      <div className="text-5xl text-center max-md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-400 m-1">
        Features
      </div>
      <div className=" flex flex-row flex-wrap justify-center align-middle text-gray-300">
        <div className=" flex flex-col flex-wrap w-fit text-center max-w-sm justify-center align-middle items-center rounded-xl bg-opacity-40 m-1  bg-gray-900 border border-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path
              className=" hover:fill-gray-950 fill-gray-600"
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
            ></path>
          </svg>
          <h1 className="text-lg font-bold">Hai Hello</h1>
          <p
          className="text-gray-600 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit saepe ut quam explicab
          </p>
        </div>
      </div>
    </div>
  );
};

export default Addressing;
