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