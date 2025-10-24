import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import PaginaPrincipal from "./paginas/PaginaPrincipal";
import Carrito from "./paginas/Carrito";
import Productos from "./paginas/Productos";
import Nosotros from "./paginas/Nosotros";
import Contacto from "./paginas/Contacto";
import Ayuda from "./paginas/Ayuda";
import Login from "./paginas/Login";
import MiCuenta from "./paginas/MiCuenta";
import Registro from "./paginas/Registro";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/ayuda" element= {<Ayuda />} />
          <Route path= "/login" element={<Login />} />
          <Route path= "/micuenta" element= {<MiCuenta/>} />
          <Route path= "/registro" element= {<Registro/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
