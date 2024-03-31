import Link  from "next/link";
import React from "react";

const Button = (props: { text: string }) => {
  return (
    
        <Link
          href={"/"}
          className="text-base text-center font-bold px-2 py-1  rounded  bg-opacity-40 mr-4 bg-gray-900 w-full"
        >
      {props.text}
        </Link>
    
  );
};

export default Button;
