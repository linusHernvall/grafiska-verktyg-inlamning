import { ThemeProvider, createTheme } from "@mui/material";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

declare module "@mui/material/styles" {
  interface ThemeOptions {
    h1?: {
      fontWeight?: 900;
    };
    h3?: {
      fontSize?: string;
      fontFamily?: string;
    };
    body1?: {
      fontFamily?: string;
      fontSize?: string;
    };
    body2?: {
      fontFamily?: string;
      fontSize?: string;
    };
  }
}

const theme = createTheme({
  palette: {},
  typography: {
    h1: {
      fontFamily: "Mukta Mahee",
      fontWeight: 900,
      fontSize: "47px",
    },
    h2: {
      fontFamily: "Mukta Mahee",
      fontWeight: 700,
      fontSize: "29px",
    },
    h3: {
      fontFamily: "Mukta Mahee",
      fontWeight: 600,
      fontSize: "18px",
    },
    h4: {
      fontFamily: "Mukta Mahee",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "Mukta Mahee",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "Mukta Mahee",
      fontWeight: 600,
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
