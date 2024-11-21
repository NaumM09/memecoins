import React from "react";
import { motion } from "framer-motion";

const CryptoCraze = () => {
  return (
    <section id="crypto-craze" className="bg-yellow-50 py-16 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-yellow-700 mb-6">
          The Crypto Craze: Why Everyone's Talking About It
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Cryptocurrency is revolutionizing the financial world. From Bitcoin to 
          Dogecoin, it’s more than just a trend—it’s a movement. Memecoins have 
          gained popularity because they are fun, fast-moving, and have the potential 
          to create millionaires overnight. But beware: this space is not without its 
          risks.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-blue-100 text-blue-700 px-6 py-4 rounded-lg shadow-md inline-block"
        >
          <p className="font-semibold text-lg">
            "High risk, high reward—but only if you know what you're doing!"
          </p>
        </motion.div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ y: -10 }}
            className="crypto-feature bg-white shadow-md rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold text-yellow-700 mb-4">Massive Returns</h3>
            <p className="text-gray-600">
              Memecoins can deliver unbelievable profits, but timing and strategy are key.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -10 }}
            className="crypto-feature bg-white shadow-md rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold text-yellow-700 mb-4">Community Hype</h3>
            <p className="text-gray-600">
              Memecoins thrive on social media and internet culture—stay tuned to trends.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -10 }}
            className="crypto-feature bg-white shadow-md rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold text-yellow-700 mb-4">High Risks</h3>
            <p className="text-gray-600">
              With potential comes volatility. Education and caution are your best allies.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CryptoCraze;
