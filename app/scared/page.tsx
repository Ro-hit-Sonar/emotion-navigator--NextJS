import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Feeling scared means something feels uncertain or unsafe. Let’s
            explore what’s causing this and how we can create comfort.
            <br /> The End result should be one amonst these two !
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-blue-600 mb-4 ">
                  {" "}
                  Helpless
                </p>
                <p className="leading-relaxed mb-6 ">
                  Feeling helpless is a deeply challenging emotion, one where
                  circumstances seem to swirl beyond your control. It’s like
                  being caught in a relentless storm with no shelter in sight.
                  Imagine a time when, despite your earnest efforts to help a
                  loved one through a crisis or to overcome a sudden setback at
                  work, every action felt futile. In that moment, the world
                  appears overwhelming, and you might feel as though external
                  forces are steering your life, leaving you with little to no
                  agency. This sense of helplessness can cloud your inner light,
                  making you doubt your own strength. Yet, amid the despair,
                  there is an invitation to reach out. Consider that asking for
                  help—whether from a trusted friend, family member, or
                  professional—is a courageous act that can begin to restore
                  your sense of control. Over time, by taking small, deliberate
                  steps and accepting support, you can start to reclaim your
                  power and rebuild resilience. Remember that feeling helpless
                  doesn’t diminish your worth; it’s a signal that you deserve
                  care and understanding as you navigate through life’s
                  unpredictable challenges.
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
                  Frightened
                </p>
                <p className="leading-relaxed mb-6">
                  Feeling frightened is that sudden, acute shiver of anxiety
                  that can catch you off guard. It’s as if an unseen shadow
                  lurks just at the edge of your perception, igniting a primal
                  urge to flee. Imagine walking home one evening when the
                  darkness and unfamiliar sounds trigger a cascade of fear—even
                  though nothing overtly dangerous is present. This sensation
                  can be overwhelming, leaving your heart racing and your mind
                  flooded with “what ifs.” While fear can serve as a protective
                  signal, urging you to stay safe, it can also paralyze and
                  isolate you if left unchecked. Embracing this emotion involves
                  acknowledging your vulnerability and finding grounding in the
                  present moment. Consider turning to calming techniques, like
                  deep breathing or a reassuring conversation with someone you
                  trust. Over time, as you explore the roots of your fear, you
                  may discover that it holds clues about your inner needs and
                  boundaries. Recognize that feeling frightened is a natural
                  human response, and by gently addressing it, you empower
                  yourself to regain a sense of safety and calm in the midst of
                  life’s uncertainties.
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
