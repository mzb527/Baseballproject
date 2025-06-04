import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import PlayerList from "../components/PlayerList";
import WatchlistManager from "../components/WatchlistManager";

const WatchlistPage = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <h2>Please log in to access your watchlist.</h2>;
  }

  return (
    <div>
      <h1>MLB Watchlist</h1>
      <PlayerList teamId={121} /> {/* Example team ID (Yankees) */}
      <WatchlistManager />
    </div>
  );
};

export default WatchlistPage;
import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import WatchlistContext from "../context/WatchlistContext";
import PlayerList from "../components/PlayerList";
import WatchlistManager from "../components/WatchlistManager";
import { sortPlayers } from "../utils/SortingService";

const WatchlistPage = () => {
  const { user } = useContext(AuthContext);
  const { watchlist } = useContext(WatchlistContext);
  const [sortingCriteria, setSortingCriteria] = useState("name");
  const [teamFilter, setTeamFilter] = useState("");

  if (!user) {
    return <h2>Please log in to access your watchlist.</h2>;
  }

  const sortedPlayers = sortPlayers(
    teamFilter ? watchlist.filter((p) => p.team === teamFilter) : watchlist,
    sortingCriteria
  );

  return (
    <div>
      <h1>MLB Watchlist</h1>

      {/* Sorting & Filtering Controls */}
      <div>
        <label>Sort by:</label>
        <select onChange={(e) => setSortingCriteria(e.target.value)}>
          <option value="name">Alphabetical</option>
          <option value="position">Position</option>
          <option value="team">Team</option>
          <option value="latestPlateAppearance">Latest Plate Appearance</option>
        </select>

        <label>Filter by Team:</label>
        <input 
          type="text" 
          placeholder="Enter team name"
          value={teamFilter} 
          onChange={(e) => setTeamFilter(e.target.value)}
        />
      </div>

      {/* Display Player List & Watchlist */}
      <PlayerList teamId={121} />
      <WatchlistManager />

      {sortedPlayers.length === 0 ? (
        <p>No players in watchlist.</p>
      ) : (
        <ul>
          {sortedPlayers.map((player) => (
            <li key={player.id}>
              {player.name} ({player.position}, {player.team})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WatchlistPage;