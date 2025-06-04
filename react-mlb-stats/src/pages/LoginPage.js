import React from "react";

const LoginPage = () => {
  return <h1>Login to Manage Your Watchlist</h1>;
};

export default LoginPage;
import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    // Simulated authentication (Replace with actual API call)
    const fakeToken = "sample-jwt-token";
    login(username, fakeToken);
  };

  return (
    <div>
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;