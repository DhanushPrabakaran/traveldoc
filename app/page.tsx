import Image from "next/image";
import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage";
import Sea from "@/public/Sea.jpg";
export default function Home() {
  return (
    <div className="text-emerald-800 relative ">
      <Header />
      <LandingPage/>
      

      
    </div>
  );
}
