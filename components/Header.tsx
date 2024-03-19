import Image from "next/image";
import Button from "./ui/Button";
const Header = () => {
  return (
    <div className="bg-transparent w-full h-16 flex flex-row justify-between items-center z-10 lg:absolute top-0">
      <h1 className="text-emerald-600 text-3xl max-xl:text-2xl ml-5 font-extrabold">
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
