import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-lime-200 h-16 flex flex-row justify-between items-center rounded-full">
      <h1 className="text-emerald-600 text-3xl max-md:text-2xl ml-3">
        Wonder Wisper
      </h1>
      <div className=" flex flex-row mr-1">
        {/* <button className="bg-white w-full h-full mx-1 p-3 px-6 rounded-3xl text-nowrap">
          Sign up
        </button> */}
        <button className="bg-white w-full h-full mx-1 p-3 px-6 rounded-3xl text-nowrap text-emerald-600">
          Sign-up / Login
        </button>
      </div>
    </div>
  );
};

export default Header;
