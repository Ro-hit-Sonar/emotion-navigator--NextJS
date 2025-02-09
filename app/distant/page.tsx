import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Distance feels like being on an island, watching the world from
            afar. What’s creating this space? Let’s explore how to bridge the
            gap and reconnect.
            <br /> The End result should be one amonst these two !
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-blue-600 mb-4 ">
                  {" "}
                  Withdrawn
                </p>
                <p className="leading-relaxed mb-6 ">
                  Feeling withdrawn is an emotional response where you retreat
                  inwardly, often as a way to protect yourself from overwhelming
                  stress or unresolved pain. Imagine a time when life’s
                  challenges felt too heavy to bear, and instead of engaging
                  with others, you chose to isolate yourself—seeking refuge in
                  solitude. This withdrawal can provide temporary relief,
                  creating a safe space where you avoid further hurt. However,
                  prolonged isolation might leave you feeling disconnected and
                  lonely, as if you’re separated from the world by an invisible
                  barrier. Reflect on the reasons behind your retreat and
                  consider whether it’s a signal that you need a moment to heal.
                  Gradually reaching out to a trusted friend, family member, or
                  counselor might help you reconnect with supportive
                  relationships. Over time, with gentle self-compassion and
                  mindful effort, you can rediscover the balance between
                  honoring your need for space and nurturing the meaningful
                  connections that enrich your life, ultimately guiding you back
                  to a place of warmth and belonging.
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
                  Numb
                </p>
                <p className="leading-relaxed mb-6">
                  Feeling numb is an experience where emotions feel muted, as if
                  a protective barrier has dulled your capacity to feel both
                  pain and joy. Imagine a period in your life when even
                  significant events—whether joyful or sorrowful—seemed to pass
                  by without impact, leaving you in a state of detachment. This
                  numbness might develop as a way for your mind to shield itself
                  from overwhelming stress or repeated hurt. While it can offer
                  a brief respite from emotional pain, prolonged numbness may
                  leave you feeling disconnected from your true self and from
                  those around you. Acknowledge that this lack of feeling is a
                  signal that something deeper requires attention. Consider
                  seeking support through creative outlets, trusted
                  conversations, or professional guidance to gently explore the
                  layers beneath this protective shell. Over time, as you allow
                  yourself to experience and process the underlying emotions,
                  the vibrancy of your inner world can begin to reawaken,
                  gradually restoring a fuller, richer spectrum of feelings and
                  reconnecting you with the essence of who you are.
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
