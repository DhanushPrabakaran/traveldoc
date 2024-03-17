import Image from "next/image";
import Header from "@/components/Header";
import Sea from "@/public/Sea.jpg";
export default function Home() {
  return (
    <div className=" absolute bg-lime-200 w-full h-screen text-emerald-800">
      <Header />
      <div className=" bg-lime-200 w-full h-screen flex flex-col lg:flex-row  rounded-xl max-md:mt-[75px] ">
        <div className="bg-black lg:w-1/2 max-md:rounded-xl max-md:mx-2 lg:rounded-r-3xl">
          <Image
            src={Sea}
            alt={""}
            className=" max-md:rounded-xl w-full h-full object-center object-cover lg:rounded-r-3xl  hover:object-top opacity-40 "
          />
        </div>
        <div className=" flex flex-col justify-center align-middle items-center">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5 text-wrap max-w-[700px] text-center">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button 
          className="bg-white  mx-1 p-3 px-6 rounded-3xl text-nowrap text-emerald-600 font-extrabold uppercase hover:bg-lime-200"
          >Get Started</button>
        </div>
      </div>
    </div>
  );
}
