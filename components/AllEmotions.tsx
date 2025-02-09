import React from "react";
import Link from "next/link";

const AllEmotions: React.FC = () => {
  return (
    <div className=" bg-black min-h-screen bg-[ #0a0a0a] flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 w-full max-w-screen-lg">
        {/* Emotion Blocks */}
        <Link href="/happy">
          <div className="bg-yellow-300 text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Happy
          </div>
        </Link>
        <Link href="/surprised">
          <div className="bg-blue-300 text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Surprised
          </div>
        </Link>
        <Link href="/bad">
          <div className="bg-gray-500 text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Bad
          </div>
        </Link>
        <Link href="/fearful">
          <div className="bg-purple-400 text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Fearful
          </div>
        </Link>
        <Link href="/angry">
          <div className="bg-orange-400 text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Angry
          </div>
        </Link>
        <Link href="/disgusted">
          <div className="bg-gray-700 text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Disgusted
          </div>
        </Link>
        <Link href="/sad">
          <div className="bg-blue-500 text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Sad
          </div>
        </Link>
        {/* Add more blocks here */}
      </div>
    </div>
  );
};

export default AllEmotions;
