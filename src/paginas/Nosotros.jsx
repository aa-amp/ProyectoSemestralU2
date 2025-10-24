import React from "react";
import { Link } from "react-router-dom";
import "../estilos/styles.css";


export default function Nosotros() {
  return (
    <div className="page-wrapper">

      <main>
        <div className="banda-negra">
          <h1>Información sobre nosotros</h1>
        </div>

        <p className="p-grande">
          Desde 2025, en Bazar del Barrio hemos trabajado con pasión y dedicación para ofrecer a nuestros vecinos y visitantes una experiencia única de compras. Nuestra historia comenzó con la idea de crear un lugar donde la cercanía y la calidad se unieran: un bazar acogedor con cinco gatos en el techo, símbolo de la calidez y familiaridad de nuestro negocio.
        </p>

        <p className="p-grande">
          Cada día ha sido un esfuerzo constante para seleccionar los mejores productos, desde dulces tradicionales hasta abarrotes, bebidas y snacks, siempre pensando en que nuestros clientes se sientan como en casa. Nos enorgullece mantener precios accesibles y competitivos, porque creemos que todos merecen disfrutar de productos de calidad sin sacrificar su bolsillo.
        </p>

        <p className="p-grande">
          Nuestro compromiso es seguir creciendo junto a nuestra comunidad, ofreciendo variedad, buen trato y esa sensación de que Bazar del Barrio es más que un negocio: es parte del barrio.
        </p>

        <Link to="/" className="boton-reging">Volver a Inicio</Link>
      </main>
    </div>
  );
}