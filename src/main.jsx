import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CarritoProvider } from "./contexto/CarritoContexto";
import { LoginProvider } from "./contexto/LoginContexto"; // <-- nuevo
import "./estilos/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginProvider>
      <CarritoProvider>
        <App />
      </CarritoProvider>
    </LoginProvider>
  </React.StrictMode>
);
