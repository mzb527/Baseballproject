import axios from "axios";

const BASE_STATS_URL = "https://statsapi.mlb.com/api/v1";
const BASE_LOOKUP_URL = "http://lookup-service-prod.mlb.com/json/named";

// Fetch player roster by team (MLB Stats API)
export const fetchPlayers = async (teamId) => {
  try {
    const response = await axios.get(`${BASE_STATS_URL}/teams/${teamId}/roster`);
    return response.data.roster;
  } catch (error) {
    console.error("Error fetching player stats:", error);
    return [];
  }
};

// Search for a player by name (Lookup Service API)
export const searchPlayer = async (playerName) => {
  try {
    const response = await axios.get(`${BASE_LOOKUP_URL}.search_player_all.bam`, {
      params: { sport_code: "'mlb'", name_part: `'${playerName}%'` },
    });
    return response.data.search_player_all.queryResults.row;
  } catch (error) {
    console.error("Error searching for player:", error);
    return [];
  }
};

// Fetch full player stats by ID (Lookup Service API)
export const fetchPlayerStats = async (playerId) => {
  try {
    const response = await axios.get(`${BASE_LOOKUP_URL}.bio_player.bam`, {
      params: { player_id: playerId },
    });
    return response.data.bio_player.queryResults.row;
  } catch (error) {
    console.error("Error fetching player stats:", error);
    return null;
  }
};