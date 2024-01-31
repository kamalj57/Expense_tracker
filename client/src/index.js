import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { GlobalStyle } from "./styles/GlobalStyle";
import { GlobalProvider } from "./context/GlobalContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
