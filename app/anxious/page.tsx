import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Anxiety often whispers about things that matter to us. What’s on
            your mind today? Let’s untangle the knots, one by one.
            <br /> The End result should be one amonst these two !
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-blue-600 mb-4 ">
                  {" "}
                  Overwhelmed
                </p>
                <p className="leading-relaxed mb-6 ">
                  Feeling overwhelmed is like being caught in a relentless tidal
                  wave of stress and responsibility, where every task and
                  emotion converges at once. Picture a day when work deadlines,
                  family demands, and personal challenges all peak
                  simultaneously, leaving you breathless and struggling to catch
                  up. In that moment, even the simplest decisions can seem
                  monumental, and your mind may race with worries that blur
                  together. This flood of emotions can create a sense of
                  paralysis, as if you’re sinking beneath the weight of it all.
                  However, being overwhelmed is also a signal—a call to pause
                  and reassess your priorities. It’s an invitation to take a
                  step back and practice self-care, whether that means
                  delegating tasks, setting boundaries, or simply allowing
                  yourself a few quiet moments of reflection. Reach out to
                  someone who understands, and consider breaking your challenges
                  into smaller, manageable pieces. By gradually addressing each
                  concern, you can restore balance and find a way to navigate
                  through the storm, rediscovering your inner strength and
                  clarity along the way.
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
                  Worried
                </p>
                <p className="leading-relaxed mb-6">
                  Feeling worried is a persistent, nagging sensation that tugs
                  at your mind, casting shadows over even the brightest moments.
                  Imagine a scenario where uncertainty about the future—whether
                  regarding health, relationships, or work—keeps your thoughts
                  in a constant state of apprehension. This worry can build
                  slowly, like a cloud gathering on the horizon, eventually
                  darkening your mood and sapping your energy. It’s as though
                  every possible negative outcome is magnified, leaving little
                  space for hope or clarity. Yet, worry also serves a purpose;
                  it alerts you to issues that may need attention and encourages
                  you to plan and prepare. The key is to balance that vigilance
                  with self-compassion. Consider setting aside dedicated time to
                  process your concerns, perhaps by journaling or discussing
                  them with a trusted friend. Gradually, as you gain perspective
                  and take constructive steps to address what you can control,
                  the intensity of your worry may lessen. Embrace the idea that
                  while worry is natural, it doesn’t have to dominate your every
                  thought—there is room for calm, resilience, and proactive care
                  in your daily life.
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
