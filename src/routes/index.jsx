import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import GlobalStyle from "../styles/GlobalStyle";
import "reset-css";

import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Today from "../pages/Today";
import Habits from "../pages/Habits";
import AuthProvider from "../contexts/index.jsx";

export function RouteProvider() {

  return (
    <Router>
      <AuthProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Registration />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<Today />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};