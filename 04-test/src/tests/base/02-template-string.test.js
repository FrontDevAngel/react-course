import'@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe ('Pruebas en 02-template-string.test.js', () => {

    test('getSaludo debe retornar Hola Ángel', () => {
        const nombre = 'Ángel';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre ) ;
    });

    // getSaludo debe retorna default "Hola Carlos"

    test('getSaludo debe retorna default "Hola Carlos"', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos') ;
    });
});