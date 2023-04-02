import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "./Boost.css";

const Boost = ({ title, buttonText }) => (
  <section className="boost">
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
    >
      {title}
    </motion.div>
    <motion.button
      className="get-started-boost"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
    >
      {buttonText}
    </motion.button>
  </section>
);

Boost.defaultProps = {
  title: "Boost your links today",
  buttonText: "Get Started",
};

Boost.propTypes = {
  title: PropTypes.string,
  buttonText: PropTypes.string,
};

export default Boost;
