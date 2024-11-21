import React from "react";
import { motion } from "framer-motion";

const OurWhy = () => {
  return (
    <section id="our-why" className="bg-purple-50 py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">
          Why We Started Memecoin Beginners
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          The crypto world is exciting, but it&apos;s also filled with scams and misleading promises. 
          We created **Memecoin Beginners** to help people navigate this space safely and successfully. 
          After getting scammed myself, I made it my mission to ensure others don&apos;t fall into the same traps.
        </p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-yellow-100 text-yellow-700 px-6 py-4 rounded-lg shadow-md inline-block"
        >
          <p className="font-semibold text-lg">
            &#34I got scammed so you don&apos;t have to.&#34
          </p>
        </motion.div>
        <div className="mt-10">
          <button className="btn btn-primary mx-2">
            Learn More
          </button>
          <button className="btn btn-outline mx-2">
            Avoid Scams
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurWhy;
