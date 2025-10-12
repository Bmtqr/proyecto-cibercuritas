import SHA1 from "crypto-js/sha1";

//Esto valida correo pero me dio flojera dejarlo separado del cifrado xd
export function validarCorreo(email) {
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexCorreo.test(email);
}

export function cifrarPassword(password) {
  return SHA1(password).toString();
}