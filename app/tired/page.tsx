import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Tiredness is your body’s way of asking for rest. How can you
            recharge today? Let’s focus on self-care.
            <br /> The End result should be one amonst these two !
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-blue-600 mb-4 ">
                  {" "}
                  Sleepy
                </p>
                <p className="leading-relaxed mb-6 ">
                  Sleepy isn’t just about needing a nap. Sometimes, it’s your
                  body whispering, “Hey, we’ve been running on fumes.” You might
                  feel like the world is moving faster than you can keep up,
                  your eyelids heavy, and your thoughts foggy. Imagine this:
                  You’ve been working long hours, juggling responsibilities,
                  trying to stay &quot;on&quot; all the time. You finally sit
                  down to rest, and your body melts into the chair—finally
                  allowed to just be. Sleepiness is your body’s gentle rebellion
                  against the pressure to always stay productive. It&apos;s okay
                  to slow down. You’re not lazy. You’re human. Your body and
                  mind are asking for rest—not just physically, but emotionally.
                  Honor that. A good sleep can often do more than a long to-do
                  list ever could. Sometimes, the kindest thing you can do for
                  yourself is close your eyes.
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
                  Unfocused
                </p>
                <p className="leading-relaxed mb-6">
                  Unfocused doesn’t always mean you’re distracted or careless.
                  It can be your brain’s way of saying, “I need a break.”
                  Thoughts don’t line up neatly, your mind drifts, and even
                  simple tasks feel like a mountain to climb. For example: You
                  sit down to finish something important, but you reread the
                  same sentence three times, your mind already off somewhere
                  else. You try harder, but the fog just thickens. You might
                  even blame yourself—but this isn’t about discipline. It’s
                  about mental overload or emotional undercurrent. Being
                  unfocused is a sign that your energy is scattered—maybe
                  because you haven’t had time to pause or process. So instead
                  of pushing harder, try getting curious. What’s taking up space
                  in your mind? What’s asking to be noticed? Bring yourself back
                  gently. Refocus doesn’t come from force—it comes from care.
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
