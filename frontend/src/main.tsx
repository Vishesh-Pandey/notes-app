import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import { CssVarsProvider } from "@mui/joy";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssVarsProvider>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CssVarsProvider>
    </ThemeProvider>
  </React.StrictMode>
);
