import React, { createContext, useState, useEffect } from "react";

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  // Load watchlist from localStorage (if available)
  const [watchlist, setWatchlist] = useState(() => {
    return JSON.parse(localStorage.getItem("watchlist")) || [];
  });

  // Save watchlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

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