import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CarsPage from "./pages/CarsPage";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<CarsPage />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}