import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Feeling let down can be frustrating. Who or what disappointed you?
            Let’s reflect on how to set better expectations.
            <br /> The End result should be one amonst these two !
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-blue-600 mb-4 ">
                  {" "}
                  Betrayed
                </p>
                <p className="leading-relaxed mb-6 ">
                  Feeling betrayed is a profound and disheartening experience,
                  often emerging when someone you deeply trusted lets you down
                  unexpectedly. Imagine sharing your vulnerabilities with a
                  close friend or partner, only to learn that the trust you
                  placed in them was misplaced. That sting of betrayal can leave
                  you questioning your judgment and wondering if your feelings
                  ever truly mattered. In such moments, the pain may feel
                  overwhelming, as if the foundation of your relationship or
                  self-worth has been shattered. Yet, while betrayal inflicts
                  deep hurt, it also offers an opportunity to reassess your
                  boundaries and understand what genuine trust should feel like.
                  Reflect on the incident with compassion for
                  yourself—acknowledge your pain, but also remind yourself that
                  you deserve honesty and respect. Seeking support from a
                  trusted confidant or professional can be a crucial step in
                  rebuilding your sense of self. Over time, the raw wound of
                  betrayal may soften, transforming into a resilient
                  understanding of your intrinsic worth. Every experience, even
                  the painful ones, contributes to your personal growth and
                  guides you toward healthier, more nurturing relationships.
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
                  Resentful
                </p>
                <p className="leading-relaxed mb-6">
                  Feeling resentful is an emotion that builds when past hurts
                  and disappointments remain unaddressed, gradually turning into
                  a lingering bitterness. Imagine a scenario where you
                  repeatedly experience unfair treatment from someone—perhaps a
                  family member or coworker—and, over time, you begin to harbor
                  a deep sense of injustice. This persistent resentment can
                  weigh heavily on your heart, coloring your interactions and
                  limiting your ability to move forward with lightness. Yet,
                  resentment also signals that a boundary has been crossed or a
                  need remains unmet. Reflect on these experiences with gentle
                  honesty: what was it that hurt you so deeply? By identifying
                  the root causes, you create space for healing. Consider
                  expressing your feelings through conversation, journaling, or
                  therapy, and allow yourself the process of forgiveness—not as
                  a means of excusing the behavior, but to free yourself from
                  the burden of carrying anger. As you work through these
                  emotions, you may find that letting go of resentment gradually
                  opens the door to renewed inner peace and personal growth,
                  enabling you to foster relationships built on mutual respect
                  and understanding.
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
