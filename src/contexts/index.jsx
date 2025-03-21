import React, { createContext, useState } from "react";

import { useStickyState } from "../hooks";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../constants";
export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [userData, setUserData] = useStickyState({}, "userData");
 
  return (
    <ThemeProvider theme={lightTheme}>
      <AuthContext.Provider
        value={{ userData, setUserData }}
      >
        {children}
      </AuthContext.Provider>
    </ThemeProvider>
  );
}
