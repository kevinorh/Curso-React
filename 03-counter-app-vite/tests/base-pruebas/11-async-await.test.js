import { getImagen } from '../../src/base-pruebas/base-pruebas/11-async-await';

describe('Prueba en 11-async-await', () => { 
    test('getImagen debe retornar un URL de la imagen', async() => {
        const url = await getImagen();

        expect( typeof url ).toBe('string');
    });
    // test('getImagen debe retornar un error si no obtiene la URL', async() => {
    //     const url = await getImagen();
    //     expect( typeof url ).toBe('No se encontró la imagen');
    // });
 });