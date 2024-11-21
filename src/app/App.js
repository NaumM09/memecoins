import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import CryptoCraze from "./CryptoCraze";
import OurWhy from "./OurWhy";
import TrendingCoins from "./TrendingCoins";
import CourseSection from "./CourseSection";
import Footer from "./Footer";
import './styles.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CryptoCraze />
      <OurWhy />
      <TrendingCoins />
      <CourseSection />
      <Footer />
    </div>
  );
};

export default App;
