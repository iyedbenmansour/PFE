import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  loggedIn: false,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    // You can implement your login logic here
    setLoggedIn(true);
  };

  const logout = () => {
    // You can implement your logout logic here
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
