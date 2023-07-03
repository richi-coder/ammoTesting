import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AmmoContext from "./AmmoContext/AmmoContext.jsx";
console.log('main');

    ReactDOM.createRoot(document.getElementById("root")).render(
      <StrictMode>
        <AmmoContext>
          <App />
        </AmmoContext>
      </StrictMode>
    );

