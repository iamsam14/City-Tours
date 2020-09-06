import React, { useState } from "react";
import Tour from "../Tour/Tour";
import { tourData } from "../../TourData";
import "./TourList.scss";

const TourList = () => {
  const [tours, setTours] = useState(tourData);

  const removeTour = (id) => {
    const sortedTours = tours.filter((tour) => tour.id !== id);
    setTours(sortedTours);
  };

  return (
    <section className="tourlist">
      {tours.map((tour) => {
        return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
      })}
    </section>
  );
};

export default TourList;
