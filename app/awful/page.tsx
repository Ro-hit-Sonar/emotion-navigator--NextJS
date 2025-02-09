import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Feeling awful can feel consuming, but it’s temporary. What’s making
            you feel this way? Let’s sit with it and release it.
            <br /> The End result should be one amonst these two !
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-blue-600 mb-4 ">
                  {" "}
                  Nauseated
                </p>
                <p className="leading-relaxed mb-6 ">
                  Feeling nauseated goes beyond a physical reaction—it can also
                  be an emotional response when something strikes you as deeply
                  offensive or unsettling. Imagine being confronted with a
                  scene, behavior, or idea that is so contrary to your sense of
                  right and beautiful that it sends a churn through your stomach
                  and clouds your mind with revulsion. This profound reaction
                  can feel overwhelming, as if your body is rebelling against an
                  experience that offends your core values. Yet, this sensation
                  is also a reminder of your inner integrity and the high
                  standards you hold for what is acceptable in your life.
                  Instead of dismissing this discomfort, take a moment to
                  breathe and reflect on what exactly is triggering this strong
                  response. Understanding the root of your nausea can help you
                  set clearer boundaries and guide you toward environments that
                  better align with your values. Over time, acknowledging these
                  reactions with self-compassion can empower you to make choices
                  that honor your sense of dignity and personal integrity.
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
                  Detestable
                </p>
                <p className="leading-relaxed mb-6">
                  Feeling detestable is an overwhelming emotion that arises when
                  you encounter something profoundly offensive or repulsive—so
                  much so that it fills you with intense aversion. Imagine a
                  scenario where a particular action or behavior, whether in a
                  personal relationship or a public setting, triggers such a
                  deep sense of dislike that you cannot help but recoil from it.
                  This feeling can make you question not only the behavior
                  you’re witnessing but also the broader context that allows
                  such conduct to persist. Although it can be isolating to feel
                  that something is utterly detestable, this reaction is also a
                  powerful indicator of your strong inner values and boundaries.
                  Reflect on the incident with a focus on what it reveals about
                  what you cherish and stand for. By acknowledging this emotion,
                  you empower yourself to distance from toxic influences and to
                  advocate for environments that respect your principles. Over
                  time, channeling your intense feelings into thoughtful
                  dialogue or constructive action can transform detestability
                  into a catalyst for positive change.
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
