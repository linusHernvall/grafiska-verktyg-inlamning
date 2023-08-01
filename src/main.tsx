import { ThemeProvider, createTheme } from "@mui/material/styles";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#40128b",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#048C21",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    h1: {
      fontFamily: "Mukta Mahee",
      fontSize: "47px",
    },
    h2: {
      fontFamily: "Mukta Mahee",
      fontSize: "29px",
    },
    h3: {
      fontFamily: "Mukta Mahee",
      fontSize: "18px",
    },
    h4: {
      fontFamily: "Mukta Mahee",
    },
    h5: {
      fontFamily: "Mukta Mahee",
    },
    h6: {
      fontFamily: "Mukta Mahee",
    },
    body1: {
      fontFamily: "Lora",
      fontSize: "11px",
    },
    body2: {
      fontFamily: "Helvetica",
    },
    caption: {
      fontFamily: "Helvetica",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
