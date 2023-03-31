import React, { useState } from "react";
import "./Result.css";

const Result = (props) => {
  const [isCopied, setIsCopied] = useState(false);

  const truncatedLink =
    props.userInputLink.length > 30
      ? props.userInputLink.substring(0, 30) + "..."
      : props.userInputLink;

  const handleCopy = () => {
    navigator.clipboard.writeText(props.shortenedLink);
    setIsCopied(true);
  };

  return (
    <div className="result-container">
      <div className="result-box">
        <div className="original-link">{truncatedLink}</div>
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
