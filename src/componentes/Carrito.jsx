import React from "react";
import { useCart } from "../contexto/CarritoContexto";
import { Link } from "react-router-dom";

export default function Carrito() {
  const { cartItems, removeItem, clearCart } = useCart();

  const total = cartItems.reduce((acc, item) => {
    const precio = parseInt(item.price.replace(/\D/g, ""));
    return acc + precio;
  }, 0);

  return (
    <main className="carrito-page">
      <div className="banda-negra">
        <h1>Carrito de compras</h1>
      </div>

      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="carrito-lista">
            {cartItems.map((item, index) => (
              <li key={index} className="carrito-item">
                <img src={item.img} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.price}</p>
                  <button onClick={() => removeItem(item.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="carrito-total">
            <p>Total: ${total}</p>
            <button onClick={clearCart}>Vaciar carrito</button>
            <button onClick={() => alert("Compra simulada")}>Finalizar compra</button>
          </div>
        </>
      )}

      <Link to="/" className="boton-reging">Volver a Inicio</Link>
    </main>
  );
}