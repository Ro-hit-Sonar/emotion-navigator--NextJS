import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Excitement is energy bubbling up inside. What’s lighting you up
            today? Let’s explore that spark.
            <br /> The End result should be one amonst these two !
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-blue-600 mb-4 ">
                  {" "}
                  Eager
                </p>
                <p className="leading-relaxed mb-6 ">
                  Feeling eager is a dynamic state of anticipation and readiness
                  that propels you forward with a sense of hopeful excitement.
                  It’s that inner spark that ignites when you look toward new
                  opportunities, adventures, or personal growth. Imagine
                  standing on the brink of a significant change—whether it’s
                  starting a new project, embarking on a journey, or simply
                  welcoming a fresh day—and feeling your heart beat faster with
                  enthusiasm. In that moment, your mind buzzes with
                  possibilities, and every step seems imbued with potential.
                  Eagerness is both a motivator and a signal that you are open
                  to learning and experiencing the world in a richer way. This
                  vibrant anticipation encourages you to set goals, take risks,
                  and embrace the unknown with optimism. As you nurture this
                  feeling, you build resilience and cultivate a mindset that
                  transforms challenges into exciting opportunities. Let your
                  eagerness be a guide, inspiring you to pursue your dreams with
                  passion and to welcome each new experience as a chance to grow
                  and evolve.
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
                  Energetic
                </p>
                <p className="leading-relaxed mb-6">
                  Feeling energetic is a state of being where your body and mind
                  are vibrantly alive, brimming with motivation and readiness to
                  tackle whatever comes your way. It’s as if every cell is
                  infused with a burst of vitality, urging you to engage fully
                  with life. Imagine waking up on a day when you feel
                  unstoppable—enthused about your plans, creative ideas, or the
                  prospect of connecting with others. This dynamic energy not
                  only propels you forward but also colors your world with
                  optimism and purpose. In that state, even mundane tasks become
                  opportunities for excitement and achievement. Harnessing your
                  energy can be a powerful catalyst for personal growth, driving
                  you to set ambitious goals and overcome obstacles with
                  confidence. By embracing this lively state, you nurture a
                  resilient spirit that can adapt to challenges and celebrate
                  each small victory. Let your energy inspire you to live fully,
                  create boldly, and share your enthusiasm with those around
                  you, transforming everyday moments into a celebration of
                  life’s endless potential.
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
