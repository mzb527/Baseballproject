import { renderHook, act } from "@testing-library/react-hooks";
import { WatchlistProvider } from "../WatchlistContext";

test("adds and removes players in watchlist context", () => {
  const { result } = renderHook(() => WatchlistProvider());

  act(() => {
    result.current.addPlayer({ id: 1, name: "Test Player" });
  });
  expect(result.current.watchlist.length).toBe(1);

  act(() => {
    result.current.removePlayer(1);
  });
  expect(result.current.watchlist.length).toBe(0);
});