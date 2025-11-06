import { describe, it, expect } from 'vitest';
import { cifrarPassword } from '../utils/cifrado';

describe('validarCifrado', () => {
  it('devuelve un SHA1 y no la contraseña original', () => {
    const password = 'secreto123';
    const hash = cifrarPassword(password);

    expect(hash).not.toBe(password);
    expect(hash).toMatch(/^[a-f0-9]{40}$/); 
  });
});
