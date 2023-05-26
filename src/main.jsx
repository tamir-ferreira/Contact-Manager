import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Toast } from "./components/Toast";
import { StyledColors } from "./styles/colors";
import { StyledGlobals } from "./styles/globals";
import { StyledTypography } from "./styles/typography";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toast />
    <StyledGlobals />
    <StyledTypography />
    <StyledColors />
    <App />
  </React.StrictMode>
);
