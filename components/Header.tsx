import Image from "next/image";
import Button from "./ui/Button";
const Header = () => {
  return (
    <div className="w-full bg-transparent h-24 flex flex-row justify-between items-center absolute top-0 z-10">
      <h1 className=" text-w text-3xl max-xl:text-2xl ml-5 font-extrabold">
        Wonder Wisper
      </h1>
      <div className="  flex flex-row mr-1">
        <Button text={"Sign-up"}></Button>
        <Button text={"Login"}></Button>
      </div>
    </div>
  );
};

export default Header;
