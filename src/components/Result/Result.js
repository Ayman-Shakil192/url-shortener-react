import React, { useState } from "react";
import { motion } from "framer-motion";
import { resultAnimation } from "../../Animations";
import "./Result.css";

const Result = (props) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(props.shortenedLink);
    setIsCopied(true);
  };

  return (
    <div className="result-container">
      <motion.div
        className="result-box"
        initial="initial"
        animate="animate"
        variants={resultAnimation}
      >
        <div className="original-link">{props.userInputLink}</div>
        <div className="generated-link">
          <a className="shortened-link" href={props.userInputLink}>
            {props.shortenedLink}
          </a>
          <button
            className={`copy ${isCopied ? "copied" : ""}`}
            onClick={handleCopy}
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Result;
