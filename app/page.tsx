import Image from "next/image";
import { Button } from "@/components/ui/button";
import camper from "@/public/camper.png";
export default function Home() {
  return (
    <div className=" bg-black w-screen h-screen">
      <div className=" w-full bg-white h-20 rounded-br-full flex flex-row justify-between align-middle items-center ">
        <Image src={camper} alt={""} width={140} className="" />
        {/* <h1 className=" text-2xl font-serif font-bold uppercase">Wonder Wisper</h1> */}
        <div
        className=" mr-8">
        <Button variant="ghost" className="m-2 bg-black text-white rounded-bl-full" size="lg">Button</Button>
        <Button variant="ghost" className="m-2 bg-black text-white rounded-br-full" size="lg">Button</Button>
        </div>
        
      </div>

      <h1 className=" text-white font-serif text-5xl lg:text-7xl  ">
        Helo hai
      </h1>
    </div>
  );
}
