import React, { useState } from "react";
import { useCarrito } from "../contexto/CarritoContexto";
import { Link } from "react-router-dom";
import "../estilos/styles.css";

export default function Carrito() {
  const { carrito, eliminarProducto, vaciarCarrito } = useCarrito();
  const [mensaje, setMensaje] = useState(null); 
  const [tipoMensaje, setTipoMensaje] = useState(""); 

  const total = carrito.reduce((acc, item) => {
    const precio = parseInt(item.price.replace(/\D/g, ""));
    return acc + precio;
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

        {carrito.length === 0 && !mensaje ? (
          <p>Tu carrito está vacío.</p>
        ) : carrito.length > 0 ? (
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

            <div className="carrito-total">
              <p className="strong-grande">Total: ${total}</p>
              <button className="btn-comprar" onClick={handleVaciar}>Vaciar carrito</button>
              <button className="btn-comprar" onClick={handleFinalizar}>Finalizar compra</button>
            </div>
          </>
        ) : null}

        <Link to="/" className="boton-reging">
                  Volver a Inicio
                </Link>
      </main>
    </div>
  );
}
