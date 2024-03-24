import Image from "next/image";

import LandingPage from "@/components/LandingPage";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default function Home() {
  return (
    <div className="relative">
      <Header/>
      <LandingPage/>
      {/* <Footer/>     */}
    </div>
  );
}
