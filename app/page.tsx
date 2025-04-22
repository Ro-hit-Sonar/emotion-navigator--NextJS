"use client";

import AllEmotions from "@/components/AllEmotions";
import ContactUs from "@/components/ContactUs";
import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <>
      <div className="relative flex min-h-screen w-full bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/health5.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="relative z-10 flex flex-col items-end justify-end h-full w-full px-4 sm:px-8 md:px-12 lg:px-24 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-mono font-extralight text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          >
            Emotions are chemicals with meaning
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono font-extralight text-sm sm:text-base md:text-lg lg:text-xl mt-4 max-w-2xl text-right"
          >
            Understand, Uncover & take control of your journey.
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-black py-12 sm:py-16 text-center"
      >
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-mono px-4 sm:px-8">
          So what are you feeling today?
        </p>
      </motion.div>

      <div
        id="get-started"
        className="min-h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/mental.png')" }}
      >
        <AllEmotions />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen w-full bg-cover bg-center flex flex-col items-start justify-center px-4 sm:px-8 md:px-12 lg:px-24 py-12 sm:py-16 text-white"
        style={{ backgroundImage: "url('/health3.png')" }}
      >
        <h1 className="font-mono font-extralight text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Together, We Rise Stronger!
        </h1>
        <p className="font-mono font-extralight text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mt-4 max-w-3xl text-justify">
          Sometimes, keeping everything bottled up can feel like an endless
          battle. We believe that sharing your story can be a powerful step
          toward healing. In this space, you&apos;re invited to let your heart
          speak—pour out your thoughts, feelings, and experiences without
          judgment. If you&apos;d like to engage in a conversation or receive a
          reply, feel free to include your email address. However, if you prefer
          to remain anonymous and simply share what&apos;s weighing on your
          heart, that&apos;s perfectly okay too.
        </p>
      </motion.div>

      <div id="confess">
        <ContactUs />
      </div>
    </>
  );
};

export default Page;
