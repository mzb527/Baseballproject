import { renderHook, act } from "@testing-library/react-hooks";
import { AuthProvider } from "../context/AuthContext";

test("logs in and logs out correctly", () => {
  const { result } = renderHook(() => AuthProvider());

  // Simulate login
  act(() => {
    result.current.login("testUser", "fake-token");
  });
  expect(result.current.user).toEqual({ username: "testUser", token: "fake-token" });

  // Simulate logout
  act(() => {
    result.current.logout();
  });
  expect(result.current.user).toBeNull();
});