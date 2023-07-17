import React, { useState } from "react";
import "./filter.css";

function FilterComponent({ filterHotels }) {
  const [minReview, setMinReview] = useState("");

  const handleInputChange = (event) => {
    setMinReview(event.target.value);
  };

  const handleFilterClick = () => {
    filterHotels(Number(minReview));
  };
  const minRev = 0;
  const maxRev = 5;
  return (
    <div className="filter-container">
      <input
        type="number"
        placeholder="Minimum Review"
        value={minReview}
        onChange={handleInputChange}
        min={minRev}
        max={maxRev}
      />
      <button onClick={handleFilterClick}>Filter</button>
    </div>
  );
}

export default FilterComponent;
