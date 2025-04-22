import AllEmotions from "@/components/AllEmotions";
import ContactUs from "@/components/Contact";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="relative flex h-screen w-full bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/health5.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="relative z-10 flex flex-col items-end justify-end h-full w-full px-6 sm:px-12 lg:px-24 text-white">
          <h1 className="font-mono font-extralight text-2xl sm:text-3xl lg:text-4xl">
            Emotions are chemicals with meaning
          </h1>
          <p className="font-mono font-extralight text-base sm:text-lg lg:text-xl mt-4">
            Understand, Uncover & take control of your journey.
          </p>
        </div>
      </div>

      <div className="bg-black py-16 text-center">
        <p className="text-white text-2xl sm:text-3xl md:text-4xl font-bold font-mono">
          So what are you feeling today?
        </p>
      </div>

      <div
        className="min-h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/mental.png')" }}
      >
        <AllEmotions />
      </div>

      <div
        className="min-h-screen w-full bg-cover bg-center flex flex-col items-start justify-center px-6 sm:px-12 lg:px-24 py-16 text-white"
        style={{ backgroundImage: "url('/health3.png')" }}
      >
        <h1 className="font-mono font-extralight text-2xl sm:text-3xl lg:text-4xl">
          Together, We Rise Stronger!
        </h1>
        <p className="font-mono font-extralight text-sm sm:text-base md:text-lg leading-relaxed mt-4 max-w-3xl text-justify">
          Sometimes, keeping everything bottled up can feel like an endless
          battle. We believe that sharing your story can be a powerful step
          toward healing. In this space, you’re invited to let your heart
          speak—pour out your thoughts, feelings, and experiences without
          judgment. If you’d like to engage in a conversation or receive a
          reply, feel free to include your email address. However, if you prefer
          to remain anonymous and simply share what’s weighing on your heart,
          that&apos;s perfectly okay too.
        </p>
      </div>

      <ContactUs />
    </>
  );
};

export default Page;
