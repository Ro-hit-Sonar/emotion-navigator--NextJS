import AllEmotions from "@/components/AllEmotions";
import ContactUs from "@/components/ContactUs";
//import { Vortex } from "@/components/ui/vortex";
import { VortexDemo } from "@/components/VortexDemo";
// import Image from "next/image";
//import Footer from "@/components/Footer";
//import NavBar from "@/components/NavBar";
import React from "react";

const page = () => {
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
};

export default page;
