"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Banner() {
  return (
    <section className="overflow-hidden  dark:bg-gray-90 bg-gray-900 sm:grid sm:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="p-8 md:p-12 lg:px-16 lg:py-24 bg-gray-900"
      >
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl font-bold text-white md:text-4xl"
          >
            Start Content Writing Today With AI
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="hidden text-gray-300 md:mt-4 md:block"
          >
            Unlock the power of words with AI. From blogs to web copy, AI can
            assist, inspire, and elevate your writing like never before. Let’s
            turn your ideas into impactful stories—faster and smarter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="mt-6 md:mt-10"
          >
            <Link
              href="/dashboard"
              className="inline-block rounded-sm bg-white px-10 py-3 text-sm font-medium text-gray-900 transition hover:bg-emerald-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              Get Started Today &rarr;
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        alt="Content creation with AI"
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1770&q=80"
        className="h-56 w-full object-cover sm:h-full brightness-75"
      />
    </section>
  );
}

export default Banner;
