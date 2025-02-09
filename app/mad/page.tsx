import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Feeling mad can mean your boundaries were crossed. Let’s identify
            what happened and how to assert yourself.
            <br /> The End result should be one amonst these two !
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-blue-600 mb-4 ">
                  {" "}
                  Furious
                </p>
                <p className="leading-relaxed mb-6 ">
                  Feeling furious is an intense surge of anger that can feel
                  all-encompassing, as if a storm has been unleashed within you.
                  Imagine a scenario where repeated injustices or a significant
                  betrayal culminate in an overwhelming eruption of fury,
                  clouding your judgment and challenging your sense of control.
                  This furious energy, while powerful, signals that something
                  deeply important to you has been compromised. In the midst of
                  such intense emotion, it can be helpful to pause and find a
                  safe outlet—perhaps through physical exercise, creative
                  expression, or a moment of mindful breathing—to allow the
                  storm to pass. Reflect on what triggered your fury and
                  consider what unmet needs or boundaries were crossed. With
                  compassionate introspection, you may find ways to channel this
                  intense energy into assertive communication or constructive
                  change. Over time, learning to understand and manage your fury
                  can transform it from a destructive force into a motivator for
                  positive action, reinforcing your commitment to self-respect
                  and healthy relationships while nurturing your emotional
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
                  Jealous
                </p>
                <p className="leading-relaxed mb-6">
                  Feeling jealous often arises when you perceive a threat to
                  something you value—be it a relationship, an achievement, or a
                  personal quality. Imagine watching someone else receive
                  recognition or enjoy an opportunity that you long for, and
                  suddenly feeling an unsettling mix of insecurity and longing.
                  This jealousy can sting deeply, as it reminds you of your own
                  unmet desires or insecurities. Yet, rather than allowing this
                  emotion to erode your self-esteem, consider it a signal to
                  explore your inner aspirations. Reflect on what this jealousy
                  reveals about your own dreams and what you might be yearning
                  to achieve. Channel that energy into setting personal goals,
                  enhancing your skills, or cultivating gratitude for your
                  unique journey. Acknowledge your jealousy with
                  kindness—understanding that it’s a natural, if uncomfortable,
                  part of the human experience. Over time, as you work toward
                  fulfilling your own aspirations, the sharp edge of jealousy
                  may soften, replaced by a healthier, more confident sense of
                  self-worth and contentment in your own accomplishments.
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
