import React from "react";
import "../estilos/styles.css";
import Carrusel from "../componentes/Carrusel";
import ProductoCard from "../componentes/ProductoCard";
import { useCarrito } from "../contexto/CarritoContexto";
import { showToast } from "../utils/MensajeFlotanteBTNComprar";
import productos from "../utils/productos";

export default function HomePage() {
  const { agregarProducto } = useCarrito();

  const handleBuy = (product) => {
    agregarProducto(product);
    showToast(`Producto agregado: ${product.title} ${product.price}`);
  };

  const productosDestacados = [...productos]
  .sort((a,b) => a.title.localeCompare(b.title))
  .slice(0,8);

  return (
    <div className="page-wrapper">
      <main>
        <section className="destacados">
          <div className="banda-negra">
            <h1>Productos destacados</h1>
          </div>
          <Carrusel items={productosDestacados} onBuy={handleBuy} />
        </section>

        <section>
          <div className="banda-negra">
            <h1>Todos nuestros productos</h1>
          </div>
          <div className="productos-grid">
            {productos.map((p) => (
              <ProductoCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
