import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Memecoin Beginners</div>
      <div className="links">
        {["Home", "About", "Trending Coins", "Our Course"].map((item) => (
          <motion.a
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            whileHover={{ scale: 1.1, color: "#FFD700" }}
            className="nav-link"
            key={item}
          >
            {item}
          </motion.a>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.2 }}
        className="btn btn-primary"
      >
        Get Started
      </motion.button>
    </nav>
  );
};

export default Navbar;
