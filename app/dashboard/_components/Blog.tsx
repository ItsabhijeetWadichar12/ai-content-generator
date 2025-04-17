"use client";
import React from "react";
import { motion } from "framer-motion";

function Blog() {
  const services = [
    {
      title: "✍️ Blog Writing",
      description: "Generate high-quality, SEO-optimized blog posts in seconds.",
      buttonText: "Try It",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      title: "👨‍💻 Learn Coding",
      description: "Interactive tutorials and code generation powered by AI.",
      buttonText: "Start Learning",
      buttonColor: "bg-green-600 hover:bg-green-700",
    },
    {
      title: "📝 Content Creation",
      description: "Generate scripts, captions, and content ideas effortlessly.",
      buttonText: "Explore",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
    {
      title: "🎥 Video Scripts",
      description: "Craft compelling scripts for YouTube, Reels & TikToks.",
      buttonText: "Create Now",
      buttonColor: "bg-red-600 hover:bg-red-700",
    },
    {
      title: "📚 Learn Anything",
      description: "Get bite-sized explainers & lessons on any topic instantly.",
      buttonText: "Learn More",
      buttonColor: "bg-yellow-600 hover:bg-yellow-700",
    },
    {
      title: "🧠 AI Tutor",
      description: "Ask questions and get AI-powered tutoring help 24/7.",
      buttonText: "Ask Now",
      buttonColor: "bg-cyan-600 hover:bg-cyan-700",
    },
    {
      title: "📸 Instagram Captions",
      description: "Create viral captions that boost your reach and engagement.",
      buttonText: "Generate",
      buttonColor: "bg-pink-600 hover:bg-pink-700",
    },
    {
      title: "🎙️ YouTube Story Ideas",
      description: "Unleash your channel’s creativity with AI story prompts.",
      buttonText: "Inspire Me",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700",
    },
    {
      title: "📄 Resume Builder",
      description: "Build professional resumes powered by AI in seconds.",
      buttonText: "Build Resume",
      buttonColor: "bg-teal-600 hover:bg-teal-700",
    },
    {
      title: "🧾 Email Generator",
      description: "Write professional emails fast — no stress, no fluff.",
      buttonText: "Write Email",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="py-12 px-6  bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold bg-white dark:bg-slate-600 text-slate-500 dark:text-white ">AI Content Services</h2>
        <p className="text-gray-500 mt-2">
          Explore all the ways AI can boost your productivity & creativity
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-slate-600 text-slate-500 dark:text-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1"
            variants={cardVariants}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-400 mb-4">{service.description}</p>
            <button
              className={`${service.buttonColor} text-white px-4 py-2 rounded-xl transition`}
            >
              {service.buttonText}
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Blog;
