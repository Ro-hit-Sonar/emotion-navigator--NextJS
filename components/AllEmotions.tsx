"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const emotionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const emotions = [
  { name: "Happy", color: "bg-yellow-300", textColor: "text-black" },
  { name: "Surprised", color: "bg-blue-300", textColor: "text-black" },
  { name: "Bad", color: "bg-gray-500", textColor: "text-white" },
  { name: "Fearful", color: "bg-purple-400", textColor: "text-black" },
  { name: "Angry", color: "bg-orange-400", textColor: "text-black" },
  { name: "Disgusted", color: "bg-gray-700", textColor: "text-white" },
  { name: "Sad", color: "bg-blue-500", textColor: "text-white" },
];

const AllEmotions: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center py-8 sm:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 w-full max-w-screen-xl">
        {emotions.map((emotion, index) => (
          <motion.div
            key={emotion.name}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={emotionVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={`/${emotion.name.toLowerCase()}`}>
              <div
                className={`
                ${emotion.color} 
                ${emotion.textColor} 
                text-lg sm:text-xl font-bold 
                h-24 sm:h-28 
                flex justify-center items-center 
                rounded-lg 
                shadow-lg 
                hover:shadow-xl 
                transition-all 
                duration-300 
                cursor-pointer
                transform
                hover:rotate-1
                hover:translate-y-[-2px]
              `}
              >
                {emotion.name}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllEmotions;
