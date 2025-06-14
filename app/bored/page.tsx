"use client";

import React from "react";
import { motion } from "framer-motion";
// import { Heart, Sparkles, Smile, Star, Brain } from "lucide-react";

const Page = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}

        {/* Main Content */}

        {/* Emotion Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-white text-center">
            Explore Your Emotion
          </h2>

          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Feeling bored means you might need something stimulating or
                meaningful. Let's think about what excites you.
              </h1>
              <p className="text-gray-400 text-lg">
                The end result should be one amongst these two!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Aroused Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-8 shadow-xl border border-blue-500/20"
              >
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl font-bold text-blue-500">
                    Indifferent
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling indifferent doesn't always mean you don't care—it can
                  also mean you're emotionally exhausted or unsure where to
                  place your energy. Maybe you're protecting yourself from
                  getting hurt. Or maybe things have felt overwhelming for so
                  long that your mind has chosen to detach, just to make it
                  through. Imagine this: A friend shares exciting news, and
                  while you smile and nod, inside… there's nothing. You're not
                  upset, just blank. Not sad, not angry—just disconnected.
                  That's indifference. It's okay to feel this way. It might be
                  your mind's way of asking for rest. It could be a sign you're
                  emotionally overloaded, or even that something deeper needs
                  attention. You're not broken—you're just human.
                </p>
              </motion.div>

              {/* Cheeky Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-xl p-8 shadow-xl border border-pink-500/20"
              >
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl font-bold text-pink-500">
                    Apathetic
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Apathy can feel like your emotions have gone quiet. You're not
                  moved, not motivated, and things that once lit you up now feel
                  dull. It's like watching life from behind a foggy window. You
                  want to care—you just don't know how right now. Here's a
                  scenario: You used to enjoy painting, going out, or watching
                  movies. Now, even choosing something to eat feels like a task.
                  You go through the motions, but without the feeling. That's
                  apathy. This emotion often shows up when you're mentally or
                  emotionally burnt out. It's not laziness or a flaw—it's your
                  body's way of saying, "I'm tired." Give yourself permission to
                  slow down and feel again, gently, in your own time. You're not
                  alone in this.
                </p>
              </motion.div>
            </div>

            {/* Take Care Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-12"
            >
              <div className="inline-block bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Take Care
                </h3>
                <p className="text-gray-400">BYE :)</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Encouragement Section */}
      </div>
    </div>
  );
};

export default Page;
