import React from "react";
import PropTypes from "prop-types";
import "./Boost.css";

const Boost = ({ title, buttonText }) => (
  <section className="boost">
    <div>{title}</div>
    <button className="get-started-boost">{buttonText}</button>
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
