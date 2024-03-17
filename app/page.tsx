import Image from "next/image";
import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage";
export default function Home() {
  return (
    <div className="  bg-lime-200 w-full h-screen text-emerald-800 relative">
      <Header />
      <LandingPage/>
    </div>
  );
}
