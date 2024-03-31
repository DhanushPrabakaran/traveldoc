import Sea from "@/public/Sea.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
export default function Page() {
  return (
    <div>
      <Header />
    <div
      className="h-screen text-white bg-gray-950 bg-opaciy-40 bg-blend-overlay flex flex-col items-center justify-center align-middle bg-fixed"
      style={{
        backgroundImage: `url(${Sea.src})`,
        backgroundPosition: "center",
        objectPosition: "center",
        backgroundOrigin: "center",
      }}
      // style={{
      //   background: `url("/Sea.jpg") center center / cover no-repeat`,
      // }}
    >
      <div className="flex flex-col justify-center align-middle items-center max-w-5xl">
        <div className="text-lg bg-gray-950  border border-gray-700 text-gray-200 w-fit px-3 rounded-full bg-opacity-75  text-center m-1  ">
          A Travel Documentary 🫧
        </div>
        <div className="text-5xl text-center max-md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-300 m-1">
        Explore, document, and share your travel journey with ease – all in one place.
        </div>
        <div className="text-lg md:text-xl lg:text-2xl text-slate-700 text-center max-w-2xl m-1 font-sans">
        Effortlessly manage budgets, exchange travel tips, and connect with a global community of like-minded adventurers.
        </div>
        <div className="flex flex-row m-1 p-2 justify-center items-center align-middle ">
          <Link
            href={'/'}
            className="text-xl  px-4 py-2  rounded-full bg-opacity-40 m-4 bg-gray-900 border border-gray-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  );
}
