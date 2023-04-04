import React, { useState } from "react";
import { motion } from "framer-motion";
import { resultAnimation } from "../../Animations";
import "./Result.css";

const Result = ({ userInputLink, shortenedLink, onDelete }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedLink);
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
        <div className="original-link">{userInputLink}</div>
        <div className="generated-link">
          <a className="shortened-link" href={userInputLink}>
            {shortenedLink}
          </a>
          <button
            className={`copy ${isCopied ? "copied" : ""}`}
            onClick={handleCopy}
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
          <button className="delete" onClick={onDelete}>
            Delete
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Result;
