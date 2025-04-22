import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Being busy can feel overwhelming. What’s filling your plate right
            now? Let’s find ways to balance.
            <br /> The End result should be one amonst these two !
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-blue-600 mb-4 ">
                  {" "}
                  Pressured
                </p>
                <p className="leading-relaxed mb-6 ">
                  Feeling pressured often means you&apos;re carrying more than
                  you should, or more than you can. Expectations—whether from
                  others or yourself—start to pile up, and suddenly, everything
                  feels urgent. You&apos;re trying to hold it all together, but
                  inside, there’s a weight that keeps growing heavier. Picture
                  this: You’ve got deadlines at work, your family needs your
                  time, your friends are waiting on replies, and in all of
                  it—you don’t even remember the last time you sat down and
                  breathed. That’s pressure. Sometimes pressure can push us
                  forward. But too much of it can make us forget who we’re doing
                  things for—or why. It&lsquo;s okay to pause. It’s okay to say,
                  “I need space.” The world won’t collapse if you stop for a
                  moment to take care of yourself.
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
                  Rushed
                </p>
                <p className="leading-relaxed mb-6">
                  Rushed isn’t just about moving quickly—it’s about feeling like
                  there’s never enough time. Like you’re constantly running
                  behind, even when you’re doing your best. It’s that sense of
                  being breathless, not just physically, but mentally too.
                  Here’s a moment: You wake up already feeling late. You skip
                  breakfast, your mind’s already five steps ahead, and the day
                  hasn’t even started. That’s being rushed. When every second
                  feels borrowed, life becomes a blur. But what if rushing isn’t
                  the only way? What if slowing down actually helps you do
                  things better? You deserve a pace that doesn’t leave you
                  gasping. You deserve to feel present—not just productive.
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
