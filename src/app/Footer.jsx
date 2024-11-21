import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-10 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Logo and About */}
        <div>
          <h2 className="text-xl font-bold text-yellow-500 mb-4">Memecoin Beginners</h2>
          <p className="text-sm text-gray-400">
            Your trusted guide in the wild world of cryptocurrency. Learn to trade, avoid scams, and find hidden gems with us.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="#crypto-craze" className="hover:text-yellow-400 transition">Crypto Craze</a></li>
            <li><a href="#our-why" className="hover:text-yellow-400 transition">Our Why</a></li>
            <li><a href="#course" className="hover:text-yellow-400 transition">Course</a></li>
          </ul>
        </div>

        {/* Social Media & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">Stay Connected</h3>
          <div className="flex space-x-4 mb-4">
            <motion.a whileHover={{ scale: 1.1 }} href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-400 transition">
              <i className="fab fa-twitter fa-lg"></i>
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="#" aria-label="Instagram" className="text-gray-400 hover:text-pink-400 transition">
              <i className="fab fa-instagram fa-lg"></i>
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="#" aria-label="Telegram" className="text-gray-400 hover:text-blue-500 transition">
              <i className="fab fa-telegram fa-lg"></i>
            </motion.a>
          </div>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 mb-2 rounded-md text-gray-900"
            />
            <button className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Memecoin Beginners. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
