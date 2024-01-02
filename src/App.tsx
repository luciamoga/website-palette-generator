import "./style/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import React from "react";
import HeaderComponent from "./components/HeaderComponent";
import { Box, CssBaseline } from "@mui/material";
import FooterComponent from "./components/FooterComponent";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <CssBaseline />
        <HeaderComponent
          logo="logo.png"
          navItems={["Home", "Contact", "About"]}
        />{" "}
        <Box className="pageContainer">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Box>
        <FooterComponent
          logo="logo.png"
          navItems={["Home", "Contact", "About"]}
        />
      </BrowserRouter>
    </React.Fragment>
  );
}
