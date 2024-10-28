import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <main>
          <App />
        </main>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
