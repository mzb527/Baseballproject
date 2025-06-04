import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { WatchlistProvider } from "../../context/WatchlistContext";
import WatchlistManager from "../WatchlistManager";

test("renders WatchlistManager and adds a player", () => {
  render(
    <WatchlistProvider>
      <WatchlistManager />
    </WatchlistProvider>
  );

  expect(screen.getByText("No players in watchlist.")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Add Player"));
  
  expect(screen.getByText("Sample Player")).toBeInTheDocument();
});

test("removes a player from the watchlist", () => {
  render(
    <WatchlistProvider>
      <WatchlistManager />
    </WatchlistProvider>
  );

  fireEvent.click(screen.getByText("Add Player"));
  fireEvent.click(screen.getByText("Remove"));
  
  expect(screen.getByText("No players in watchlist.")).toBeInTheDocument();
});