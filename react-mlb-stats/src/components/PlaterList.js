import React, { useEffect, useState } from "react";
import { fetchPlayers } from "../services/MLBApiService";

const PlayerList = ({ teamId }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const loadPlayers = async () => {
      const data = await fetchPlayers(teamId);
      setPlayers(data);
    };
    loadPlayers();
  }, [teamId]);

  return (
    <div>
      <h2>Player Stats</h2>
      {players.length === 0 ? (
        <p>No players found.</p>
      ) : (
        <ul>
          {players.map((player) => (
            <li key={player.person.id}>{player.person.fullName}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlayerList;