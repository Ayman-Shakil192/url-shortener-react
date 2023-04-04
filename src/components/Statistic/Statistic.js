import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  statisticTitleAnimate,
  statisticSubtitleAnimate,
  cardAnimate,
  barAnimate,
} from "../../Animations";
import Result from "../Result/Result";
import axios from "axios";
import statisticData from "../../statisticData";
import "./Statistic.css";

const Statistic = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [linkInput, setLinkInput] = useState("");
  const [error, setError] = useState(false);
  const [results, setResults] = useState(() => {
    const persistedResults = localStorage.getItem("results");
    return persistedResults ? JSON.parse(persistedResults) : [];
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `https://api.shrtco.de/v2/shorten?url=${searchTerm}`
        );
        setResults((prevResults) => [
          ...prevResults,
          {
            original_link: res?.data?.result.original_link,
            full_short_link: res?.data?.result.full_short_link,
          },
        ]);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    if (searchTerm !== "") {
      fetchData();
    }
  }, [searchTerm]);

  useEffect(() => {
    localStorage.setItem("results", JSON.stringify(results));
  }, [results]);

  const handleInputChange = (event) => {
    setLinkInput(event.target.value);
    setError(!event.target.validity.valid);
  };

  const handleSubmit = () => {
    const linkInput = document.querySelector(".link-input");
    if (!linkInput.value) {
      setError(true);
      linkInput.classList.add("error");
    } else {
      setError(false);
      linkInput.classList.remove("error");
      setSearchTerm(linkInput.value);
      setLinkInput("");
    }
  };

  return (
    <section className="statistic-container">
      <div className="link-input-container">
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input
            type="text"
            className={`link-input ${error ? "error" : ""}`}
            placeholder="Shorten a link here..."
            value={linkInput}
            onChange={handleInputChange}
            required
          />
          {error && <div className="error-message">Please add a link</div>}
        </div>
        <button className="shorten-link" onClick={handleSubmit}>
          {isLoading ? "Shortening..." : "Shorten it!"}
        </button>
      </div>
      {results.map((result, index) => (
        <Result
          key={index}
          userInputLink={result.original_link}
          shortenedLink={result.full_short_link}
        />
      ))}
      <motion.div
        className="title"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        variants={statisticTitleAnimate}
      >
        Advanced Statistics
      </motion.div>
      <motion.div
        className="subtitle"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        variants={statisticSubtitleAnimate}
      >
        Track how your links are performing across the web with our advanced
        statistic dashboard
      </motion.div>
      <div className="flex-container">
        {" "}
        {statisticData.map((item, index) => {
          const { id, image, title, subtitle } = item;
          return (
            <React.Fragment key={id}>
              <motion.div
                className="statistic"
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                variants={cardAnimate}
              >
                {" "}
                <div className="icon-container">
                  <img src={image.default} alt="statistic" className="icon" />
                </div>
                <div className="statistic-title">{title}</div>
                <div className="statistic-subtitle">{subtitle}</div>
              </motion.div>
              {index !== statisticData.length - 1 && (
                <motion.div
                  className="bar"
                  key={`bar-${id}`}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  variants={barAnimate}
                ></motion.div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Statistic;
