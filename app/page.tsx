import LandingPage from "@/components/LandingPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Addressing from "@/components/Addressing";
export default function Home() {
  return (
    <div className="relative bg-gray-950">
      <Header/>
      <LandingPage/>
      <Addressing/>
      <Footer/>    
    </div>
  );
}
