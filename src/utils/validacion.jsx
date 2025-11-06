
export const limpiarRut = (rut) => rut.replace(/[.\s-]/g, "").toUpperCase();

export const calcularDV = (cuerpo) => {
  let suma = 0, mult = 2;
  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += parseInt(cuerpo[i], 10) * mult;
    mult = mult === 7 ? 2 : mult + 1;
  }
  const resto = suma % 11;
  const dvCalc = 11 - resto;
  if (dvCalc === 11) return "0";
  if (dvCalc === 10) return "K";
  return String(dvCalc);
};

export const validarDV = (rutCompleto) => {
  const limpio = limpiarRut(rutCompleto);
  if (limpio.length < 2) return false;
  const cuerpo = limpio.slice(0, -1);
  const dv = limpio.slice(-1);
  if (!/^\d+$/.test(cuerpo)) return false;
  return calcularDV(cuerpo) === dv;
};

export const rutBloqueado = (rutCompleto) => {
  const rutNoValidos = new Set(["17", "19", "27", "222222222", "22222222", "111111111"]);
  return rutNoValidos.has(limpiarRut(rutCompleto));
};

export const formatearRut = (rutCompleto) => {
  const limpio = limpiarRut(rutCompleto);
  if (limpio.length === 0) return limpio;
  const cuerpo = limpio.slice(0, -1);
  const dv = limpio.slice(-1);
  const cuerpoForm = cuerpo.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${cuerpoForm}-${dv}`;
};

export const validarTelefono = (tel) => /^\d{9}$/.test(tel);