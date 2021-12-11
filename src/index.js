import React from "react";
import ReactDOM from "react-dom";
import "./index.styles.js";
import App from "./App";
import { ThemeProvider } from "@mui/styles";
import { theme } from "./index.styles";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
