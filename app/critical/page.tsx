import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Being critical is like holding a magnifying glass to every detail.
            What’s driving this scrutiny? Let’s balance this sharp focus with
            understanding and compassion.
            <br /> The End result should be one amonst these two !
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-blue-600 mb-4 ">
                  {" "}
                  Skeptical
                </p>
                <p className="leading-relaxed mb-6 ">
                  Feeling skeptical is an emotional stance where you question
                  the truth or intentions behind what you encounter, often as a
                  way to protect yourself from potential disappointment. Imagine
                  a scenario where you’re presented with a new idea or promise,
                  and instead of accepting it immediately, your mind starts to
                  critically analyze and search for inconsistencies. This
                  healthy dose of skepticism can serve as a shield, prompting
                  you to verify facts and guard against being misled. However,
                  when skepticism becomes pervasive, it might hinder your
                  ability to trust and engage openly with others. Reflect on
                  those moments of doubt, considering what experiences might
                  have shaped your cautious outlook. By examining your
                  skepticism with curiosity rather than judgment, you can
                  balance your natural inquisitiveness with openness. Over time,
                  as you build a foundation of trust through honest interactions
                  and transparent communication, you may find that your
                  skepticism softens into a thoughtful questioning that enriches
                  your understanding of the world while still protecting your
                  well-being.
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
                  Dismissive
                </p>
                <p className="leading-relaxed mb-6">
                  Feeling dismissive is an emotional response where you quickly
                  push aside ideas, feelings, or interactions, often as a means
                  of self-protection. Imagine a time when someone shared
                  something meaningful or vulnerable with you, yet instead of
                  engaging deeply, you found yourself brushing off their words
                  as unimportant. This dismissiveness can act as a shield
                  against discomfort, but it may also create distance in
                  relationships and hinder genuine connection. Reflect on what
                  might be causing this reaction—perhaps past experiences have
                  taught you to guard your emotions closely, leading you to
                  undervalue both your feelings and those of others. Recognize
                  that while dismissing can feel safer in the moment, it also
                  prevents the growth that comes from truly understanding and
                  empathizing with diverse perspectives. Over time, by gently
                  challenging yourself to remain open and to acknowledge the
                  value in every interaction, you can gradually transform
                  dismissiveness into a more compassionate and receptive stance.
                  Embrace this journey as an opportunity for deeper connection
                  and personal growth, enriching both your inner world and your
                  relationships with others.
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
