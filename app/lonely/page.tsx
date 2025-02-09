import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Feeling lonely can be tough. It’s okay to admit it. Let’s reflect on
            this feeling and explore how to reconnect
            <br /> The End result should be one amonst these two !
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-blue-600 mb-4 ">
                  {" "}
                  Abandoned
                </p>
                <p className="leading-relaxed mb-6 ">
                  Feeling abandoned can be like standing in a crowded room and
                  yet feeling completely invisible. It’s that deep sense of
                  being left behind when someone important suddenly disappears
                  from your life. Imagine a time when a close friend or loved
                  one stopped reaching out without explanation, leaving you with
                  an aching emptiness and questions about your own worth. In
                  that moment, every quiet hour feels heavy, as if the world has
                  moved on without you. Yet, within that painful void, there is
                  also an invitation to reconnect with your inner strength.
                  Acknowledge the hurt and allow yourself to grieve the loss,
                  but also consider this an opportunity to nurture new
                  bonds—ones that appreciate and honor who you are. Sometimes,
                  reaching out to someone who listens or seeking professional
                  guidance can help rebuild your sense of belonging. Remember
                  that your value is intrinsic and isn’t diminished by someone
                  else’s absence. In time, the sting of abandonment can soften
                  into a resilient understanding that you are worthy of love and
                  connection, regardless of the gaps others may leave in your
                  life.
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
                  Isolated
                </p>
                <p className="leading-relaxed mb-6">
                  Feeling isolated is like being on an island in the midst of a
                  vast ocean—a state where even in a crowd, you feel entirely
                  cut off from meaningful connection. Imagine being at a social
                  event, surrounded by chatter and laughter, yet feeling as
                  though a glass wall separates you from truly joining in. This
                  isolation can be deeply painful, making you question whether
                  anyone can truly understand your inner world. You might recall
                  a time when your thoughts and feelings felt so different from
                  those around you that reaching out seemed impossible. Yet,
                  isolation also offers a moment for introspection—a chance to
                  reconnect with yourself and to discover what truly nourishes
                  your spirit. Consider that even the most solitary experiences
                  can lead to personal growth, prompting you to seek out
                  communities or relationships that resonate with your true
                  self. By reaching out, even just one step at a time, you open
                  the door to authentic connection. Over time, the sense of
                  isolation may recede as you find that there are others who
                  share your experiences and are ready to welcome you in.
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
