import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Feeling powerful is invigorating! It means you’re owning your
            moment. Where does this strength come from? Let’s channel it.
            <br /> The End result should be one amonst these two !
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-blue-600 mb-4 ">
                  {" "}
                  Courageous
                </p>
                <p className="leading-relaxed mb-6 ">
                  Feeling courageous is about tapping into an inner reservoir of
                  strength that propels you forward despite the uncertainty of
                  life. It’s that steady resolve that empowers you to face
                  challenges head-on, even when fear whispers in your ear.
                  Imagine standing before a daunting opportunity—perhaps a new
                  job or a personal challenge—feeling your heart race, yet
                  taking that bold step anyway. That moment when you choose to
                  confront your doubts, instead of shrinking away, fills you
                  with an inspiring sense of empowerment. Perhaps you recall a
                  time when overcoming a significant obstacle revealed strengths
                  you never knew you had, leaving you with a lasting impression
                  of your own resilience. This courageous spirit isn’t about the
                  absence of fear; it’s about moving forward in spite of it.
                  Embracing courage encourages you to see challenges as
                  opportunities for growth and transformation. Let this bravery
                  remind you that every step taken in the face of fear is a
                  victory, one that builds confidence and opens the door to new
                  possibilities in your life.
                </p>
                <a className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Take Care
                    </span>
                    <span className="text-gray-500 text-sm"> BYE :) </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-red-700 mb-4 ">
                  {" "}
                  Creative
                </p>
                <p className="leading-relaxed mb-6">
                  Feeling creative is like unlocking a hidden reservoir of
                  inspiration that transforms everyday moments into something
                  extraordinary. Imagine settling into a quiet space—a sunlit
                  corner of your favorite room—when suddenly, an unexpected idea
                  or a subtle detail ignites a cascade of imaginative thoughts.
                  This surge of creativity is not limited to art; it can appear
                  in the way you solve a problem at work or how you express
                  yourself in conversation. Perhaps you recall a time when a
                  spark of inspiration turned an ordinary day into a moment of
                  discovery, leading to a breakthrough that redefined your
                  perspective. Embracing this creative energy means welcoming
                  change, experimenting with new ideas, and allowing yourself
                  the freedom to express your unique vision. It’s a gentle
                  reminder that within you lies the power to transform
                  challenges into innovative opportunities. Let your creative
                  spirit guide you, encouraging you to explore, experiment, and
                  celebrate the beauty of original thought as you journey toward
                  a richer, more vibrant life.
                </p>
                <a className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Take Care
                    </span>
                    <span className="text-gray-500 text-sm">BYE :) </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
};

export default Page;
