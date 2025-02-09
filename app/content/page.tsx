import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Contentment is like a warm hug to the soul. It feels steady,
            peaceful, and complete. Let’s sit with this calm for a while. The
            End result should be one amonst these two !
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-blue-600 mb-4 ">
                  {" "}
                  Free
                </p>
                <p className="leading-relaxed mb-6 ">
                  Feeling free is an expansive experience that washes away the
                  constraints of daily life and fills you with a profound sense
                  of possibility. Picture yourself standing in an open field on
                  a breezy day, where the sky stretches limitlessly above and
                  every breath feels like liberation. In that moment, the
                  heaviness of obligations and expectations dissolves, leaving
                  you with an unburdened heart and a clear mind. Perhaps you
                  recall a time when you spontaneously decided to take a
                  different path—whether a sudden road trip or stepping away
                  from routine—that rekindled your inner spark. This sense of
                  freedom is not just physical; it’s an emotional release that
                  invites you to rediscover your true self. It encourages you to
                  challenge boundaries and explore new horizons with courage and
                  curiosity. Embracing freedom means recognizing that every new
                  day is a chance to redefine what it means to live fully,
                  unshackled by fear or doubt. Let this liberating energy guide
                  you to trust in your ability to shape your destiny and
                  celebrate life’s endless opportunities.
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
                  Joyful
                </p>
                <p className="leading-relaxed mb-6">
                  Feeling joyful is like basking in the warmth of a brilliant
                  sunrise—a radiant emotion that fills every corner of your
                  being with light and delight. Imagine a day when laughter
                  flows as freely as a mountain stream, where even the simplest
                  moments—a shared smile, a kind word, or a small victory—spark
                  a deep and abiding happiness. This state of joy isn’t just a
                  fleeting emotion; it’s a celebration of life’s beauty in all
                  its forms. Perhaps you remember a time when an unexpected
                  compliment or a spontaneous reunion with an old friend lit up
                  your day, reminding you of the precious connections that color
                  your world. Joy is a gentle yet powerful reminder that every
                  day holds the potential for wonder and gratitude. It
                  encourages you to pause and savor life’s little miracles, no
                  matter how ordinary they might seem. Embrace that uplifting
                  sensation and allow it to inspire you to spread kindness and
                  to recognize that joy, in its purest form, is a gift meant to
                  be shared.
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
