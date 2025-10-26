import React, { useState } from "react";
import { useCarrito } from "../contexto/CarritoContexto";
import { Link } from "react-router-dom";
import "../estilos/styles.css";

export default function Carrito() {
  const { carrito, agregarProducto, eliminarProducto, eliminarTodoProducto, vaciarCarrito } = useCarrito();
  const [mensaje, setMensaje] = useState(null);
  const [tipoMensaje, setTipoMensaje] = useState("");

  const total = carrito.reduce((acc, item) => {
    const precio = parseInt(item.price.replace(/\D/g, ""));
    return acc + precio * item.cantidad;
  }, 0);

  const handleVaciar = () => {
    vaciarCarrito();
    setMensaje("Carrito Vaciado");
    setTipoMensaje("error");
  };

  const handleFinalizar = () => {
    vaciarCarrito();
    setMensaje("Compra Finalizada!!");
    setTipoMensaje("exito");
  };

  return (
    <div className="page-wrapper">
      <main>
        <div className="banda-negra">
          <h1>Carrito de compras</h1>
        </div>

        {mensaje && (
          <div className={`mensaje ${tipoMensaje}`}>
            {mensaje}
          </div>
        )}

        {carrito.length > 0 ? (
  <>
    <ul className="productos-grid">
      {carrito.map((item, index) => (
        <li key={index} className="producto-card">
          <img src={item.img} alt={item.title} />
          <div className="producto-card-content">
            <h3>{item.title}</h3>
            <p className="descripcion">{item.desc}</p>
            <p className="precio">{item.price}</p>
            <p>Cantidad: {item.cantidad}</p>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <button className="btn-comprar" onClick={() => eliminarProducto(item.id)}>-</button>
              <button className="btn-comprar" onClick={() => agregarProducto(item)}>+</button>
            </div>
          </div>
        </li>
      ))}
    </ul>

    <div className="carrito-total">
      <p className="strong-grande">Total: ${total}</p>
      <button className="btn-comprar" onClick={handleVaciar}>Vaciar carrito</button>
      <button className="btn-comprar" onClick={handleFinalizar}>Finalizar compra</button>
    </div>
  </>
) : (
  !mensaje && <p>Tu carrito está vacío.</p>
)}

        <Link to="/" className="boton-reging">
          Volver a Inicio
        </Link>
      </main>
    </div>
  );
}
