import { useState } from "react";
import { useLogin } from "../contexto/LoginContexto";
import { useNavigate } from "react-router-dom";
import "../estilos/styles.css";

export default function Login() {
  const { procesarLogin } = useLogin();
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [errores, setErrores] = useState([]);
  const navigate = useNavigate();

  const manejarEnvio = (e) => {
    e.preventDefault();
    const resultado = procesarLogin(correo, clave);

    if (resultado.errores) {
      setErrores(resultado.errores);
    } else {
      setErrores([]);
      navigate("/micuenta");
    }
  };

  return (
    <div className="page-wrapper">
      <div className="login-container">
        <h1>Ingreso de Usuario</h1>
        <form id="loginForm" onSubmit={manejarEnvio}>
          <input
            id="nombre"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Correo institucional"
          />
          <input
            id="clave"
            type="password"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            placeholder="Clave"
          />
          <input type="submit" value="Ingresar" />
        </form>

        {errores.length > 0 && (
          <div id="errorLogin">
            {errores.map((err, i) => (
              <p key={i}>{err}</p>
            ))}
          </div>
        )}

        <p>
          <a href="/registro" className="texto-link">
            Registrarme y crear mi cuenta.
          </a>
        </p>
      </div>
    </div>
  );
}
