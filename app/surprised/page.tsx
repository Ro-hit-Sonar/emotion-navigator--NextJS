import SurprisedEmotion from "@/components/SurprisedEmotion";
import React from "react";

const page = () => {
  return (
    <div className="bg-black">
      <h1 className="bg-black text-white ml-28 mr-28 text-center text-2xl font-mono ">
        Surprise can be a jolt to our emotions, good or bad. Let’s understand
        this unexpected feeling and where it’s coming from.
      </h1>
      <SurprisedEmotion />
    </div>
  );
};

export default page;
