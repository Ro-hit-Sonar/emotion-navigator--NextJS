"use client";

import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-12">
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
                Being busy can feel overwhelming. What's filling your plate
                right now? Let's find ways to balance.
              </h1>
              <p className="text-gray-400 text-lg">
                The end result should be one amongst these two!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Pressured Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-8 shadow-xl border border-blue-500/20"
              >
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl font-bold text-blue-500">
                    Pressured
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling pressured often means you're carrying more than you
                  should, or more than you can. Expectations—whether from others
                  or yourself—start to pile up, and suddenly, everything feels
                  urgent. You're trying to hold it all together, but inside,
                  there's a weight that keeps growing heavier. Picture this:
                  You've got deadlines at work, your family needs your time,
                  your friends are waiting on replies, and in all of it—you
                  don't even remember the last time you sat down and breathed.
                  That's pressure. Sometimes pressure can push us forward. But
                  too much of it can make us forget who we're doing things
                  for—or why. It's okay to pause. It's okay to say, "I need
                  space." The world won't collapse if you stop for a moment to
                  take care of yourself.
                </p>
              </motion.div>

              {/* Rushed Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-xl p-8 shadow-xl border border-pink-500/20"
              >
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl font-bold text-pink-500">Rushed</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Rushed isn't just about moving quickly—it's about feeling like
                  there's never enough time. Like you're constantly running
                  behind, even when you're doing your best. It's that sense of
                  being breathless, not just physically, but mentally too.
                  Here's a moment: You wake up already feeling late. You skip
                  breakfast, your mind's already five steps ahead, and the day
                  hasn't even started. That's being rushed. When every second
                  feels borrowed, life becomes a blur. But what if rushing isn't
                  the only way? What if slowing down actually helps you do
                  things better? You deserve a pace that doesn't leave you
                  gasping. You deserve to feel present—not just productive.
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
      </div>
    </div>
  );
};

export default Page;
