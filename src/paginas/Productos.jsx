import React from "react";
import "../estilos/styles.css";
import ProductoCard from "../componentes/ProductoCard";
import productos from "../utils/productos";

export default function Productos() {
  const productosOrdenados = [...productos].sort((a, b) =>
    a.title.localeCompare(b.title, "es", { sensitivity: "base" })
  );

  return (
    <div className="page-wrapper">
      <main>
        <div className="banda-negra">
          <h1>Todos nuestros productos</h1>
        </div>
        <section>
          <div className="productos-grid">
            {productosOrdenados.map((product) => (
              <ProductoCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
