import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Guilt often points to something we care deeply about. Let’s
            understand what it’s trying to tell you.
            <br /> The End result should be one amonst these two !
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-blue-600 mb-4 ">
                  {" "}
                  Ashamed
                </p>
                <p className="leading-relaxed mb-6 ">
                  Feeling ashamed is a heavy emotion that wraps you in a cloak
                  of self-criticism and regret. It’s that internal judgment that
                  magnifies your mistakes, making you feel unworthy of love or
                  acceptance. Imagine a time when you made a misstep—perhaps a
                  choice you now regret or a moment when you felt you didn’t
                  live up to your own standards—and the resulting shame was so
                  overwhelming that it clouded your entire sense of self. That
                  searing feeling of inadequacy can be isolating, as if you’re
                  burdened with a secret flaw that sets you apart from others.
                  Yet, it’s important to recognize that shame is a universal
                  experience, and it can be transformed through self-compassion.
                  By acknowledging your imperfections and learning from them,
                  you create space for healing. Reach out to someone who can
                  listen without judgment, and remind yourself that making
                  mistakes is an intrinsic part of being human. Over time, as
                  you embrace forgiveness—both for yourself and from those who
                  care—you can start to dissolve the heavy weight of shame and
                  step toward a more compassionate understanding of who you
                  truly are.
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
                  Remorseful
                </p>
                <p className="leading-relaxed mb-6">
                  Feeling remorseful is a deeply reflective state, emerging when
                  you recognize the impact of your actions on yourself or
                  others. It’s a heavy, honest emotion—a quiet internal dialogue
                  that questions what might have been done differently. Imagine
                  a moment when you unintentionally hurt someone, and the
                  subsequent realization filled you with a profound sense of
                  regret. That remorse can be painful, as it forces you to
                  confront choices that no longer seem reversible. Yet, within
                  that sorrow lies a powerful opportunity for growth. Remorse
                  can serve as a catalyst for change, guiding you to learn from
                  your mistakes and make amends where possible. Instead of
                  letting remorse trap you in guilt, consider it a stepping
                  stone to personal evolution. Seek ways to repair the damage,
                  perhaps through sincere apologies or actions that rebuild
                  trust. Embracing remorse with humility and resolve can help
                  transform the experience into one of empathy and
                  self-improvement, ultimately leading to a deeper, more mindful
                  relationship with yourself and those around you.
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
