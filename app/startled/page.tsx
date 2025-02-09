import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Startled feelings often come out of nowhere. Let’s slow down and
            process what just happened.
            <br /> The End result should be one amonst these two !
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-blue-600 mb-4 ">
                  {" "}
                  Shocked
                </p>
                <p className="leading-relaxed mb-6 ">
                  Feeling shocked is an intense, immediate emotional reaction
                  that leaves you momentarily disoriented when confronted with
                  something utterly unexpected. It’s as if time pauses for a
                  heartbeat as you try to process a sudden piece of information
                  or an unforeseen event. Imagine opening the door to find news
                  that completely upends your day—a revelation that makes your
                  heart pound and your thoughts scatter. In that brief moment,
                  the familiar world seems to tilt, and you may feel both
                  physically and emotionally unsteady. Shock serves as your
                  mind’s initial response to significant change, alerting you
                  that something important has occurred. Although the sensation
                  can be overwhelming, it is also an opportunity to pause and
                  reflect on the new reality. By allowing yourself time to
                  absorb the shock, you gradually move toward understanding and
                  acceptance. Over time, the raw intensity of the shock
                  transforms into clarity and insight, paving the way for
                  personal growth and renewed strength. Embrace this experience
                  as a reminder that life is full of surprises, and each
                  unexpected moment can ultimately lead to deeper
                  self-awareness.
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
                  Dismayed
                </p>
                <p className="leading-relaxed mb-6">
                  Feeling dismayed is an emotional state marked by a deep sense
                  of disappointment and sorrow when reality falls short of your
                  expectations. It’s as if the weight of unmet hopes settles
                  over you, dimming the light of optimism. Imagine pouring your
                  heart into a project or relationship only to encounter an
                  unexpected setback or betrayal that leaves you questioning
                  your decisions. In that moment, a wave of dismay washes over
                  you, and you may find yourself mulling over what could have
                  been. This feeling can create an inner tension that lingers
                  long after the initial event, making it hard to see a clear
                  path forward. However, dismay also signals a need for
                  reflection—an invitation to reassess your expectations and
                  adjust your course. With gentle self-compassion and support
                  from those who care, you can begin to transform dismay into a
                  stepping stone for personal growth. By acknowledging your pain
                  and learning from the experience, you gradually build
                  resilience and pave the way for renewed hope and
                  understanding, even when life doesn’t go as planned.
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
