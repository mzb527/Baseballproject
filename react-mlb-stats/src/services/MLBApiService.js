import axios from "axios";

const BASE_URL = "https://statsapi.mlb.com/api/v1"; // MLB Stats API

export const fetchPlayers = async (teamId) => {
  try {
    const response = await axios.get(`${BASE_URL}/teams/${teamId}/roster`);
    return response.data.roster;
  } catch (error) {
    console.error("Error fetching player stats:", error);
    return [];
  }
};