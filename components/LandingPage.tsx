import Image from "next/image";
import Button from "./ui/Button";
import Sea from "@/public/Sea.jpg";
import Addressing from "./Addressing";

const LandingPage = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full max-md:h-full h-full  bg-lime-200">
      <div className="bg-black rounded-xl h-full lg:w-1/2 m-2 lg:m-0 lg:rounded-l-none max-md:mx-2 lg:rounded-r-3xl relative flex flex-col justify-center align-middle items-center">
        <Image
          src={Sea}
          alt={""}
          className="w-full h-full object-center rounded-xl object-cover lg:rounded-r-3xl  hover:object-top opacity-40"
        />
        <div className="absolute">
          <h1 className="text-4xl max-md:text-3xl text-lime-100 font-extrabold mb-2">
            Hey, <br />
            Where you off to Next ?
          </h1>
          <Button text={"Get Started"}></Button>
        </div>
      </div>
      <Addressing/>
    </div>
  );
};

export default LandingPage;
