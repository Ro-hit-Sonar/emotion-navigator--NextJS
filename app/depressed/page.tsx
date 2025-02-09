import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Depression can feel heavy, like carrying the world on your
            shoulders. Let’s sit with this weight and begin to unpack it.
            <br /> The End result should be one amonst these two !
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-blue-600 mb-4 ">
                  {" "}
                  Empty
                </p>
                <p className="leading-relaxed mb-6 ">
                  Feeling empty is an experience that can leave you with a
                  profound sense of hollowness, as if a vital part of you is
                  missing. It’s like wandering through life in a muted world,
                  where the colors and sounds seem to have faded away. Imagine a
                  time when activities and relationships that once brought you
                  joy now feel devoid of meaning, leaving you questioning the
                  purpose of your everyday existence. This emptiness might make
                  you feel disconnected from yourself and those around you,
                  creating an internal void that seems insurmountable. Yet, in
                  this quiet space, there also lies an opportunity for deep
                  self-reflection and renewal. Sometimes, acknowledging that
                  emptiness is the first step toward understanding what has been
                  overlooked in your life. Consider reaching out for support,
                  whether through close friends, creative expression, or
                  professional guidance, to slowly fill that void with new
                  experiences and insights. In time, this process of
                  self-discovery can lead you to a renewed sense of purpose and
                  vitality, helping you reconnect with the parts of yourself
                  that are waiting to be rediscovered.
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
                  Inferior
                </p>
                <p className="leading-relaxed mb-6">
                  Feeling inferior is an emotion that casts a shadow over your
                  self-worth, making you feel lesser than others and doubting
                  your own abilities. It’s like constantly measuring your worth
                  against an ever-changing standard, where every success of
                  someone else intensifies your inner critic. Imagine a moment
                  when you compared yourself to a peer—perhaps at work or in a
                  personal setting—and the weight of that comparison left you
                  feeling small and insignificant. That persistent sense of
                  inferiority can seep into your daily thoughts, hindering your
                  ability to celebrate your unique strengths. However, it’s
                  important to remember that each person’s journey is distinct,
                  and your value is inherent, not defined by comparisons.
                  Consider this feeling as an invitation to focus on your
                  personal growth and accomplishments, no matter how modest they
                  may seem. Embrace support from those who see your true
                  potential, and allow yourself to recognize that you are
                  deserving of success and kindness. Over time, challenging
                  these negative comparisons can help you build a more
                  compassionate and confident view of yourself.
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
