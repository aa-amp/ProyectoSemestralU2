import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CarritoProvider } from "./contexto/CarritoContexto";
import "./estilos/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CarritoProvider>
      <App />
    </CarritoProvider>
  </React.StrictMode>
);