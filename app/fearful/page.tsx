import FearfulEmotion from "@/components/FearfulEmotion";
import React from "react";

const page = () => {
  return (
    <div className="bg-black">
      <h1 className="bg-black text-white ml-28 mr-28 text-center text-2xl font-mono ">
        Fear can be overwhelming, but it also protects us. Let’s face your fear
        gently and see what it’s trying to tell you.
      </h1>
      <FearfulEmotion />
    </div>
  );
};

export default page;
