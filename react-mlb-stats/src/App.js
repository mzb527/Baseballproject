import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import WatchlistPage from "./pages/WatchlistPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/player/:playerId" element={<PlayerDetailPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
      </Routes>
    </Router>
  );
};

export default App;