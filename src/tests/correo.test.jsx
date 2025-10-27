import { describe, it, expect } from 'vitest';
import  { validarCorreo } from '../utils/cifrado'

describe('validarCorreo', () => {
    it('valida el formato de un correo electronico', () => {
        expect(validarCorreo('usuario@@gmail')).toBe(false);
        expect(validarCorreo('usuariosinarroba.cl')).toBe(false);
        expect(validarCorreo('usuario@gmail.com')).toBe(true);
    })
})