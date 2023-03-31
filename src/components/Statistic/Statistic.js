import React, { useState, useEffect } from "react";
import Result from "../Result/Result";
import axios from "axios";
import statisticData from "../../statisticData";
import "./Statistic.css";

const Statistic = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [linkInput, setLinkInput] = useState("");
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `https://api.shrtco.de/v2/shorten?url=${searchTerm}`
        );
        console.log(res?.data?.result);
        setResults([
          ...results,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

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
    }
  };

  return (
    <section className="statistic-container">
      <div className="link-input-container">
        <input
          type="text"
          className={`link-input ${error ? "error" : ""}`}
          placeholder="Shorten a link here..."
          value={linkInput}
          onChange={handleInputChange}
          required
        />
        {error && <div className="error-message">Please add a link</div>}
        <button className="shorten-link" onClick={handleSubmit}>
          {isLoading ? "Shortening Link..." : "Shorten it!"}
        </button>
      </div>
      {results.map((result, index) => (
        <Result
          key={index}
          userInputLink={result.original_link}
          shortenedLink={result.full_short_link}
        />
      ))}
      <div className="title">Advanced Statistics</div>
      <div className="subtitle">
        Track how your links are performing across the web with our advanced
        statistic dashboard
      </div>
      {statisticData.map((item, index) => {
        const { id, image, title, subtitle } = item;
        return (
          <div key={id} className="flex-container">
            <div className="statistic">
              <div className="icon-container">
                <img src={image.default} alt="statistic" className="icon" />
              </div>
              <div className="statistic-title">{title}</div>
              <div className="statistic-subtitle">{subtitle}</div>
            </div>
            {index !== statisticData.length - 1 && <div className="bar"></div>}
          </div>
        );
      })}
    </section>
  );
};

export default Statistic;
