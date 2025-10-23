import React from "react";
import { useCarrito } from "../contexto/CarritoContexto";
import { Link } from "react-router-dom";

export default function Carrito() {
  const { carrito, eliminarProducto, vaciarCarrito } = useCarrito();

  const total = carrito.reduce((acc, item) => {
    const precio = parseInt(item.price.replace(/\D/g, ""));
    return acc + precio;
  }, 0);

  return (
    <main>
      <div className="banda-negra">
        <h1>Carrito de compras</h1>
      </div>

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="productos-grid">
            {carrito.map((item, index) => (
              <li key={index} className="producto-card">
                <img src={item.img} alt={item.title} />
                <div className="producto-card-content">
                  <h3>{item.title}</h3>
                  <p className="descripcion">{item.desc}</p>
                  <p className="precio">{item.price}</p>
                  <button className="btn-comprar" onClick={() => eliminarProducto(item.id)}>
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="carrito-total" style={{ textAlign: "center", margin: "30px 0" }}>
            <p className="strong-grande">Total: ${total}</p>
            <button className="btn-comprar" onClick={vaciarCarrito}>Vaciar carrito</button>
            <button className="btn-comprar" onClick={() => alert("Compra simulada")}>Finalizar compra</button>
          </div>
        </>
      )}

      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Link to="/" className="boton-reging">Volver a Inicio</Link>
      </div>
    </main>
  );
}