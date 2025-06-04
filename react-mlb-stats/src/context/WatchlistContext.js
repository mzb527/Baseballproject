import React, { createContext, useState } from "react";

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  // Add a player to the watchlist
  const addPlayer = (player) => {
    setWatchlist((prev) => [...prev, player]);
  };

  // Remove a player by ID
  const removePlayer = (playerId) => {
    setWatchlist((prev) => prev.filter((p) => p.id !== playerId));
  };

  // Clear the entire watchlist
  const clearWatchlist = () => {
    setWatchlist([]);
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addPlayer, removePlayer, clearWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistContext;