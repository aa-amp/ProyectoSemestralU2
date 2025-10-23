import React from "react";
import { Link } from "react-router-dom";
import "../estilos/styles.css";

export default function Header() {
  return (
    <>
      <header className="site-header" style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px"}}>
        <Link to="/" className="logo-link" style={{textDecoration: "none", color: "inherit", gap: "10px"}}>
          <img src="/images/logobazar.png" alt="Bazar del barrio" className="logo" />
        </Link>

        <h1 style={{margin: 0, flex: 1, textAlign: "center"}}>
          <Link to="/" style={{textDecoration: "none", color: "inherit"}}>Bazar del barrio</Link>
        </h1>

        <Link to="/carrito" className="carrito" aria-label="Carrito">
          <img src="/images/logocarrito.png" alt="Carrito de compras" className="carrito-logo" />
        </Link>
      </header>

      <nav className="main-nav">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/ayuda">Ayuda y preguntas frecuentes</Link></li>
        </ul>
      </nav>

      <div className="ingreso">
        <Link to="/login" className="boton-reging">Ingreso Cuenta</Link>
        <Link to="/registro" className="boton-reging">Registrarse</Link>
      </div>
    </>
  );
}