import React from "react";

const QuoteCard = ({ text }: { text: string }) => {
  return (
    <div className="md:p-2 p-1 w-1/2 h-[300px] border border-gray-600 bg-gray-900 bg-opacity-50 rounded-lg shadow-lg flex items-center justify-center">
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
              Quotes
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              A collection of inspiring quotes
            </p>
          </div>

          {/* Quote Grid Section */}
          <div className="flex flex-wrap  mb-4 md:-m-2 -m-1">
            {/* Left Column */}
            <div className="flex flex-wrap w-1/2">
              <QuoteCard text="“The only limit to our realization of tomorrow is our doubts of today.”" />
              <QuoteCard text="“In the middle of every difficulty lies opportunity.”" />
              <div className="md:p-2 p-1 w-full h-[360px] border border-gray-600 bg-gray-900 bg-opacity-50 rounded-lg shadow-lg flex items-center justify-center">
                <p className="text-center text-sm md:text-base lg:text-lg text-gray-300">
                  “Do not wait to strike till the iron is hot; but make it hot
                  by striking.”
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="mb-4 flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full h-[361px] border border-gray-600 bg-gray-900 bg-opacity-50 rounded-lg shadow-lg flex items-center justify-center">
                <p className="text-center text-sm md:text-base lg:text-lg text-gray-300">
                  “Success is not final, failure is not fatal: it is the courage
                  to continue that counts.”
                </p>
              </div>
              <QuoteCard text="“The best way to predict the future is to create it.”" />
              <QuoteCard text="“Keep your face always toward the sunshine, and shadows will fall behind you.”" />
            </div>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            {/* Left Column */}
            <div className="mb-4 flex flex-wrap w-1/2">
              <QuoteCard text="“The only limit to our realization of tomorrow is our doubts of today.”" />
              <QuoteCard text="“In the middle of every difficulty lies opportunity.”" />
              <div className="md:p-2 p-1 w-full h-[360px] border border-gray-600 bg-gray-900 bg-opacity-50 rounded-lg shadow-lg flex items-center justify-center">
                <p className="text-center text-sm md:text-base lg:text-lg text-gray-300">
                  “Do not wait to strike till the iron is hot; but make it hot
                  by striking.”
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="mb-4 flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full h-[361px] border border-gray-600 bg-gray-900 bg-opacity-50 rounded-lg shadow-lg flex items-center justify-center">
                <p className="text-center text-sm md:text-base lg:text-lg text-gray-300">
                  “Success is not final, failure is not fatal: it is the courage
                  to continue that counts.”
                </p>
              </div>
              <QuoteCard text="“The best way to predict the future is to create it.”" />
              <QuoteCard text="“Keep your face always toward the sunshine, and shadows will fall behind you.”" />
            </div>
          </div>
          <div className="mb-4 flex flex-wrap md:-m-2 -m-1">
            {/* Left Column */}
            <div className="flex flex-wrap w-1/2">
              <QuoteCard text="“The only limit to our realization of tomorrow is our doubts of today.”" />
              <QuoteCard text="“In the middle of every difficulty lies opportunity.”" />
              <div className="md:p-2 p-1 w-full h-[360px] border border-gray-600 bg-gray-900 bg-opacity-50 rounded-lg shadow-lg flex items-center justify-center">
                <p className="text-center text-sm md:text-base lg:text-lg text-gray-300">
                  “Do not wait to strike till the iron is hot; but make it hot
                  by striking.”
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="mb-4 flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full h-[361px] border border-gray-600 bg-gray-900 bg-opacity-50 rounded-lg shadow-lg flex items-center justify-center">
                <p className="text-center text-sm md:text-base lg:text-lg text-gray-300">
                  “Success is not final, failure is not fatal: it is the courage
                  to continue that counts.”
                </p>
              </div>
              <QuoteCard text="“The best way to predict the future is to create it.”" />
              <QuoteCard text="“Keep your face always toward the sunshine, and shadows will fall behind you.”" />
            </div>
          </div>
          {/* 🔹 TO ADD MORE QUOTES: Just copy-paste a new <QuoteCard text="..." /> above */}
        </div>
      </section>
    </div>
  );
};

export default Quote;
