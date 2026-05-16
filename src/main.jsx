import React from "react";
import { createRoot } from "react-dom/client";
import FounderPortfolio from "./FounderPortfolio.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FounderPortfolio />
  </React.StrictMode>,
);
