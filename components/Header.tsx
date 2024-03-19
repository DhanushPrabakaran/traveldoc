import Image from "next/image";

const Header = () => {
  return (
    <div className="lg:bg-transparent bg-lime-200 h-16 flex flex-row justify-between items-center lg:absolute z-10  top-2 w-full">
      <h1 className="text-emerald-600 text-3xl max-xl:text-2xl ml-5 font-extrabold">
        Wonder Wisper
      </h1>
      <div className="  flex flex-row mr-1">
        <button className="bg-white w-full h-full mx-1 p-3 px-6 rounded-3xl text-nowrap text-emerald-600 font-extrabold uppercase hover:bg-lime-200">
          Sign-up / Login
        </button>
      </div>
    </div>
  );
};

export default Header;
