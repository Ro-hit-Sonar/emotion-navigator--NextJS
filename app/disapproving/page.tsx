import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Feeling disapproving means your values might be clashing. Let’s
            understand what’s at odds and how to address it.
            <br /> The End result should be one amonst these two !
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-blue-600 mb-4 ">
                  {" "}
                  Judgmental
                </p>
                <p className="leading-relaxed mb-6 ">
                  Feeling judgmental is an emotion that can creep in when you
                  find yourself harshly evaluating others, often without
                  realizing it’s a mirror for your own insecurities. Imagine a
                  situation where, during a conversation, you quickly form
                  opinions about someone’s choices or actions—perhaps
                  criticizing a friend’s unconventional lifestyle or a
                  colleague’s work methods. That reflexive judgment may feel
                  like a way to protect your own vulnerabilities, yet over time
                  it can create distance and hinder genuine connection.
                  Recognize that this tendency might be reflecting unresolved
                  feelings or personal expectations you hold for yourself.
                  Consider pausing to ask, “What am I really afraid of?” and
                  explore whether your critical stance is a defense mechanism
                  against your own uncertainties. With gentle self-reflection,
                  you can begin to replace judgment with curiosity and empathy.
                  By understanding that everyone is on their own unique journey,
                  you open the door to more compassionate interactions.
                  Embracing this shift not only softens the edge of judgment but
                  also deepens your connection with both others and your true
                  self.
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
                  Embarrassed
                </p>
                <p className="leading-relaxed mb-6">
                  Feeling embarrassed is a common, yet deeply human, experience
                  when you believe you’ve misstepped in front of others. Picture
                  a moment when an offhand remark or a clumsy gesture in a
                  social setting suddenly makes you the focus of unwanted
                  attention—your cheeks flush and your heart races as you become
                  hyper-aware of every gaze. This acute self-consciousness can
                  linger long after the moment has passed, leaving you to replay
                  the incident in your mind. Yet, embarrassment is also a sign
                  of your sensitivity to social connection and your desire to be
                  seen in a positive light. Reflect on a time when, after an
                  embarrassing moment, you managed to laugh it off or found
                  solace in the understanding of a friend. Recognize that
                  everyone experiences these moments, and they are not a measure
                  of your worth. By embracing embarrassment with self-compassion
                  and humor, you can transform these fleeting instances into
                  opportunities for growth and a deeper understanding of your
                  own resilience.
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
