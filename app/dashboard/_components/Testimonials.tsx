"use client"
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Marketer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "This AI content generator is a lifesaver! I can create engaging blogs in minutes.",
    rating: 5,
    animation: { x: -50, opacity: 0 }, // Slide from left
  },
  {
    name: "David Lee",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "It helped me learn JavaScript basics super fast with interactive AI coding guides.",
    rating: 4,
    animation: { scale: 0.8, opacity: 0 }, // Zoom in
  },
  {
    name: "Emily Carter",
    role: "YouTube Creator",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Generating video scripts has never been easier. A must-have for content creators.",
    rating: 5,
    animation: { x: 50, opacity: 0 }, // Slide from right
  },
];

const Testimonials = () => {
  return (
    <section className=" py-20 px-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl font-bold bg-white dark:bg-slate-600 text-slate-500 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What People Are Saying
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Real feedback from real users of our AI platform.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-slate-600 text-slate-500 dark:text-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
            initial={item.animation}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover shadow"
              />
              <div>
                <h4 className="font-semibold text-gray-800">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-400" />
              ))}
            </div>

            <p className="text-slate-400 text-sm">{item.review}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;