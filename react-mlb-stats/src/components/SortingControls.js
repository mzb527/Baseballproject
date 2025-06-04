import React from "react";

const SortingControls = ({ setSortingCriteria }) => {
  return (
    <div>
      <label>Sort by:</label>
      <select onChange={(e) => setSortingCriteria(e.target.value)}>
        <option value="name">Alphabetical</option>
        <option value="position">Position</option>
        <option value="team">Team</option>
        <option value="latestPlateAppearance">Latest Plate Appearance</option>
      </select>
    </div>
  );
};

export default SortingControls;