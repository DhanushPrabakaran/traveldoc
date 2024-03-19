import Image from "next/image";
import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage";
import Sea from "@/public/Sea.jpg";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="text-emerald-800 bg-lime-200 relative ">
      <Header />
      <LandingPage/>  
      <Footer/>    
    </div>
  );
}
