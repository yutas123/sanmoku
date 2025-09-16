import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

console.log(<h1>Hello</h1>);

const root = createRoot(document.getElementById("root"));
root.render(
    <App />
);