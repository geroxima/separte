import React, { createContext, useReducer } from "react";
import authReducer from "../reducers/authReducer.js";

// Create the initial state for the auth context
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

// Create the Auth Context
export const AuthContext = createContext();

// Create the Auth Provider component
export const AuthProvider = ({ children }) => {
  // Use the authReducer to manage the state
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Define your dispatchers here
  const login = (data) => {
    localStorage.setItem("isAuthenticated", true);
    localStorage.setItem("user", data.user.username);
    localStorage.setItem("token", data.token);
    dispatch({ type: "LOGIN", payload: data });
  };

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };

  // Provide the state and dispatchers to the children components
  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
