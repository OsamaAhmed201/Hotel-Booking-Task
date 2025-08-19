import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState, createContext } from "react";

export let AuthUserContext = createContext();

export default function AuthContextProvider({ children }) {
  let [token, setToken] = useState(null);
  let [logData, setLogData] = useState(null);

  useEffect(() => {
    let tokenStorage = localStorage.getItem("token");
    if (tokenStorage) {
      setToken(tokenStorage);
      setLogData(jwtDecode(tokenStorage));
    }
  }, []);

  const updateAuth = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    setLogData(jwtDecode(newToken));
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setLogData(null);
  };

  return (
    <AuthUserContext.Provider
      value={{ token, logData, updateAuth, logout }}
    >
      {children}
    </AuthUserContext.Provider>
  );
}
