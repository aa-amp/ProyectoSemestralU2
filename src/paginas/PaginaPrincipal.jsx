import React from "react";
import "../estilos/styles.css";

const products = [
  { id: 1, img: "/imagenes/coca.jpg", title: "Coca cola 1L", desc: "Coca cola de 1L en su versión en botella de vidrio.", price: "$1.000" },
  { id: 2, img: "/imagenes/Lays.jpg", title: "Lays medianas", desc: "Papas fritas Lays en formato de 140 gramos.", price: "$1.300" },
  { id: 3, img: "/imagenes/chocman.jpg", title: "Chocman", desc: "Chocman en su version de 33 gramos.", price: "$400" },
  { id: 4, img: "/imagenes/golpe.jpg", title: "Golpe", desc: "Golpe en su version de 27 gramos.", price: "$500" },
  { id: 5, img: "/imagenes/galletabonobon.jpg", title: "Galleta Bon o Bon", desc: "Galleta Bon o Bon en su versión de 95 gramos.", price: "$1.200" },
  { id: 6, img: "/imagenes/sprite.jpg", title: "Sprite", desc: "Sprite retornable de 2L.", price: "$1.550" },
  { id: 7, img: "/imagenes/chetos.jpg", title: "Cheetos", desc: "Cheetos en su version de 100 gramos.", price: "$1.100" },
  { id: 8, img: "/imagenes/takis.jpg", title: "Takis xplosion", desc: "Takis xplosion en su version de 200 gramos.", price: "$2.100" },
  { id: 9, img: "/imagenes/tabletabonobon.jpg", title: "Barra Chocolate Galleta Bon o Bon", desc: "Barra Chocolate Galleta Bon o Bon de 270 gramos.", price: "$3.900" },
  { id: 10, img: "/imagenes/alfi.jpg", title: "Alfi", desc: "Alfajor Alfi en su versión de 45 gramos.", price: "$600" },
  { id: 11, img: "/imagenes/finis.jpg", title: "Finis Tubos", desc: "Tubos Finis sabor frutilla ácida, 80 gramos.", price: "$1.200" },
  { id: 12, img: "/imagenes/lechecolun.jpg", title: "Leche Colun Entera 1L", desc: "Leche colun entera 1 L.", price: "$1.350" },
  { id: 13, img: "/imagenes/lechecolun2.jpg", title: "Leche Colun Descremada Sin Lactosa 1L", desc: "Leche colun descremada sin lactosa 1L.", price: "$1.300" },
  { id: 14, img: "/imagenes/canutos.jpg", title: "Riggati", desc: "Fideos Lucchetti Rigati en su versión de 400 gramos.", price: "$1.100" },
  { id: 15, img: "/imagenes/mogulosos.jpg", title: "Gomitas de Osos", desc: "Gomitas de Osos Mogul en su versión de 90 gramos.", price: "$1.100" }
];

function ProductoCard({ product, onBuy }) {
  return (
    <div className="producto-card">
      <img src={product.img} alt={product.title} />
      <div className="producto-card-content">
        <h3>{product.title}</h3>
        <p className="descripcion">{product.desc}</p>
        <p className="precio">{product.price}</p>
        <button className="btn-comprar" onClick={() => onBuy(product)}>Comprar</button>
      </div>
    </div>
  );
}

function Carousel({ items, onBuy }) {
  return (
    <div className="carrusel">
      <div className="carrusel-track">
        {items.slice(0, 10).map(item => (
          <ProductoCard key={item.id} product={item} onBuy={onBuy} />
        ))}
      </div>
      <button className="carrusel-btn prev">‹</button>
      <button className="carrusel-btn next">›</button>
    </div>
  );
}

export default function HomePage() {
  const handleBuy = (product) => {
    console.log("Comprar:", product);
    alert(`Añadido al carrito: ${product.title}`);
  };

  return (
    <>
      <div id="header"></div>

      <main>
        <section className="destacados">
          <div className="banda-negra">
            <h1>Productos destacados</h1>
          </div>

          <Carousel items={products} onBuy={handleBuy} />
        </section>

        <section>
          <div className="banda-negra">
            <h1>Todos nuestros productos</h1>
          </div>

          <div className="productos-grid">
            {products.map(p => (
              <ProductoCard key={p.id} product={p} onBuy={handleBuy} />
            ))}
          </div>
        </section>
      </main>

      <div id="footer"></div>
    </>
  );
}