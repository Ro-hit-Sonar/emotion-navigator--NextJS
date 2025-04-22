import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Stress is your body asking for relief. What’s piling up? Let’s break
            it down and ease the pressure.
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
                  Overwhelmed is that feeling when everything hits at once.
                  Thoughts, emotions, tasks, expectations—they all rush in like
                  a tidal wave, and you’re just trying to keep your head above
                  water. It’s not that you’re weak. It’s that you’re carrying
                  too much. Imagine this: You&apos;re juggling work, personal
                  life, emotions you&apos;ve been pushing down, and suddenly
                  even the smallest task feels impossible—like replying to a
                  message or doing the dishes. You pause and ask yourself, “Why
                  can’t I handle this?” But the truth is—you’re already handling
                  more than most people see. Being overwhelmed isn’t a flaw.
                  It’s a signal—a gentle nudge from your mind and body asking
                  you to slow down, to breathe, to let go of what you can. It’s
                  okay to take breaks. It’s okay to ask for help. You don’t have
                  to carry it all alone.
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
                  Out of Control
                </p>
                <p className="leading-relaxed mb-6">
                  Feeling out of control can be deeply unsettling. It’s like
                  life is moving, decisions are being made, situations are
                  unfolding—and you’re just a passenger. There’s a storm
                  happening, and you’ve lost the wheel. Here’s an example:
                  You’re in a heated argument, your heart&apos;s racing, words
                  are flying out before you can catch them. Or maybe it’s a wave
                  of anxiety that shows up uninvited, and no amount of logic can
                  calm it down. That’s what “out of control” feels
                  like—disconnected from your own grounding. But even when
                  things feel wild on the surface, your core is still
                  there—stable, waiting. Sometimes control isn’t about holding
                  tighter, but learning when to release. You don’t have to have
                  it all figured out right now. Start with one breath, one
                  choice, one small moment of stillness.
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
