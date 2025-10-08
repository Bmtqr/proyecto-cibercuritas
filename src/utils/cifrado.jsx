import SHA1 from "crypto-js/sha1";

export function validarCorreo(email) {
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexCorreo.test(email);
}

export function cifrarPassword(password) {
  return SHA1(password).toString();
}