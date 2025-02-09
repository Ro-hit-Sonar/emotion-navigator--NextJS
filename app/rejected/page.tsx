import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="  font-mono font-medium title-font text-gray-100 mb-12 text-center">
            Rejection can sting, but it doesn’t define your worth. Who or what
            triggered this feeling? Let’s work through it together.
            <br /> The End result should be one amonst these two !
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="text-center text-xl font-semibold text-blue-600 mb-4 ">
                  {" "}
                  Excluded
                </p>
                <p className="leading-relaxed mb-6 ">
                  Feeling excluded is a painful experience that makes you feel
                  as though you are on the outside looking in—a spectator rather
                  than a participant in life’s meaningful moments. Imagine
                  attending a social gathering or a group event where you sense
                  that others share an unspoken connection, leaving you feeling
                  isolated and separate. This exclusion can hurt deeply, as it
                  challenges your need for belonging and acceptance. However,
                  while it stings, this emotion also invites you to reflect on
                  the types of relationships that truly nourish your soul.
                  Consider whether the spaces you find yourself in are aligned
                  with who you are and what you value. Sometimes, seeking out
                  communities where your voice is heard can transform this
                  painful feeling into an opportunity for growth. Reaching out
                  to supportive friends or engaging in activities that resonate
                  with your interests can slowly mend the gap between feeling
                  excluded and finding a place where you truly belong. Remember,
                  your uniqueness is your strength, and the right connections
                  will celebrate you for exactly who you are.
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
                  Persecuted
                </p>
                <p className="leading-relaxed mb-6">
                  Feeling persecuted is an intense emotion where you sense that
                  life or those around you are unfairly targeting you. It’s as
                  if every interaction is loaded with judgment or blame, leaving
                  you on constant alert. Imagine a time when a series of
                  events—perhaps at work or in personal relationships—made you
                  feel singled out and unjustly criticized, so much so that you
                  began to question your safety in those environments. This
                  persistent sense of persecution can be overwhelming, fostering
                  isolation and deep mistrust. However, while these feelings are
                  valid, they also serve as signals to examine your boundaries
                  and the dynamics in your relationships. Reflect on the
                  incidents with care: Are there patterns that you can address
                  through clear communication or seeking support? Engaging with
                  a trusted friend, counselor, or therapist might help you
                  unpack these experiences and reestablish a sense of fairness
                  and security. Remember, feeling persecuted does not diminish
                  your right to respect or your intrinsic value, and with
                  compassionate guidance, you can find a way to reclaim your
                  peace and confidence.
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
