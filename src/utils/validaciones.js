export function limpiarRut(rut) {
  return rut.replace(/[.\-]/g, "").toUpperCase();
}

export function validarRut(rutCompleto) {
  const rut = limpiarRut(rutCompleto);
  if (!/^[0-9]+[0-9K]$/.test(rut)) return false;

  const cuerpo = rut.slice(0, -1);
  const dv = rut.slice(-1);

  let suma = 0;
  let multiplo = 2;
  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += parseInt(cuerpo.charAt(i), 10) * multiplo;
    multiplo = multiplo < 7 ? multiplo + 1 : 2;
  }

  let dvEsperado = 11 - (suma % 11);
  if (dvEsperado === 11) dvEsperado = "0";
  else if (dvEsperado === 10) dvEsperado = "K";
  else dvEsperado = dvEsperado.toString();

  return dv === dvEsperado;
}

export function validarCorreo(correo) {
  const regex = /^[a-zA-Z0-9._%+-]+@duocuc\.cl$/;
  return regex.test(correo);
}
