import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { validarRut, limpiarRut, validarCorreo } from "../utils/validaciones";
import { SHA1 } from "../utils/sha1";
import "../estilos/styles.css";

export default function Registro() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [rut, setRut] = useState("");
  const [errores, setErrores] = useState([]);
  const [mensajeExito, setMensajeExito] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    const erroresTemp = [];

    if (!nombre.trim()) erroresTemp.push("Debe ingresar el nombre.");
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) erroresTemp.push("El nombre solo puede contener letras.");
    if (!apellido.trim()) erroresTemp.push("Debe ingresar el apellido.");
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido)) erroresTemp.push("El apellido solo puede contener letras.");
    if (!validarCorreo(correo)) erroresTemp.push("Correo inválido. Debe ser usuario@duocuc.cl.");
    if (clave.length < 6) erroresTemp.push("Contraseña debe tener al menos 6 caracteres.");
    if (!validarRut(rut)) erroresTemp.push("RUT inválido.");

    if (erroresTemp.length > 0) {
      setErrores(erroresTemp);
      setMensajeExito("");
    } else {
      console.log("RUT limpio:", limpiarRut(rut));
      console.log("Contraseña SHA1:", SHA1(clave));
      setErrores([]);
      setMensajeExito("Registro exitoso, redirigiendo a login para que ingrese con sus credenciales");

      setTimeout(() => {
        navigate("/login");
      }, 2500);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="registro-container">
        <h2>Formulario de Registro</h2>
        <form onSubmit={manejarEnvio} noValidate>
          <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, ""))} />
          <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, ""))} />
          <input type="text" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
          <input type="password" placeholder="Contraseña" value={clave} onChange={(e) => setClave(e.target.value)} />
          <input type="text" placeholder="RUT" value={rut} onChange={(e) => setRut(e.target.value)} style={{ borderColor: rut.length > 1 ? (validarRut(rut) ? "green" : "red") : "" }} />
          <button type="submit">Registrarse</button>
        </form>

        {errores.length > 0 && (
          <div className="error-general">
            {errores.map((err, i) => (<p key={i}>{err}</p>))}
          </div>
        )}

        {mensajeExito && (
          <div className="mensaje-exito">{mensajeExito}</div>
        )}

        <p>
          <Link to="/login" className="texto-link">Ingresar a mi cuenta</Link>
        </p>
      </div>
    </div>
  );
}
