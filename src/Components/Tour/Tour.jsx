import React, { useState } from "react";
import "./Tour.scss";

const Tour = ({ tour, removeTour }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className="tour">
      <div className="img-container">
        <img src={tour.img} alt="" />
        <span className="close-button" onClick={() => removeTour(tour.id)}>
          <i className="fas fa-window-close" />
        </span>
      </div>
      <div className="tour-info">
        <h3>{tour.city}</h3>
        <h4>{tour.lname}</h4>
        <h5>
          info
          <span onClick={handleInfo}>
            <i className="fas fa-caret-square-down"></i>
          </span>
        </h5>
        {showInfo ? <p>{tour.info}</p> : ""}
      </div>
    </article>
  );
};

export default Tour;
