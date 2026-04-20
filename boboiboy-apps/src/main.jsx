import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ tambah ini
import App from "./App.jsx";
import "./assets/tailwind.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter> {/* ✅ bungkus App */}
      <App />
    </BrowserRouter>
  </StrictMode>
);