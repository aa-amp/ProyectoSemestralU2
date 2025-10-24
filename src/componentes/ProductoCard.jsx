import React from "react";
import { useCarrito } from "../contexto/CarritoContexto";
import { showToast } from "../utils/MensajeFlotanteBTNComprar";

export default function ProductoCard({ product }) {
  const { agregarProducto } = useCarrito();

  const handleBuy = () => {
    agregarProducto(product);
    showToast(`Producto agregado: ${product.title} ${product.price}`);
  };

  return (
    <div className="producto-card">
      <img src={product.img} alt={product.title} />
      <div className="producto-card-content">
        <h3>{product.title}</h3>
        <p className="descripcion">{product.desc}</p>
        <p className="precio">{product.price}</p>
        <button className="btn-comprar" onClick={handleBuy}>Comprar</button>
      </div>
    </div>
  );
}
