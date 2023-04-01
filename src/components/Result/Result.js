import React, { useState } from "react";
import "./Result.css";

const Result = (props) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(props.shortenedLink);
    setIsCopied(true);
  };

  return (
    <div className="result-container">
      <div className="result-box">
        <div className="original-link">{props.userInputLink}</div>
        <div className="generated-link">
          <div className="shortened-link">{props.shortenedLink}</div>
          <button
            className={`copy ${isCopied ? "copied" : ""}`}
            onClick={handleCopy}
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
