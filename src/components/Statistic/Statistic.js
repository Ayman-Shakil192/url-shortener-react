import React from "react";
import data from "../../data";
import "./Statistic.css";

const Statistic = () => {
  return (
    <section className="statistic-container">
      <div className="title">Advanced Statistics</div>
      <div className="subtitle">
        Track how your links are performing across the web with our advanced
        statistic dashboard
      </div>
      {data.map((item, index) => {
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
            {index !== data.length - 1 && <div className="bar"></div>}
          </div>
        );
      })}
    </section>
  );
};

export default Statistic;
