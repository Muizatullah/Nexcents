import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { MainLayout } from "./components/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <MainLayout>
      <App />
      </MainLayout>
    </BrowserRouter>
  </StrictMode>,
);



