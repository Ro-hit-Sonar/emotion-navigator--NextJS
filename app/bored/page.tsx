import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Feeling bored means you might need something stimulating or
            meaningful. Let’s think about what excites you.
            <br /> The End result should be one amonst these two !
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-blue-600 mb-4 ">
                  {" "}
                  Indifferent
                </p>
                <p className="leading-relaxed mb-6 ">
                  Feeling indifferent doesn’t always mean you don’t care—it can
                  also mean you’re emotionally exhausted or unsure where to
                  place your energy. Maybe you’re protecting yourself from
                  getting hurt. Or maybe things have felt overwhelming for so
                  long that your mind has chosen to detach, just to make it
                  through. Imagine this: A friend shares exciting news, and
                  while you smile and nod, inside… there’s nothing. You’re not
                  upset, just blank. Not sad, not angry—just disconnected.
                  That’s indifference. It’s okay to feel this way. It might be
                  your mind’s way of asking for rest. It could be a sign you’re
                  emotionally overloaded, or even that something deeper needs
                  attention. You’re not broken—you’re just human.
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
                  Apathetic
                </p>
                <p className="leading-relaxed mb-6">
                  Apathy can feel like your emotions have gone quiet. You’re not
                  moved, not motivated, and things that once lit you up now feel
                  dull. It’s like watching life from behind a foggy window. You
                  want to care—you just don’t know how right now. Here’s a
                  scenario: You used to enjoy painting, going out, or watching
                  movies. Now, even choosing something to eat feels like a task.
                  You go through the motions, but without the feeling. That’s
                  apathy. This emotion often shows up when you’re mentally or
                  emotionally burnt out. It’s not laziness or a flaw—it’s your
                  body’s way of saying, “I’m tired.” Give yourself permission to
                  slow down and feel again, gently, in your own time. You’re not
                  alone in this.
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
