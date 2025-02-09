import BadEmotion from "@/components/BadEmotion";
import React from "react";

const page = () => {
  return (
    <div className="bg-black">
      <h1 className="bg-black text-white ml-28 mr-28 text-center text-2xl font-mono ">
        t’s okay to feel bad sometimes—it’s part of being human. Let’s explore
        what’s behind this feeling and how to move through it.
      </h1>
      <BadEmotion />
    </div>
  );
};

export default page;
