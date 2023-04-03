import React from "react";
import { motion } from "framer-motion";
import { boostTitleAnimation, boostBtnAnimation } from "../../Animations";
import PropTypes from "prop-types";
import "./Boost.css";

const Boost = ({ title, buttonText }) => (
  <section className="boost">
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      exit={false}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      variants={boostTitleAnimation}
    >
      {title}
    </motion.div>
    <motion.button
      className="get-started-boost"
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      variants={boostBtnAnimation}
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
