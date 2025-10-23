import React from "react";
import "../estilos/styles.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-about">
        <h2>Nosotros</h2>
        <p>Bazar del barrio es un negocio local. Fue fundado en 2025. Esperamos estar muchos años acompañándolos.</p>
        <p><a href="https://maps.app.goo.gl/gL2VXzZCm3mjNuFz5" target="_blank" rel="noreferrer">Encuéntranos: Manuel Montt 772, Providencia, Región Metropolitana</a></p>
        <p>Contáctanos: +569 68928080</p>
      </div>

      <div className="footer-logos">
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img src="/images/instagramlogo.png" alt="instagramlogo" className="footer-logo" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img src="/images/facebooklogo.png" alt="facebooklogo" className="footer-logo" />
        </a>
        <a href="https://www.x.com" target="_blank" rel="noreferrer">
          <img src="/images/xlogo.png" alt="xlogo" className="footer-logo" />
        </a>
      </div>

      <div className="footer-copy">
        <p>© 2025 Bazar del barrio</p>
      </div>
    </footer>
  );
}