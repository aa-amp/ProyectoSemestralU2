import React from "react";
import { Link } from "react-router-dom";
import "../estilos/styles.css";

export default function MiCuenta() {
  return (
    <div className="page-wrapper">

      <main className="mi-cuenta-container">
        <h1>Mi Cuenta Personal</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet
          lacus aliquet, dapibus nibh auctor, posuere tellus. Maecenas id condimentum
          est. Duis vel ligula tincidunt, mollis eros quis, sagittis est. Vestibulum
          pharetra pretium congue. Vivamus ac ante posuere, vehicula orci sed, ornare
          lectus. Nulla vel arcu scelerisque, volutpat justo a, volutpat metus.
          Praesent ac tellus interdum lacus interdum pulvinar quis semper ipsum.
        </p>
        <p>
          Sed posuere nibh lorem, quis feugiat ex tristique eu. Vestibulum in nunc dolor.
        </p>

        <Link to="/" className="boton-reging">
          Volver a Inicio
        </Link>
      </main>
    </div>
  );
}
