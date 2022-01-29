import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import tailwindConfig from "../tailwind.config.js";
import { setTailwindConfig } from "./lib";

setTailwindConfig(tailwindConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
