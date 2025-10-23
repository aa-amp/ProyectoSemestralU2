
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import PaginaPrincipal from "./paginas/PaginaPrincipal";
import Carrito from "./paginas/Carrito";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
