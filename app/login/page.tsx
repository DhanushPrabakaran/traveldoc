import LandingPage from "@/components/LandingPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sea from "@/public/Sea.jpg";
import Login from "@/components/Login";
export default function Page() {
  return (
    <div
      className="h-full text-white bg-gray-950 bg-opaciy-40 bg-blend-overlay flex flex-col items-center justify-center align-middle bg-fixed">
      <Header />
      <Login/>
      <Footer />
    </div>
  );
}
