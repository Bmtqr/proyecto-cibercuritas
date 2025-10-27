import { describe, it, expect } from 'vitest';
import { validarDV } from '../utils/validacion';

describe('validarRUT', () => {
  it('valida el formato de un RUT', () => {
    expect(validarDV('21.648.649-8')).toBe(true);
  });
});
