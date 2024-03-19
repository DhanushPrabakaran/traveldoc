import Image from "next/image";
import Button from "./ui/Button";
const Header = () => {
  return (
    <div className="lg:bg-transparent bg-lime-200 h-16 flex flex-row justify-between items-center lg:absolute z-10  top-2 w-full">
      <h1 className="text-emerald-600 max-sm:text-xl  text-3xl max-xl:text-2xl ml-5 font-extrabold">
        Wonder Wisper
      </h1>
      <div className="  flex flex-row mr-1">
        <Button text={"Sign-up / Login"}>
          
        </Button>
      </div>
    </div>
  );
};

export default Header;
