import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Frustration means something isn’t going as expected. Let’s talk
            about what’s blocking you and find ways to move forward.
            <br /> The End result should be one amonst these two !
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-blue-600 mb-4 ">
                  {" "}
                  Annoyed
                </p>
                <p className="leading-relaxed mb-6 ">
                  Feeling annoyed is a common, yet telling, emotional response
                  that arises when minor irritations accumulate and disrupt your
                  peace. Imagine a day filled with small, seemingly
                  insignificant events—a delayed appointment, a careless
                  comment, or a repetitive inconvenience—that collectively push
                  your patience to its limits. This annoyance can quickly
                  snowball, overshadowing the brighter parts of your day. Yet,
                  this emotion is also an invitation to reflect on your
                  boundaries and triggers. What is it about these situations
                  that provokes such a reaction? Sometimes, simply pausing to
                  acknowledge your irritation and taking a few deep breaths can
                  help diffuse the tension. Consider whether there’s an
                  underlying need that isn’t being met, or if these moments are
                  highlighting a desire for more calm and order in your life.
                  With gentle self-reflection, you can learn to manage annoyance
                  in a way that fosters better self-awareness and healthier
                  interactions, transforming fleeting irritation into a valuable
                  signal for personal growth and mindful living.
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
                  Infuriated
                </p>
                <p className="leading-relaxed mb-6">
                  Feeling infuriated is an extreme form of anger—an overwhelming
                  surge that can feel as if it’s consuming your entire being.
                  Imagine a moment when a deep injustice or repeated
                  mistreatment finally pushes you to the brink, and your anger
                  erupts like a violent storm. In that intense instant, your
                  thoughts may race and your body might tense, driven by a
                  desperate urge to set things right. This level of infuriation,
                  while powerful, can also cloud your judgment and lead to
                  impulsive reactions that you might later regret. However, amid
                  the tempest of anger, there is an opportunity to pause and
                  channel this energy constructively. Consider stepping away
                  from the situation to breathe deeply, engage in physical
                  activity, or speak with someone who can help you process the
                  intensity of your feelings. Over time, learning to understand
                  the triggers behind your infuriation can empower you to
                  transform this extreme emotion into a catalyst for positive
                  change and self-advocacy, ultimately reinforcing your
                  commitment to both fairness and your own well-being.
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
