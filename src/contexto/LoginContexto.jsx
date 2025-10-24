import { createContext, useContext } from "react";
import { SHA1 } from "../utils/sha1";

const LoginContexto = createContext();

export function useLogin() {
  return useContext(LoginContexto);
}

export function LoginProvider({ children }) {
  const validarCorreo = (correo) => /^[a-zA-Z0-9._%+-]+@duocuc\.cl$/.test(correo);

  function validarLogin(correo, clave) {
    const errores = [];
    if (!validarCorreo(correo)) errores.push("Correo inválido. Debe ser usuario@duocuc.cl.");
    if (clave.trim().length < 6) errores.push("Clave debe tener al menos 6 caracteres.");
    return errores;
  }

  function procesarLogin(correo, clave) {
    const errores = validarLogin(correo, clave);
    if (errores.length > 0) return { errores };

    const claveHasheada = SHA1(clave);
    window.location.href = "/micuenta";
    return { claveHasheada };
  }

  return (
    <LoginContexto.Provider value={{ procesarLogin }}>
      {children}
    </LoginContexto.Provider>
  );
}
