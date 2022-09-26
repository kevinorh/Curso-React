import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components";


describe('Pruebas en <GifGridItem/>', () => { 
    const title = 'Dragon Ball';
    const url = 'https://dragon-ball-sullca.com/goku.jpg';

    test('should match snapshoot', () => { 
        const { container } = render(<GifGridItem title={ title } url={ url }/>);
        expect( container ).toMatchSnapshot();
     });

     test('debe mostrar la imagen con el URL y el ALT indicado', () =>{
        render(<GifGridItem title={ title } url={ url }/>);
        // screen.debug();
        // expect( screen.getByRole('img').src).toBe(url);
        // expect( screen.getByRole('img').alt).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe(url);
        expect( alt ).toBe(title);
     });

     test('debe de tomar el título en el componente', () => {
        render(<GifGridItem title={ title } url={ url }/>);
        expect( screen.getByText( title )).toBeTruthy();
     });

 }); 