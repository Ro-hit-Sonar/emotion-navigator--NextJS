import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Pride can feel uplifting and empowering. What’s making you feel
            proud today? Let’s take a moment to celebrate it.
            <br />
            The End result should be one amonst these two !
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-blue-600 mb-4 ">
                  {" "}
                  Successful
                </p>
                <p className="leading-relaxed mb-6 ">
                  Feeling successful is a fulfilling emotion that arises when
                  you recognize and celebrate your achievements, no matter how
                  big or small. Imagine the quiet satisfaction of finishing a
                  challenging project or reaching a personal milestone—moments
                  when your hard work and determination finally pay off. This
                  sense of success is more than external recognition; it’s an
                  internal affirmation of your capabilities and the progress
                  you’ve made. Perhaps you recall a time when overcoming an
                  obstacle filled you with a profound sense of pride and the
                  motivation to pursue even greater goals. That rewarding moment
                  served as a reminder of your resilience and potential.
                  Embracing success helps you build confidence and encourages
                  you to set new challenges for yourself, knowing that each
                  achievement contributes to your personal growth. Let the
                  feeling of success inspire you to continue moving forward, to
                  celebrate every step of your journey, and to acknowledge that
                  your efforts are meaningful. Recognize that success is not
                  just a destination—it’s an ongoing process of learning,
                  growing, and becoming the best version of yourself.
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
                  Confident
                </p>
                <p className="leading-relaxed mb-6">
                  Feeling confident is a warm, steady assurance that arises from
                  knowing your own worth and abilities. Picture yourself
                  stepping into a room with your head held high, secure in the
                  knowledge that you have much to offer. This emotion is not
                  about being boastful; it’s about embracing your strengths and
                  trusting your inner voice. Perhaps you recall a time when you
                  took a risk—maybe speaking up in a meeting or trying something
                  new—and, despite initial doubts, you succeeded. That
                  experience left you with a lingering sense of self-assurance
                  and the understanding that challenges can be overcome with
                  persistence. Confidence builds gradually, nurtured by small
                  victories and learning from setbacks. It encourages you to
                  push beyond your comfort zone and to pursue your goals with
                  determination. Let this confidence be your guide, reminding
                  you that every experience contributes to your growth. Embrace
                  your inner strength and allow your self-assurance to shine,
                  inspiring you to explore life’s opportunities with both
                  courage and optimism.
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
