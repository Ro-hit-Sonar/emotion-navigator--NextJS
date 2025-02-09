// import NavBar from "@/lego/NavBar";
import AllEmotions from "@/components/AllEmotions";
import ContactUs from "@/components/ContactUs";
import { VortexDemo } from "@/components/VortexDemo";
//import Image from "next/image";

export default function Home() {
  return (
    <>
      <VortexDemo />
      <div className="bg-black">
        <p className="   text-center  text-white text-4xl font-bold font-mono">
          {" "}
          <br />
          <br />
          So what are you feeling today?
        </p>
      </div>
      <AllEmotions />

      <ContactUs />
    </>
  );
}
