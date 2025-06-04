import React, { useContext } from "react";
import WatchlistContext from "../context/WatchlistContext";

const WatchlistManager = () => {
  const { watchlist, addPlayer, removePlayer, clearWatchlist } = useContext(WatchlistContext);

  const examplePlayer = { id: 1, name: "Sample Player" }; // Replace with real MLB API data

  return (
    <div>
      <h2>Watchlist</h2>
      <button onClick={() => addPlayer(examplePlayer)}>Add Player</button>
      <button onClick={clearWatchlist}>Clear Watchlist</button>

      {watchlist.length === 0 ? (
        <p>No players in watchlist.</p>
      ) : (
        <ul>
          {watchlist.map((player) => (
            <li key={player.id}>
              {player.name} <button onClick={() => removePlayer(player.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WatchlistManager;