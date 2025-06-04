import React from "react";
import { render, screen } from "@testing-library/react";
import PlayerList from "../PlayerList";
import { fetchPlayers } from "../../services/MLBApiService";

jest.mock("../../services/MLBApiService");

test("renders player list and fetches data", async () => {
  fetchPlayers.mockResolvedValue([{ person: { id: 1, fullName: "Test Player" } }]);

  render(<PlayerList teamId={121} />);
  
  expect(await screen.findByText("Test Player")).toBeInTheDocument();
});