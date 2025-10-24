import React from "react";
import { Link } from "react-router-dom";
import "../estilos/styles.css";

export default function Ayuda() {
  return (
    <div className="page-wrapper">
      <main>
        <div className="banda-negra">
          <h1>Ayuda y preguntas frecuentes</h1>
        </div>

        <ol>
          <li>
            <strong className="strong-grande">¿Qué tipo de productos venden en Bazar del Barrio?</strong>
            <p className="p-grande">
              Vendemos una amplia variedad de productos: dulces, abarrotes, bebidas, snacks salados y más,
              siempre pensando en ofrecer opciones tanto para vecinos como para visitantes.
            </p>
          </li>

          <li>
            <strong className="strong-grande">¿Ofrecen descuentos o promociones?</strong>
            <p className="p-grande">
              Sí, tenemos promociones periódicas en productos seleccionados y descuentos especiales para clientes frecuentes.
              Te recomendamos revisar nuestras redes sociales o nuestro sitio web para no perder ninguna oferta.
            </p>
          </li>

          <li>
            <strong className="strong-grande">¿Puedo comprar productos en línea o solo en el local?</strong>
            <p className="p-grande">
              ¡Sí! Aunque actualmente estamos trabajando en nuestra página web para ofrecer una mejor experiencia.
            </p>
          </li>

          <li>
            <strong className="strong-grande">¿Cuáles son los horarios de atención?</strong>
            <p className="p-grande">
              Nuestro horario es de lunes a sábado de 9:00 a 20:00 y domingos de 10:00 a 18:00.
              Nos esforzamos por estar disponibles cuando nos necesites.
            </p>
          </li>

          <li>
            <strong className="strong-grande">¿Dónde están ubicados?</strong>
            <p className="p-grande">
              Estamos en el corazón del barrio, con estacionamiento cercano y accesibilidad para todos los visitantes.
            </p>
          </li>

          <li>
            <strong className="strong-grande">¿Qué hago si un producto está agotado?</strong>
            <p className="p-grande">
              Si un producto no está disponible, puedes preguntarnos en el local o por nuestras redes sociales.
              Haremos lo posible por reabastecerlo rápidamente.
            </p>
          </li>

          <li>
            <strong className="strong-grande">¿Aceptan pagos con tarjeta o solo efectivo?</strong>
            <p className="p-grande">
              Aceptamos ambos métodos de pago: efectivo y tarjetas de crédito/débito.
            </p>
          </li>

          <li>
            <strong className="strong-grande">¿Puedo hacer pedidos especiales o al por mayor?</strong>
            <p className="p-grande">
              Sí, aceptamos pedidos especiales. Contáctanos para coordinar los detalles.
            </p>
          </li>
        </ol>
        <Link to="/" className="boton-reging">Volver a Inicio</Link>
      </main>
    </div>
  );
}
