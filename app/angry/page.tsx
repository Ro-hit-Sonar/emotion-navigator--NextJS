import AngryEmotion from "@/components/AngryEmotion";
import React from "react";

const page = () => {
  return (
    <div className="bg-black">
      <h1 className="bg-black text-white ml-28 mr-28 text-center text-2xl font-mono ">
        Anger often hides pain or unmet needs. Let’s uncover what’s beneath the
        surface and channel your feelings constructively.
      </h1>
      <AngryEmotion />
    </div>
  );
};

export default page;
