import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";

const el: Element | null = document.getElementById("root");

if (!el) {
  throw new Error("No root element found");
}

const root = ReactDOM.createRoot(el);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
