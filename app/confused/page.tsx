import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Confusion means something doesn’t quite add up. Let’s unpack this
            and find clarity.
            <br /> The End result should be one amonst these two !
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-blue-600 mb-4 ">
                  {" "}
                  Disillusioned
                </p>
                <p className="leading-relaxed mb-6 ">
                  Feeling disillusioned arises when a cherished belief or ideal
                  crumbles, leaving you with a profound sense of loss and
                  disappointment. It’s the moment when the world you thought you
                  knew shifts into a more complex, sometimes harsher reality.
                  Imagine holding a vision of trust and integrity about someone
                  or something—only to discover that the reality is riddled with
                  contradictions and unmet promises. This realization can be
                  jarring, as if the bright lens through which you once saw the
                  world has suddenly turned opaque. Disillusionment can trigger
                  an inner conflict as you struggle to reconcile your
                  expectations with the new truth. Yet, within this painful
                  process lies the potential for deep personal insight. By
                  confronting disillusionment head-on, you open yourself up to a
                  more authentic understanding of both yourself and the world.
                  With time, and perhaps with the support of empathetic friends
                  or a trusted mentor, you can rebuild your sense of hope on a
                  firmer, more realistic foundation, transforming
                  disillusionment into a catalyst for growth.
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
                  Perplexed
                </p>
                <p className="leading-relaxed mb-6">
                  Feeling perplexed is the experience of being caught in a maze
                  of uncertainty and confusion, where the answers you seek seem
                  just out of reach. It’s as if you’re standing at a crossroads
                  without a map, each path shrouded in mystery. Imagine
                  encountering a situation or a behavior that defies
                  explanation—perhaps a sudden shift in a friend’s attitude or a
                  puzzling turn in your work project—that leaves your mind
                  swirling with questions. In that moment, the familiar becomes
                  strange, and your thoughts may feel tangled as you try to make
                  sense of it all. While perplexity can be unsettling, it also
                  invites you to explore deeper truths about your world.
                  Consider it a gentle prompt to engage in inquiry and
                  reflection. By seeking out different perspectives, discussing
                  your confusion with trusted individuals, or simply giving
                  yourself the time to process, you can gradually unravel the
                  complexities that confound you. Over time, what once felt
                  impenetrable may transform into a richer, more nuanced
                  understanding of life’s intricate tapestry.
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
