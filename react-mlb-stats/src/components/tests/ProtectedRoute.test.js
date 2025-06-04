import React from "react";
import { render, screen } from "@testing-library/react";
import AuthContext from "../context/AuthContext";
import WatchlistPage from "../pages/WatchlistPage";

test("blocks access when not logged in", () => {
  render(
    <AuthContext.Provider value={{ user: null }}>
      <WatchlistPage />
    </AuthContext.Provider>
  );

  expect(screen.getByText("Please log in to access your watchlist.")).toBeInTheDocument();
});

test("allows access when logged in", () => {
  render(
    <AuthContext.Provider value={{ user: { username: "testUser", token: "fake-token" } }}>
      <WatchlistPage />
    </AuthContext.Provider>
  );

  expect(screen.getByText("MLB Watchlist")).toBeInTheDocument();
});