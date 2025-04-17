"use client"
import React from 'react'
import { motion } from "framer-motion";
function Contact() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      };
  return (
    <div className="min-h-screen  flex items-center justify-center px-4  bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <motion.div
        className="bg-gradient-to-br from-white to-blue-50 shadow-2xl rounded-2xl p-10 max-w-3xl w-full"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
        variants={fadeIn}
      >
        <motion.h2
          className="text-4xl font-extrabold text-gray-800 mb-8 text-center"
          variants={fadeIn}
        >
          Get In Touch
        </motion.h2>

        <motion.form
          className="space-y-6"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <motion.div variants={fadeIn}>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </motion.div>

          <motion.div variants={fadeIn}>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </motion.div>

          <motion.div variants={fadeIn}>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              placeholder="Let's collaborate"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </motion.div>

          <motion.div variants={fadeIn}>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              placeholder="Write your message here..."
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  )
}

export default Contact
