import { usContext } from "../../src/base-pruebas/base-pruebas/06-deses-obj";

describe('Prueba en 06-deses-obj', () => { 
    test('usContext should return an object', () => { 
        const clave = 'ABC123';
        const nombre = 'Alessia';
        const edad = 24;
        const rango = 'Capitan'

        const testObj = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        const obj = usContext({clave,nombre,edad,rango});

        expect(testObj).toEqual(obj);
     })
 })