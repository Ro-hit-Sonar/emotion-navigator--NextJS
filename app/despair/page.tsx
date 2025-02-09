import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Despair can feel like an endless night, but even the darkest nights
            have stars. Let’s search for the light together.
            <br /> The End result should be one amonst these two !
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-blue-600 mb-4 ">
                  {" "}
                  Grief
                </p>
                <p className="leading-relaxed mb-6 ">
                  Feeling grief is a profound and complex emotion that emerges
                  in the wake of loss—whether of a loved one, a cherished
                  relationship, or a significant life phase. Grief can overwhelm
                  you like a tidal wave, leaving behind a trail of sorrow,
                  longing, and sometimes confusion about how to move forward.
                  Imagine a time when the absence of someone dear transformed
                  your world into a quiet, aching space, where every familiar
                  sound and scent evoked bittersweet memories. In the midst of
                  grief, each day can feel heavy, and even simple tasks may seem
                  insurmountable. Yet, grief is also a natural, albeit painful,
                  part of life—a process that honors the depth of your love and
                  attachment. As you journey through grief, allow yourself to
                  feel the pain without rushing toward healing. Seek solace in
                  supportive relationships, where sharing your memories and
                  tears can gradually lighten the load. With time, grief can
                  transform from a paralyzing force into a tender reminder of
                  the meaningful connections you once experienced, guiding you
                  gently toward eventual healing and acceptance.
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
                  Powerless
                </p>
                <p className="leading-relaxed mb-6">
                  Feeling powerless is an unsettling experience, marked by the
                  sense that you have little control over the events shaping
                  your life. It’s as if you’re caught in a storm where every
                  effort to change your circumstances feels futile. Imagine a
                  moment when, despite your best attempts, obstacles seemed
                  insurmountable, leaving you with the impression that fate
                  alone dictates your path. This deep-seated helplessness can
                  drain your energy and dim your hope for the future. However,
                  within that feeling lies a quiet call for reclaiming your
                  agency, even if the steps seem small at first. Reflect on the
                  minor victories that remind you of your inner strength—moments
                  when you managed to steer through a challenge or make a small
                  decision that changed your day. Seeking support from a trusted
                  friend, mentor, or therapist can provide the guidance needed
                  to rebuild your sense of control. Remember, every effort
                  counts, and even in the midst of powerlessness, you hold the
                  capacity to slowly assert your influence over your life’s
                  direction.
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
