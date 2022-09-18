import { getHeroeByIdAsync } from "../../src/base-pruebas/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe retornar un héroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then(
            hero => {

                expect(hero).toEqual({
                    "id": 1,
                    "name": "Batman",
                    "owner": "DC"
                });
                done()

            }
        );
    });
    test('getHeroeByIdAsync debe obtener un error si un heroe no existe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
        .then( hero => {
            //No se debería evaluar si evaluas catch
            //Solo evaluar con falsy cuando se espera que falle
            expect( hero ).toBeFalsy();
            done();
        })
        .catch(
            error => {
                // console.log(error);
                //Debe ir al catch
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
                done();
            }
        );
    });
});