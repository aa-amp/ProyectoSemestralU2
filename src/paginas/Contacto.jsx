import React from "react";
import { Link } from "react-router-dom";
import "../estilos/styles.css";

export default function Contacto() {
  return (
    <div className="page-wrapper">
      <main>
        <div className="banda-negra">
          <h1>¡Contáctanos!</h1>
        </div>

        <p className="p-grande">
          En Bazar del Barrio nos encanta escuchar a nuestros clientes. Si tienes dudas, sugerencias o simplemente quieres decirnos hola, no dudes en contactarnos. Nuestro equipo está siempre dispuesto a ayudarte, ya sea sobre nuestros productos, promociones o cualquier consulta que tengas. Queremos que tu experiencia en nuestro bazar sea siempre agradable y cercana.
        </p>

        <p className="p-grande">
          También puedes seguirnos y mantenerte al día con nuestras novedades y promociones a través de nuestras redes sociales: X, Instagram, Twitter y Facebook. Además nuestro teléfono y enlaces a redes se encuentran al final de la página para que los tengas siempre a mano.
        </p>

        <p className="p-grande">
          Además, si prefieres visitarnos en persona, nuestra dirección está indicada al pie de página. ¡Nos encantará recibirte en Bazar del Barrio y mostrarte todo lo que tenemos para ti y tu familia!
        </p>

        <Link to="/" className="boton-reging">Volver a Inicio</Link>
      </main>
    </div>
  );
}