export const sortPlayers = (players, criteria) => {
  switch (criteria) {
    case "position":
      return [...players].sort((a, b) => a.position.localeCompare(b.position));
    case "name":
      return [...players].sort((a, b) => a.name.localeCompare(b.name));
    case "team":
      return [...players].sort((a, b) => a.team.localeCompare(b.team));
    case "latestPlateAppearance":
      return [...players].sort((a, b) => new Date(b.lastAppearance) - new Date(a.lastAppearance));
    default:
      return players;
  }
};