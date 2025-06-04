import React from "react";
import { useParams } from "react-router-dom";

const PlayerDetailPage = () => {
  const { playerId } = useParams();
  
  return (
    <div>
      <h1>Player Details</h1>
      <p>Stats for player ID: {playerId}</p>
      {/* Later, we'll fetch actual player stats */}
    </div>
  );
};

export default PlayerDetailPage;