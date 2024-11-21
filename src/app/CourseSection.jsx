import React from 'react';
import { motion } from "framer-motion";
import { FaWallet, FaChartLine, FaSearch } from "react-icons/fa";

const CourseSection = () => {
  const modules = [
    {
      icon: <FaWallet className="text-yellow-400 text-4xl" />,
      title: "Whale Wallet Addresses",
      description:
        "Learn how to track big investors and follow their profitable moves.",
    },
    {
      icon: <FaSearch className="text-blue-400 text-4xl" />,
      title: "How to Find Coins",
      description:
        "Discover methods to identify promising coins before they explode.",
    },
    {
      icon: <FaChartLine className="text-green-400 text-4xl" />,
      title: "Basic Technical Analysis",
      description:
        "Master chart reading and spot trends for smarter investments.",
    },
  ];

  return (
    <section id="our-course" className="bg-gray-50 py-16 px-8">
      <h2 className="text-3xl font-bold text-center text-purple-600 mb-10">
        Join Our Memecoin Masterclass!
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        Learn how to spot promising coins, avoid scams, and grow your portfolio
        with our step-by-step guide. Here’s what you’ll gain:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {modules.map((module, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center mb-4">{module.icon}</div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              {module.title}
            </h3>
            <p className="text-gray-500 text-center mt-2">
              {module.description}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-purple-600 text-white py-3 px-8 rounded-lg font-semibold mx-2 hover:bg-purple-700"
        >
          Enroll Now
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-gray-200 text-purple-600 py-3 px-8 rounded-lg font-semibold mx-2 hover:bg-gray-300"
        >
          Learn More
        </motion.button>
      </div>
    </section>
  );
};

export default CourseSection;
