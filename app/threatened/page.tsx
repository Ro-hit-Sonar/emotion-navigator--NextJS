import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Feeling threatened means something feels at risk. Let’s examine what
            feels unsafe and how we can protect it.
            <br /> The End result should be one amonst these two !
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-blue-600 mb-4 ">
                  {" "}
                  Nervous
                </p>
                <p className="leading-relaxed mb-6 ">
                  Feeling nervous is a common, yet deeply human, response to
                  uncertainty and anticipation. It’s that jittery sensation
                  before a big presentation, a first date, or any situation
                  where the outcome is unknown. Imagine the flutter of your
                  heart and the racing thoughts as you step into an unfamiliar
                  environment, wondering if you’ll be accepted or if you might
                  stumble. While nervousness can be unsettling, it is also a
                  signal that you care about what lies ahead. This energy can be
                  channeled into preparation and mindful awareness, transforming
                  anxious jitters into focused determination. Reflect on past
                  moments when you overcame nervousness and discovered new
                  strengths or abilities. Often, a small act of
                  self-kindness—like a deep breath, a supportive word from a
                  friend, or a moment of quiet reflection—can ease the tension
                  and remind you that you are capable of handling the unknown.
                  Embrace nervousness as a natural part of growth, a gentle push
                  toward opportunities that lie just beyond your comfort zone.
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
                  Exposed
                </p>
                <p className="leading-relaxed mb-6">
                  Feeling exposed is an emotion that can leave you raw and
                  vulnerable, as if your innermost self has been laid bare for
                  the world to see. Imagine a moment when you shared a personal
                  truth or stepped out of your comfort zone, only to feel that
                  every gaze and judgment is directed at you. This sensation can
                  be overwhelming, triggering self-consciousness and a fear of
                  being misunderstood. Yet, in that exposed state lies the
                  potential for deep connection and personal authenticity.
                  Acknowledge the discomfort while recognizing that
                  vulnerability is also a gateway to growth—it allows you to
                  invite genuine relationships and to truly express who you are.
                  Over time, by gradually embracing exposure and celebrating
                  your authentic self, you can transform that initial fear into
                  a source of strength and empowerment. Remember, every moment
                  of feeling exposed is an opportunity to learn more about
                  yourself and to build resilience, ultimately guiding you
                  toward deeper self-acceptance and more meaningful connections
                  with those who appreciate you just as you are.
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
