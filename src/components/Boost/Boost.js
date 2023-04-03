import React from "react";
import { motion } from "framer-motion";
import { boostAnimation } from "../../Animations";
import PropTypes from "prop-types";
import "./Boost.css";

const Boost = ({ title, buttonText }) => (
  <section className="boost">
    <motion.div variants={boostAnimation} initial="initial" animate="animate">
      {title}
    </motion.div>
    <motion.button
      className="get-started-boost"
      variants={boostAnimation}
      initial="initial"
      animate="animate"
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
