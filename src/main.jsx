import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import Ammo from "ammojs3";
import initPhysicsUniverse from "./Ammo/initPhysicsUniverse.js";
import AmmoContext from "./AmmoContext/AmmoContext.jsx";

// Ammo().then(Ammo => AmmoStart(Ammo))

// function AmmoStart(Ammo) {
//   initPhysicsUniverse(Ammo)
    

    ReactDOM.createRoot(document.getElementById("root")).render(
      <AmmoContext>
        <App />
      </AmmoContext>
    );
// }
