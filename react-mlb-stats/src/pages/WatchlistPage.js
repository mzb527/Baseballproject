import React from "react";

const WatchlistPage = () => {
  return <h1>Your Watchlist</h1>;
};

export default WatchlistPage;
import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const WatchlistPage = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <h2>Please log in to access your watchlist.</h2>;
  }

  return <h2>Your Watchlist</h2>;
};

export default WatchlistPage;