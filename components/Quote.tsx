import React from "react";

const QuoteCard = ({ text }: { text: string }) => {
  return (
    <div className="md:p-2 p-1 w-1/2 h-[300px]  mb-2 border border-gray-600 bg-gray-900 bg-opacity-50 rounded-lg shadow-lg flex items-center justify-center">
      <p className="text-center text-sm md:text-base lg:text-lg text-gray-300">
        {text}
      </p>
    </div>
  );
};

const Quote = () => {
  return (
    <div
      className="bg-black pb-8 min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(107,114,128,0.2) 0.5px ,transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <section className="text-white body-font w-full">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          {/* Header Section */}
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-cyan-500">
              A Collection of Thoughts & Perspectives
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              The right words at the right time can change everything. These
              pieces offer insights, comfort, and a deeper understanding of the
              emotions we navigate every day{" "}
            </p>
          </div>

          {/* Quote Grid Section */}
          <div className="flex flex-wrap  mb-4 md:-m-2 -m-1">
            {/* Left Column */}
            <div className="flex flex-wrap w-1/2 mb-2">
              <QuoteCard text="“Anxiety Overestimate the threats And then underestimates. Your ability to deal with it.”" />
              <QuoteCard text="“Everything is figureoutable..”" />
              <div className="md:p-2 p-1 w-full h-[360px] border border-gray-600 bg-gray-900 bg-opacity-50 rounded-lg shadow-lg flex items-center justify-center">
                <p className="text-center text-sm md:text-base lg:text-lg text-gray-300">
                  “When you react , you repeat the past . When you respond , you
                  create the future. Practice the pause . The real flex is
                  pausing before reacting and controlling how you respond to
                  things sent to destroy your peace.”
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="mb-4 flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full h-[361px] border border-gray-600 bg-gray-900 bg-opacity-50 rounded-lg shadow-lg flex items-center justify-center">
                <p className="text-center text-sm md:text-base lg:text-lg text-gray-300">
                  “If it drains you, it’s not for you”
                </p>
              </div>
              <QuoteCard text="“Don't subscribe to other people's definition of “fun”.”" />
              <QuoteCard text="“Have faith in yourself & God during your lowest time.”" />
            </div>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            {/* Left Column */}
            <div className="mb-4 flex flex-wrap w-1/2">
              <QuoteCard text="“be kind not naive”" />
              <QuoteCard text="“If you can’t stop your stream of thoughts at night, get up and write them down. This will set your mind at ease so you can sleep.”" />
              <div className="md:p-2 p-1 w-full h-[360px] border border-gray-600 bg-gray-900 bg-opacity-50 rounded-lg shadow-lg flex items-center justify-center">
                <p className="text-center text-sm md:text-base lg:text-lg text-gray-300">
                  “Thoughts are not facts. Don&apos;t believe everything you
                  think.”
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="mb-4 flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full h-[361px] border border-gray-600 bg-gray-900 bg-opacity-50 rounded-lg shadow-lg flex items-center justify-center">
                <p className="text-center text-sm md:text-base lg:text-lg text-gray-300">
                  “Don&apos;t argue with the people who only want to win, not
                  learn”
                </p>
              </div>
              <QuoteCard text="“Numbness is not nothing, neutral is nothing. Numbness is everything at once”" />
              <QuoteCard text="“Self belief should  always be irrational”" />
            </div>
          </div>
          <div className="mb-4 flex flex-wrap md:-m-2 -m-1">
            {/* Left Column */}
            <div className="flex flex-wrap w-1/2">
              <QuoteCard text="“The attacks are meant to wake you up to your potential , not ruin you.GET IN THE GAME .”" />
              <QuoteCard text="“Nothing of Value is easy.”" />
              <div className="md:p-2 p-1 w-full h-[360px] border border-gray-600 bg-gray-900 bg-opacity-50 rounded-lg shadow-lg flex items-center justify-center">
                <p className="text-center text-sm md:text-base lg:text-lg text-gray-300">
                  “And sometimes agaist all odds , against all Logic , WE HOPE ”
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="mb-4 flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full h-[361px] border border-gray-600 bg-gray-900 bg-opacity-50 rounded-lg shadow-lg flex items-center justify-center">
                <p className="text-center text-sm md:text-base lg:text-lg text-gray-300">
                  “ Everything we hear is an opinion , not a fact. Everything we
                  see is a perspective, not the truth.”
                </p>
              </div>
              <QuoteCard text="“Thoughts are not facts. Don't believe everything you think.”" />
              <QuoteCard text="“Dont analyse your life more than you live it”" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
