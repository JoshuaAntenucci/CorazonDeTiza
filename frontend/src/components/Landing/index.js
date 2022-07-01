import React from "react";
import { motion } from "framer-motion";

import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Prices from "./Prices";

import "./Landing.scss";

function Landing() {
  return (
    <motion.div
      className="landing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Hero />

      <AboutUs />

      <Prices />
    </motion.div>
  );
}

export default Landing;
